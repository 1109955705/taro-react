import React, { FC, Fragment, useEffect } from 'react';
import { View } from '@tarojs/components';
import { useDidShow, useDidHide } from '@tarojs/taro';
import boot from '@/static/biz/hoc/boot';
import useMain from './useMain';
import BodyIndex from './components/body-index';
import Features from './components/features';
import HealthTool from './components/health-tool';
import Userinfo from './components/userinfo';
import style from './index.module.scss';

const Test: FC = () => {
  const { isLogin, lastMeasure } = useMain();
  console.log('index刷新了', isLogin);
  // throw new Error("调试用途xxx");

  useDidShow(() => {
    console.log('生命周期:componentDidShow');
  });

  useEffect(() => {
    console.log('生命周期:useEffect');
    return () => {
      console.log('生命周期:exit');
    };
  }, []);

  useDidHide(() => {
    console.log('生命周期:componentDidHide');
  });

  return (
    <View className={style.main}>
      <Userinfo lastMeasure={lastMeasure} />
      {isLogin ? (
        <Fragment>
          <Features showDeepReport={lastMeasure?.depth_report_flag} />
          <BodyIndex lastMeasure={lastMeasure} />
          <HealthTool />
        </Fragment>
      ) : (
        <View>未登录</View>
      )}
    </View>
  );
};

export default boot(Test);
