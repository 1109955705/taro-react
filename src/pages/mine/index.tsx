import React, { FC, useState, useEffect } from 'react'
import { View as view, Image, Button } from '@tarojs/components'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import eventBus from "@/static/sys/eventBus";
import './index.scss'

const Mine: FC = () => {
  const userInfo = useSelector(state => state.userinfo.detail)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('xxx', userInfo)
  })
  useDidShow(() => {
    console.log('useDidShow')
    eventBus.addListener('test', (res)=> {
      console.log('test1', res)
    })
    eventBus.addListener('test', (res)=> {
      console.log('test2', res)
    })
    dispatch(set_tabbar_index(2))
  })

  const handClick = () => {
    console.log('xxxxx')
    eventBus.emit('test', 'test3')
  }  
  return (
    <view className='template_container'>
      {/* <Image src={require('../../assets/images/tabbar/home_default.png')}></Image> */}
      <view>{userInfo.account_name || '未登录'}</view>
      <Button
        className='btn'
        plain
        onClick={handClick}
      >login</Button>
    </view>
  )
}

export default Mine
