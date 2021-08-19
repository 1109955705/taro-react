/**
 * 杰里蓝牙方案厨房秤通信协议
 * @author mixin<mixin@yolanda.hk>
 */
import QNBleProtocol, { QNBleProtocolProfile } from '../../QNBleProtocol';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../../consts';
import QNBleNativeDevice from '../../QNBleNativeDevice';
import QNBleDevice from '../../QNBleDevice';
import QNBleTypings from '../../typings';
declare class BleKitchenScaleProtocolProfile implements QNBleProtocolProfile {
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class BleKitchenScaleProtocol extends QNBleProtocol<QNBleTypings.QNKitchenEventListener> {
  static bleProfile: BleKitchenScaleProtocolProfile;
  UUID_IBT_SERVICE: string;
  UUID_IBT_READ: string;
  UUID_IBT_WRITE: string;
  prepare(): Promise<void>;
  /**
   * @override
   * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
   */
  decode(
    payload: QNBleTypings.TypedCharacteristicValueChangePayload
  ): Promise<any>;
  onGetScaleData(data: number[]): Promise<void>;
  /**
   * 这个方法由外部主动调用
   * 可使用 qnble.callProtocolMethodAsync(deviceId, 'doSetControl', ...args)
   */
  doSetControl(payload: { control: number }): Promise<any>;
}
export {};
