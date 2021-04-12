import { QNBleAction } from '../../consts';
import QNBleProtocol, { QNBleActionFlow } from '../../QNBleProtocol';
import QNBleTypings from '../../typings';
import { DeviceUUID } from './WspDualScaleMesProfle';
export default class CalibrationFlow extends QNBleActionFlow<QNBleTypings.QNMesEventLisenter> {
    constructor(protocol: QNBleProtocol<QNBleTypings.QNMesEventLisenter>, uuids: DeviceUUID);
    uuids: DeviceUUID;
    acceptActions: QNBleAction[];
    calibrationWeight: number;
    calibrationResult: boolean;
    execute(): Promise<any>;
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    /**
     * 收到标定数值 0x12
     */
    getCalibrationWeightData(byteList: number[]): void;
    confirmCalibrationWeightData(retValue: number): void;
    /**
     * 收到标定结果 0x13
     */
    getCalibrationResultData(byteList: number[]): void;
    setQuickPairWifiSSID(): void;
    getQuickPairWifiSSIDResult(byteList: number[]): void;
    setQuickPairWifiPWD(): void;
    getQuickPairWifiPWDResult(byteList: number[]): void;
}
