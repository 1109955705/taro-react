import QNBleProtocol from '../QNBleProtocol';
import QNBleTypings from '../typings';
export default class WspDualScaleMesProtocol extends QNBleProtocol<QNBleTypings.QNMesEventLisenter> {
    static bleProfle: import("./wspmes/WspDualScaleMesProfle").default;
    static WspMes: {
        WspDualScaleMesProfle: typeof import("./wspmes/WspDualScaleMesProfle").default;
        CalibrationFlow: typeof import("./wspmes/CalibrationFlow").default;
        ModuleTestFlow: typeof import("./wspmes/ModuleTestFlow").default;
        ModelProductFlow: typeof import("./wspmes/ModelProductFlow").default;
        PartialWeightFlow: typeof import("./wspmes/PartialWeightFlow").default;
        ReviewFlow: typeof import("./wspmes/ReviewFlow").default;
    };
    /**
     * 准备工作，在此接收所有的特征值
     *
     * @memberof WspDualScaleMesProtocol
     */
    prepare(): Promise<any>;
    applyFlow(): void;
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */
    decode(payload: Partial<QNBleTypings.TypedCharacteristicValueChangePayload>): Promise<any>;
    /************  删除工位  *************/
    /**
     * 删除工位 0x41
     * 0x00 所有工位 0x01 模块测试 0x02 半成品
     * 0x04 标定工位 0x08 重量回检 0x10 偏载  0x02 写型号
     */
    resetStation(station: number): void;
    getCurrentFlow(): import("../QNBleProtocol").QNBleActionFlow<QNBleTypings.QNMesEventLisenter>;
}
