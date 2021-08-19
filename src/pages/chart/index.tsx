import React, {
  FC, useState, useEffect, Fragment,
} from 'react';
import { View, WebView } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { set_tabbar_index } from '@/store/actions/tabbar';

import eventBus from '@/static/biz/eventBus';
import './index.scss';

const Chart: FC = () => {
  const [src, setSrc] = useState<string>('');
  const dispatch = useDispatch();
  // const userinfo = useSelector((state: ReduxRootState) => state.userinfo)
  // const userinfo = useSelector((state: ReduxRootState) => state.userinfo)
  const { userinfo, sessionKey } = useSelector(
    (state: ReduxRootState) => state,
  );
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);
  const [test, setTest] = useState<any>('test');
  useEffect(() => {
    console.log('userinfo', userinfo);
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
      true,
    )}&enviornment=test`;
    console.log('webViewSrc', webViewSrc);
    setSrc(webViewSrc);
  }, [sessionKey, themeColor, userinfo]);

  useEffect(() => {
    // console.log("userId",userId)
    eventBus.on('test', (res) => {
      setTest(res);
      console.log('chart页面测试回调');
    });
  }, []);

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
    dispatch(set_tabbar_index(1));
  });

  return (
    <>
      <WebView src={src} />
      <View>{test}</View>
    </>
  );
};

export default Chart;
