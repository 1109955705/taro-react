import { compose } from 'redux';
import { RootState } from '@/store/index';

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

// 引入css module 需要按以下声明，不起作用
// declare module '*.module.scss'

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';
  }
}
declare global {
  type ReduxRootState = RootState;

  const SERVICE_URL: string; // 请求的服务器域名
  const H5_URL: string; // 请求的H5域名
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export {};
