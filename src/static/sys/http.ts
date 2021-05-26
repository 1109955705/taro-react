// http请求封装
import Taro from "@tarojs/taro";
import cloneDeep from 'lodash/cloneDeep';
import modelCheck from 'modelcheck';
import i18n from "@/i18n/index";
import { systemInfo } from '@/static/sys/system'
import theme from '@/static/biz/themeMock'
import { TypedApiScheme } from '@/static/biz/apis/types.d';
import configStore from '@/store/index';

interface TypedHttpConfig {
  // 是否显示加载状态
  showLoading?: boolean;
  // 是否使用mock。只在开发环境有效
  useMock?: boolean,
}

const { store } = configStore()
const { appid } = theme
const baseUrl = 'http://sit.third-api.yolanda.hk/open_api';

const transformUrl = (url: string, params: Record<string, unknown>) => {
  let transformedUrl = url;
  const matchReg = /(:\w+)/g;

  const matchRes = url.match(matchReg);

  if (matchRes) {
    matchRes.forEach((param) => {
      const val = params[param.replace(/^:/, '')] as string;
      if (val !== undefined) {
        transformedUrl = transformedUrl.replace(new RegExp(param), val);
      }
    });
  }
  return transformedUrl;
}

const httpInstance = (option) => {
  return new Promise(( resolve, reject ) => {
    Taro.request({
      ...option,
      success: res => {
        console.log('success', res)
        resolve(res.data)
      },
      error: err => {
        console.log('error', err)
        reject(err)
      },
      complete: ()=> {
        console.log('请求完成')
      }
    });
  })
}

type TypedRequestInterceptorParamteter = {
  api: TypedApiScheme;
  data: Record<string, unknown>;
};

// 请求拦截器 添加公共参数，和校验参数
const requestInterceptor = (
  payload: TypedRequestInterceptorParamteter,
) => {
  const { api } = payload
  let { data } = payload;
  const timestamps = Math.floor(Date.now() / 1000) 
  const commonBodyData = {
    ...systemInfo,
    timestamps,
  };
  let { url, requestRules } = api;

  const sessionKey = store.getState().sessionKey
  if ( sessionKey ) {
    data.terminal_user_session_key = sessionKey
  }
  data.appid = appid

  // 校验request数据 
  if (requestRules) {  
    try {
      data = modelCheck(data, requestRules, { cloneData: false });
    } catch (error) {
      error.request = api;
      throw error;
    }
  }

  api.url = baseUrl + transformUrl(<string>url, data).replace(/\/+/g, '/');
  return Promise.resolve({ api, data: { ...commonBodyData, ...data } });
}

// 回复拦截器 校验结果
const responseInterceptor = ({
  response,
  api,
}: {
  response: any,
  api: TypedApiScheme,
})=> {
  console.log('responseInterceptor', response, api)
  return response
}

export const sendHttpRequest = (
  api: TypedApiScheme,
  data: object = {},
  config: TypedHttpConfig = { showLoading: true },
) => {

  if (config.showLoading) {
    // showLoadingToast(config.loadingText);
  }

  const cloneApi = cloneDeep(api);
  const cloneData = cloneDeep(data);
  return requestInterceptor({
    api: cloneApi,
    data: cloneData || {},
  } as TypedRequestInterceptorParamteter)
    .then((request) => {
      const headers: Record<string, string> = {
        'Content-Type': request.api.contentType || 'application/json',
      };
      const { useMock } = config
      if (useMock) {
        return Promise.resolve(api.responseMock)
      }
      return httpInstance({
        method: request.api.method,
        url: request.api.url,
        headers,
        data: request.data,
        params: request.api.method.toUpperCase() === 'GET' ? request.data : {},
      });
    })
    .then((res) => responseInterceptor({
      response: res,
      api: cloneApi,
    }))
    .catch((err) => {
      console.log('http:err', err)
    })
    .finally(() => {
    });
}