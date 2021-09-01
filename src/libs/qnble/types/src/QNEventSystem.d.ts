import QNEventManager from './QNEventManager';
import QNBleTypings from './typings';
export default class QNEventSystem<T> {
    eventManager: QNEventManager;
    /**
     * 添加监听事件
     * @param {QNEventName} eventName - 事件名
     * @param {QNBleTypings.QNEventHandler} handler - 处理函数
     * @returns {T}
     */
    on(eventName: 'bluetooth_enable_change', handler: QNBleTypings.QNBleEventListenerNS.onBluetoothEnableChange): T;
    on(eventName: 'start_discovery_device', handler: QNBleTypings.QNBleEventListenerNS.onStartDiscoveryDevice): T;
    on(eventName: 'stop_discovery_device', handler: QNBleTypings.QNBleEventListenerNS.onStopDiscoveryDevice): T;
    on(eventName: 'ble_device_found', handler: QNBleTypings.QNBleEventListenerNS.onBleDeviceFound): T;
    on(eventName: 'connected', handler: QNBleTypings.QNBleEventListenerNS.onConnected): T;
    on(eventName: 'disconnected', handler: QNBleTypings.QNBleEventListenerNS.onDisconnected): T;
    on(eventName: 'connect_overtime', handler: QNBleTypings.QNBleEventListenerNS.onConnectOverTime): T;
    on(eventName: 'get_device_info', handler: QNBleTypings.QNDeviceEventListener.onGetDeviceInfo): T;
    on(eventName: 'get_unsteady_weight', handler: QNBleTypings.QNDeviceEventListener.onGetUnsteadyWeight): T;
    on(eventName: 'get_scale_data', handler: QNBleTypings.QNDeviceEventListener.onGetScaleData): T;
    on(eventName: 'start_fetch_scale_data', handler: QNBleTypings.QNDeviceEventListener.onStartFetchScaleData): T;
    on(eventName: 'fetch_scale_data_fail', handler: QNBleTypings.QNDeviceEventListener.onFetchScaleDataFail): T;
    on(eventName: 'set_wifi_success', handler: QNBleTypings.QNDeviceEventListener.onSetWifiSuccess): T;
    on(eventName: 'register_user_success', hander: QNBleTypings.QNDeviceEventListener.onRegisterUserSuccess): T;
    on(eventName: 'start_measure_fat', hander: QNBleTypings.QNDeviceEventListener.onStartMeasureFat): T;
    on(eventName: 'start_measure_heart', hander: QNBleTypings.QNDeviceEventListener.onStartMeasureHeart): T;
    on(eventName: 'error', handler: QNBleTypings.QNBleErrorListener): T;
    on(eventName: 'ready', handler: QNBleTypings.QNBleReadyListener): T;
    on(eventName: 'event', handler: QNBleTypings.QNEventHandler): T;
    on(eventName: QNBleTypings.QNEventName, handler: QNBleTypings.QNEventHandler): T;
    /**
     * 移除监听事件
     * @param {QNEventName} eventName - 要移除的事件名
     * @param {QNBleTypings.QNEventHandler} handler - 要移除的处理函数。如果为boolean则移除所有监听事件
     * @returns {T}
     */
    off(eventName: QNBleTypings.QNEventName, handler: boolean | QNBleTypings.QNEventHandler): T;
    /**
     * 触发事件监听
     * @private
     * @param {QNBleTypings.QNEventName} eventName - 事件名
     * @param {unknown} [payload] - 事件数据
     * @returns {T}
     */
    dispatch(eventName: QNBleTypings.QNEventName, payload?: unknown): T;
    /**
     * 清除所有监听事件
     */
    clearListeners(): T;
}
