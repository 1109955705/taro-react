// http请求封装
import Taro from "@tarojs/taro";
import cloneDeep from 'lodash/cloneDeep';
import modelcheck from 'modelcheck';
import { TypedApiScheme } from '@/static/biz/apis/types.d';

function transformUrl(url: string, params: Record<string, unknown>) {
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
        resolve(res.data)
      },
      fail: err => {
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

const requestInterceptor = (
  payload: TypedRequestInterceptorParamteter,
) => {
  const { api } = payload
  let { data } = payload;
  const commonBodyData = {
    test: 'test',
  };
  const { url, requestRules} = api;

  // 校验request数据
  if (requestRules) {
    try {
      data = modelcheck(data, requestRules, { cloneData: false });
    } catch (error) {
      error.request = api;
      throw error;
    }
  }
  api.url = transformUrl(<string>url, data).replace(/\/+/g, '/');
  return Promise.resolve({ api, data: { ...commonBodyData, ...data } });
}

const responseInterceptor = ({
  response,
  api,
}: {
  response: any,
  api: TypedApiScheme,
})=> {
  console.log('responseInterceptor', response, api)
}
export const sendHttpRequest = (
  api: TypedApiScheme,
  data: object = {},
) => {
  const cloneApi = cloneDeep(api);
  const cloneData = cloneDeep(data);
  console.log('xxx', api, data)

  return requestInterceptor({
    api: cloneApi,
    data: cloneData || {},
  } as TypedRequestInterceptorParamteter)
    .then((request) => {
      const headers: Record<string, string> = {
        'Content-Type': request.api.contentType || 'application/json',
      };

      // session_key

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

    })
    .finally(() => {
    });
}