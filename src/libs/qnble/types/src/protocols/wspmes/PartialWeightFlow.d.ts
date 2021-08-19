import { QNBleAction } from '../../consts';
import QNBleProtocol, { QNBleActionFlow } from '../../QNBleProtocol';
import { DeviceUUID } from './WspDualScaleMesProfle';
import QNBleTypings from '../../typings';
export default class PartialWeightFlow extends QNBleActionFlow<QNBleTypings.QNMesEventLisenter> {
  constructor(
    protocol: QNBleProtocol<QNBleTypings.QNMesEventLisenter>,
    uuids: DeviceUUID
  );
  uuids: DeviceUUID;
  acceptActions: QNBleAction[];
  execute(): Promise<any>;
  decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
  /**
   * 偏载锁定重量 0x32
   */
  getPartialWeightData(byteList: number[]): void;
  setPartialWeightDataResult(state: number): void;
  /**
   * 收到偏载标示保存结果 0x33
   */
  getPartialWeightDataResult(byteList: number[]): void;
}
