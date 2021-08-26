import React, { FC } from 'react';
import { View } from '@tarojs/components';
import style from './index.module.scss';

interface FeaturesTypes {
  showDeepReport: boolean;
}
const Features: FC<FeaturesTypes> = ({ showDeepReport }) => {
  return (
    <View className={style.main}>
      {showDeepReport ? <View>深度报告</View> : ''}
      <View>数据对比</View>
      <View>分享数据</View>
    </View>
  );
};

Features.defaultProps = {
  showDeepReport: false,
};

export default Features;
