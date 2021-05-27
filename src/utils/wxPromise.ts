import { logError } from "@/utils/error";

interface taroRequest {
  timeout?: number;
  success?: (res: any) => void;
  fail?: (res: any) => void;
  complete?: (res: any) => void;
  data?: Record<string, unknown>
  desc?: string,
}
export const wxPromise = (fn) => {
  return (obj: taroRequest = {}) => {
    return new Promise<any>((resolve, reject) => {
      obj.success = (res) => {
        console.log('wxPromise:success', res)
        resolve(res);
      };
      obj.fail = err => {
        logError('wxPromise', 'xxx', err)
        resolve(err);
      };
      fn(obj).catch(e => {}); // 防止报错
    })
  };
};
