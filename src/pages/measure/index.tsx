import React, { FC, useState, useEffect } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { set_tabbar_index } from "@/store/actions/tabbar";
import { set_session_key, set_userinfo } from "@/store/actions/userinfo";
import { login } from "@/api/user";
import { wxPromise } from "@/utils/wxPromise";
import { sendHttpRequest } from "@/static/sys/http";
import { ApiLogin } from "@/static/biz/apis/users";
import theme from '@/static/biz/theme'
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
  const selected = useSelector(state => state)

  useEffect(() => {
    // console.log("userId",userId)
  });

  useDidShow(() => {
    dispatch(set_tabbar_index(0));
  });

  const handClickLogin = async (e: any) => {
    const params: any = {}
    await wxPromise(Taro.getSetting)().then( async (res: any)=>{
        await wxPromise(Taro.login)().then((res1: loginCallBackResultType) => {
          params.code = res1.code;
          return wxPromise(Taro.getUserInfo)()
        }).then((res2: Taro.getUserInfo.SuccessCallbackResult)=>{
          const { iv, encryptedData} = res2;
          params.iv = iv;
          params.encryptedData = encryptedData;
        })
    })
    const res3 = await login(params)
    const random_code = res3.random_code
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
    console.log('res', res);
  };

  const handleStore = ()=> {
    console.log('detail', selected);
  }

  return (
    <View className='template_container'>
      Measure
      <Button
        className='btn'
        plain
        openType='getUserInfo'
        onGetUserInfo={handClickLogin}
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
        onClick={()=>Taro.navigateTo({url: '/pages/webview/index'})}
      >webview</Button>
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
    </View>
  );
};

export default Measure;
