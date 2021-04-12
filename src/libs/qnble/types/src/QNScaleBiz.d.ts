/**
 * 业务集成。可单独作为工具类使用
 */
import QNBleProtocol from './QNBleProtocol';
import QNBleCommonExtends from './QNBleCommonExtends';
import QNBleDevice from './QNBleDevice';
import QNBleNative from './QNBleNative';
import QNBleTypings from './typings';
export default class QNScaleBiz extends QNBleCommonExtends {
    /**
     * <bodyShape-personGoal>: <method>
     */
    algorithmMap: Record<string, number>;
    weightScale: number;
    bleDevice: QNBleDevice;
    bleNative: QNBleNative;
    sdkObj: QNBleTypings.TypedSdkObj;
    lastMeasurementTime: Date;
    listener: QNBleTypings.QNBaseScaleMeasureEventListener;
    constructor(hostProtocol: QNBleProtocol<QNBleTypings.QNBaseScaleMeasureEventListener>);
    /**
     * 根据SDK配置和当前连接的设备型号分析算法取值和指标显示情况
     */
    prepareDeviceProp(): QNBleTypings.TypedSdkObj;
    /**
     * 请求算法库接口
     * @param {TypedScaleData} scaleData 秤上传的原始数据
     */
    fetchScaleData(scaleData: QNBleTypings.TypedScaleData): Promise<QNBleTypings.TypedMeasure>;
    private makeMeasures;
    prepareData(data: QNBleTypings.TypedMeasureData): QNBleTypings.TypedMeasure;
    prepareWspMeasureData(data: QNBleTypings.TypedWspMeasureData): QNBleTypings.TypedMeasure;
    /**
     * 得到体重数据
     * @param {number} a1
     * @param {number} b1
     */
    decodeWeight(a1: number, b1: number): number;
    fakeRequest(weight: number): Promise<any>;
}
