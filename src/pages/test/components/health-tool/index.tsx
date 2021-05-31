import React, { FC, memo } from 'react'
import { View, Image } from '@tarojs/components'
import { useRequest } from 'ahooks';
import { sendHttpRequest } from '@/static/sys/http'
import { ApiGetHealthTool } from '@/static/biz/apis/healthTool'

import style from './index.module.scss'

const HealthTool: FC = () => {
  const { data, error, loading } = useRequest(sendHttpRequest, {
    manual: false,
    defaultParams: ApiGetHealthTool,
    throwOnError: true,
  });

  console.log('HealthTool刷新了', data)
  if (error) {
    return <View>failed to load</View>;
  }
  if (loading) {
    console.log('HealthTool加载中')
    return <View>loading...</View>;
  }

  return (
    <View className={style.main}>
      <View>健康工具</View>
      <View className={style.bannersList}>
          { data &&
            data.data.health_tools.map((item: any) => {
              return <Image className={style.imgBanner} src={item.tool_banner} key={item.tool_banner} />
            })
          }
      </View>
    </View>
  );
}

export default memo(HealthTool)
