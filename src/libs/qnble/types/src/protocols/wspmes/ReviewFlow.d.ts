import { QNBleAction } from '../../consts';
import QNBleProtocol, { QNBleActionFlow } from '../../QNBleProtocol';
import { DeviceUUID } from './WspDualScaleMesProfle';
import QNBleTypings from '../../typings';
export default class ReviewFlow extends QNBleActionFlow<QNBleTypings.QNMesEventLisenter> {
    constructor(protocol: QNBleProtocol<QNBleTypings.QNMesEventLisenter>, uuids: DeviceUUID);
    uuids: DeviceUUID;
    acceptActions: QNBleAction[];
    execute(): Promise<any>;
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    /**
       * 进入回检 0x21
       */
    enterReview(): void;
    /**
     * 收到回检重量 0x22
     */
    getReviewWeightData(byteList: number[]): void;
    setReviewWeightDataResult(state: number): void;
    /**
     * 收到回检标示保存结果 0x23
     */
    getReviewWeightDataResult(byteList: number[]): void;
}
