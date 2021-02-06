import React, { FC, useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { login } from '@/api/user'
import './index.scss'

const Measure: FC = () => {
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log("userId",userId)
  })
  useDidShow(() => {
    console.log('useDidShow')
    dispatch(set_tabbar_index(0))
  })
  const handClickLogin = (e: any) =>{
    console.log("handClickLogin", e)
    Taro.getSetting({
      success: function (res) {
        console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权")
        }
      }
    })

    // login()
  }
  const handGetPhone = (e: any) =>{
    console.log("handGetPhone", e)
  }
  return (
    <View className='template_container'>
      Measure
      <Button className='login_btn' plain openType='getUserInfo' onGetUserInfo={handClickLogin}>login</Button>
      <Button className='login_btn' plain openType='getPhoneNumber' onGetPhoneNumber={handGetPhone}>phone</Button>
    </View>
  )
}

export default Measure
