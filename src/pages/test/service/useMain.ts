import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getLastMeasure } from '@/api/user'

const useMain = () => {
  const [ lastMeasure, setLastMeasure ] = useState<any>({})
  const isLogin = useSelector((state: ReduxRootState) => {
    return state.sessionKey ? true : false
  })

  useEffect(()=> {
    // 判断是否登录
    if (isLogin) {
      // 获取最近一条测量数据
      const request = async () => {
        const res = await getLastMeasure()
        setLastMeasure(res.resultData)
      }
      request()
    }

  }, [isLogin])

  return {
    isLogin,
    lastMeasure,
  }
}

export default  useMain