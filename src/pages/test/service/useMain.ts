import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getLastMeasure } from '@/api/user'

const useMain = () => {
  const [ isLogin, setIsLogin ] = useState(false)
  const [ lastMeasure, setLastMeasure ] = useState<any>({})
  const { sessionKey } = useSelector((state: ReduxRootState) => state)

  useEffect(()=> {
    // 判断是否登录
    if (sessionKey) {
      setIsLogin(true)
      // 获取最近一条测量数据
      const request = async () => {
        const res = await getLastMeasure()
        setLastMeasure(res.resultData)
      }
      request()
    }

  }, [sessionKey])

  return {
    isLogin,
    lastMeasure,
  }
}

export default  useMain