import React, { FC, useState, useEffect } from 'react'
import { View, WebView} from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import { set_tabbar_index } from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import eventBus from "@/static/biz/eventBus";
import './index.scss'

const Chart: FC = () => {
  const [src, setSrc] = useState<string>('')
  const dispatch = useDispatch()
  const selected = useSelector(state => state)
  const userinfo = useSelector(state => state.userinfo)
  useEffect(() => {
    console.log("userinfo", userinfo, selected)
    const params = {
      user_id: userinfo.detail.id,
      key: userinfo.session_key,
      is_main_user: 1,
      themeColor: '#01ca9e',
      hostName: 'http://sit.third-api.yolanda.hk',
    }
    let webViewSrc = `http://xcx-h5-preview.glb.qnniu.com/xcxChartViewThird.html?${objToStr(params, true)}&enviornment=test`
    console.log('webViewSrc', webViewSrc)
    setSrc(webViewSrc)
  }, [])

  const objToStr = (obj, encode = false) => {
    let str = ""
    for(let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (encode) {
          str += `&${key}=${encodeURIComponent(obj[key])}`
        } else {
          str += `&${key}=${obj[key]}`
        }
      }
    }
    return str.slice(1)
  }

  useDidShow(() => {
    dispatch(set_tabbar_index(1))
  })

  return (
    <WebView src={src}></WebView>
  )
}

export default Chart
