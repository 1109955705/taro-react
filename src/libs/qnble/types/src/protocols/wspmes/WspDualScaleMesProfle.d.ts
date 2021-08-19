import { QNBleProtocolProfile } from '../../QNBleProtocol';
import QNBleNativeDevice from '../../QNBleNativeDevice';
import QNBleDevice from '../../QNBleDevice';
import { QNBleAction, QNBleDeviceType, QNBleTransferType } from '../../consts';
export interface DeviceUUID {
  wifi: {
    serviceUUID: string;
    writeUUID: string;
  };
  produce: {
    serviceUUID: string;
    writeUUID: string;
  };
}
export default class WspDualScaleMesProfle implements QNBleProtocolProfile {
  static UUID_NOTIFY: string;
  static UUID_WRITE: string;
  static EIGHT_UUID_NOTIFY: string;
  static EIGHT_UUID_WRITE: string;
  static EIGHT_UUID_WIFI_NOTIFY: string;
  static EIGHT_UUID_WIFI_WRITE: string;
  static HEIGHTWEIGHT_UUID_NOTIFY: string;
  static HEIGHTWEIGHT_UUID_WRITE: string;
  static HEIGHTWEIGHT_SINGLE_BLE_UUID_NOTIFY: string;
  static HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE: string;
  static UUID_TIME_SERVICES: string;
  static UUID_DEVICE_SERVICES: string;
  static EIGHT_UUID_DEVICE_SERVICES: string;
  static HEIGHTWEIGHT_UUID_DEVICE_SERVICES: string;
  static HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES: string;
  static UUID_SN: string;
  defaultAction: QNBleAction;
  type: QNBleDeviceType;
  transferType: QNBleTransferType;
  isProduceDevice(nativeDevice: QNBleNativeDevice): boolean;
  isProductDevice(nativeDevice: QNBleNativeDevice): boolean;
  isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
  buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
  buildProduceTargetDevice(
    nativeDevice: QNBleNativeDevice
  ): Partial<QNBleDevice>;
  /**
   * 成品设备
   */
  buildProductTargetDevice(
    nativeDevice: QNBleNativeDevice
  ): Partial<QNBleDevice>;
}
