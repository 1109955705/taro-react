import Taro from '@tarojs/taro'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { sendHttpRequest } from '@/static/sys/http'
import { ApiGetLastMeasurement } from '@/static/biz/apis/measure'

const useMain = () => {
  const [ lastMeasure, setLastMeasure ] = useState<any>({})
  const isLogin = useSelector((state: ReduxRootState) => {
    return state.sessionKey ? true : false
  })
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor)

  useEffect(()=> {
    // 判断是否登录
    if (isLogin) {
      const request = async () => {
        const res = await sendHttpRequest(ApiGetLastMeasurement)
        setLastMeasure(res.data)
      }
      request()
    }

  }, [isLogin])

  useEffect(()=>{
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    })
  }, [themeColor])

  return {
    isLogin,
    lastMeasure,
  }
}

export default  useMain