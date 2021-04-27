import { RootState } from '@/store/index'

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.sass";
declare module "*.styl";

// 引入css module 需要按以下声明
declare module '*.module.scss' {
  const content: {[className: string]: string};
  export default content;
}

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
    [key: string]: any;
  }
}

declare global {
  interface test {
    text: string
  }
  type ReduxRootState = RootState
}


export {}