/**
 * 广播厨房秤
 */
import QNBleProtocol, { QNBleProtocolProfile } from '../../QNBleProtocol';
import QNBleNativeDevice from '../../QNBleNativeDevice';
import QNBleDevice from '../../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../../consts';
import QNBleTypings from '../../typings';
declare class BroadcastKitchenScaleProtocolProfile
  implements QNBleProtocolProfile
{
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class BroadcastKitchenScaleProtocol extends QNBleProtocol<QNBleTypings.QNKitchenEventListener> {
  static bleProfile: BroadcastKitchenScaleProtocolProfile;
  measureCount: number;
  prepare(): Promise<any>;
  /**
   * @override
   * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
   */
  decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
}
export {};
