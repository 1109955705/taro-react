import React, { useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { setTabbarIndex, clearSessionKey, setUserinfo } from '@/store/actions';
import './index.scss';

const Mine = () => {
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
    <View className="template_container">
      <View>{userInfo ? userInfo.account_name : '未登录'}</View>
      {userInfo && <Button onClick={() => logout()}>退出登录</Button>}
    </View>
  );
};

export default Mine;
