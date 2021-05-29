import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import theme from '@/static/biz/themeMock';
import { $ } from '@tarojs/extend'

export default (ThemeColorComponent) => {
  return  () => {
    useEffect(()=>{
      let elem = $(`.mainColor`)  
      elem.css('background-color', theme.themeColor) 
      elem.css('--apple', 'orange')
    }, [])
    return (
      <View className='mainColor'>
        <ThemeColorComponent />
      </View>
    )
}
}

