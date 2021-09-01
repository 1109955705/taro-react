import { useState, useEffect } from 'react';
import { QNMPPlugin, QNConsts } from '@/libs/qnble';

// eslint-disable-next-line no-shadow
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

console.log('==================useBle=================');

// 日志记录
const log = (...params) => {
  // console.log('蓝牙库日志', ...params);
};

// 初始化需要的参数，没有真正初始化
const qnble = new QNMPPlugin({
  appId: 'wxb0989a4bbce13d87',
  logger: { log },
});

// init之后会的回调
qnble.onReady = ({
  bleEnableState, // 表示当前蓝牙是否为开启状态
}) => {
  console.log('当前蓝牙状态', bleEnableState);
  if (bleEnableState) {
    // 开始扫描
    qnble.startBleDeviceDiscovery();
  } else {
    console.log('蓝牙状态为关闭');
  }
};

export default () => {
  const [bleOpStatus, setBleOpStatus] = useState(BleOpStatusEnum.NOOP);
  const [unSteadyWeight, setUnSteadyWeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const deviceEventListener = {
    onGetDeviceInfo(device) {
      console.log('设备信息', device);
    },
    // 体脂秤测量完成
    onGetScaleData(data) {
      console.log('测量完成', data);
    },
    onGetUnsteadyWeight(data) {
      console.log('不稳定数据', data);
    },
  };

  const createBleConnection = (bleDevice) => {
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
    qnble.createBleConnection(bleDevice, deviceEventListener, operation);
  };

  const bleEventListener = {
    onBluetoothEnableChange({ available }) {
      console.log('onBluetoothEnableChange', available);
      if (available) {
        qnble.startBleDeviceDiscovery();
      } else {
        setBleOpStatus(BleOpStatusEnum.NOOP);
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
        createBleConnection(bleDevice);
      }
    },
  };

  useEffect(() => {
    // 初始化
    qnble.init();
    qnble.setBleEventListener(bleEventListener);
    return () => {
      console.log('unmount');
    };
  }, []);

  return {
    qnble,
    bleOpStatus,
    unSteadyWeight,
    weight,
    height,
  };
};
