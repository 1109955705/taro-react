import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';
import style from './index.module.scss';

const EmptyTabbarBlock = () => {
  const [safeHeight, setSafeHeight] = useState(48);
  useEffect(() => {
    const {
      screenHeight,
      safeArea: { bottom },
    } = Taro.getSystemInfoSync();
    const safeBottom = screenHeight - bottom + 48;
    console.log('xxxxxxx', safeBottom);
    setSafeHeight(safeBottom);
  }, []);
  return <View className={style.main} style={{ height: `${safeHeight}px` }} />;
};

export default EmptyTabbarBlock;
