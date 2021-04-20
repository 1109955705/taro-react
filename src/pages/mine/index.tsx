import React, { FC, useState, useEffect, useReducer } from 'react'
import { View as view, Image, Button, View } from '@tarojs/components'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import eventBus from "@/static/biz/eventBus";
import './index.scss'

const initialState = 0;
const reducer = (state, action) => {
  console.log('reducer', action)
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const Mine: FC = () => {
  const userInfo = useSelector(state => state.userinfo.detail)
  const [count, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useDispatch()
  useEffect(() => {
    console.log('xxx', userInfo)
  })
  useDidShow(() => {
    console.log('useDidShow')
    reduxDispatch(set_tabbar_index(2))
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
      <View>
        {count}
        <Button onClick={() => dispatch('increment')}>+1</Button>
        <Button onClick={() => dispatch('decrement')}>-1</Button>
        <Button onClick={() => dispatch('reset')}>reset</Button>
      </View>
    </view>
  )
}

export default Mine
