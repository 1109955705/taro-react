import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import './index.scss'
const Webview: FC = () => {
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  useEffect(() => {
  })

  return (
    <View className='template_container'>
      webview
    </View>
  )
}

export default Webview
