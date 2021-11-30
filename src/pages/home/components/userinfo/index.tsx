import React from 'react';
import { View, Text } from '@tarojs/components';
import { useDispatch, useSelector } from 'react-redux';
import { AtAvatar } from 'taro-ui';
import { useTranslation } from 'react-i18next';
import { useLogin } from '@/hooks';
import { navigateTo } from '@/static/biz/common';
import { pageBle } from '@/static/biz/routes';
import style from './index.module.scss';

interface UserinfoTypes {
  lastMeasure: any;
}

const Usernfo = ({ lastMeasure }: UserinfoTypes) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: ReduxRootState) => !!state.sessionKey);
  const { userinfo } = useSelector((state: ReduxRootState) => state);
  const { login } = useLogin();

  return (
    <View className={style.main}>
      <View className={style.unLoginHead}>
        <AtAvatar
          className={style.avatar}
          circle
          image={userinfo?.avatar || 'https://qnplus-avatar.yolanda.hk/default_avatar'}
        />
        {isLogin ? (
          <View className={`${style.bell} icon-lingdang`} />
        ) : (
          <>
            <View className={style.unLoginHeadText}>登录后体验更佳</View>
            <View className={`${style.btnLogin} g-theme-color`} onClick={() => login()}>
              {t('click_login')}
            </View>
          </>
        )}
      </View>
      <View className={style.center}>
        <View className={style.weight}>
          <Text className={style.value}>{lastMeasure?.weight || 0}</Text>
          <Text className={style.unit}>kg</Text>
        </View>
        {isLogin && (
          <View className={style.measureBtn} onClick={() => navigateTo(pageBle)}>
            {t('click_measure')}
          </View>
        )}
      </View>
      <View className={style.indexWrap}>
        <View className={style.indexItem}>
          <View className={style.indexItemValue}>{lastMeasure?.score || 0}</View>
          <View className={style.indexItemName}>分数</View>
        </View>
        <View className={style.indexItem}>
          <View className={style.indexItemValue}>{lastMeasure?.bodyfat || 0}%</View>
          <View className={style.indexItemName}>体脂率</View>
        </View>
        <View className={style.indexItem}>
          <View className={style.indexItemValue}>{lastMeasure?.bodyfat || 0}%</View>
          <View className={style.indexItemName}>BMI</View>
        </View>
      </View>
    </View>
  );
};

export default Usernfo;
