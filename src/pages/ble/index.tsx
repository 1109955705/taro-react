import React, { FC, useState, useEffect } from 'react'
import { View, Button } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import QNBleTypings from '@/libs/qnble/types/src/typings';
import {
  QNBleDevice, QNMPPlugin, QNConsts, QNBleProtocols, QNBleError,
} from '@/libs/qnble';
import './index.scss'
const blePlugin = new QNMPPlugin();
const qnble = blePlugin.bleApi;
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
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  const [bleOpStatus, setBleOpStatus] = useState(BleOpStatusEnum.NOOP)
  const [qnbleDevice, setQnbleDevice] = useState<any>()

  const deviceEventListener: Partial<QNBleTypings.QNSPMeasureEventListener
  | QNBleTypings.QNWspDualScaleMeasureEventListener> = {
    onGetDeviceInfo(device: any) {
      console.log('设备信息', device)
    },
    // 体脂秤测量完成
    onGetScaleData(data) {
      console.log('测量完成', data)
    },
    onGetUnsteadyWeight(data) {
      console.log('不稳定数据', data)
    }
  };

  const bleEventListener: Partial<QNBleTypings.QNBleEventListener> = {
    onBluetoothEnableChange({ available }) {
      console.log('onBluetoothEnableChange', available)
      if (available) {
        qnble.startBleDeviceDiscovery().catch(noop);
      }
    },
    onConnected() {
      console.log('onConnected')
    },
    onConnectOverTime() {
      console.log('onConnectOverTime')
    },
    onDisconnected() {
      console.log('onDisconnected')
    },
    onStartDiscoveryDevice() {
      console.log('onStartDiscoveryDevice')
    },
    onBleDeviceFound(bleDevice) {
      console.log('onBleDeviceFound', bleDevice)
      if (bleOpStatus !== BleOpStatusEnum.CONNECTING) {
        setQnbleDevice(bleDevice)
        setBleOpStatus(BleOpStatusEnum.DEVICE_FOUNDED)

        qnble.stopBleDeviceDiscovery().catch(noop);
        createBleConnection()
      }
    },
  };

  async function createBleConnection() {
    const operation = {} as Record<string, any>;
    operation.action = QNConsts.QNBleAction.MEASURE_WEIGHT;
    operation.user = {
      gender: 0,
      birthday: 955610511,
      height: 170,
      age: 22,
    };
    setBleOpStatus(BleOpStatusEnum.CONNECTING)
    console.log('createBleConnection', qnbleDevice, operation)
    qnble.createBleConnection(qnbleDevice, deviceEventListener, operation)
      .catch(noop);
  }
  function onError(e: QNBleError) {
    console.log('错误监听', e)
  }
  qnble.setBleEventListener(bleEventListener);
  qnble.onError = onError;

  const init = async () => {
    const ret = await blePlugin.init({});
    console.log('init', ret)
    if (ret.available) {
      qnble.startBleDeviceDiscovery().catch(noop);
    }
  }

  const doScan = () => {
    console.log('doScan')
    qnble.startBleDeviceDiscovery().catch(noop);
  }
  init().catch(onError);
  return (
    <View className='template_container'>
      {/* <Button
        className="btn"
        plain
        onClick={()=>doScan}
      >扫描</Button> */}
    </View>
  )
}

export default Ble
