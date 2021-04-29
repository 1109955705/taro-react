import React, { FC, useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { AtButton, AtToast } from 'taro-ui'
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { set_tabbar_index } from "@/store/actions/tabbar";
import { set_userinfo, change_userName} from '@/store/actions/userinfo'
import { set_session_key } from "@/store/actions/sessionKey";
import { login } from "@/api/user";
import { wxPromise } from "@/utils/wxPromise";
import eventBus from "@/static/biz/eventBus";
import theme from "@/static/biz/theme";
import { sendHttpRequest } from "@/static/sys/http";
import { ApiLogin } from "@/static/biz/apis/users";
// import theme from '@/static/biz/theme'
import "./index.scss";

interface loginCallBackResultType {
  code: string,
  errMsg: string,
}

interface LoginTypeOne {
  code: string,
  iv: string,
  encryptedData: string,
}
interface LoginTypeTwo {
  iv: string,
  encryptedData: string,
  random_code: string,
}
type LoginType = LoginTypeOne | LoginTypeTwo

const Measure: FC = (props, context) => {
  const dispatch = useDispatch();
  const [randomCode, setRandomCode] = useState<string>('')
  const [test, setTest] = useState<any>('test')
  const [isOpened, showToast] = useState<boolean>(false)
  const selected = useSelector(state => state)
  const { account_name } = useSelector((state: ReduxRootState) => state.userinfo)
  const index = useSelector((state: ReduxRootState) => state.tabbar.index)

  useEffect(() => {
    console.log('measure: theme', theme)
    // console.log("userId",userId)
    eventBus.on('test', res =>{
      setTest(res)  
      console.log('measure页面测试回调')
    })
  }, []);

  useDidShow(() => {
    dispatch(set_tabbar_index(0));
  });

  const handClickLogin = async () => {
    const { iv, encryptedData } = await wxPromise(Taro.getUserProfile)({desc:'xxxx'})

    const { code } = await wxPromise(Taro.login)()
    const params = { iv, encryptedData, code }
    // const res = await login(params)
    const res = await sendHttpRequest(ApiLogin,{}, {useMock: true})
    console.log('getUserProfile', res)
    const { random_code } = res
    setRandomCode(random_code)
  };

  const handGetPhone = async (e: any) => {
    const { encryptedData, iv } = e.detail
    const params: LoginTypeTwo = {
      encryptedData,
      iv,
      random_code: randomCode,
    }
    const res = await login(params)
    const { terminal_user_session, user_info } = res
    dispatch(set_session_key(terminal_user_session));
    dispatch(set_userinfo(user_info));
  };

  const handleStore = ()=> {
    console.log('detail', selected);
  }

  const changeName = ()=> {
    dispatch(change_userName('xxxxx'))
  }

  const changeIndex = ()=> {
    // console.log('detail', userInfo.account_name);
    // dispatch(change_userName('222222'))
    dispatch(set_tabbar_index(2));
  }
  
  const myView = function (){
    // 只能用map， 无法使用foreach
    return (
    <View>
      <View>111</View>
      <View>2222</View>
      {[1,2,3,4].map(item=>{
        return <view>{item}</view>
      })}
    </View>
    )
  } 
  return (
    <View className='template_container'>
      Measure
      <Button
        className='btn'
        plain
        onClick={()=>handClickLogin()}
      >login</Button>
      <Button
        className='btn'
        plain
        openType='getPhoneNumber'
        onGetPhoneNumber={handGetPhone}
      >phone</Button>
      <Button
        className='btn'
        plain
        onClick={()=>handleStore()}
      >store</Button>
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/echarts/index'})}
      >echarts</Button>
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/canvas/index'})}
      >canvas</Button>
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/ble/index'})}
      >ble</Button>
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/shop/index'})}
      >shop</Button>
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/shop1/index'})}
      >shop1</Button>
      <AtButton className='normol-btn' onClick={()=>showToast(!isOpened)}>toast</AtButton>
      <AtToast isOpened={isOpened} text='xxxx' ></AtToast>
      <View className='btn'>eventbus:{test}</View>
      <Button
        className='btn'
        plain
        onClick={()=>changeName()}
      >change</Button>
      <View>{account_name}</View>
      <Button
        className='btn'
        plain
        onClick={()=>changeIndex()}
      >change{index}</Button>
      {/* {myView()} */}
      <Button
        className='btn'
        plain
        onClick={()=>Taro.navigateTo({url: '/pages/test/index'})}
      >test</Button>
    </View>
  );
};

export default Measure;
