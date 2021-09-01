/**
 * 因 axios 库不满足华为接口请求的安全性要求
 * 这里使用原生js实现一个请求库
 * @see {@link https://www.jianshu.com/p/918c63045bc3/}
 */
export interface TypedHttpSettings {
    url: string;
    type: string;
    responseType: string;
    async: boolean;
    data: any;
    headers: Record<string, string>;
    timeout: number;
    beforeSend(_xhr: XMLHttpRequest): unknown;
    success(_result: any, _status: number, _xhr: XMLHttpRequest): unknown;
    error(_xhr: XMLHttpRequest, _status: number, _error: any): unknown;
    complete: (_xhr: XMLHttpRequest, _status: number) => unknown;
}
declare const http: {
    /**
     * js封装ajax请求
     * >>使用new XMLHttpRequest 创建请求对象,所以不考虑低端IE浏览器(IE6及以下不支持XMLHttpRequest)
     * >>使用es6语法,如果需要在正式环境使用,则可以用babel转换为es5语法 https://babeljs.cn/docs/setup/#installation
     *  @param settings 请求参数模仿jQuery ajax
     *  调用该方法,data参数需要和请求头Content-Type对应
     *  Content-Type                        data                                     描述
     *  application/x-www-form-urlencoded   'name=哈哈&age=12'或{name:'哈哈',age:12}  查询字符串,用&分割
     *  application/json                     name=哈哈&age=12'                        json字符串
     *  multipart/form-data                  new FormData()                           FormData对象,当为FormData类型,不要手动设置Content-Type
     *  注意:请求参数如果包含日期类型.是否能请求成功需要后台接口配合
     */
    ajax: (settings?: Partial<TypedHttpSettings>) => void;
    ajaxPromise(settings?: Partial<TypedHttpSettings>): Promise<any>;
    getUrlParam: (url: string | string[], data: any) => any;
    getQueryData: (data: any) => string | FormData;
    getQueryString: (data: {
        [x: string]: any;
    }) => string;
};
export default http;
