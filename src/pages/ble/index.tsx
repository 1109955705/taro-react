import React, { useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import { useBle } from '@/hooks';
import { BleStateEnum } from '@/static/biz/typings';
import style from './index.module.scss';

const Ble = () => {
  const {
    data: {
      bleState,
      data: { weight, height },
    },
    func: { doScan, doStopScan },
  } = useBle();

  const reactiveBleState = () => {
    switch (bleState) {
      case BleStateEnum.NOOP:
        return <View className={style.text}>蓝牙未初始化</View>;
      case BleStateEnum.BLE_DISABLED:
        return <View className={style.text}>蓝牙不可用</View>;
      case BleStateEnum.ERROR_OCCURED:
        return <View className={style.text}>位置错误</View>;
      case BleStateEnum.CONNECTING:
        return <View className={style.text}>连接中</View>;
      case BleStateEnum.OPERATING:
        return <View className={style.text}>测量中: {weight}</View>;
      case BleStateEnum.OPERATE_FINISHED:
        return <View className={style.text}>测量完成: {weight}</View>;
      default:
        return <View className={style.text}>未知蓝牙状态</View>;
    }
  };

  return (
    <View className="template_container">
      <Button className="btn" plain onClick={() => doScan()}>
        扫描
      </Button>
      <Button className="btn" plain onClick={() => doStopScan()}>
        停止扫描
      </Button>
      <View>bleState:{bleState}</View>
      <View>weight:{weight}</View>
      <View>height:{height}</View>
      {reactiveBleState()}
    </View>
  );
};

export default Ble;
