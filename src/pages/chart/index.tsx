import React, { useState, useEffect } from 'react';
import { View, WebView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { setTabbarIndex } from '@/store/actions/tabbar';
import { objToStr } from '@/static/biz/util';
import style from './index.module.scss';

const Chart = () => {
  const [src, setSrc] = useState<string>('');
  const dispatch = useDispatch();

  const {
    userinfo: { id },
    sessionKey,
  } = suseSelector((state: ReduxRootState) => state);
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

  useEffect(() => {
    const params = {
      user_id: id,
      key: sessionKey,
      is_main_user: 1,
      themeColor,
      hostName: SERVICE_URL,
    };

    const webViewSrc = `${H5_URL}/xcxChartViewThird.html?${objToStr(
      params,
      true
    )}&enviornment=test`;
    console.log('h5:webViewSrc', webViewSrc);
    setSrc(webViewSrc);
  }, [sessionKey, themeColor, id]);

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
