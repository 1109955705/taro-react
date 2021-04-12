import QNBleTypings from './typings';
export default class QNBleCommonExtends {
    operation: QNBleTypings.QNBleOperation;
    config: QNBleTypings.QNBleConfig;
    constructor({ config, operation }?: Partial<QNBleTypings.QNBleCommonConstructorParams>);
    /**
     * 设置config
     * @param {QNBleTypings.QNBleConfig} config
     * @returns {void}
     */
    setConfig(config: QNBleTypings.QNBleConfig): void;
    /**
     * 设置操作类
     * @param {QNBleTypings.QNBleOperation} operation
     * @returns {void}
     */
    setOperation(operation: QNBleTypings.QNBleOperation): void;
    log(...params: any[]): void;
}
