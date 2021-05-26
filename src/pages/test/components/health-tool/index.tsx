import React, { FC, memo } from 'react'
import { View, Image } from '@tarojs/components'
import { useRequest } from 'ahooks';
import { getHealthToolList } from '@/api/user'
import style from './index.module.scss'

const HealthTool: FC = () => {

  const { data, error, loading } = useRequest(getHealthToolList);
  console.log('HealthTool刷新了')
  if (error) {
    return <View>failed to load</View>;
  }
  if (loading) {
    return <View>loading...</View>;
  }

  return (
    <View className={style.main}>
      <View>健康工具</View>
      <View className={style.bannersList}>
          {
            data.data.health_tools.map((item: any) => {
              return <Image className={style.imgBanner} src={item.tool_banner} key={item.tool_banner} />
            })
          }
      </View>
    </View>
  );
}

export default memo(HealthTool)
