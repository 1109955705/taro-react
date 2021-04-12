export declare enum QNBleTransferType {
    BLE = "ble",
    BROADCAST = "broadcast"
}
export declare enum QNBleAction {
    NOT_SET = "not_set",
    MEASURE_WEIGHT = "measure_weight",
    SET_WIFI = "set_wifi",
    MES_CALIBRATION = "mes_calibration",
    MES_REVIEW = "mes_review",
    MES_PARTIAL = "mes_partial",
    MES_MODULE_TEST = "mes_module_test",
    MES_MODEL_PRODUCT = "mes_model_product",
    MES_READ_SN = "mes_read_sn",
    MES_SLEEP = "mes_sleep",
    SP_SYNC_CURRENT_DATA = "sp_sync_current_data",
    SP_SYNC_HISTORY_DATA = "sp_sync_history_data"
}
export declare enum QNBleDeviceType {
    NORMAL_BLE_SCALE = "normal_ble_scale",
    OTM_BROADCAST_SCALE = "otm_broadcast_scale",
    OTO_BROADCAST_SCALE = "oto_broadcast_scale",
    WSP_DUAL_MODE_SCALE = "wsp_dual_mode_scale",
    WSP_EIGHT_DUAL_MODE_SCALE = "wsp_eight_dual_mode_scale",
    HEIGHTWEIGHT = "heightWeight",
    HEIGHT_WEIGHT_SCALE = "height_weight_scale",
    SHARE_SCALE_CL = "share_scale_cl",
    SHARE_SCALE = "share_scale",
    SP_10A = "sp_10a",
    BLE_KITCHEN_SCALE = "ble_kitchen_scale"
}
export declare enum QNBleGender {
    MALE = 1,
    FEMALE = 0
}
export declare enum QNBleUnit {
    KG = "kg",
    LB = "lb",
    JIN = "jin",
    ST = "ST",
    MMHG = "mmHg",
    KPA = "kPa",
    G = "g",
    ML = "ml",
    LBOZ = "lb:oz",
    OZ = "oz",
    MILKML = "milkml"
}
export declare enum MesBehavior {
    START_MODULE_TEST = "startModuelTest",
    STOP_MODULE_TEST = "stopModuelTest",
    START_CALIBRATION = "startCalibration",
    STOP_CALIBRATION = "stopCalibration",
    START_BACKHOE = "startBackhoe",
    STOP_BACKHOE = "stopBackhoe",
    START_PARTIAL = "startPartial",
    STOP_PARTIAL = "stopPartial",
    START_MODEL_ID = "startModelId",
    STOP_MODEL_ID = "stopModelId",
    START_READ_SN = "startReadSn",
    STOP_READ_SN = "stopReadSn",
    START_SLEEP = "startSleep",
    STOP_SLEEP = "stopSleep"
}
export declare enum MesCalibrationType {
    ZONE = "0kg",
    FIFTY = "50kg",
    HUNDRED = "100kg",
    HUNDRED_FIFTY = "150kg"
}
export declare enum QNBleErrorType {
    SUCCESS = "SUCCESS",
    UNKNOW_ERROR = "UNKNOW_ERROR",
    GET_BLE_STATE_FAILED = "GET_BLE_STATE_FAILED",
    OPEN_BLE_ADAPTER_FAILED = "OPEN_BLE_ADAPTER_FAILED",
    CLOSE_BLE_ADAPTER_FAILED = "CLOSE_BLE_ADAPTER_FAILED",
    BLE_NATIVE_ERROR = "BLE_NATIVE_ERROR",
    BLE_PROTOCOL_ERROR = "BLE_PROTOCOL_ERROR",
    INIT_FAILED = "INIT_FAILED",
    START_BLEDEVICE_DISCOVERY_FAILED = "START_BLEDEVICE_DISCOVERY_FAILED",
    STOP_BLEDEVICE_DISCOVERY_FAILED = "STOP_BLEDEVICE_DISCOVERY_FAILED",
    BLE_STATUS_DISABLED = "BLE_STATUS_DISABLED",
    ALREADY_CONNECTED = "ALREADY_CONNECTED",
    STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE = "STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE",
    BLE_EVENT_LISTENER_NOT_SET = "BLE_EVENT_LISTENER_NOT_SET",
    BLE_INNER_ERROR = "BLE_INNER_ERROR",
    FETCH_SDK_INFO_FAILED = "FETCH_SDK_INFO_FAILED",
    WIFI_SSID_ERROR = "WIFI_SSID_ERROR",
    WIFI_PASSWORD_ERROR = "WIFI_PASSWORD_ERROR",
    SET_WIFI_FAILED = "SET_WIFI_FAILED",
    CREATE_CONNECTION_FAILED = "CREATE_CONNECTION_FAILED",
    CLOSE_CONNECTION_FAILED = "CLOSE_CONNECTION_FAILED",
    STOP_BLE_FAILED = "STOP_BLE_FAILED",
    GET_BLE_DEVICE_SERVICES_FAILED = "GET_BLE_DEVICE_SERVICES_FAILED",
    GET_BLE_DEVICE_CHARACTERISTICS_FAILED = "GET_BLE_DEVICE_CHARACTERISTICS_FAILED",
    SEND_MEASURE_DATA_FAILED = "SEND_MEASURE_DATA_FAILED",
    REGISTER_USER_FAILED = "REGISTER_USER_FAILED",
    CREATE_BLE_SERVER_FAILED = "CREATE_BLE_SERVER_FAILED",
    PROTOCOL_PREPARE_FAILED = "PROTOCOL_PREPARE_FAILED"
}
export declare const QNBleErrorDesc: {
    SUCCESS: {
        code: QNBleErrorType;
        desc: string;
    };
    UNKNOW_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    GET_BLE_STATE_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    OPEN_BLE_ADAPTER_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    CLOSE_BLE_ADAPTER_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    BLE_NATIVE_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    BLE_PROTOCOL_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    INIT_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    START_BLEDEVICE_DISCOVERY_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    STOP_BLEDEVICE_DISCOVERY_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    BLE_STATUS_DISABLED: {
        code: QNBleErrorType;
        desc: string;
    };
    ALREADY_CONNECTED: {
        code: QNBleErrorType;
        desc: string;
    };
    STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE: {
        code: QNBleErrorType;
        desc: string;
    };
    BLE_EVENT_LISTENER_NOT_SET: {
        code: QNBleErrorType;
        desc: string;
    };
    BLE_INNER_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    FETCH_SDK_INFO_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    WIFI_SSID_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    SET_WIFI_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    WIFI_PASSWORD_ERROR: {
        code: QNBleErrorType;
        desc: string;
    };
    CREATE_CONNECTION_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    CLOSE_CONNECTION_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    STOP_BLE_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    GET_BLE_DEVICE_SERVICES_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    GET_BLE_DEVICE_CHARACTERISTICS_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    SEND_MEASURE_DATA_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    REGISTER_USER_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    CREATE_BLE_SERVER_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
    PROTOCOL_PREPARE_FAILED: {
        code: QNBleErrorType;
        desc: string;
    };
};
export declare const QNBleEventNames: string[];
export declare const QNDeviceEventNames: string[];
