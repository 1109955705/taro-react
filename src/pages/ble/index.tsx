import React, { FC, useState, useEffect } from 'react'
import { View, WebView } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import './index.scss'
const Ble: FC = () => {
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  useEffect(() => {
  })

  return (
    <View className='template_container'>
      ble
    </View>
  )
}

export default Ble
