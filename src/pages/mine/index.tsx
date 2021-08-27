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
    console.log('xxxxxxxxxxx');
    // dispatch(clearSessionKey());
    // dispatch(setUserinfo({}));
  };

  return (
    <View className={style.main}>
      <View className={style.userinfo}>
        {isLogin ? (
          <>
            <View className={style.avatar}>1111</View>
            <View className={style.username}>2222</View>
          </>
        ) : (
          <>
            <View className={style.unLoginTips}>登录/注册</View>
            <View className={style.unLoginTips}>登录后可查看测量数据</View>
          </>
        )}
      </View>
      {isLogin && <View className={style.agent}>减脂顾问：吴简宁 · 13812345678</View>}
      <View className={style.cellWraper}>
        <View className={style.cellLists}>
          <View className={style.cell}>
            <View className={style.cellLeft}>
              <View className={`${style.cellIcon} icon-bianji`} />
              <View className={style.cellName}>编辑资料</View>
            </View>
            <View className={style.cellRight}>
              <View className={style.cellTips}>222</View>
              <View className={`${style.cellArrow} icon-arr-right`} />
            </View>
          </View>
          <View className={style.cell}>
            <View className={style.cellLeft}>
              <View className={`${style.cellIcon} icon-shouji`} />
              <View className={style.cellName}>手机号</View>
            </View>
            <View className={style.cellRight}>
              <View className={style.cellTips}>18340018262</View>
              <View className={`${style.cellArrow} icon-arr-right`} />
            </View>
          </View>
        </View>
      </View>
      {isLogin && (
        <Button hoverClass={style.btnHover} className={style.logout} onClick={() => logout()}>
          退出登录
        </Button>
      )}
    </View>
  );
};

export default boot(Mine);
