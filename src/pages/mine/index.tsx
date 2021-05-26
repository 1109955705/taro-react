import React, { FC, useState, useCallback, useRef } from 'react'
import { View, Button } from '@tarojs/components'
import { set_tabbar_index} from '@/store/actions/tabbar'
import { useDidShow } from '@tarojs/taro'
import { useDispatch, useSelector } from "react-redux";
import eventBus from "@/static/biz/eventBus";
import { useChecked } from './use-checked'
import './index.scss'

// const initialState = 0;
// const reducer = (state, action) => {
//   console.log('reducer', action)
//   switch (action) {
//     case 'increment': return state + 1;
//     case 'decrement': return state - 1;
//     case 'reset': return 0;
//     default: throw new Error('Unexpected action');
//   }
// };

const ChildButton = React.memo(({ handleClick }: any) => {
  const refCount = useRef(0);
  return (
    <Button
      onClick={handleClick}
    >{`button render count ${refCount.current++}`}</Button>
  );
});

const Mine: FC = () => {
  // const [all, setAll] = useState(1)
  const [num, setNum] = useState(0);
  const userInfo = useSelector((state: ReduxRootState) => state.userinfo)
  const index = useSelector((state: ReduxRootState) => state.tabbar.index)
  const [isOn, setIsOn] = useState(false);
  console.log('reducer')
  const {
    count,
    all,
    reset,
    increment,
    decrement,
  } = useChecked()
  const reduxDispatch = useDispatch()
  useDidShow(() => {
    reduxDispatch(set_tabbar_index(2))
  })
  const handClick = () => {
    eventBus.emit('test', 'testxxxx')
  }  

  const handleClick = useCallback(() => {
    console.log("执行了x")
    setIsOn(!isOn)
    // setIsOn(pre=>!pre)
  }, [isOn]);
  return (
    <View className='template_container'>
      {/* <Image src={require('../../assets/images/tabbar/home_default.png')}></Image> */}
      <view>{userInfo ? userInfo.account_name : '未登录'}</view>
      <Button
        className='btn'
        plain
        onClick={handClick}
      >触发事件</Button>
      <View>
      <View>{count}:{(all.current).toString()}</View>
        <Button 
          onClick={() => increment()}
        >+1</Button>
        <Button onClick={() => decrement()}>-1</Button>
        <Button onClick={() => reset()}>reset</Button>
      </View>
      <View>
        Count: {num}
        <Button onClick={() => setNum(0)}>init</Button>
        <Button 
          onClick={() => setNum(num + 1)}
        >+</Button>
        <Button 
          onClick={() => {
            setTimeout(() => setNum(pre=>pre+1), 3000);
          }}
        >+</Button>
      </View>
        <View>{index}</View>
        <View>{isOn ? "On" : "Off"}</View>
        <ChildButton handleClick={handleClick}></ChildButton>
    </View>
  )
}

export default Mine
