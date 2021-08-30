import React, { FC, useState, useEffect } from 'react';
import { View, WebView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { setTabbarIndex } from '@/store/actions/tabbar';
import { objToStr } from '@/static/biz/util';
import style from './index.module.scss';

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
    let hostName = '';
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
    setSrc(webViewSrc);
  }, [sessionKey, themeColor, userinfo]);

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    });
  }, [themeColor]);

  useDidShow(() => {
    dispatch(setTabbarIndex(1));
  });

  return <>{src ? <WebView src={src} /> : <View className={style.main}>未登录</View>}</>;
};

export default Chart;
