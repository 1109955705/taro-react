import React, { FC, useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import useBle from '@/hooks/useBle';
import './index.scss';

const Ble = () => {
  const { qnble, bleOpStatus, unSteadyWeight, weight, height } = useBle();
  const doScan = () => {
    console.log('doScan');
    qnble.startBleDeviceDiscovery();
  };

  return (
    <View className="template_container">
      <Button className="btn" plain onClick={() => doScan()}>
        扫描
      </Button>

      <View className="text">{unSteadyWeight ? `不稳定数据:${unSteadyWeight}` : '...'}</View>
      <View className="text">{weight ? `稳定数据:${weight}` : '...'}</View>
    </View>
  );
};

export default Ble;
