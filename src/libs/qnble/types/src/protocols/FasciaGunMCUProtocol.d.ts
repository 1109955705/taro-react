import QNBleProtocol, { QNBleProtocolProfile } from '../QNBleProtocol';
import QNBleNativeDevice from '../QNBleNativeDevice';
import QNBleDevice from '../QNBleDevice';
import { QNBleAction, QNBleDeviceType, QNBleTransferType } from '../consts';
import QNBleTypings from '../typings';
declare class FasciaGunMCUProtocolProfile implements QNBleProtocolProfile {
    defaultAction: QNBleAction;
    transferType: QNBleTransferType;
    type: QNBleDeviceType;
    isTargetDevice(nativeDevice: QNBleNativeDevice): boolean;
    buildTargetDevice(nativeDevice: QNBleNativeDevice): Partial<QNBleDevice>;
}
export default class FasciaGunMCUProtocol extends QNBleProtocol<QNBleTypings.QNDeviceEventListener> {
    static bleProfile: FasciaGunMCUProtocolProfile;
    UUID_IBT_READ: string;
    UUID_IBT_WRITE: string;
    UUID_IBT_SERVICE: string;
    prepare(): Promise<any>;
    decode(payload: QNBleTypings.TypedCharacteristicValueChangePayload): Promise<any>;
    getDeviceInfo(data: number[]): Promise<void>;
    /**
     * 设置工作档位
     * @param gear 1-30
     */
    setDeviceWorkGear(gear: number): Promise<never>;
    setDeviceWorkGearResult(data: number[]): void;
    /**
     * 设置设备工作时间(单位:min)
     * @param time 范围5-300 分度 5
     */
    setDeviceWorkTime(time: number): Promise<never>;
    setDeviceWorkTimeResult(data: number[]): void;
    /**
     * 设置筋膜枪工作模式
     * @param mode 1 待机 2 工作模式
     */
    setDeviceWorkMode(mode: number): Promise<void>;
    setDeviceWorkModeResult(data: number[]): void;
}
export {};
