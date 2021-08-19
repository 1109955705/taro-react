/**
 * 普通秤
 */
import { QNBleProtocolProfile, QNBleBaseScaleProtocol } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class NormalBleScaleBleProfle implements QNBleProtocolProfile {
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class NormalBleScaleProtocol extends QNBleBaseScaleProtocol<QNBleTypings.QNBaseScaleMeasureEventListener> {
  static bleProfle: NormalBleScaleBleProfle;
  UUID_IBT_SERVICE: string;
  UUID_IBT_READ: string;
  UUID_IBT_WRITE: string;
  UUID_IBT_SERVICES_1: string;
  UUID_IBT_READ_1: string;
  UUID_IBT_WRITE_1: string;
  hasReceived: boolean;
  lastWeightTime: number;
  isHoltk: boolean;
  get serviceId(): string;
  get characteristicReadId(): string;
  get characteristicWriteId(): string;
  prepare(): Promise<any>;
  /**
   * @override
   * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
   */
  decode(
    payload: QNBleTypings.TypedCharacteristicValueChangePayload
  ): Promise<any>;
  dispatchSteadyData(weight: number, data: number[]): Promise<any>;
}
export {};
