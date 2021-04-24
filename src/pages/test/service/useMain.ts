import { useReducer, useCallback, useEffect, useState } from "react"

 const useMain = () => {
  const [ isLogin, setIsLogin ] = useState(false)
  const [ lastMeasure, setLastMeasure ] = useState({})
  useEffect(()=> {

  }, [])
  return {
    isLogin,
    lastMeasure,
  }
}

export default  useMain