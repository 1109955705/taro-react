import QNBleTypings from './typings';
/**
 * 第一个字母大写
 * @param {string} word
 * @returns {string}
 */
/**
 * 帕斯卡命名
 * 将aa-bb-xx转为AaBbXx
 * @param {string} str - input
 * @returns {string}
*/
export default class QNEventManager {
    private handlers;
    /**
     * 获取事件类型
     * @private
     * @static
     * @param {(eventName: QNBleTypings.QNEventName} eventName - 事件名
     * @returns {QNBleTypings.QNEventType | false}
     */
    private static getEventType;
    /**
     * 添加监听事件
     * @param {string} eventName - 事件名
     * @param {QNBleTypings.QNEventHandler} handler - 处理函数
     * @returns {QNEventManager}
     */
    on(eventName: string, handler: QNBleTypings.QNEventHandler): QNEventManager;
    /**
     * 移除监听事件
     * @param {string} eventName - 要移除的事件名
     * @param {QNBleTypings.QNEventHandler} handler - 要移除的处理函数。如果为boolean且为true则移除所有监听事件
     * @returns {QNEventManager}
     */
    off(eventName: QNBleTypings.QNEventName, handler: boolean): QNEventManager;
    off(eventName: QNBleTypings.QNEventName, handler: QNBleTypings.QNEventHandler): QNEventManager;
    /**
     * 触发事件监听
     * @private
     * @param {QNBleTypings.QNEventName} eventName - 事件名
     * @param {unknown} [payload] - 事件数据
     * @returns {QNEventManager}
     */
    dispatch(eventName: QNBleTypings.QNEventName, payload?: unknown): QNEventManager;
    /**
     * 清除所有监听事件
     */
    clearListeners(): QNEventManager;
}
export declare class QNEventHandler {
    eventName: string;
    eventManager: QNEventManager;
    constructor(methodName: string, eventManager: QNEventManager);
    apply(target: any, thisArg: any, argumentsList: any[]): any;
}
