import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import './index.scss'
const Chart: FC = () => {
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  useEffect(() => {
  })

  useDidShow(() => {
    console.log('useDidShow')
    dispatch(set_tabbar_index(1))
  })
  return (
    <View className='template_container'>
    Chart
    </View>
  )
}

export default Chart
