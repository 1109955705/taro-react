import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
// import './index.scss'
import style from './index.scss'

interface FeaturesTypes {
  showDeepReport: boolean,
}
const Features: FC<FeaturesTypes> = ({showDeepReport}) => {
  useEffect(()=> {
    console.log('props', showDeepReport)
  }, [showDeepReport])

  return (
    <View className={style.main}>Features</View>
  )
}

Features.defaultProps = {
  showDeepReport: false
}

export default Features
