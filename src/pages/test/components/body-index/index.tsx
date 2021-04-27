import React, { FC } from 'react'
import { View } from '@tarojs/components'
import useMain from './service/useMain'
import style from './index.module.scss'
// eslint-disable-next-line import/no-commonjs
// const style = require('./index.module.scss')

interface BodyIndexTypes {
  lastMeasure: any,
}
const BodyIndex: FC<BodyIndexTypes> = ({ lastMeasure }) => {

  const { list } = useMain(lastMeasure)

  return (
    <View className={style.main}>
      <View className={style.title}>健康工具</View>
      <View className={style.itemWrap}>
        {
          list.map((item: any) => {
            return  <View className={style.item} key={item.name}>
                      <View>{item.name}</View>
                      <View>{item.value}</View>
                    </View>
          })
        }
      </View>
    </View>
  )
}

BodyIndex.defaultProps = {
  lastMeasure: {}
}

export default BodyIndex
