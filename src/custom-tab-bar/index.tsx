import Taro, {switchTab} from '@tarojs/taro'
import React, { FC, useState, useEffect } from 'react'
import { CoverView, CoverImage } from '@tarojs/components'
import { useSelector } from 'react-redux'
import './index.scss'

const data =  {
  color: '#CCCCCC',
  list: [
    {
      "pagePath": "/pages/measure/index",
      "text": "测量",
      "iconPath": "home",
    },
    {
      "pagePath": "/pages/chart/index",
      "text": "图表",
      "iconPath": "chart",
    },
    {
      "pagePath": "/pages/mine/index",
      "text": "我的",
      "iconPath": "mine",
    }
  ]
}
const Tabbar: FC = () => {
  const [selectedColor, useSelectedColor] = useState<string>('#9ACD32')
  const selected = useSelector(state => state.tabbar.index)
 
  useEffect(() => {
    console.log("selected",selected)
  }, [])

  const handleSwitchTab = (path: string) => {
    switchTab({
      url: path
    })
  }
  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border"></CoverView>
      {   
        data.list.map((item, index)=>(
          <CoverView className="tab-bar-item" key={index}  onClick={()=>handleSwitchTab(item.pagePath)}>
            <CoverView className="itme-img_bg" style={{background: index === selected ? selectedColor : data.color}}>
              <CoverImage className="itme_icon" src={require(`../assets/images/tabbar/${item.iconPath}_transparent.png`)}></CoverImage>
            </CoverView>
            <CoverView className="item_text" style={{color: index === selected ? selectedColor : data.color}}>{item.text}</CoverView>
          </CoverView>
        ))
      }
    </CoverView>
  )
}

export default Tabbar
