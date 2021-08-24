import React, { FC, useState, useEffect } from 'react';
import { View, WebView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { setTabbarIndex } from '@/store/actions/tabbar';

import './index.scss';

const Chart: FC = () => {
  const [src, setSrc] = useState<string>('');
  const dispatch = useDispatch();

  const { userinfo, sessionKey } = useSelector((state: ReduxRootState) => state);
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

  useEffect(() => {
    const params = {
      user_id: userinfo.id,
      key: sessionKey,
      is_main_user: 1,
      themeColor,
      hostName: '',
    };
    let hostName: string;
    if (process.env.NODE_ENV === 'development') {
      hostName = 'http://sit.third-api.yolanda.hk';
    } else {
      hostName = 'https://third-api.yolanda.hk';
    }
    params.hostName = hostName;
    const webViewSrc = `${H5_URL}/xcxChartViewThird.html?${objToStr(
      params,
      true
    )}&enviornment=test`;
    console.log('webViewSrc', webViewSrc);
    setSrc(webViewSrc);
  }, [sessionKey, themeColor, userinfo]);

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    });
  }, [themeColor]);

  const objToStr = (obj, encode = false) => {
    let str = '';
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (encode) {
          str += `&${key}=${encodeURIComponent(obj[key])}`;
        } else {
          str += `&${key}=${obj[key]}`;
        }
      }
    }
    return str.slice(1);
  };

  useDidShow(() => {
    dispatch(setTabbarIndex(1));
  });

  return <>{src ? <WebView src={src} /> : <View>未登录</View>}</>;
};

export default Chart;
