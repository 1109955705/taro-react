import React, { FC, useState, useEffect } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { AtButton, AtToast } from 'taro-ui';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setTabbarIndex, setUserinfo, changeUserName } from '@/store/actions';
import { setSessionKey } from '@/store/actions/sessionKey';
import wxPromise from '@/static/biz/wxPromise';
import eventBus from '@/static/biz/eventBus';
import { sendHttpRequest } from '@/static/sys/http';
import { ApiLogin } from '@/static/biz/apis/users';
import './index.scss';

interface LoginTypeTwo {
  iv: string;
  encryptedData: string;
  random_code: string;
}

const Measure: FC = () => {
  const dispatch = useDispatch();
  const [randomCode, setRandomCode] = useState<string>('');
  const [test, setTest] = useState<any>('test');
  const [isOpened, showToast] = useState<boolean>(false);
  const allState = useSelector((state) => state);
  const { account_name } = useSelector((state: ReduxRootState) => state.userinfo);
  const index = useSelector((state: ReduxRootState) => state.tabbar);
  const themeColor = useSelector((state: ReduxRootState) => state.themeColor);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log("userId",userId)
    eventBus.on('test', (res) => {
      setTest(res);
      console.log('measure页面测试回调');
    });
  }, []);

  useEffect(() => {
    Taro.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: themeColor,
    });
  }, [themeColor]);

  useDidShow(() => {
    dispatch(setTabbarIndex(0));
  });

  const handClickLogin = async () => {
    const { iv, encryptedData, errMsg } = await wxPromise(Taro.getUserProfile)({
      desc: 'xxxx',
    });
    if (errMsg.includes('fail')) return;
    const { code } = await wxPromise(Taro.login)();
    const params = { iv, encryptedData, code };
    // const res = await login(params)
    const res = await sendHttpRequest(ApiLogin, params, {});
    console.log('xxxxxxx', res);
    const { terminal_user_session, user_info, code: resCode, random_code } = res.data;

    if (resCode === '20005') {
      setRandomCode(random_code);
    } else {
      dispatch(setSessionKey(terminal_user_session));
      dispatch(setUserinfo(user_info));
    }
  };

  const handGetPhone = async (e: any) => {
    if (!randomCode) return;
    const { encryptedData, iv } = e.detail;
    const params: LoginTypeTwo = {
      encryptedData,
      iv,
      random_code: randomCode,
    };
    const res = await sendHttpRequest(ApiLogin, params, {});
    const { terminal_user_session, user_info } = res.data;
    dispatch(setSessionKey(terminal_user_session));
    dispatch(setUserinfo(user_info));
  };

  const handleStore = () => {
    console.log('detail', allState);
  };

  const changeName = () => {
    dispatch(changeUserName('xxxxx'));
  };

  const changeIndex = () => {
    dispatch(setTabbarIndex(2));
  };

  return (
    <View className="template_container">
      Measure
      <Button className="btn" plain onClick={() => handClickLogin()}>
        login
      </Button>
      <Button className="btn" plain openType="getPhoneNumber" onGetPhoneNumber={handGetPhone}>
        phone
      </Button>
      <Button className="btn" plain onClick={() => handleStore()}>
        store
      </Button>
      <Button className="btn" plain onClick={() => Taro.navigateTo({ url: '/pages/canvas/index' })}>
        canvas
      </Button>
      <Button className="btn" plain onClick={() => Taro.navigateTo({ url: '/pages/ble/index' })}>
        ble
      </Button>
      <AtButton className="normol-btn" onClick={() => showToast(!isOpened)}>
        toast
      </AtButton>
      <AtToast isOpened={isOpened} text="xxxx" />
      <View className="btn">eventbus:{test}</View>
      <Button className="btn" plain onClick={() => changeName()}>
        changeName
      </Button>
      <View>{account_name}</View>
      <Button className="btn" plain onClick={() => changeIndex()}>
        changeIndex{index}
      </Button>
      {/* {myView()} */}
      <Button className="btn" plain onClick={() => Taro.navigateTo({ url: '/pages/test/index' })}>
        {t('home')}
      </Button>
      <View className="tabbarHeight"></View>
    </View>
  );
};

export default Measure;
