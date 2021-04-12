/**
 * 协议实例管理
 */
import QNBleProtocol from './QNBleProtocol';
import QNBleTypings from './typings';
export default class QNProtocolManager<T extends Partial<QNBleTypings.QNDeviceEventListener>> {
    records: Map<string, QNBleProtocol<T>>;
    hasProtocol(deviceId: string): boolean;
    getProtocol(deviceId: string): QNBleProtocol<T> | null;
    addProtocol(protocolImp: QNBleProtocol<T>): Map<string, QNBleProtocol<T>>;
    removeProtocol(deviceId: string): boolean;
    clear(): void;
    values(): IterableIterator<QNBleProtocol<T>>;
    keys(): IterableIterator<string>;
    enries(): IterableIterator<[string, QNBleProtocol<T>]>;
}
