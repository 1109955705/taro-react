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
        resolve(res);
      };
      obj.fail = (err) => {
        reject(err);
      };
      fn(obj);
    });
  };
};
