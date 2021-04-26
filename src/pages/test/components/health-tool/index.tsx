import React, { FC } from 'react'
import { View, Image } from '@tarojs/components'
import useMain from './service/useMain'
import style from './index.module.scss'

const HealthTool: FC = () => {
  const { list } = useMain()
  return (
    <React.Fragment>
      {
        list.length > 0  
          ? <View className={style.main}>
              <View>健康工具</View>
              {
                list.length > 0 
                ? <View className={style.bannersList}>
                    {
                      list.map((item: any) => {
                        return <Image className={style.imgBanner} src={item.tool_banner} />
                      })
                    }
                  </View>
                : <View>还未配置</View>
              }
            </View>
          : ''
      }
    </React.Fragment>
  )
}

export default HealthTool
