import React, { FC, useState, useEffect } from 'react'
import { View as view, Image, Button } from '@tarojs/components'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import eventBus from "@/static/biz/eventBus";
import './index.scss'

const Mine: FC = () => {
  const userInfo = useSelector(state => state.userinfo.detail)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('xxx', userInfo)
  })
  useDidShow(() => {
    console.log('useDidShow')
    dispatch(set_tabbar_index(2))
  })

  const handClick = () => {
    eventBus.emit('test', 'testxxxx')
  }  
  return (
    <view className='template_container'>
      {/* <Image src={require('../../assets/images/tabbar/home_default.png')}></Image> */}
      <view>{userInfo.account_name || '未登录'}</view>
      <Button
        className='btn'
        plain
        onClick={handClick}
      >触发事件</Button>
    </view>
  )
}

export default Mine
