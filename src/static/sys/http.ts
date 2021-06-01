// http请求封装
import Taro from "@tarojs/taro";
import cloneDeep from 'lodash/cloneDeep';
import modelcheck from 'modelcheck';
import { logError } from "@/static/sys/error";
import { systemInfo } from '@/static/sys/system'
import theme from '@/static/biz/themeMock'
import { TypedApiScheme } from '@/static/biz/apis/types.d';
import logger from "@/static/sys/realTimeLogger";

let sessionKey = ''
export const setToken = (token) => {
  console.log('setToken', token)
  sessionKey = token
}

interface TypedHttpConfig {
  // 是否显示加载状态
  showLoading?: boolean;
  // 是否使用mock。只在开发环境有效
  useMock?: boolean,
  // 加载文字
  loadingText?: string,
}

const { appid } = theme
const baseUrl = 'http://sit.third-api.yolanda.hk/open_api';

function showLoadingToast(loadingText = '') {
  Taro.showLoading({
    title: loadingText,
  });
}

function closeLoadingToast() {
    Taro.hideLoading();
}

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

const httpInstance: any = (option) => {
  return new Promise(( resolve, reject ) => {
    Taro.request({
      ...option,
      success: res => {
        console.log('success', res)
        resolve(res)
      },
      error: err => {
        console.log('error', err)
        reject(err)
      },
      complete: ()=> {}
    })
  })
}

type TypedRequestInterceptorParamteter = {
  api: TypedApiScheme;
  data: Record<string, unknown>;
  config: TypedHttpConfig;
  headers: Record<string, string>;
};

// 请求拦截器 添加公共参数，和校验参数
const requestInterceptor = (
  payload: TypedRequestInterceptorParamteter,
): Promise<TypedRequestInterceptorParamteter> => {
  const { api, config } = payload
  let { data } = payload;
  const timestamps = Math.floor(Date.now() / 1000) 
  const commonBodyData = {
    ...systemInfo,
    timestamps,
    appid,
  };
  let { url, requestRules } = api;

  if (sessionKey) {
    Object.assign(commonBodyData, {
      terminal_user_session_key: sessionKey,
    });
  }

  // 校验request数据 
  if (requestRules) {  
    try {
      data = modelcheck(data, requestRules, { cloneData: false });
    } catch (error) {
      error.request = api;
      throw error;
    }
  }

  api.url = baseUrl + transformUrl(url, data).replace(/\/+/g, '/');

  let requestData = { ...commonBodyData, ...data };

  const headers: Record<string, string> = {
    'Content-Type': api.contentType || 'application/json',
  };

  return Promise.resolve({
    api, data: requestData, headers, config,
  });
}

type TypedHttpResponse = { data: any; [x: string]: any };

// 回复拦截器 校验结果
const responseInterceptor = ({
  response,
  api,
  config,
}: {
  response: TypedHttpResponse;
  api: TypedApiScheme;
  config: TypedHttpConfig;
})=> {

  logger.info(api.url, response.data, config)
  const { responseDataPropName, responseRules } = api;
  const responseData = response.data;
  let responseBizData: any
  if (responseDataPropName) {
    responseBizData = response.data[responseDataPropName]
  } else {
    responseBizData = responseData
  }

  const defaultResponseStruct = {};
  Object.assign(defaultResponseStruct, {
    code: {
      validator(value: any) {
        if (![
          '200',
          '2000',
          '20000',
        ].includes(`${value}`)) {
          return new Error(responseData?.msg || `request failed. code: ${value}`);
        }
        return true;
      },
    },

  });

  const responseStruct = undefined

  try {
    // 校验返回的结构
    if (responseStruct) {
      modelcheck(responseData, responseStruct, { cloneData: false, onlyModelDesciprtors: false });
    }
  
    // 校验response的data字段数据
    if (responseRules) {
      responseBizData = modelcheck(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        responseBizData, responseRules, { cloneData: false, onlyModelDesciprtors: false },
      );
    }
  } catch (error) {
    error.request = api;
    error.response = response;
    logError('api', '请求校验出错', error)
    throw console.error();
  }

  return Promise.resolve({
    response,
    data: responseBizData,
  });
}

export const sendHttpRequest = (
  api: TypedApiScheme,
  data: object = {},
  config: TypedHttpConfig = {},
) : Promise<{
  data: any;
  response: TypedHttpResponse;
}>  => {
  const cloneApi = cloneDeep(api);
  const cloneData = cloneDeep(data);

  const defaultConfig: TypedHttpConfig = {
    showLoading: true,
    useMock: false,
  };
  const cloneConfig = cloneDeep({
    ...defaultConfig,
    ...config,
  });

  if (cloneConfig.showLoading) {
    showLoadingToast(config.loadingText);
  }

  return requestInterceptor({
    api: cloneApi,
    data: cloneData || {},
    headers: {},
    config: cloneConfig,
  } as TypedRequestInterceptorParamteter)
    .then((request) => {
      // 使用mock数据
      // const { useMock } = config
      // if (useMock) {
      //   return Promise.resolve(api.responseMock)
      // }
      return httpInstance({
        method: request.api.method,
        url: request.api.url,
        headers: request.headers,
        data: request.data,
        params: request.api.method.toUpperCase() === 'GET' ? request.data : {},
      });
    })
    .then((res) => responseInterceptor({
      response: res,
      api: cloneApi,
      config: cloneConfig,
    }))
    .catch((err) => {
      logError('api', '请求出错', err)
      throw new Error(err);
    })
    .finally(() => {
      closeLoadingToast();
    });
}