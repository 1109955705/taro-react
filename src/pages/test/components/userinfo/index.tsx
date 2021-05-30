import React, { FC } from 'react'
import { View } from '@tarojs/components'
import Taro from "@tarojs/taro";
import { useSelector } from "react-redux";
import { AtAvatar } from 'taro-ui'
import { useTranslation } from 'react-i18next';
import wxPromise from "@/static/biz/wxPromise";
import { navigateTo } from '@/static/biz/common'
import style from './index.module.scss'

interface UserinfoTypes {
  lastMeasure: any,
}
const Usernfo: FC<UserinfoTypes> = ({lastMeasure}) => {

  const { t } = useTranslation();

  const isLogin = useSelector((state: ReduxRootState) => {
    return state.sessionKey ? true : false
  })

  const { userinfo } = useSelector((state: ReduxRootState) => state)
  console.log('Usernfo刷新了')
  // throw new Error("userinfo:调试用途");
  return (
    <View className={style.main}>
      <AtAvatar className={style.avatar} circle image={userinfo.avatar}></AtAvatar>
      <View className={style.center}>
        <View className={style.weight}>{lastMeasure.weight}kg</View>
        {
          isLogin &&
            <View className={`${style.measureBtn}`} onClick={()=>navigateTo({ url: '/pages/ble/index'})}>{t('click_measure')}</View> 
        }
      </View>
      <View className={style.indexWrap}>
        <View>{lastMeasure.score}</View>
        <View>{lastMeasure.bodyfat}%</View>
        <View>{lastMeasure.bmi}</View>
      </View>
    </View>
  )
}

Usernfo.defaultProps = {
  lastMeasure: {},
}

export default Usernfo
