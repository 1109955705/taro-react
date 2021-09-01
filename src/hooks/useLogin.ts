import Taro from '@tarojs/taro';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wxPromise from '@/static/biz/wxPromise';
import { sendHttpRequest } from '@/static/sys/http';
import { ApiLogin } from '@/static/biz/apis/users';
import { setUserinfo, setSessionKey } from '@/store/actions';
import { navigateTo } from '@/static/biz/common';
import { pageLogin } from '@/static//biz/routes';

export default () => {
  const dispatch = useDispatch();
  const [registerCode, setRegisterCode] = useState<string>('');
  const login = async () => {
    const { code } = await wxPromise(Taro.login)();
    const params = { code };
    const res = await sendHttpRequest(ApiLogin, params, {
      loadingText: '登录中',
    });
    const { terminalUserSession, userInfo, code: resCode, randomCode } = res.data;

    // navigateTo(pageLogin);
    // return;

    if (resCode === '20005') {
      console.log('未注册用户', randomCode);
      setRegisterCode(randomCode);
      navigateTo('/pages/login/index');
    } else {
      console.log('已注册用户', terminalUserSession, userInfo);
      dispatch(setSessionKey(terminalUserSession));
      dispatch(setUserinfo(userInfo));
    }
  };

  return {
    registerCode,
    login,
  };
};
