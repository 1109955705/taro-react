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
  moduleTestWeightFlag: boolean;
  moduleTestHeightFlag: boolean;
  moduleTestImpFlag: boolean;
  modelIdResult: boolean;
  moduleTestResult: boolean;
  segmentsRes: {};
  execute(): Promise<any>;
  decode(
    payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>
  ): Promise<any>;
  /**
   * 进入模块测试工位 0x01
   */
  startModuleTest(): void;
  /**
   * 设置sn码 0x02
   */
  setModuleTestSnData(): void;
  getModuleTestSnDataResult(data: number[]): void;
  /**
   * 进入重量测试 0x04
   */
  startModuleTestWeight(): void;
  getModuleTestWeightData(data: number[]): void;
  /**
   * 进入身高测试 0x06
   */
  startModuleTestHeight(): void;
  getModuleTestHeightData(data: number[]): void;
  /**
   * 进入阻抗测试 0x03
   */
  startModuleTestResistance(): void;
  getModuleTestResistanceData(data: number[]): void;
  /**
   * 获取八电极阻抗
   */
  private getModuleTestResistanceDataWithEightElec;
  /**
   * 停止模块测试 0x05
   */
  setModuleTestResult(success: boolean): void;
  private getModuleTestCmdResult;
}
