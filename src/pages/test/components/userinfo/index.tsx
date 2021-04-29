import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useSelector } from "react-redux";
import { AtButton, AtAvatar } from 'taro-ui'
import Taro from '@tarojs/taro'
import style from './index.module.scss'

interface UserinfoTypes {
  lastMeasure: any,
}
const Usernfo: FC<UserinfoTypes> = ({lastMeasure}) => {
  
  const isLogin = useSelector((state: ReduxRootState) => {
    return state.sessionKey ? true : false
  })

  const { userinfo } = useSelector((state: ReduxRootState) => state)

  return (
  <View className={style.main}>
    <AtAvatar className={style.avatar} circle image={userinfo.avatar}></AtAvatar>
    <View className={style.center}>
      <View className={style.weight}>{lastMeasure.weight}kg</View>
      {
        isLogin &&
          <View className={`${style.measureBtn} themeBgColor themeColor`} onClick={()=>Taro.navigateTo({ url: '/pages/ble/index'})}>点击测量</View> 
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
