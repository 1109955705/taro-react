import { useEffect, useState } from "react"
import { getHealthToolList } from '@/api/user'

const useMain = () => {

  const [ list, setList ] = useState([])
  
  useEffect(() => {
    const request = async () => {
      const res = await getHealthToolList()
      setList(res.data.health_tools)
    }
    request()
  }, [])

  return {
    list
  }
}

export default  useMain