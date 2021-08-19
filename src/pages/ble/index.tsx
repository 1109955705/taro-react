import React, { FC, useState, useEffect } from 'react';
import { View, Button } from '@tarojs/components';
import QNBleTypings from '@/libs/qnble/types/src/typings';
import { QNMPPlugin, QNConsts } from '@/libs/qnble';
import './index.scss';

const qnble = new QNMPPlugin({
  appId: 'wx5a0ab9c88eab843e',
  autoStopDiscovery: true,
});

qnble.onReady = ({
  bleEnableState, //表示当前蓝牙是否为开启状态
}) => {
  console.log('当前蓝牙状态', bleEnableState);
  if (bleEnableState) qnble.startBleDeviceDiscovery();
  else {
    console.log('蓝牙状态为关闭');
  }
};

function noop() {}

enum BleOpStatusEnum {
  // 初始状态，未init前
  NOOP,
  // 蓝牙不可用
  BLE_DISABLED,
  // 蓝牙可用
  BLE_READY,
  // 正在扫描
  SCANNING,
  // 扫描超时
  SCAN_OVERTIME,
  // 已发现设备
  DEVICE_FOUNDED,
  // 正在连接
  CONNECTING,
  // 已连接
  CONNECTED,
  // 连接失败
  CONNECT_FAILED,
  // 断开连接
  DISCONNECTED,
  // 连接超时
  CONNECT_OVERTIME,
  // 例如：正在测量
  OPERATING,
  // 例如：测量完成
  OPERATE_FINISHED,
  // 例如：测量失败。这个状态可能一般不会用
  OPERATE_FAILED,
  // 发生了错误
  ERROR_OCCURED,
  // 扫描wifi
  SCANING_WIFI,
}

const Ble: FC = () => {
  const [bleOpStatus, setBleOpStatus] = useState(BleOpStatusEnum.NOOP);
  const [qnbleDevice, setQnbleDevice] = useState<any>();
  const [unsteadyWeight, setUnsteadyWeight] = useState<Number>(0);
  const [steadyWeight, setSteadyWeight] = useState<Number>(0);
  useEffect(() => {
    init().catch(onError);
    return () => {
      console.log('unmount', bleOpStatus);
    };
  }, []);
  const deviceEventListener: Partial<
    | QNBleTypings.QNSPMeasureEventListener
    | QNBleTypings.QNWspDualScaleMeasureEventListener
  > = {
    onGetDeviceInfo(device: any) {
      console.log('设备信息', device);
    },
    // 体脂秤测量完成
    onGetScaleData(data) {
      console.log('测量完成', data);
      setSteadyWeight(data!.measure!.weight);
    },
    onGetUnsteadyWeight(data) {
      console.log('不稳定数据', data);
      const { weight } = data;
      setUnsteadyWeight(weight);
    },
  };
  const clear = () => {
    setBleOpStatus(BleOpStatusEnum.NOOP);
    setQnbleDevice(undefined);
    setUnsteadyWeight(0);
    setSteadyWeight(0);
  };
  const bleEventListener: Partial<QNBleTypings.QNBleEventListener> = {
    async onBluetoothEnableChange({ available }) {
      console.log('onBluetoothEnableChange', available);
      if (available) {
        // const res = await wxPromise(Taro.openBluetoothAdapter)()
        // await init()
        qnble.startBleDeviceDiscovery().catch(noop);
      } else {
        setBleOpStatus(BleOpStatusEnum.NOOP);
        clear();
      }
    },
    onConnected() {
      console.log('onConnected');
    },
    onConnectOverTime() {
      console.log('onConnectOverTime');
    },
    onDisconnected() {
      console.log('onDisconnected');
    },
    onStartDiscoveryDevice() {
      console.log('onStartDiscoveryDevice');
    },
    onBleDeviceFound(bleDevice) {
      if (bleOpStatus !== BleOpStatusEnum.CONNECTING) {
        setQnbleDevice(bleDevice);
        setBleOpStatus(BleOpStatusEnum.DEVICE_FOUNDED);
        qnble.stopBleDeviceDiscovery().catch(noop);
        createBleConnection(bleDevice);
      }
    },
  };

  async function createBleConnection(bleDevice) {
    const operation = {} as Record<string, any>;
    operation.action = QNConsts.QNBleAction.MEASURE_WEIGHT;
    operation.user = {
      gender: 0,
      birthday: 955610511,
      height: 170,
      age: 22,
    };
    setBleOpStatus(BleOpStatusEnum.CONNECTING);
    console.log('createBleConnection', bleDevice);
    qnble
      .createBleConnection(bleDevice, deviceEventListener, operation)
      .catch(noop);
  }
  function onError() {}
  qnble.setBleEventListener(bleEventListener);
  qnble.onError = onError;

  const init = async () => {
    const ret = await qnble.init();
    console.log('init', ret);
    // if (ret.available) {
    //   qnble.startBleDeviceDiscovery().catch(noop);
    // }
  };

  const doScan = () => {
    console.log('doScan');
    qnble.startBleDeviceDiscovery().catch(noop);
  };
  const doStopScan = () => {
    console.log('doScan');
    qnble.stopBleDeviceDiscovery().catch(noop);
  };

  return (
    <View className="template_container">
      <Button className="btn" plain onClick={() => doScan()}>
        扫描
      </Button>
      <Button className="btn" plain onClick={() => doStopScan()}>
        停止扫描
      </Button>
      <View className="text">
        {qnbleDevice ? `扫描到的设备mac:${qnbleDevice.mac}` : '...'}
      </View>
      <View className="text">
        {unsteadyWeight ? `不稳定数据:${unsteadyWeight}` : '...'}
      </View>
      <View className="text">
        {steadyWeight ? `稳定数据:${steadyWeight}` : '...'}
      </View>
    </View>
  );
};

export default Ble;
