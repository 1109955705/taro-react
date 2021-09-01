// eslint-disable-next-line no-shadow
export enum BleStateEnum {
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

export default {};
