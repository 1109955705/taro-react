import React, { useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import Taro, { useDidShow } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { AtAvatar } from 'taro-ui';
import boot from '@/static/biz/hoc/boot';
import { EmptyTabbarBlock } from '@/components/biz';
import { setTabbarIndex, clearSessionKey, setUserinfo } from '@/store/actions';
import { useLogin } from '@/hooks/';
import style from './index.module.scss';

const Mine = () => {
  const { login } = useLogin();
  const isLogin = useSelector((state: ReduxRootState) => !!state.sessionKey);
  const userinfo = useSelector((state: ReduxRootState) => state.userinfo);
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);

  const dispatch = useDispatch();

  useDidShow(() => {
    dispatch(setTabbarIndex(2));
  });

  // trao编译后的代码导致page-meta失效,顶部栏无法及时更改颜色
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
  console.log('xxxxxx', EmptyTabbarBlock);
  return (
    <View className={style.main}>
      <View className={style.userinfo}>
        {isLogin ? (
          <>
            <AtAvatar
              className={style.avatar}
              circle
              image={userinfo.avatar || 'https://qnplus-avatar.yolanda.hk/default_avatar'}
            />
            <View className={style.username}>{userinfo.accountName}</View>
          </>
        ) : (
          <View className={style.unLoginTop} onClick={() => login()}>
            <View className={style.unLoginTips}>登录/注册</View>
            <View className={style.unLoginTips}>登录后可查看测量数据</View>
          </View>
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
              <View className={`${style.cellArrow} icon-arr-right`} />
            </View>
          </View>
          <View className={style.cell}>
            <View className={style.cellLeft}>
              <View className={`${style.cellIcon} icon-shouji`} />
              <View className={style.cellName}>手机号</View>
            </View>
            <View className={style.cellRight}>
              <View className={style.cellTips}>{userinfo.phone}</View>
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
      <EmptyTabbarBlock />
    </View>
  );
};

export default boot(Mine);
