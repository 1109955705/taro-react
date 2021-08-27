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
    return new Promise<any>((resolve, reject) => {
      obj.success = (res) => {
        console.log('wxPromise:success', res);
        resolve(res);
      };
      obj.fail = (err) => {
        logError('wxPromise:fail', '未知', err);
        resolve(err);
      };
    });
  };
};
