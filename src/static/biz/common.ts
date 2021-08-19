// 常用的方法，直接用Taro.调用，无法捕捉错误
import Taro from '@tarojs/taro';
import wxPromise from './wxPromise';

export const navigateTo = (params) => wxPromise(Taro.navigateTo)(params);
export const navigateBack = () => wxPromise(Taro.navigateBack)();
export const switchTab = (params) => wxPromise(Taro.navigateBack)(params);
export const reLaunch = (params) => wxPromise(Taro.reLaunch)(params);
export const redirectTo = (params) => wxPromise(Taro.redirectTo)(params);
export const getCurrentPages = () => wxPromise(Taro.getCurrentPages)();
