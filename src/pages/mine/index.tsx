import React, { FC, useState, useEffect } from 'react'
import { View, Image} from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import './index.scss'

const Mine: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
   
  })
  useDidShow(() => {
    console.log('useDidShow')
    dispatch(set_tabbar_index(2))
  })
  return (
    <View className='template_container'>
      <Image src={require('../../assets/images/tabbar/home_default.png')}></Image>
    </View>
  )
}

export default Mine
