/**
 * 共享秤CP20A
 * NOTE 开发中，不要在生产中使用
 */
import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleDeviceType, QNBleTransferType, QNBleAction } from '../consts';
import QNBleTypings from '../typings';
declare class ShareScaleBleProfle implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    type: QNBleDeviceType;
    transferType: QNBleTransferType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class ShareScaleProtocol extends QNBleProtocol<QNBleTypings.QNHeightScaleEventListener> {
    static bleProfle: ShareScaleBleProfle;
    UUID_IBT_SERVICE: string;
    UUID_IBT_READ: string;
    UUID_IBT_READ_1: string;
    UUID_IBT_WRITE: string;
    isHoltk: boolean;
    currentCmdNo: number;
    ssidCmdData: number[][];
    pwdCmdData: number[][];
    dataServerUrlData: number[][];
    otaServerUrlData: number[][];
    encryptKeyCmdData: number[];
    syncDataCallback: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>;
    rebootCallback: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>;
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    decode(payload: QNBleTypings.TypedCharacteristicValueChangePayload): Promise<any>;
    syncData(payload: {
        voice: number;
        lightSwitch: number;
        lightStartTime: string;
        lightContinueTime: string;
    }, callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
    reboot(callback?: QNBleTypings.TypedProtocolMethodCallback<{
        errCode: number;
    }>): Promise<any>;
}
export {};
