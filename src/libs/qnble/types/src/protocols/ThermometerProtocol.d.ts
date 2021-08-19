/**
 * 体温计
 * TODO 后续需要补充历史数据协议，目前终端没有实现历史数据有时间戳的功能
 * @author huyk<huyongkang@yolanda.hk>
 */
import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import QNBleTypings from '../typings';
declare class ThermometerProtocolProfile implements QNBleProtocolProfile {
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class ThermometerProtocol extends QNBleProtocol<QNBleTypings.QNThermoMeasureEventListener> {
  static bleProfile: ThermometerProtocolProfile;
  UUID_IBT_SERVICE: string;
  UUID_IBT_READ: string;
  UUID_IBT_WRITE: string;
  UUID_COMPAIRE_READ: string;
  UUID_COMPAIRE_WRITE: string;
  blePaireStatus: number;
  historyCount: number;
  lastReceivedHistoryData: {};
  isCancelHistoryData: boolean;
  currentRecivedHistoryDataNo: number;
  wifiInfoCache: {
    rssi: number;
    ssid: string[];
  };
  lastReceivedWifiIno: {};
  lastReceivedWifiSsidPackNo: number;
  currentSetWifiCmdNo: number;
  ssidCmdData: number[][];
  pwdCmdData: number[][];
  dataServerUrlData: number[][];
  otaServerUrlData: number[][];
  encryptKeyCmdData: number[];
  lastCmd: number;
  get action(): QNBleAction;
  /**
   * @override
   */
  prepare(): Promise<any>;
  /**
   * @override
   * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
   */
  decode(
    payload: QNBleTypings.TypedCharacteristicValueChangePayload
  ): Promise<any>;
  getDeviceInfo(data: number[]): Promise<void>;
  /**
   * 同步当前数据
   */
  onRecieveCurrentData(data: number[]): Promise<void>;
  /**
   * 准备蓝牙配对
   */
  prepareBlePaire(): Promise<void>;
}
export {};
