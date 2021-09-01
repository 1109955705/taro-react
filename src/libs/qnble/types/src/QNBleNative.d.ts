/**
 * BleNative类必需继承实现此抽象类定义的成员
 */
import QNBleCommonExtends from './QNBleCommonExtends';
import QNBleDevice from './QNBleDevice';
import QNBleTypings from './typings';
export declare class QNBleNativeCommonExtends extends QNBleCommonExtends {
    useDefaultHttpRequest: boolean;
    listener: QNBleTypings.QNBleNativeEventListener;
    constructor(params?: {
        config?: QNBleTypings.QNBleConfig;
        operation?: QNBleTypings.QNBleOperation;
        listener?: QNBleTypings.QNBleNativeEventListener;
    });
    /**
     * 设置内部事件监听管理
     * @param {Partial<QNBleTypings.QNBleNativeEventListener>} listener
     */
    setListener(listener: Partial<QNBleTypings.QNBleNativeEventListener>): void;
}
export default abstract class QNBleNative extends QNBleNativeCommonExtends {
    abstract name: string;
    /**
     * 初始化
     * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
     */
    abstract init(): Promise<QNBleTypings.InitFuncReturnValue>;
    /**
     * 释放相关蓝牙资源
     */
    abstract release?(): Promise<any>;
    /**
     * 获取蓝牙适配器状态
     */
    abstract getBluetoothAdapterState(): Promise<QNBleTypings.BleState>;
    /**
     * 开启蓝牙适配器
     */
    abstract openBluetoothAdapter(): Promise<any>;
    /**
     * 关闭蓝牙适配器
     */
    abstract closeBluetoothAdapter(): Promise<any>;
    /**
     * 开始扫描
     * @returns {Promise<any>}
     */
    abstract startScan(params?: any): Promise<any>;
    /**
     * 停止扫描
     * @returns {Promise<any>}
     */
    abstract stopScan(): Promise<any>;
    /**
     * 创建蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {number} connectFailOverTime - 操作参数
     */
    abstract createBleConnection(bleDevice: QNBleDevice, connectFailOverTime?: number): Promise<any>;
    /**
     * 关闭蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {Promise<any>}
     */
    abstract closeBleConnection(bleDevice: QNBleDevice): Promise<any>;
    /**
     * 获取设备下的所有服务
     * @param {string} deviceId
     * @returns {Promise<any[]>}
     */
    abstract findService(deviceId: string): Promise<any[]>;
    /**
     * 获取指定服务器的特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @returns {Promise<any>}
     */
    abstract findBleDeviceCharacteristics(deviceId: string, serviceId: string): Promise<any>;
    /**
     * 使能特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */
    abstract enableNotify(deviceId: string, serviceId: string, characteristicId: string): Promise<any>;
    /**
     * 读取特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */
    abstract readBleCharacteristicValue(deviceId: string, serviceId: string, characteristicId: string): Promise<any>;
    /**
     * 写入特征值数据
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    abstract writeData(deviceId: string, serviceId: string, characteristicId: string, cmdData: number[]): Promise<any>;
    abstract sendHttpRequest(request: {
        url: string;
        data: any;
        method?: string;
        dataType?: string;
    }): Promise<any>;
    /**
     * 创建蓝牙服务端，用作发射蓝牙广播
     */
    abstract createBleServer(): Promise<QNBleTypings.QNBleServer>;
    /**
     * 发送广播，默认只在service data进行广播
     * @param {QNBleTypings.QNBleServer} server
     * @param {number[]} data
     */
    abstract doAdvertising(server: QNBleTypings.QNBleServer, data: number[]): Promise<any>;
    /**
     * 停止广播
     * @param {QNBleTypings.QNBleServer} server
     */
    abstract stopAdvertising(server: QNBleTypings.QNBleServer): Promise<any>;
    /**
     * 关闭蓝牙服务
     * @param {QNBleTypings.QNBleServer)} server
     */
    abstract closeServer(server: QNBleTypings.QNBleServer): Promise<any>;
}
