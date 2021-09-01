import { QNBleAction } from '../../consts';
import QNBleProtocol, { QNBleActionFlow } from '../../QNBleProtocol';
import { DeviceUUID } from './WspDualScaleMesProfle';
import QNBleTypings from '../../typings';
export default class ModelProductFlow extends QNBleActionFlow<QNBleTypings.QNMesEventLisenter> {
    constructor(protocol: QNBleProtocol<QNBleTypings.QNMesEventLisenter>, uuids: DeviceUUID);
    baseStamp2000: number;
    uuids: DeviceUUID;
    acceptActions: QNBleAction[];
    deviceType: number;
    isSupportQuickPair: boolean;
    modelIdResult: boolean;
    timerId: number;
    wifiPairFailNum: number;
    currentCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    bodyByteDataArr: number[][];
    measureResult: {};
    execute(): Promise<any>;
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    setDeviceTime(): void;
    getDeviceInfo(byteList: number[]): void;
    setUnitAndScreenTime(): void;
    getUnitAndScreenTimeResult(): void;
    getDeviceTimeResult(): void;
    getMeasureData(byteList: number[]): void;
    confirmReceiveMeasureData(): void;
    setDeviceID(): void;
    setDeviceModelIDAndWeight(): void;
    getModelIdAndWeightResult(byteList: number[]): void;
    startWifiConfig(): void;
    prepareWifiData(): void;
    checkScaleWifiStatus(): void;
    getScaleWifiStatusResult(byteList: number[]): void;
    setWifiSsidTotalPackData(): void;
    getSsidTotalPackResult(byteList: number[]): void;
    setWifiSsidData(index: number): void;
    getWifiSsidDataResult(byteList: number[]): void;
    setWifiPwdTotalPackData(): void;
    getWifiPwdTotalPackDataResult(byteList: number[]): void;
    setWifiPwdData(index: number): void;
    getWifiPwdDataResult(byteList: number[]): void;
    setWifiServerUrlTotalPackData(): void;
    getServerUrlTotalPackDataResult(byteList: number[]): void;
    setWifiServerUrlData(index: number): void;
    getServerUrlDataResult(byteList: number[]): void;
    setWifiOtaTotalPackData(): void;
    getWifiOtaTotalPackDataResult(byteList: number[]): void;
    setWifiOtaData(index: number): void;
    getWifiOtaDataResult(byteList: number[]): void;
    setWifiEncryptData(): void;
    getWifiEncryptDataResult(byteList: number[]): void;
    getWifiConnectNetResult(byteList: number[]): void;
    getWifiConnectServerResult(byteList: number[]): void;
    /**
     * 身高体重秤设置信息(型号写入) 0x48
     */
    startHeightWeightConfig(): void;
    /**
     * 身高体重秤型号写入结果 0x49
     */
    getHeightWeightConfigResult(byteList: number[]): void;
    /**
     * 型号写入结果 0x51
     */
    setModelIdDataResult(success: boolean): void;
    getModelIdDataResult(byteList: number[]): void;
    setDeviceSleepMode(): void;
}
