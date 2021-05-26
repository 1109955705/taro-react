import Taro from "@tarojs/taro";
import { HTTP_STATUS } from "@/utils/constants/status";
import { logError } from "@/utils/error";
// import theme from '@/static/biz/theme';
import theme from '@/static/biz/themeMock';

const { appid } = theme

let sessionKey = ''
export const setToken = (token) => {
  console.log('setToken', token)
  sessionKey = token
}

export default {
  baseOptions(params, method = "GET") {
    let { url, data = {} } = params;
    let contentType =
      method === "GET"
        ? "application/json"
        : "application/x-www-form-urlencoded";
    type OptionType = {
      url: string;
      data?: object | string;
      method?: any;
      header: object;
      success: any;
      error: any;
    };

    // store.subscribe(() => {
    //   console.log('subscribe')
    //   sessionKey = store.getState().sessionKey; //使用subscribe，当数据更改时会重新获取
    // });

    // 接口需要的appid参数不一致
    data.app_id = appid
    data.appid = appid

    if (sessionKey) {
      data.terminal_user_session_key = sessionKey
    }
    const option: OptionType = {
      url: url.indexOf("http") !== -1 ? url : SERVICE_URL + url,
      data: data,
      method: method,
      header: {
        "content-type": contentType,
        cookie: Taro.getStorageSync("cookies"),
      },
      success(res) {
        console.log('success', res)
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError("api", "请求资源不存在");
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError("api", "服务端出现了问题");
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError("api", "没有权限访问");
        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
          Taro.clearStorage();
          Taro.navigateTo({
            url: "/pages/login/index",
          });
          return logError("api", "请先登录");
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data;
        }
      },
      error(e) {
        logError("api", "请求接口出现问题", e);
      },
    };
    console.log('request', option)
    // return Taro.request(option);
    return new Promise(( resolve, reject ) => {
      Taro.request({
        ...option,
        success: res => {
          console.log('reponse', res)
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
  },
  get(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option);
  },
  post: function (url, data?: object, contentType?: string) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  },
  put(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  },
  delete(url, data?: object) {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  },
};
