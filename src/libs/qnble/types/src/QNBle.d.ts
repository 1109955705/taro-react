import QNBleNative from './QNBleNative';
import QNBleProtocol from './QNBleProtocol';
import QNBleError from './QNBleError';
import QNEventSystem from './QNEventSystem';
import QNBleDevice from './QNBleDevice';
import QNBleNativeDevice from './QNBleNativeDevice';
import QNProtocolManager from './QNProtocolManager';
import QNBleTypings from './typings';
export default class QNBle extends QNEventSystem<QNBle> {
  version: string;
  bleScannerState: boolean;
  bleEnableState: boolean;
  initReturnValue: QNBleTypings.InitFuncReturnValue;
  protocolManager: QNProtocolManager<Partial<QNBleTypings.QNDeviceEventListener>>;
  bleServer: unknown;
  bleNative: QNBleNative;
  config: QNBleTypings.QNBleConfig;
  sdkConfig: QNBleTypings.QNBleTypedSdkConfig;
  operation?: QNBleTypings.QNBleOperation;
  protocolInterceptor: (params: {
    bleNative: QNBleNative;
    ctx: QNBle;
    protocolImp: QNBleProtocol<any>;
  }) => Promise<QNBleProtocol<any> | null>;
  private bleNativeListener;
  private bleEventListener;
  private static getStaticConfig;
  private static getStaticOperation;
  /**
   * 获取默认协议构造函数
   * @public
   */
  static getProtocols(): typeof QNBleProtocol[];
  constructor(params?: Partial<Omit<QNBleTypings.QNBleCommonConstructorParams, 'bleDevice'>>);
  log(...params: any[]): void;
  /**
   *
   */
  setBleEventListener(listener: Partial<QNBleTypings.QNBleEventListener>): void;
  /**
   * 初始化操作
   * @param {QNBleNative} bleNative 原生蓝牙逻辑类实例
   * @param {QNBleConfig} [config={}] 其他配置
   * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
   */
  init(
    bleNative?: QNBleNative,
    config?: Partial<QNBleTypings.QNBleConfig>
  ): Promise<QNBleTypings.InitFuncReturnValue>;
  /**
   * 释放蓝牙相关资源，调用该方法后，再使用蓝牙时，需要重新调用init
   */
  releaseBleSource(): Promise<any>;
  _onError(error: QNBleError): void;
  /**
   * 可重写此方法来接收错误
   * @param {QNBleError | Error} err
   */
  onError(err: QNBleError | Error): void;
  /**
   * 初始化成功后调用此方法
   */
  _onReady(payload: QNBleTypings.InitFuncReturnValue): void;
  /**
   * 可重写此方法来接收ready事件
   */
  onReady(payload: QNBleTypings.InitFuncReturnValue): void;
  /**
   * 判断蓝牙连接状态
   * @returns {Promise<boolean>}
   */
  checkBleStatus(): Promise<boolean>;
  /**
   * 设置config
   * @param {QNBleConfig} config
   * @returns {void}
   */
  setConfig(config?: Partial<QNBleTypings.QNBleConfig>): void;
  /**
   * 设置原生蓝牙逻辑类
   * @param {QNBleNative} native 原生蓝牙逻辑类
   * @returns {void}
   */
  setBleNative(native: QNBleNative): void;
  /**
   * 设置操作类
   * @param {QNBleOperation} operation
   * @returns {void}
   */
  setOperation(operation?: Partial<QNBleTypings.QNBleOperation>): void;
  /**
   * 获取蓝牙适配器状态
   */
  getBluetoothAdapterState(): Promise<QNBleTypings.BleState>;
  /**
   * 开始扫描蓝牙设备，只返回轻牛的设备。遇到错误或蓝牙关闭则自动停止。
   * @returns {Promise<void>}
   */
  startBleDeviceDiscovery(params?: any): Promise<void>;
  /**
   * 停止扫描
   * @param {boolean} [force = false] - 是否强制停止
   */
  stopBleDeviceDiscovery(): Promise<any>;
  /**
   * 创建蓝牙连接
   * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
   * @param {Partial<QNBleTypings.QNBleOperation>} [operation] - 操作参数
   * @returns {Promise<any>}
   */
  createBleConnection<T>(
    bleDevice: QNBleDevice,
    listener: T,
    operation?: Partial<QNBleTypings.QNBleOperation>
  ): Promise<QNBleProtocol<T> | null>;
  prepareProtocol<T extends Partial<QNBleTypings.QNDeviceEventListener>>(
    bleDevice: QNBleDevice,
    operation: Partial<QNBleTypings.QNBleOperation>,
    listener: T
  ): QNBleProtocol<Partial<QNBleTypings.QNDeviceEventListener>>;
  /**
   * 断开蓝牙连接
   * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
   * @returns {Promise<any>}
   */
  closeBleConnection(bleDevice: QNBleDevice): Promise<any>;
  /**
   * 停止蓝牙活动，如果正在蓝牙扫描，则停止蓝牙扫描。如果正在进行蓝牙连接，则断开连接
   * @returns {Promise<any>}
   */
  stop(): Promise<any>;
  private onBleEnableChange;
  private onStartScan;
  private onStopScan;
  /**
   * 扫描到设备
   */
  private onDeviceFound;
  /**
   * 蓝牙连接成功的回调
   * @param {QNBleDevice} bleDevice
   */
  private onConnected;
  /**
   * 蓝牙连接断开的回调
   * @param {QNBleDevice} bleDevice
   */
  onDisconnected(bleDevice: QNBleDevice): void;
  /**
   * 秤的特征值变化监听回调
   * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
   */
  onCharacteristicValueChange(payload: QNBleTypings.TypedCharacteristicValueChangePayload): void;
  /**
   * 获取设备使用的协议
   * @param {QNBleNativeDevice} nativeDevice
   * @returns {typeof QNBleBaseScaleProtocol}
   */
  getWhatProtocolToApply(nativeDevice: QNBleNativeDevice): typeof QNBleProtocol;
  sendHttpRequest(request: {
    url: string;
    data: unknown;
    method?: string;
    dataType?: string;
  }): Promise<unknown>;
  /**
   * 获取服务器配置
   */
  fetchSdkConfig(): Promise<any>;
  /**
   * 调用设备所使用协议的实例方法
   * @param {string} deviceId
   * @param {string} fn 协议实例的方法名
   * @param {any[]} args 方法所需要的参数。实例方法书写约定最后一个参数应该是一个回调函数
   * @returns 返回协议调用的值
   */
  callProtocolMethod(deviceId: string, fn: string, args?: any[]): any;
  /**
   * 异步调用设备所使用协议的实例方法
   * @param {string} deviceId
   * @param {string} fn 协议实例的方法名
   * @param {any[]} args 方法所需要的参数。实例方法书写约定最后一个参数应该是一个回调函数
   * @returns {Promise<any>}
   */
  callProtocolMethodAsync(deviceId: string, fn: string, args: any[]): Promise<any>;
  /**
   * 卸载协议
   * @param {string} deviceId
   */
  unmountProtocol(deviceId: string): boolean;
}
