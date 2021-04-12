import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import QNBleTypings from '../typings';
declare class SphygmomanometerProtocolProfile implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class SphygmomanometerProtocol extends QNBleProtocol<QNBleTypings.QNSPMeasureEventListener> {
    static bleProfle: SphygmomanometerProtocolProfile;
    UUID_IBT_SERVICE: string;
    UUID_IBT_READ: string;
    UUID_IBT_WRITE: string;
    UUID_COMPAIRE_READ: string;
    UUID_COMPAIRE_WRITE: string;
    blePaireStatus: number;
    historyCount: number;
    lastReceivedHistoryData: {};
    isCancelHistoryData: boolean;
    currentRecivedHistoryDataNo: number;
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
    lastCmd: number;
    get action(): QNBleAction;
    /**
     * @override
     */
    prepare(): Promise<any>;
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    decode(payload: QNBleTypings.TypedCharacteristicValueChangePayload): Promise<any>;
    getDeviceInfo(data: number[]): Promise<void>;
    /**
     * 同步当前数据
     */
    doSyncCurrentData(data: number[]): Promise<void>;
    /**
     * 通知设备准备同步历史数据
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'prepareSyncHistoryData', ...args)
     */
    prepareSyncHistoryData(): Promise<void>;
    /**
     * 同步历史数据
     */
    doSyncHistoryData(data: number[]): Promise<void>;
    /**
     * 取消同步历史数据
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'cancelSyncHistoryData', ...args)
     */
    cancelSyncHistoryData(): Promise<void>;
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
    doPrepareSetWifi(payload: {
        wifiSsid: string;
        wifiPwd: string;
        dataServerUrl: string;
        encryptKey: string;
    }): Promise<any>;
    sendWifiSsid(): Promise<any>;
    sendWifiPwd(): Promise<any>;
    sendDataServerUrl(): Promise<any>;
    sendOtaServerUrl(): Promise<any>;
    sendEncryptKeyData(): Promise<any>;
    /**
     * 准备蓝牙配对
     */
    prepareBlePaire(): Promise<void>;
}
export {};
