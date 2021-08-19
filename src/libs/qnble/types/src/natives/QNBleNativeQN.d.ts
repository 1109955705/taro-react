import QNBleNative, { QNBleNativeCommonExtends } from '../QNBleNative';
import QNBleDevice from '../QNBleDevice';
import QNBleTypings from '../typings';
declare type QNBleNativeMPBleState = {
  available: boolean;
  discovering: boolean;
};
export default class QNBleNativeQN
  extends QNBleNativeCommonExtends
  implements QNBleNative
{
  name: string;
  jsbridge: any;
  characteristicResovled: Map<string, (data: any) => void>;
  deviceServiceCached: Map<string, [any]>;
  bleState: QNBleNativeMPBleState;
  /**
   * 调用js原生方法
   * @param method 方法名
   * @param data 方法参数
   */
  private callMethod;
  /**
   * 注册js监听器
   * @param method
   * @param callback
   */
  private readonly registerListener;
  constructor(
    jsbridge: any,
    { isAndroid }?: Partial<QNBleTypings.QNBleCommonConstructorParams>
  );
  getBluetoothAdapterState(): Promise<QNBleTypings.BleState>;
  openBluetoothAdapter(): Promise<any>;
  closeBluetoothAdapter(): Promise<any>;
  findBleDeviceCharacteristics(
    deviceId: string,
    serviceId: string
  ): Promise<any>;
  sendHttpRequest(request: {
    url: string;
    data: any;
    method?: string;
    dataType?: string;
  }): Promise<any>;
  createBleServer(): Promise<QNBleTypings.QNBleServer>;
  doAdvertising(server: QNBleTypings.QNBleServer, data: number[]): Promise<any>;
  stopAdvertising(server: QNBleTypings.QNBleServer): Promise<any>;
  closeServer(server: QNBleTypings.QNBleServer): Promise<any>;
  /**
   * 初始化并返回蓝牙是否正常
   */
  init(): Promise<QNBleTypings.InitFuncReturnValue>;
  /**
   * 判断当前蓝牙适配器是否可用
   */
  checkBleAvailable(): Promise<any>;
  startScan(): Promise<any>;
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
  findService(deviceId: string): Promise<any[]>;
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
  onBluetoothAdapterStateChange(newBleState: QNBleNativeMPBleState): void;
  /**
   * 连接发现所有服务后
   * @param data
   */
  onBLEDeviceCharacteristics(data: any): void;
  /**
   * 蓝牙设备的回调
   * @param {WxOnBluetoothDeviceFoundRes} payload
   * @returns {void}
   */
  private onDeviceFound;
  private onDeviceConnectStateChange;
  onDeviceValueChange(device: any): void;
  supportAdvertising(): boolean;
}
export {};
