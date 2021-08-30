import { logError } from '@/static/sys/error';

interface taroRequest {
  timeout?: number;
  success?: (res: any) => void;
  fail?: (res: any) => void;
  complete?: (res: any) => void;
  data?: Record<string, unknown>;
  desc?: string;
  url?: string;
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
      fn(newObj);
    });
  };
};
