import { QNBleProtocolProfile, QNBleBaseScaleProtocol } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class WspDualScaleBleProfle implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class WspDualScaleProtocol extends QNBleBaseScaleProtocol<QNBleTypings.QNWspDualScaleMeasureEventListener> {
    static bleProfle: WspDualScaleBleProfle;
    currentCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    bodyByteDataArr: number[][];
    isStoreData: boolean;
    partialScaleData: Partial<QNBleTypings.TypedMeasureData>;
    prepare(): Promise<any>;
    doPrepareMeasureWeight(): Promise<any>;
    doPrepareSetWifi(): Promise<any>;
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    doSetWifi(data: number[]): Promise<any>;
    buildBodyData(): void;
    doNotifyWifi(): Promise<any>;
    sendWifiSsid(): Promise<any>;
    sendWifiPwd(): Promise<any>;
    sendDataServerUrl(): Promise<any>;
    sendOtaServerUrl(): Promise<any>;
    sendEncryptKey(): Promise<any>;
    doDeleteUser(): Promise<any>;
    doRegisterUser(): Promise<any>;
    doReadScaleSupport(): Promise<any>;
    doSyncTimeCmd(): Promise<any>;
    doSyncUnit(): Promise<any>;
    prepareUserAndMeasure(): Promise<any>;
    doVisitUser(): Promise<any>;
    doSyncUserInfo(): Promise<any>;
    doSyncAlgorithm(): Promise<any>;
    doSyncAge(): Promise<any>;
    doSyncBirthday(): Promise<any>;
    doSyncHeight(): Promise<any>;
    doSyncGender(): Promise<any>;
}
export {};
