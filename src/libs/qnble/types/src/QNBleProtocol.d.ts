/**
 * BleProtocol类必需继承实现此类定义的成员
 */
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from './consts';
import QNBleNative from './QNBleNative';
import QNBleCommonExtends from './QNBleCommonExtends';
import QNBleNativeDevice from './QNBleNativeDevice';
import QNBleDevice from './QNBleDevice';
import QNScaleBiz from './QNScaleBiz';
import QNBleTypings from './typings';
import QNEventManager from './QNEventManager';
export interface QNBleProtocolProfile {
  /**
   * 默认的连接动作
   */
  defaultAction: QNBleAction;
  /**
   * 设备类型
   */
  type: QNBleDeviceType;
  /**
   * 数据传输类型
   */
  transferType: QNBleTransferType;
  /**
   * 判断是否为目标设备类型
   */
  isTargetDevice: (nativeDevice: QNBleNativeDevice) => boolean;
  /**
   * 构建目标设备类型
   */
  buildTargetDevice: (
    nativeDevice: QNBleNativeDevice
  ) => Partial<QNBleDevice> | null;
}
export default class QNBleProtocol<
  T extends Partial<QNBleTypings.QNDeviceEventListener>
> extends QNBleCommonExtends {
  /**
   * 对该设备的定义
   */
  static bleProfile: QNBleProtocolProfile;
  bleServer: QNBleTypings.QNBleServer;
  UUID_IBT_SERVICE: string;
  UUID_IBT_READ: string;
  UUID_IBT_WRITE: string;
  bleNative: QNBleNative;
  bleDevice: QNBleDevice;
  eventManager: QNEventManager;
  listener: T;
  protected currentAdvertis: string;
  protected actionFlows: QNBleActionFlow<T>[];
  protected currentFlow: QNBleActionFlow<T> | undefined;
  constructor(params: QNBleTypings.QNBleProtocolConstructorParams);
  /**
   * 设置原生蓝牙逻辑类
   * @param {QNBleNative} native 原生蓝牙逻辑类
   * @returns {void}
   */
  setBleNative(native: QNBleNative): void;
  /**
   * 设置设备逻辑类
   * @param {QNBleDevice} bleDevice
   * @returns {void}
   */
  setBleDevice(bleDevice: QNBleDevice): void;
  /**
   * 计算体重
   * @param {*} height 高八位
   * @param {*} lower 低八位
   * @returns
   */
  decodeWeight(height: number, lower: number): number;
  /**
   * @param {Partial<QNBleTypings.QNDeviceEventListener>} listener
   */
  setListener(listener: T): void;
  get serviceId(): string;
  get characteristicReadId(): string;
  get characteristicWriteId(): string;
  /**
   * 初始化蓝牙特征值等
   */
  prepare(): Promise<any>;
  /**
   * 对外暴露的方法
   * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
   */
  onGetData(
    payload: QNBleTypings.TypedCharacteristicValueChangePayload
  ): Promise<any>;
  /**
   * 解析命令
   * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
   */
  decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
  /**
   * 往设备写入数据
   * @param {Object} payload
   * @param {number[]} payload.cmdData
   * @param {string} [payload.serviceId]
   * @param {string} [payload.characteristicId] 写数据的特征值
   * @param {boolean} [payload.needSum=true] 是否需要自动计算并添加校验位
   */
  writeData({
    cmdData,
    serviceId,
    characteristicId,
    needSum,
  }: {
    cmdData: number[];
    serviceId?: string;
    characteristicId?: string;
    needSum?: boolean;
  }): Promise<any>;
  writeCmd({
    header,
    cmd,
    serviceId,
    characteristicId,
  }: {
    header: number;
    cmd: Array<number>;
    serviceId?: string;
    characteristicId?: string;
    needSum?: boolean;
  }): Promise<any>;
  /**
   * 连接断开后，需要调用该方法，清除一些资源
   */
  close(): Promise<any>;
  buildAdvertisingData(data: number[]): number[];
  /**
   * 发送广播数据
   * @param {Uint8Array} data
   */
  doAdvertising(data: number[]): Promise<any>;
}
/**
 * 处理细分业务流的协议类
 */
export declare abstract class QNBleActionFlow<
  T extends Partial<QNBleTypings.QNDeviceEventListener>
> {
  /**
   * 可以处理的action
   */
  abstract acceptActions: Array<QNBleAction>;
  action: QNBleAction;
  protocol: QNBleProtocol<T>;
  bleNative: QNBleNative;
  bleDevice: QNBleDevice;
  listener: T;
  operation: QNBleTypings.QNBleOperation;
  constructor(protocol: QNBleProtocol<T>);
  accept(action: QNBleAction): boolean;
  /**
   * 写入数据
   * @param param0
   */
  writeData({
    cmdData,
    serviceId,
    characteristicId,
    needSum,
  }: {
    cmdData: number[];
    serviceId?: string;
    characteristicId?: string;
    needSum?: boolean;
  }): Promise<any>;
  writeCmd(
    serviceUUID: string,
    writeUUID: string,
    header: number,
    byteList: Array<number>
  ): Promise<any>;
  log(...objs: any): void;
  /**
   * 计算体重
   * @param {*} height 高八位
   * @param {*} lower 低八位
   * @returns
   */
  decodeWeight(height: number, lower: number): number;
  abstract execute(): Promise<any>;
  abstract decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
}
export declare class QNBleBaseScaleProtocol<
  T extends QNBleTypings.QNBaseScaleMeasureEventListener
> extends QNBleProtocol<T> {
  scaleBizImp: QNScaleBiz;
  /**
   * 集成业务工具类
   */
  instanceScaleBiz(): void;
}
