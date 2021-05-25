import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { getLastMeasure } from '@/api/user'
// import { sendHttpRequest } from "@/static/sys/http";
// import { ApiLogin } from "@/static/biz/apis/users";

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
      // const request2 = async () => {
      //   const res = await sendHttpRequest(ApiLogin,{}, {useMock: true})
      //   console.log('xxxx', res)
      // }
      // request2()
    }

  }, [isLogin])

  return {
    isLogin,
    lastMeasure,
  }
}

export default  useMain