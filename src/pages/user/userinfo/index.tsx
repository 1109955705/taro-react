import React, { useState } from 'react';
import { AtAvatar } from 'taro-ui';
import { View, Input, Picker } from '@tarojs/components';
import { chooseImage, switchTab, showToast } from '@/static/biz/common';
import { pageHome } from '@/static/biz/routes';
import boot from '@/static/biz/hoc/boot';
import MyButton from '@/components/ui/button';
import Cell from './cell';
import style from './index.module.scss';

const genderRange = ['男', '女'];

const heightRange = [''];
for (let i = 60; i < 240; i += 1) {
  heightRange.push(`${i}cm`);
}

const skew = 59;

const Userinfo = () => {
  const [gender, setGender] = useState<number>(0);
  const [height, setHeight] = useState(170);
  const [birthday, setBirthday] = useState('2008-08-08');
  const [username, setUsername] = useState('支');
  const [avatar, setAvatar] = useState('');

  const changeGender = (e) => {
    const {
      detail: { value },
    } = e;
    setGender(value);
  };

  const changeBirthday = (res) => {
    const {
      detail: { value },
    } = res;
    setBirthday(value);
  };

  const changeUserName = (res) => {
    const {
      detail: { value },
    } = res;
    setUsername(value);
  };

  const changeHeight = (res) => {
    const {
      detail: { value },
    } = res;
    setHeight(Number(value) + skew);
  };

  const changeAvatar = async () => {
    const { errMsg, tempFilePaths } = await chooseImage();
    if (errMsg.includes('fail')) return;
    setAvatar(tempFilePaths[0]);
  };

  const sure = () => {
    // check
    if (!birthday) {
      showToast('请选择生日');
      return;
    }
    if (!username || username.length < 1) {
      showToast('请输入正确的名称');
      return;
    }
    if (!height) {
      showToast('请选择身高');
      return;
    }
    switchTab(pageHome);
  };

  const inputValueSlot = () => {
    return (
      <Input
        className={style.inputUserName}
        type="text"
        value={username}
        onInput={(e) => changeUserName(e)}
      />
    );
  };

  return (
    <View className={style.main}>
      <View className={style.head} onClick={() => changeAvatar()}>
        <AtAvatar
          className={style.avatar}
          circle
          image={avatar || 'https://qnplus-avatar.yolanda.hk/default_avatar'}
        />
        <View className={style.changeHeadTip}>点击图片切换头像</View>
      </View>
      <View className={style.cellWrap}>
        <View>
          <Cell name="真实姓名" value="支" valueSlot={inputValueSlot} />
        </View>
        <Picker mode="selector" range={genderRange} onChange={changeGender}>
          <Cell name="性别" value={genderRange[gender]} />
        </Picker>
        <Picker value={birthday} mode="date" onChange={changeBirthday}>
          <Cell name="出生日期" value={birthday} />
        </Picker>
        <Picker mode="selector" range={heightRange} value={height - 59} onChange={changeHeight}>
          <Cell name="身高" value={`${height}`} />
        </Picker>
      </View>
      <View className={style.btnWrap}>
        <MyButton text="确认" click={sure} size="large" />
      </View>
    </View>
  );
};

export default boot(Userinfo);
