import { QNBleAction, QNBleUnit, QNBleErrorType } from './consts';
import QNBleProtocol from './QNBleProtocol';
import QNEvent from './QNEvent';
import QNBleDevice from './QNBleDevice';
import QNBleNativeDevice from './QNBleNativeDevice';
import QNBleError from './QNBleError';
import QNBleNative from './QNBleNative';
import QNEventManager from './QNEventManager';
declare namespace QNBleTypings {
    interface QNBleErrorDesc<T extends QNBleErrorType> {
        T: {
            code: T;
            desc: string;
        };
    }
    interface WxMiniprogramFunctionParams {
        success?(res: any): void;
        fail?(err: any): void;
        complete?(): void;
        deviceId?: string;
        [x: string]: any;
    }
    type WxMiniprogramFunction = (params: WxMiniprogramFunctionParams) => void;
    type WxMiniprogramFunctionFaillParams = {
        errMsg: string;
        code?: number;
    };
    interface InitFuncReturnValue {
        bleEnableState: boolean;
        available: boolean;
        discovering: boolean;
    }
    interface BleState {
        available: boolean;
        discovering: boolean;
    }
    type QNBleTypedSdkConfig = {
        business_info: {
            default_model: string;
            default_method: number;
            default_added_flag: 0 | 1;
            default_index_flag: number;
            connect_other: 0 | 1;
        };
        business_models: {
            dis_model: string;
            internal_model: string;
            body_index_flag: number;
            method: number;
            added_index_flag: 0 | 1;
        }[];
    };
    interface QNBleConfig {
        appId: string;
        appType?: string;
        algorithmUrl?: string;
        autoStopDiscovery?: boolean;
        connectOverTime?: number;
        useSdk?: boolean;
        sdkUrl?: string;
        sdkConfig?: QNBleTypedSdkConfig;
        useHerbalife?: boolean;
        logger?: {
            log(...arg: any[]): void;
            [x: string]: any;
        };
        protocols?: typeof QNBleProtocol[];
        multipleListenersEnable?: boolean;
    }
    interface QNBleServer {
        addService(params: {
            uuid: string;
            properties?: {
                write: boolean;
                read: boolean;
                notify: boolean;
                indicate: boolean;
            };
            permission: {
                readable: boolean;
                writeable: boolean;
                readEncryptionRequired: boolean;
                writeEncryptionRequired: boolean;
            };
            descriptors: {
                uuid: string;
                value: ArrayBuffer;
                permission: {
                    write: boolean;
                    read: boolean;
                };
            };
            value: ArrayBuffer;
        }): Promise<any>;
        startAdvertising(params: {
            advertiseRequest: {
                connectable?: boolean;
                deviceName?: string;
                serviceUuids: string[];
            };
            powerLevel: 'high' | 'low' | 'medium';
        }): Promise<any>;
        stopAdvertising(): Promise<any>;
        close(): Promise<any>;
    }
    /**
     * 蓝牙监听事件集合
     */
    namespace QNBleEventListenerNS {
        type onBluetoothEnableChange = (e: QNEvent<boolean>) => void;
        type onStartDiscoveryDevice = (e: QNEvent<undefined>) => void;
        type onStopDiscoveryDevice = (e: QNEvent<undefined>) => void;
        type onBleDeviceFound = (e: QNEvent<QNBleDevice>) => void;
        type onConnected = (e: QNEvent<QNBleDevice>) => void;
        type onConnecting = (e: QNEvent<string>) => void;
        type onDisconnected = (e: QNEvent<QNBleDevice>) => void;
        type onConnectOverTime = (e: QNEvent<string>) => void;
    }
    interface QNEventHandler {
        (event?: QNEvent<any>): any;
        _once_handler_?(): void;
    }
    interface QNBleEventListener {
        onBluetoothEnableChange: (payload: {
            available: boolean;
        }) => void;
        onStartDiscoveryDevice: () => void;
        onStopDiscoveryDevice: () => void;
        onBleDeviceFound: (device: QNBleDevice) => void;
        onConnected: (payload: {
            deviceId: string;
        }) => void;
        onDisconnected: (payload: {
            deviceId: string;
        }) => void;
        onConnectOverTime: (payload: {
            deviceId: string;
        }) => void;
    }
    interface TypedCharacteristicValueChangePayload {
        deviceId: string;
        serviceId: string;
        characteristicId: string;
        data: number[];
    }
    /**
     * BleNative监听事件
     */
    interface QNBleNativeEventListener {
        onNativeBluetoothEnableChange: (available: boolean) => void;
        onNativeStartDiscoveryDevice: () => void;
        onNativeStopDiscoveryDevice: () => void;
        onNativeBleDeviceFound: (nativeDevice: QNBleNativeDevice) => void;
        onNativeConnected: (deviceId: string) => void;
        onNativeDisconnected: (deviceId: string) => void;
        onNativeConnectOverTime: (deviceId: string) => void;
        onNativeCharacteristicValueChange: (payload: TypedCharacteristicValueChangePayload) => void;
        onDeviceConnectStateChange: (res: {
            connected: boolean;
            deviceId: string;
        }) => void;
        onError: (err: QNBleError | Error) => void;
    }
    type TypeGetScaleDataCallbackParam = {
        measure: TypedMeasure;
        response?: QNBleTypings.TypedMeasureData;
        scaleData?: TypedScaleData;
    };
    type TypedProtocolDeviceInfo<T extends object> = {
        deviceId: string;
        info: T;
    };
    /**
     * 设备监听事件集合
     */
    namespace QNDeviceEventListener {
        type onGetDeviceInfo = (e: QNEvent<TypedProtocolDeviceInfo<object>>) => void;
        type onGetUnsteadyWeight = (e: QNEvent<number>) => void;
        type onGetScaleData = (e: QNEvent<TypeGetScaleDataCallbackParam>) => void;
        type onStartFetchScaleData = (e: QNEvent<undefined>) => void;
        type onFetchScaleDataFail = (e: QNEvent<QNBleError>) => void;
        type onSetWifiSuccess = (e: QNEvent<undefined>) => void;
        type onRegisterUserSuccess = (e: QNEvent<number>) => void;
        type onStartMeasureFat = (e: QNEvent<undefined>) => void;
        type onStartMeasureHeart = (e: QNEvent<undefined>) => void;
    }
    interface QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<object>) => void;
        onError: (err: QNBleError | Error) => void;
    }
    interface QNHeightScaleEventListener extends QNDeviceEventListener {
        onSetWifiSuccess: () => void;
    }
    interface QNBaseScaleMeasureEventListener extends QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<{
            fwVersion: number;
            bleVersion: number;
        }>) => void;
        onGetUnsteadyWeight: (payload: {
            weight: number;
        }) => void;
        onGetScaleData: (payload: TypeGetScaleDataCallbackParam) => void;
        onStartFetchScaleData: () => void;
        onFetchScaleDataFail: (err: Error) => void;
        onStartMeasureFat: () => void;
        onStartMeasureHeart: () => void;
    }
    /**
     * 带wifi功能的秤的回调方法
     */
    interface QNWifiscaleScaleMeasureEventListener extends QNBaseScaleMeasureEventListener {
        onSetWifiSuccess: () => void;
    }
    interface QNWspDualScaleMeasureEventListener extends QNWifiscaleScaleMeasureEventListener {
        onRegisterUserSuccess: (payload: {
            userIndex: number;
        }) => void;
    }
    interface TypeOriginScaleData {
        weight?: number;
        height?: number;
        res50?: number;
        res500?: number;
        lf20?: number;
        lf100?: number;
        rf20?: number;
        rf100?: number;
        lh20?: number;
        lh100?: number;
        rh20?: number;
        rh100?: number;
        t20?: number;
        t100?: number;
    }
    /**
     * Mes系统相关事件回调
     */
    interface QNMesEventLisenter extends QNDeviceEventListener {
        /**
         * 读取到了SN
         */
        onGetSnCode: (paylod: {
            sn: string;
        }) => void;
        onModuleTestWriteSnState: (payload: {
            isSuccess: boolean;
        }) => void;
        onModuleTestWeightData: (payload: {
            weight: number;
        }) => void;
        onModuleTestHeightData: (payload: {
            height: number;
        }) => void;
        onModuleTestResistanceData: (payload: TypeOriginScaleData) => void;
        onModuleTestCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        onGetCalibrationData: (payload: {
            calibrationType: string;
            weight: number;
        }) => void;
        /**
         * 获取到标定结果状态
         */
        onCalibrationCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * 获取到非稳定重量
         */
        onGetUnsteadyWeight: (payload: {
            weight: number;
        }) => void;
        /**
         * 获取到回检重量
         */
        onGetReviewWeightData: (payload: {
            weight: number;
        }) => void;
        /**
         * 收到回检标示保存结果
         */
        onReviewCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * 收到偏载重量
         */
        onGetPartialWeightData: (payload: {
            weight: number;
        }) => void;
        /**
         * 设置偏载是否成功
         */
        onPartialCodeStatus: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * 收到非稳定的身高或体重
         */
        onGetUnsteadyHeightWeight: (payload: {
            weight: number;
            height: number;
        }) => void;
        /**
         * 获取到称重的稳定原始数据
         */
        onGetOriginScaleData: (payload: TypeOriginScaleData) => void;
        /**
         * 设置选型是否成功
         */
        onGetWriteModelIdResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * 获取到wifi结果
         */
        onGetWifiResult: (payload: {
            isSuccess: boolean;
        }) => void;
        /**
         * 设备状态变化
         */
        onDeviceStateChange: (payload: {
            behavior: string;
        }) => void;
    }
    type TypedSpProtocolDeviceInfo = {
        modelId: string;
        deviceInfo: {
            chargeType: number;
            supportChangeLanguage: number;
            standardType: number;
        };
        deviceStatus: {
            chargeStatus: number;
            unit: string;
            language: number;
            volume: number;
        };
        historyCount: number;
        softwareVersion: number;
        bleVersion: number;
        bleProtocolVersion: number;
    };
    type TypedSpMeasureInfo = {
        user: number;
        dateTimeString: string;
        hyper: number;
        hypot: number;
        heartRate: number;
        unit: string;
        value: number;
    };
    interface QNSPMeasureEventListener extends QNDeviceEventListener {
        onGetDeviceInfo: (payload: TypedProtocolDeviceInfo<TypedSpProtocolDeviceInfo>) => void;
        onGetDeviceSetStatus: (retValue: number) => void;
        onMeasuring: (data: TypedSpMeasureInfo) => void;
        onMeasureSuccess: (data: TypedSpMeasureInfo) => void;
        onMeasureFail: (data: TypedSpMeasureInfo) => void;
        onGetHistoryData: (data: TypedSpMeasureInfo) => void;
        onSetWifiSuccess: () => void;
        onSetWifiFail: (status: number) => void;
        onGetWifiInfo: (info: {
            rssi: number;
            ssid: string;
            /**
             * 信号等级
             * 0级 rssi < -100
             * 1级 rssi [-100, -85) 1格信号
             * 2级 rssi [-85, -70) 2格信号
             * 3级 rssi [-70, -55) 3格信号
             * 4级 rssi >= -55 4格信号，满格信号
             */
            level: number;
        }) => void;
        onGetBlePaireStatus: (status: 0 | 1 | 2) => void;
    }
    interface QNKitchenEventListener extends QNDeviceEventListener {
        onGetScaleData: (data: TypedKitchenScaleData) => void;
    }
    type QNBleErrorListener = (event: QNEvent<QNBleError>) => void;
    type QNBleReadyListener = (event: QNEvent<InitFuncReturnValue>) => void;
    type QNEventType = 'ready' | 'ble' | 'device' | 'error';
    type QNBleEventName = 'bluetooth_enable_change' | 'start_discovery_device' | 'stop_discovery_device' | 'ble_device_found' | 'connected' | 'disconnected' | 'connect_overtime';
    type QNEventName = QNBleEventName | string | 'error' | 'ready' | 'event';
    /**
     * 操作类型数据
     */
    namespace QNBleOperation {
        interface user {
            height: number;
            birthday?: string;
            gender: 'male' | 'female' | 1 | 0;
            age: number;
            /**
             * 注册时选的目标
             * 这个是根据体型选择来的
             * @type {number}
             * ## 默认模式
             * 1：减脂。除去全身多余脂肪
             * 2：保持健康。提升身体素质，保持健康体魄
             * 3：增肌。保持或打造运动员身形
             * ## 匀称、标准型使用。bodyShape=2
             * 1：减脂。除去全身多余脂肪
             * 4：增肌。保持或打造运动员身形
             * 5：保持健康。提升身体素质，保持健康体魄
             * ## 健美、肌肉型使用。bodyShape=3
             * 2：每周数次力量型运动，如器械练习
             * 6：基础不错，但缺乏系统性训练
             * 7：每周数次有氧型运动，如跑步
             */
            personGoal?: number;
            /**
             * 体型选择
             * @type {number}
             * 1：纤瘦，苗条
             * 2：匀称，标准
             * 3：健美，肌肉
             * 4：丰满，超重
             */
            bodyShape?: number;
            isSport?: boolean;
        }
    }
    interface QNBleOperation {
        action: QNBleAction;
        user: QNBleOperation.user;
        unit: QNBleUnit;
        config: Partial<QNBleConfig>;
        wifiSsid?: string;
        wifiPwd?: string;
        dataServerUrl?: string;
        otaServerUrl?: string;
        encryptKey?: string;
        sound?: number;
        isRegisterUser?: boolean;
        userIndex?: number;
        userKey?: number;
        isUpdateUser?: boolean;
        deletedUserIndexArr?: number[];
        sn?: string;
        isHeartRate?: boolean;
        minWeight?: string;
        maxWeight?: string;
        overrideWeight?: string;
        batteryType?: number;
        modelId?: string;
    }
    type QNBleCommonConstructorParams = {
        config: QNBleConfig;
        operation: QNBleOperation;
        bleDevice: QNBleDevice;
        bleNative: QNBleNative;
        eventManager: QNEventManager;
        isAndroid: boolean;
    };
    type QNBleProtocolConstructorParams = {
        listener?: Partial<QNBleTypings.QNDeviceEventListener>;
    } & QNBleCommonConstructorParams;
    type TypedSdkObj = {
        method: number;
        bodyIndexFlag: number;
        extraFlag: 0 | 1;
    };
    /**
     * 秤的数据
     */
    interface TypedScaleData {
        mac?: string;
        weight?: number;
        resistance50?: number;
        resistance500?: number;
        heartRate?: number;
        hasResistance?: 0 | 1;
    }
    /**
     * 厨房秤的数据
     */
    interface TypedKitchenScaleData {
        weight: number;
        weightUnit: string;
        /**
         * 是否是正常测量
         * 0正常测量，1负体重
         */
        type: 0 | 1;
        /**
         * 重量是否稳定
         * 0未稳定，1已稳定
         */
        isSteady: 0 | 1;
        overWeight: boolean;
        isPeeled: 0 | 1;
        range?: 0 | 1;
    }
    /**
   * 测量数据报告
   */
    interface TypedMeasure {
        user: QNBleTypings.QNBleOperation.user;
        device: QNBleDevice;
        time: Date;
        score: number;
        weight: number;
        bmi: number;
        water: number;
        subfat: number;
        muscleMass: number;
        muscle: number;
        bone: number;
        bmr: number;
        protein: number;
        lbm: number;
        visfat: number;
        bodyAge: number;
        bodyShape: number;
        bodyfat: number;
        heartIndex: number;
        heartRate: number;
    }
    interface TypedMeasureData {
        weight: number;
        bodyfat?: number;
        subfat?: number;
        visfat?: number;
        water?: number;
        bmr?: number;
        muscle?: number;
        bone?: number;
        fat_free_weight?: number;
        protein?: number;
        sinew?: number;
        score: number;
        bodyage?: number;
        bmi?: number;
        body_shape?: number;
        cardiac_index?: number;
        left_weight?: number;
        right_weight?: number;
        heart_rate?: number;
        body_shape_flag?: number;
        fat_free_weight_flag?: number;
        weight_flag?: number;
        bmi_flag?: number;
        bodyfat_flag?: number;
        subfat_flag?: number;
        visfat_flag?: number;
        water_flag?: number;
        muscle_flag?: number;
        bone_flag?: number;
        sinew_flag?: number;
        protein_flag?: number;
        bmr_flag?: number;
        bodyage_flag: number;
        whr_flag?: number;
        fatty_liver_risk_flag?: number;
        heart_rate_flag?: number;
        cardiac_index_flag?: number;
        depth_report_flag?: number;
        gender?: number;
        height?: number;
        birthday?: string;
        age?: number;
        local_updated_at?: string;
        time: Date;
    }
    interface TypedWspMeasureData extends Partial<TypedMeasureData> {
        muscleMass: number;
        lbm: number;
        bodyAge: number;
        bodyShape: number;
        heartIndex: number;
        heartRate: number;
        time: Date;
    }
    type TypedProtocolMethodCallbackRetValue = {
        errCode: number;
    };
    type TypedProtocolMethodCallback<T extends TypedProtocolMethodCallbackRetValue> = (arg0: T, data: QNBleTypings.TypedCharacteristicValueChangePayload, protocolImp: QNBleProtocol<QNDeviceEventListener>) => any;
}
export default QNBleTypings;
