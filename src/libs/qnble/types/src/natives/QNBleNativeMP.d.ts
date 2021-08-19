/**
 * 微信小程序本地类
 */
import QNBleNative, { QNBleNativeCommonExtends } from '../QNBleNative';
import QNBleDevice from '../QNBleDevice';
import QNBleTypings from '../typings';
declare type QNBleNativeMPBleState = {
  available: boolean;
  discovering: boolean;
};
export default class QNBleNativeMP
  extends QNBleNativeCommonExtends
  implements QNBleNative
{
  name: string;
  useDefaultHttpRequest: boolean;
  bleState: QNBleNativeMPBleState;
  mpwx: any;
  inited: boolean;
  constructor(mpwx: any);
  /**
   * 初始化
   * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
   */
  init(): Promise<QNBleTypings.InitFuncReturnValue>;
  release(): Promise<void>;
  getBluetoothAdapterState(): Promise<QNBleTypings.BleState>;
  openBluetoothAdapter(): Promise<unknown>;
  closeBluetoothAdapter(): Promise<unknown>;
  /**
   * 判断当前蓝牙适配器是否可用
   */
  checkBleAvailable(): Promise<any>;
  /**
   * 开始扫描
   * @returns {Promise<any>}
   */
  startScan(): Promise<any>;
  /**
   * 停止扫描
   * @returns {Promise<any>}
   */
  stopScan(): Promise<any>;
  /**
   * 创建蓝牙连接
   * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
   * @param {number} connectOverTime - 连接超时毫秒数
   */
  createBleConnection(
    bleDevice: QNBleDevice,
    connectOverTime?: number
  ): Promise<any>;
  /**
   * 关闭蓝牙连接
   * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
   * @param {Promise<void>}
   */
  closeBleConnection(bleDevice: QNBleDevice): Promise<any>;
  /**
   * 获取设备下的所有服务
   * @param {string} deviceId
   * @returns {Promise<any[]>}
   */
  findService(deviceId: string): Promise<string[]>;
  /**
   * 获取指定服务器的特征值
   * @param {string} deviceId
   * @param {string} serviceId
   * @returns {Promise<any>}
   */
  findBleDeviceCharacteristics(
    deviceId: string,
    serviceId: string
  ): Promise<any>;
  /**
   * 使能特征值
   * @param {string} deviceId
   * @param {string} serviceId
   * @param {string} characteristicId
   * @returns {Promise<any>}
   */
  enableNotify(
    deviceId: string,
    serviceId: string,
    characteristicId: string
  ): Promise<any>;
  /**
   * 读取特征值
   * @param {string} deviceId
   * @param {string} serviceId
   * @param {string} characteristicId
   * @returns {Promise<any>}
   */
  readBleCharacteristicValue(
    deviceId: string,
    serviceId: string,
    characteristicId: string
  ): Promise<any>;
  /**
   * 写入特征值数据
   * @param {string} deviceId
   * @param {string} serviceId
   * @param {string} characteristicId
   * @param {number[]} cmdData
   * @returns {Promise<any>}
   */
  writeData(
    deviceId: string,
    serviceId: string,
    characteristicId: string,
    cmdData: number[]
  ): Promise<any>;
  private onBluetoothAdapterStateChange;
  /**
   * 蓝牙设备的回调
   * @param {WxOnBluetoothDeviceFoundRes} payload
   * @returns {void}
   */
  private onDeviceFound;
  private onDeviceConnectStateChange;
  private onConnectOverTime;
  private onDeviceValueChange;
  /**
   * 创建蓝牙服务端，用作发射蓝牙广播
   */
  createBleServer(): Promise<QNBleTypings.QNBleServer>;
  /**
   * 发送广播，默认只在service data进行广播
   * @param {QNBleTypings.QNBleServer} server
   * @param {number[]} data
   */
  doAdvertising(server: QNBleTypings.QNBleServer, data: number[]): Promise<any>;
  /**
   * 停止广播
   * @param {QNBleTypings.QNBleServer} server
   */
  stopAdvertising(server: QNBleTypings.QNBleServer): Promise<any>;
  /**
   * 关闭蓝牙服务
   * @param {QNBleTypings.QNBleServer)} server
   */
  closeServer(server: QNBleTypings.QNBleServer): Promise<any>;
  sendHttpRequest(request: {
    url: string;
    data: any;
    method?: string;
    dataType?: string;
  }): Promise<any>;
}
export {};
