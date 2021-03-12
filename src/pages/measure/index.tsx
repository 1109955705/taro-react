import React, { FC, useState, useEffect } from "react";
import { flushSync } from 'react-dom';
import Taro from "@tarojs/taro";
import { useDidShow } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { useDispatch, useSelector } from "react-redux";
import { set_tabbar_index } from "@/store/actions/tabbar";
import { set_session_key, set_userinfo } from "@/store/actions/userinfo";
import { login } from "@/api/user";
import { wxPromise } from "@/utils/wxPromise";

import "./index.scss";

interface loginCallBackResultType {
  code: string,
  errMsg: string,
}

interface LoginTypeOne {
  code: string,
  iv: string,
  encryptedData: string,
  appid: string,
}
interface LoginTypeTwo {
  iv: string,
  encryptedData: string,
  random_code: string,
}
type LoginType = LoginTypeOne | LoginTypeTwo
const Measure: FC = () => {
  const dispatch = useDispatch();
  const [defaultParams, setparams] = useState<any>({})
  const [randomCode, setRandomCode] = useState<string>('')
  const selected = useSelector(state => state)
  useEffect(() => {
    // console.log("userId",userId)
  });
  useDidShow(() => {
    console.log("useDidShow");
    dispatch(set_tabbar_index(0));
  });
  const handClickLogin = async (e: any) => {
    console.log("handClickLogin", e);
    const params: any = {
      appid: 'wx5a0ab9c88eab843e'
    }

    await wxPromise(Taro.getSetting)().then( async (res: any)=>{
      console.log('getSetting', res.authSetting);
      if (res.authSetting["scope.userInfo"]) {
        await wxPromise(Taro.login)().then((res1: loginCallBackResultType) => {
          params.code = res1.code;
          return wxPromise(Taro.getUserInfo)()
        }).then((res2: Taro.getUserInfo.SuccessCallbackResult)=>{
          const { iv, encryptedData} = res2;
          params.iv = iv;
          params.encryptedData = encryptedData;
        })
      }
    })
    setparams(params)
    console.log('res3-params', params);
    const res3 = await login(params)
    console.log('res3', res3);
    const random_code = res3.random_code
    setRandomCode(random_code)
    // const res4 = await login(params1)
    // console.log('xxxx,', res4);
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
    // flushSync(() => {
    //   console.log('xxxx')
    // })
    dispatch(set_session_key(terminal_user_session));
    dispatch(set_userinfo(user_info));
    console.log('res', res);
    // const detail = useSelector(state => state)
    // const session_key = useSelector(state => state.userinfo.session_key)
    // console.log('session_key', session_key);
  };

  const handleStore = ()=> {
    console.log('detail', selected);
  }
  return (
    <View className="template_container">
      Measure
      <Button
        className="login_btn"
        plain
        openType="getUserInfo"
        onGetUserInfo={handClickLogin}
      >
        login
      </Button>
      <Button
        className="login_btn"
        plain
        openType="getPhoneNumber"
        onGetPhoneNumber={handGetPhone}
      >
        phone
      </Button>
      <Button
        className="login_btn"
        plain
        onClick={()=>handleStore()}
      >
        store
      </Button>
    </View>
  );
};

export default Measure;
