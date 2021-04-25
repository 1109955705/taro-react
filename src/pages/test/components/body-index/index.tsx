import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface BodyIndexTypes {
  lastMeasure: any,
}
const BodyIndex: FC<BodyIndexTypes> = ({lastMeasure}) => {

  useEffect(()=> {
    console.log('props', lastMeasure)
  }, [lastMeasure])

  return (
    <View className='main'>xxxxxx</View>
  )
}

BodyIndex.defaultProps = {
  lastMeasure: {}
}

export default BodyIndex
