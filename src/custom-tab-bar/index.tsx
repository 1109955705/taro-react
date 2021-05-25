import { switchTab } from '@tarojs/taro'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CoverView, CoverImage } from '@tarojs/components'
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
const selectedColor = '#9ACD32'
const Tabbar: FC = () => {
  const selected = useSelector((state: any) => state.tabbar.index)
 
  useEffect(() => {
    console.log("selected",selected)
  }, [])

  const handleSwitchTab = (path: string) => {
    switchTab({
      url: path
    })
  }
  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {   
        data.list.map((item, index)=>(
          <CoverView className='tab-bar-item' key={index}  onClick={()=>handleSwitchTab(item.pagePath)}>
            <CoverView className='itme-img_bg' style={{background: index === selected ? selectedColor : data.color}}>
              <CoverImage className='itme_icon' src={require(`../assets/images/tabbar/${item.iconPath}_transparent.png`)}></CoverImage>
            </CoverView>
            <CoverView className='item_text' style={{color: index === selected ? selectedColor : data.color}}>{item.text}</CoverView>
          </CoverView>
        ))
      }
    </CoverView>
  )
}

// 使用Taro.Component<any, any> 或声明StateType和propType， 否则在jsx中使用 this.state.xxx会报错不存在改变量
// type StateType = {
//   name: string;
//   number: number;
// };
// type propType = {
//     name: string;
//     number: number;
// };

// 不使用redux保存index的话也可以用globalData保存
// @connect(({ tabbar }) => ({
//   tabbar
// }), (dispatch) => ({
//   set_tabbar_index () {
//     dispatch(set_tabbar_index())
//   }
// }))
// class Tabbar extends Component<any, any> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedColor: '#01ca9e',
//     };
//   }
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }
  
//   handleSwitchTab = (path: string) => {
//     switchTab({
//       url: path
//     })
//   }
//   render() {
//     const { selected, selectedColor } = this.state
//     return (
//       <CoverView className="tab-bar">
//         <CoverView className="tab-bar-border"></CoverView>
//         {   
//           data.list.map((item, index)=>(
//             <CoverView className="tab-bar-item" key={index}  onClick={this.handleSwitchTab.bind(this, item.pagePath)}>
//               <CoverView className="itme-img_bg" style={{background: index === this.props.tabbar.index ? selectedColor : data.color}}>
//                 <CoverImage className="itme_icon" src={require(`../assets/images/tabbar/${item.iconPath}_transparent.png`)}></CoverImage>
//               </CoverView>
//               <CoverView className="item_text" style={{color: index === this.props.tabbar.index ? selectedColor : data.color}}>{item.text}</CoverView>
//             </CoverView>
//           ))
//         }
//       </CoverView>
//     );
//   }
// }


export default Tabbar
