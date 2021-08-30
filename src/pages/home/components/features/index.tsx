import React from 'react';
import { View } from '@tarojs/components';
import style from './index.module.scss';

const Features = ({ showDeepReport }) => {
  return (
    <View className={style.main}>
      {showDeepReport ? <View>深度报告</View> : ''}
      <View>数据对比</View>
      <View>分享数据</View>
    </View>
  );
};

export default Features;
