// 常用的方法，直接用Taro.调用，无法捕捉错误, 可以方便日志记录
import Taro from '@tarojs/taro';
import wxPromise from './wxPromise';

export const navigateTo = (params) =>
  wxPromise(Taro.navigateTo)({
    url: params,
  });
export const navigateBack = () => wxPromise(Taro.navigateBack)();
export const switchTab = (params) =>
  wxPromise(Taro.switchTab)({
    url: params,
  });
export const reLaunch = (params) => wxPromise(Taro.reLaunch)(params);
export const redirectTo = (params) => wxPromise(Taro.redirectTo)(params);
export const getCurrentPages = () => wxPromise(Taro.getCurrentPages)();
export const showToast = (params) => Taro.showToast({ title: params, icon: 'none' });
export const chooseImage = (params?) => wxPromise(Taro.chooseImage)(params);
