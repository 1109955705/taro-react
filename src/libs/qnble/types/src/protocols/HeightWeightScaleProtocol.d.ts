import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class HeightWeightScaleProfle implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class HeightWeightScaleProtocol extends QNBleProtocol<QNBleTypings.QNHeightScaleEventListener> {
    static bleProfle: HeightWeightScaleProfle;
    UUID_IBT_SERVICE: string;
    UUID_IBT_READ: string;
    UUID_IBT_WRITE: string;
    currentCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    decode(payload: QNBleTypings.TypedCharacteristicValueChangePayload): Promise<any>;
    doPrepareSetWifi(): Promise<any>;
    sendWifiSsid(): Promise<any>;
    sendWifiPwd(): Promise<any>;
    sendDataServerUrl(): Promise<any>;
    sendOtaServerUrl(): Promise<any>;
}
export {};
