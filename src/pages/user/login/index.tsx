import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { View, Image, Button, Checkbox } from '@tarojs/components';
import boot from '@/static/biz/hoc/boot';
import { navigateTo, switchTab, showToast } from '@/static/biz/common';
import { pageHome, pagePhoneLogin, pageUserinfo } from '@/static//biz/routes';
import wechat from '@/assets/images/wechat.png';
import arrrow from '@/assets/images/arrow.png';
import ykb from '@/assets/images/ykb.png';
import style from './index.module.scss';

const Login = () => {
  const [select, setSelect] = useState(false);

  const checkChechBox = () => {
    if (!select) {
      showToast('请阅读并勾选底部协议');
      return false;
    }
    return true;
  };

  const handGetPhone = (res?) => {
    if (!checkChechBox()) {
      showToast('请阅读并勾选底部协议');
      return;
    }

    const {
      detail: { encryptedData, errMsg, iv },
    } = res;

    if (errMsg.includes('fail')) {
      showToast('请授权手机号');
    } else {
      // switchTab(pageHome);
      navigateTo(pageUserinfo);
    }
  };

  const changeCheckBox = () => {
    setSelect(!select);
  };

  const handPhoneLogin = () => {
    if (!checkChechBox()) return;
    navigateTo(pagePhoneLogin);
  };

  return (
    <View className={style.main}>
      <View className={style.text}>一键授权登录</View>
      <View className={style.icons}>
        <Image className={style.iconWechat} src={wechat} />
        <Image className={style.iconArrow} src={arrrow} />
        <Image className={style.iconWechat} src={ykb} />
      </View>
      <View className={style.btnWrap}>
        {select ? (
          <Button
            hoverClass={style.btnHover}
            className={style.btnWechatLogin}
            openType="getPhoneNumber"
            onGetPhoneNumber={handGetPhone}
          >
            微信用户一键登录
          </Button>
        ) : (
          <Button
            hoverClass={style.btnHover}
            className={style.btnWechatLogin}
            onClick={() => handGetPhone()}
          >
            微信用户一键登录
          </Button>
        )}
      </View>
      <View className={style.phoneLogin} onClick={() => handPhoneLogin()}>
        手机号登录/注册
      </View>
      <View className={style.agreementAndPrivacy}>
        <Checkbox value="xxx" checked={select} onClick={() => changeCheckBox()} />
        <View>我已阅读并同意用户协议和隐私政策</View>
      </View>
    </View>
  );
};

export default boot(Login);
