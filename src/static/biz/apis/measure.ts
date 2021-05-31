import { TypedApiScheme } from './types.d';
/**
 * 获取最近一条测量信息
 * @see {@link http://yapi.runcobo.com/project/196/interface/api/766}
 */
export const ApiGetLastMeasurement: TypedApiScheme = {
  url: '/third/last_third_measurement_detail',
  method: 'GET',
  responseDataPropName: 'resultData',
};

export default {};
