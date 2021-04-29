type TypedModelParams = {
  [x: string]: any
}

/**
 * 接口描述
 */
export type TypedApiScheme = {
  // 接口地址。支持rest-api的path参数。例如：/user/:userId
  url: string;
  // 版本。例如 v1
  version?: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  // 默认 application/json
  contentType?: string;
  // 请求数据校验规则
  requestRules?: TypedModelParams;
  // 返回的数据结构
  responseStruct?: TypedModelParams;
  // 返回结构中的数据字段的key名。例如 data
  responseDataPropName?: string;
  // 返回数据的校验规则。特指数据字段
  responseRules?: TypedModelParams;
  // 模拟返回数据，特指数据字段。使用better-mock
  responseMock?: any;
};