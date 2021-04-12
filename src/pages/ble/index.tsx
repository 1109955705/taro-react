import React, { FC, useState, useEffect } from 'react'
import { View, WebView } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import {
  QNBleDevice, QNMPPlugin, QNConsts, QNBleProtocols,
} from '@/libs/qnble';
import './index.scss'
const Ble: FC = () => {
  const [ userId ] = useState<number>(111)
  const dispatch = useDispatch()
  const blePlugin = new QNMPPlugin();
  const qnble = blePlugin.bleApi;
  useEffect(() => {
    const bleEventListener = {
      onBluetoothEnableChange({ available }) {
        console.log('xxx', available)
      },
      onConnected() {
        console.log('连接成功')
      },
      onConnectOverTime() {
        console.log('连接超时')
      },
      onDisconnected() {
        console.log('取消连接')
      },
      onStartDiscoveryDevice() {
        console.log('开始扫描设备')
      },
      onBleDeviceFound(bleDevice) {
        console.log('发现了目标设备', bleDevice)
      },
    };
    const onError = (e) => {
      console.log('onError', e)
    }
    qnble.setBleEventListener(bleEventListener);
    qnble.onError = onError;
    init()

  }, [])
  console.log('xxxxxx')
  const init = async () => {
    const ret = await blePlugin.init();
  }
  return (
    <View className='template_container'>
      ble
    </View>
  )
}

export default Ble
