import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface UserinfoTypes {
  isLogin: any,
  lastMeasure: any,
}
const Usernfo: FC<UserinfoTypes> = ({isLogin, lastMeasure}) => {
  return (
  <View className='main'>Usernfo{isLogin}</View>
  )
}

Usernfo.defaultProps = {
  isLogin: false,
  lastMeasure: {},
}

export default Usernfo
