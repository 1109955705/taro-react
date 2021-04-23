import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import useMain from './services/useMain'
import './index.scss'

interface ShopTypes {
  title: string,
}
const Shop: FC<ShopTypes> = (props) => {
  const [title, setTitle] = useMain(props.title)
  
  useEffect(()=> {
    console.log('props', props)
  }, [props])

  return (
    <View className='main'>{title}</View>
  )
}

Shop.defaultProps = {
  title: 'Shop'
} 

export default Shop
