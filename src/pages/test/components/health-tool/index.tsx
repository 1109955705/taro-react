import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { getHealthToolList } from '@/api/user'
// import style from './index.module.scss'
import style from './index.module.scss'

const HealthTool: FC = () => {
  const [ list, setList ] = useState([])
  useEffect(() => {
    const request = async () => {
      const res = await getHealthToolList()
      console.log('res', res.data.health_tools)
      setList(res.data.health_tools)
    }
    request()
  }, [])
  return (
    <View className={style.main}>
      {
        list.map((item: any) => {
        return <View>{item.tool_name}</View>
        })
      }
    </View>
  )
}

export default HealthTool
