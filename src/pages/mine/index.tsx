import React, { useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import boot from '@/static/biz/hoc/boot';
import { setTabbarIndex, clearSessionKey, setUserinfo } from '@/store/actions';
import style from './index.module.scss';

const Mine = () => {
  const isLogin = useSelector((state: ReduxRootState) => !!state.sessionKey);
  const userInfo = useSelector((state: ReduxRootState) => state.userinfo);
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

  const dispatch = useDispatch();

  useDidShow(() => {
    dispatch(setTabbarIndex(2));
  });

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    });
  }, [themeColor]);

  const logout = () => {
    dispatch(clearSessionKey());
    dispatch(setUserinfo({}));
  };

  return (
    <View className={style.main}>
      <View className={style.userinfo}>
        <View className={style.avatar}>1111</View>
        <View className={style.username}>2222</View>
      </View>
      <View className={style.agent}>减脂顾问：吴简宁 · 13812345678</View>
      <View>
        <View className={style.cell}>
          <View className={style.cellLeft}>1111</View>
          <View className={style.cellRight}>{'>'}</View>
          <View className="icon-kefu">1</View>
        </View>
      </View>
      {isLogin && <Button onClick={() => logout()}>退出登录</Button>}
    </View>
  );
};

export default boot(Mine);
