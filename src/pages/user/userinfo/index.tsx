import React from 'react';
import { View, Input, Picker } from '@tarojs/components';
import { AtAvatar } from 'taro-ui';
import boot from '@/static/biz/hoc/boot';
import MyButton from '@/components/ui/button';
import Cell from './cell';
import style from './index.module.scss';
import { useState } from 'react';

const genderArray = ['男', '女'];

const Userinfo = () => {
  const [gender, setGender] = useState('男');
  const chageUserName = () => {
    console.log('xxxxx');
  };
  const changeGender = (e) => {
    const {
      detail: { value },
    } = e;
    setGender(genderArray[value]);
  };

  const changeBirthday = () => {};

  const changeHeight = () => {};

  const sure = () => {
    console.log('xxxxxx');
  };

  const valueSlot = () => {
    return <Input className={style.inputUserName} type="text" value="支" />;
  };
  return (
    <View className={style.main}>
      <View className={style.head}>
        <AtAvatar
          className={style.avatar}
          circle
          image="https://qnplus-avatar.yolanda.hk/default_avatar"
        />
        <View className={style.changeHeadTip}>点击图片切换头像</View>
      </View>
      <Picker mode="selector" range={genderArray} onChange={changeGender}>
        <View className="picker">性别</View>
      </Picker>
      <View className={style.cellWrap}>
        <View onClick={() => chageUserName()}>
          <Cell name="真实姓名" value="支" valueSlot={valueSlot} />
        </View>
        <View onClick={() => changeGender()}>
          <Cell name="性别" value={gender} />
        </View>
        <View onClick={() => changeBirthday()}>
          <Cell name="出生日期" value="" />
        </View>
        <View onClick={() => changeHeight()}>
          <Cell name="身高" value="" />
        </View>
      </View>
      <View className={style.btnWrap}>
        <MyButton text="确认" click={sure} size="large" />
      </View>
    </View>
  );
};

export default boot(Userinfo);
