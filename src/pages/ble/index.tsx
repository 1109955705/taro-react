import React, { FC, useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import useBle from '@/hooks/useBle';
import './index.scss';

const Ble = () => {
  const {
    state: {
      bleState,
      data: { weight, height },
    },
    func: { doScan, doStopScan },
  } = useBle();

  return (
    <View className="template_container">
      <Button className="btn" plain onClick={() => doScan()}>
        扫描
      </Button>
      <Button className="btn" plain onClick={() => doStopScan()}>
        停止扫描
      </Button>
      <View>weight:{bleState}</View>
      <View>weight:{weight}</View>
      <View>height:{height}</View>
      <View className="text">{weight ? `不稳定数据:${weight}` : '...'}</View>
      <View className="text">{height ? `稳定数据:${height}` : '...'}</View>
    </View>
  );
};

export default Ble;
