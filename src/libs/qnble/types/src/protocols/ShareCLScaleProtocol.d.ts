import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class ShareCLScaleProfle implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class ShareCLScaleProtocol extends QNBleProtocol<QNBleTypings.QNHeightScaleEventListener> {
    static bleProfle: ShareCLScaleProfle;
    UUID_IBT_SERVICE: string;
    UUID_IBT_READ: string;
    UUID_IBT_WRITE: string;
    currentCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    private setWifiCallback;
    private checkWifiStatusCallback;
    private sleepScaleCallback;
    private syncDataCallback;
    get action(): QNBleAction;
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    decode(payload: QNBleTypings.TypedCharacteristicValueChangePayload): Promise<any>;
    setWifi(operaton?: QNBleTypings.QNBleOperation, callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
    sendWifiSsid(): Promise<any>;
    sendWifiPwd(): Promise<any>;
    sendDataServerUrl(): Promise<any>;
    sendOtaServerUrl(): Promise<any>;
    /**
     * 通知设备进入全休眠模式
     */
    sleepScale(callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
    /**
     * 检测wifi状态
     */
    checkWifiStatus(callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
    /**
     * 同步一些数据
     */
    syncData(payload: {
        fatSwitch: number;
        syncTimeDurationInCharge: number;
        syncTimeDurationUnCharge: number;
        offScreenTimeDuration: [string, string];
        voice: number;
    }, callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
}
export {};
