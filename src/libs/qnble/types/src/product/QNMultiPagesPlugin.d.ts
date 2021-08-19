import QNBle from '../QNBle';
import QNBleDevice from '../QNBleDevice';
import QNBleTypings from '../typings';
declare class QNMultiPagesPlugin {
  private readonly _qnble;
  private nativeApi;
  constructor();
  init(config: any): Promise<QNBleTypings.InitFuncReturnValue>;
  buildNativeDevice(deviceId: string): import('..').QNBleNativeDevice;
  mockReConnectDevice(
    deviceId: string,
    listener: QNBleTypings.QNBleNativeEventListener,
    operation?: Partial<QNBleTypings.QNBleOperation>
  ): Promise<void | QNBleDevice>;
  get connectedDevices(): any;
  get connectedDeviceIds(): string[];
  get bleStateAvailable(): boolean;
  get bleApi(): QNBle;
}
export default QNMultiPagesPlugin;
