import { QNBleProtocolProfile, QNBleBaseScaleProtocol } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class WspDualScalebleProfile implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class WspDualScaleProtocol extends QNBleBaseScaleProtocol<QNBleTypings.QNWspDualScaleMeasureEventListener> {
    static bleProfile: WspDualScalebleProfile;
    currentCmdNo: number;
    wifiInfoCache: {
        rssi: number;
        ssid: string[];
    };
    lastReceivedWifiIno: {};
    lastReceivedWifiSsidPackNo: number;
    currentSetWifiCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    bodyByteDataArr: number[][];
    isStoreData: boolean;
    partialScaleData: Partial<QNBleTypings.TypedMeasureData>;
    historyRecords: Array<QNBleTypings.TypeGetScaleDataCallbackParam>;
    wifiNotified: boolean;
    delayWriteDataAfterNotify(): Promise<any>;
    prepare(): Promise<any>;
    doPrepareMeasureWeight(): Promise<any>;
    doPrepareSetWifi(payload?: {
        wifiSsid?: string;
        wifiPwd?: string;
        dataServerUrl?: string;
        encryptKey?: string;
    }): Promise<any>;
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    /**
     * 通知设备扫描附近wifi
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     */
    doScanWifi(): Promise<void>;
    /**
     * 收到设备发送过来的wifi信息数据
     */
    onReceiveWifiSsidData(data: number[]): Promise<void>;
    /**
     * 这个方法由外部主动调用
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */
    doSetWifi(payload: {
        wifiSsid: string;
        wifiPwd: string;
        dataServerUrl: string;
        encryptKey: string;
    }): Promise<any>;
    handleWifiCmdData(data: number[]): Promise<any>;
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
    /**
     * 查询wifi连接状态
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1：表示查询wifi是否连接 2：查询wifi是否连接服务器
     */
    queryWifiConnectStatus(type?: number): Promise<void>;
}
export {};
