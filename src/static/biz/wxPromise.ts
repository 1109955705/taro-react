/**
 * 微信的api支持promise
 */
import { logError } from '@/static/sys/error';

interface taroRequest {
  timeout?: number;
  success?: (res: any) => void;
  fail?: (res: any) => void;
  complete?: (res: any) => void;
  data?: Record<string, unknown>;
  desc?: string;
  url?: string;
  title?: string;
  icon?: string;
}
export default (fn) => {
  return (obj: taroRequest = {}) => {
    const newObj = obj;
    return new Promise<any>((resolve, reject) => {
      newObj.success = (res) => {
        console.log('wxPromise:success', res);
        resolve(res);
      };
      newObj.fail = (err) => {
        logError('wxPromise:fail', '未知', err);
        resolve(err);
      };
      fn(newObj).catch((err) => {
        // 有些api用户点击取消时会直接报错, 在这里捕捉
        logError('wxPromise:fail', '未知', err);
      });
    });
  };
};
