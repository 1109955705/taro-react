/*! ********************************************************
 * QNBle
 * @author huyongkang<huyongkang@yolanda.hk>
 * @date 2021-05-13T02:55:43.380Z
 * @version 1.1.0
 *********************************************************/

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r =
      c < 3
        ? target
        : desc === null
        ? (desc = Object.getOwnPropertyDescriptor(target, key))
        : desc,
    d;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator['throw'](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === 'function' &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError('Generator is already executing.');
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y['return']
                : op[0]
                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === 'function' && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === 'number')
    return {
      next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
      },
    };
  throw new TypeError(
    s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function __read(o, n) {
  var m = typeof Symbol === 'function' && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error: error };
  } finally {
    try {
      if (r && !r.done && (m = i['return'])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}

var _a;

var QNBleTransferType;

(function (QNBleTransferType) {
  // 低功耗蓝牙
  QNBleTransferType['BLE'] = 'ble'; // 广播

  QNBleTransferType['BROADCAST'] = 'broadcast';
})(QNBleTransferType || (QNBleTransferType = {}));

var QNBleAction;

(function (QNBleAction) {
  // 尚未设定状态，就是不指定默认action
  QNBleAction['NOT_SET'] = 'not_set'; // 测量

  QNBleAction['MEASURE'] = 'measure';
  QNBleAction['MEASURE_WEIGHT'] = 'measure_weight';
  QNBleAction['SET_WIFI'] = 'set_wifi'; //Mes生产相关

  QNBleAction['MES_CALIBRATION'] = 'mes_calibration';
  QNBleAction['MES_REVIEW'] = 'mes_review';
  QNBleAction['MES_PARTIAL'] = 'mes_partial';
  QNBleAction['MES_MODULE_TEST'] = 'mes_module_test';
  QNBleAction['MES_MODEL_PRODUCT'] = 'mes_model_product';
  QNBleAction['MES_READ_SN'] = 'mes_read_sn';
  QNBleAction['MES_SLEEP'] = 'mes_sleep'; // SECTION 血压计
  // 同步当前测量数据

  QNBleAction['SP_SYNC_CURRENT_DATA'] = 'sp_sync_current_data'; // 同步历史数据

  QNBleAction['SP_SYNC_HISTORY_DATA'] = 'sp_sync_history_data'; // !SECTION
  // 筋膜枪
  // 调整设置

  QNBleAction['FG_ADJUST_SETTING'] = 'fg_adjust_setting';
})(QNBleAction || (QNBleAction = {}));

var QNBleDeviceType;

(function (QNBleDeviceType) {
  QNBleDeviceType['NORMAL_BLE_SCALE'] = 'normal_ble_scale';
  QNBleDeviceType['OTM_BROADCAST_SCALE'] = 'otm_broadcast_scale';
  QNBleDeviceType['OTO_BROADCAST_SCALE'] = 'oto_broadcast_scale';
  QNBleDeviceType['WSP_DUAL_MODE_SCALE'] = 'wsp_dual_mode_scale';
  QNBleDeviceType['WSP_EIGHT_DUAL_MODE_SCALE'] = 'wsp_eight_dual_mode_scale'; // CP30B

  QNBleDeviceType['HEIGHTWEIGHT'] = 'heightWeight'; // CP30A 单蓝牙身高体重秤

  QNBleDeviceType['HEIGHTWEIGHT_SINGLE_BLE'] = 'heightWeightSingleBle'; // 身高体重一体机

  QNBleDeviceType['HEIGHT_WEIGHT_SCALE'] = 'height_weight_scale'; // 共享秤CP20A（彩屏）

  QNBleDeviceType['SHARE_SCALE_CL'] = 'share_scale_cl'; // 共享秤CP20A

  QNBleDeviceType['SHARE_SCALE'] = 'share_scale'; // 筋膜枪

  QNBleDeviceType['FASCIA_GUN'] = 'fascia_gun'; // 血压计SP10A

  QNBleDeviceType['SPHYGMOMANOMETER'] = 'sphygmomanometer'; // 体温计

  QNBleDeviceType['THERMOMETER'] = 'thermometer'; // 厨房秤

  QNBleDeviceType['BLE_KITCHEN_SCALE'] = 'ble_kitchen_scale';
})(QNBleDeviceType || (QNBleDeviceType = {}));

var QNBleGender;

(function (QNBleGender) {
  QNBleGender[(QNBleGender['MALE'] = 1)] = 'MALE';
  QNBleGender[(QNBleGender['FEMALE'] = 0)] = 'FEMALE';
})(QNBleGender || (QNBleGender = {}));

var QNBleUnit;

(function (QNBleUnit) {
  QNBleUnit['KG'] = 'kg';
  QNBleUnit['LB'] = 'lb';
  QNBleUnit['JIN'] = 'jin';
  QNBleUnit['ST'] = 'ST'; // 血压计单位

  QNBleUnit['MMHG'] = 'mmHg'; // 血压计单位

  QNBleUnit['KPA'] = 'kPa'; // 厨房秤单位

  QNBleUnit['G'] = 'g'; // 厨房秤单位

  QNBleUnit['ML'] = 'ml'; // 厨房秤单位

  QNBleUnit['LBOZ'] = 'lb:oz'; // 厨房秤单位

  QNBleUnit['OZ'] = 'oz'; // 厨房秤单位

  QNBleUnit['MILKML'] = 'milkml';
})(QNBleUnit || (QNBleUnit = {}));

var MesBehavior;

(function (MesBehavior) {
  MesBehavior['START_MODULE_TEST'] = 'startModuelTest';
  MesBehavior['STOP_MODULE_TEST'] = 'stopModuelTest';
  MesBehavior['START_CALIBRATION'] = 'startCalibration';
  MesBehavior['STOP_CALIBRATION'] = 'stopCalibration';
  MesBehavior['START_BACKHOE'] = 'startBackhoe';
  MesBehavior['STOP_BACKHOE'] = 'stopBackhoe';
  MesBehavior['START_PARTIAL'] = 'startPartial';
  MesBehavior['STOP_PARTIAL'] = 'stopPartial';
  MesBehavior['START_MODEL_ID'] = 'startModelId';
  MesBehavior['STOP_MODEL_ID'] = 'stopModelId';
  MesBehavior['START_READ_SN'] = 'startReadSn';
  MesBehavior['STOP_READ_SN'] = 'stopReadSn';
  MesBehavior['START_SLEEP'] = 'startSleep';
  MesBehavior['STOP_SLEEP'] = 'stopSleep';
})(MesBehavior || (MesBehavior = {})); //标定类型

var MesCalibrationType;

(function (MesCalibrationType) {
  MesCalibrationType['ZONE'] = '0kg';
  MesCalibrationType['FIFTY'] = '50kg';
  MesCalibrationType['HUNDRED'] = '100kg';
  MesCalibrationType['HUNDRED_FIFTY'] = '150kg';
})(MesCalibrationType || (MesCalibrationType = {}));

var QNBleErrorType;

(function (QNBleErrorType) {
  QNBleErrorType['SUCCESS'] = 'SUCCESS';
  QNBleErrorType['UNKNOW_ERROR'] = 'UNKNOW_ERROR';
  QNBleErrorType['GET_BLE_STATE_FAILED'] = 'GET_BLE_STATE_FAILED';
  QNBleErrorType['OPEN_BLE_ADAPTER_FAILED'] = 'OPEN_BLE_ADAPTER_FAILED';
  QNBleErrorType['CLOSE_BLE_ADAPTER_FAILED'] = 'CLOSE_BLE_ADAPTER_FAILED';
  QNBleErrorType['BLE_NATIVE_ERROR'] = 'BLE_NATIVE_ERROR';
  QNBleErrorType['BLE_PROTOCOL_ERROR'] = 'BLE_PROTOCOL_ERROR';
  QNBleErrorType['INIT_FAILED'] = 'INIT_FAILED';
  QNBleErrorType['START_BLEDEVICE_DISCOVERY_FAILED'] =
    'START_BLEDEVICE_DISCOVERY_FAILED';
  QNBleErrorType['STOP_BLEDEVICE_DISCOVERY_FAILED'] =
    'STOP_BLEDEVICE_DISCOVERY_FAILED';
  QNBleErrorType['BLE_STATUS_DISABLED'] = 'BLE_STATUS_DISABLED';
  QNBleErrorType['ALREADY_CONNECTED'] = 'ALREADY_CONNECTED';
  QNBleErrorType['STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE'] =
    'STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE';
  QNBleErrorType['BLE_EVENT_LISTENER_NOT_SET'] = 'BLE_EVENT_LISTENER_NOT_SET';
  QNBleErrorType['BLE_INNER_ERROR'] = 'BLE_INNER_ERROR';
  QNBleErrorType['FETCH_SDK_INFO_FAILED'] = 'FETCH_SDK_INFO_FAILED';
  QNBleErrorType['WIFI_SSID_ERROR'] = 'WIFI_SSID_ERROR';
  QNBleErrorType['WIFI_PASSWORD_ERROR'] = 'WIFI_PASSWORD_ERROR';
  QNBleErrorType['SET_WIFI_FAILED'] = 'SET_WIFI_FAILED';
  QNBleErrorType['CREATE_CONNECTION_FAILED'] = 'CREATE_CONNECTION_FAILED';
  QNBleErrorType['CLOSE_CONNECTION_FAILED'] = 'CLOSE_CONNECTION_FAILED';
  QNBleErrorType['STOP_BLE_FAILED'] = 'STOP_BLE_FAILED';
  QNBleErrorType['GET_BLE_DEVICE_SERVICES_FAILED'] =
    'GET_BLE_DEVICE_SERVICES_FAILED';
  QNBleErrorType['GET_BLE_DEVICE_CHARACTERISTICS_FAILED'] =
    'GET_BLE_DEVICE_CHARACTERISTICS_FAILED';
  QNBleErrorType['SEND_MEASURE_DATA_FAILED'] = 'SEND_MEASURE_DATA_FAILED';
  QNBleErrorType['REGISTER_USER_FAILED'] = 'REGISTER_USER_FAILED';
  QNBleErrorType['VISIT_USER_FAILED'] = 'VISIT_USER_FAILED';
  QNBleErrorType['CREATE_BLE_SERVER_FAILED'] = 'CREATE_BLE_SERVER_FAILED';
  QNBleErrorType['PROTOCOL_PREPARE_FAILED'] = 'PROTOCOL_PREPARE_FAILED';
})(QNBleErrorType || (QNBleErrorType = {}));

var QNBleErrorDesc =
  ((_a = {}),
  (_a[QNBleErrorType.SUCCESS] = {
    code: QNBleErrorType.SUCCESS,
    desc: '成功',
  }),
  (_a[QNBleErrorType.UNKNOW_ERROR] = {
    code: QNBleErrorType.UNKNOW_ERROR,
    desc: '未知错误',
  }),
  (_a[QNBleErrorType.GET_BLE_STATE_FAILED] = {
    code: QNBleErrorType.GET_BLE_STATE_FAILED,
    desc: '获取蓝牙状态失败',
  }),
  (_a[QNBleErrorType.OPEN_BLE_ADAPTER_FAILED] = {
    code: QNBleErrorType.OPEN_BLE_ADAPTER_FAILED,
    desc: '打开蓝牙适配器失败',
  }),
  (_a[QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED] = {
    code: QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED,
    desc: '关闭蓝牙适配器失败',
  }),
  (_a[QNBleErrorType.BLE_NATIVE_ERROR] = {
    code: QNBleErrorType.BLE_NATIVE_ERROR,
    desc: '内部蓝牙能力提供模块发生错误',
  }),
  (_a[QNBleErrorType.BLE_PROTOCOL_ERROR] = {
    code: QNBleErrorType.BLE_PROTOCOL_ERROR,
    desc: '内部蓝牙协议错误',
  }),
  (_a[QNBleErrorType.INIT_FAILED] = {
    code: QNBleErrorType.INIT_FAILED,
    desc: '初始化失败',
  }),
  (_a[QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED] = {
    code: QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED,
    desc: '启动蓝牙扫描失败',
  }),
  (_a[QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED] = {
    code: QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED,
    desc: '停止蓝牙扫描发生错误',
  }),
  (_a[QNBleErrorType.BLE_STATUS_DISABLED] = {
    code: QNBleErrorType.BLE_STATUS_DISABLED,
    desc: '蓝牙未开启，不可进行相关蓝牙操作，请先开启蓝牙',
  }),
  (_a[QNBleErrorType.ALREADY_CONNECTED] = {
    code: QNBleErrorType.ALREADY_CONNECTED,
    desc: '在已经连接了设备的情况下，调用了连接设备，需要先断开连接再进行连接',
  }),
  (_a[QNBleErrorType.STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE] = {
    code: QNBleErrorType.STOP_DISCOVERY_CONNECT_BROADCAST_DEVICE,
    desc: '当前正在连接蓝牙广播设备，不能停止蓝牙扫描，如果需要停止，则先调用断开连接，也可以直接调用stop',
  }),
  (_a[QNBleErrorType.BLE_EVENT_LISTENER_NOT_SET] = {
    code: QNBleErrorType.BLE_EVENT_LISTENER_NOT_SET,
    desc: '未设置蓝牙事件监听器，不能进行蓝牙相关操作',
  }),
  (_a[QNBleErrorType.BLE_INNER_ERROR] = {
    code: QNBleErrorType.BLE_INNER_ERROR,
    desc: '蓝牙内部错误，具体请查看 extra 字段',
  }),
  (_a[QNBleErrorType.FETCH_SDK_INFO_FAILED] = {
    code: QNBleErrorType.FETCH_SDK_INFO_FAILED,
    desc: '请求SDK配置信息失败，请检查下appid是否正确或网络是否正常。网络恢复后需要重新请求',
  }),
  (_a[QNBleErrorType.WIFI_SSID_ERROR] = {
    code: QNBleErrorType.WIFI_SSID_ERROR,
    desc: 'wifi的ssid格式不对，请确认长度大于1且小于32',
  }),
  (_a[QNBleErrorType.SET_WIFI_FAILED] = {
    code: QNBleErrorType.SET_WIFI_FAILED,
    desc: '配网失败',
  }),
  (_a[QNBleErrorType.WIFI_PASSWORD_ERROR] = {
    code: QNBleErrorType.WIFI_PASSWORD_ERROR,
    desc: 'wifi密码长度不能超过64',
  }),
  (_a[QNBleErrorType.CREATE_CONNECTION_FAILED] = {
    code: QNBleErrorType.CREATE_CONNECTION_FAILED,
    desc: '创建连接失败',
  }),
  (_a[QNBleErrorType.CLOSE_CONNECTION_FAILED] = {
    code: QNBleErrorType.CLOSE_CONNECTION_FAILED,
    desc: '关闭连接失败',
  }),
  (_a[QNBleErrorType.STOP_BLE_FAILED] = {
    code: QNBleErrorType.STOP_BLE_FAILED,
    desc: '停止蓝牙活动失败',
  }),
  (_a[QNBleErrorType.GET_BLE_DEVICE_SERVICES_FAILED] = {
    code: QNBleErrorType.GET_BLE_DEVICE_SERVICES_FAILED,
    desc: '获取设备服务数据失败',
  }),
  (_a[QNBleErrorType.GET_BLE_DEVICE_CHARACTERISTICS_FAILED] = {
    code: QNBleErrorType.GET_BLE_DEVICE_CHARACTERISTICS_FAILED,
    desc: '获取设备特征值数据失败',
  }),
  (_a[QNBleErrorType.SEND_MEASURE_DATA_FAILED] = {
    code: QNBleErrorType.SEND_MEASURE_DATA_FAILED,
    desc: '发送测量数据失败',
  }),
  (_a[QNBleErrorType.REGISTER_USER_FAILED] = {
    code: QNBleErrorType.REGISTER_USER_FAILED,
    desc: '注册用户失败',
  }),
  (_a[QNBleErrorType.CREATE_BLE_SERVER_FAILED] = {
    code: QNBleErrorType.CREATE_BLE_SERVER_FAILED,
    desc: '创建蓝牙广播服务失败',
  }),
  (_a[QNBleErrorType.PROTOCOL_PREPARE_FAILED] = {
    code: QNBleErrorType.PROTOCOL_PREPARE_FAILED,
    desc: '协议初始化失败',
  }),
  _a); // 蓝牙事件名

var QNBleEventNames = [
  'bluetooth_enable_change',
  'start_discovery_device',
  'stop_discovery_device',
  'ble_device_found',
  'connected',
  'disconnected',
  'connect_overtime',
]; // 设备事件名

var QNDeviceEventNames = [
  'get_device_info',
  'get_unsteady_weight',
  'get_scale_data',
  'start_fetch_scale_data',
  'fetch_scale_data_fail',
  'set_wifi_success',
  'register_user_success',
  'start_measure_fat',
  'start_measure_heart',
];

var consts = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  get QNBleTransferType() {
    return QNBleTransferType;
  },
  get QNBleAction() {
    return QNBleAction;
  },
  get QNBleDeviceType() {
    return QNBleDeviceType;
  },
  get QNBleGender() {
    return QNBleGender;
  },
  get QNBleUnit() {
    return QNBleUnit;
  },
  get MesBehavior() {
    return MesBehavior;
  },
  get MesCalibrationType() {
    return MesCalibrationType;
  },
  get QNBleErrorType() {
    return QNBleErrorType;
  },
  QNBleErrorDesc: QNBleErrorDesc,
  QNBleEventNames: QNBleEventNames,
  QNDeviceEventNames: QNDeviceEventNames,
});

function hasOwnProperty(obj, prop) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/**
 * 获取数据类型
 * @param {any} arg
 * @example
 * isType(1) === 'number'
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function isType(arg) {
  return Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
}
function number2hex(value) {
  var str = value.toString(16).toUpperCase();
  return ('00' + str).slice(str.length);
}
function array2hex(arr) {
  return arr
    .map(function (bit) {
      return number2hex(bit);
    })
    .join('');
}
function hex2Array(hexString) {
  var byteArray = [];

  for (var i = 0; i < hexString.length; i += 2) {
    var subString = hexString.substring(i, i + 2);
    var n = Number.parseInt(subString, 16);
    byteArray.push(n);
  }

  return byteArray;
}
/**
 * 提取厂商字段数据
 * @param {number[]} arr - 原始数据数组，使可用 hex2Array(rawData) 得到
 */

function extractManufactureData(arr) {
  var manufacture = [];
  var nextDataIsTypeValue = false;
  var nextDataIsManufactureValue = false;
  var endIndex = 0;
  arr.some(function (n, index) {
    if (index === endIndex) {
      // 进入此条件判断说明一段数据已查找完毕
      // 这里已经获取到了厂商字段，直接中断循环
      if (nextDataIsManufactureValue) {
        return true;
      } // 查看后 n 位的数据

      endIndex += n + 1;
      nextDataIsTypeValue = true;
      return false;
    }

    if (nextDataIsTypeValue) {
      nextDataIsTypeValue = false; // 表明后续字段为厂商字段

      nextDataIsManufactureValue = n === 0xff;
      return false;
    }

    if (nextDataIsManufactureValue) {
      manufacture.push(n);
    }

    return false;
  });

  if (manufacture.length > 0) {
    // 补充 0xFFFF
    manufacture.unshift(255, 255);
  }

  return manufacture;
}
function splitArray(arr) {
  // 把数据拆分成16个bite的数组
  var list = [];
  var temp = null;
  arr.forEach(function (value) {
    if (temp == null) {
      temp = [];
      list.push(temp);
    }

    temp.push(value);

    if (temp.length === 16) {
      temp = null;
    }
  });
  return list;
}
function ab2hex(buffer) {
  return array2hex(__spread(new Uint8Array(buffer)));
}
function ab2Array(buffer) {
  var arr = [];
  new Uint8Array(buffer).forEach(function (it) {
    return arr.push(it);
  });
  return arr;
}
function formatArrayToHex(arr) {
  return arr
    .map(function (value) {
      return number2hex(value);
    })
    .join(' ');
}
function stringToByteArray(str) {
  // NOTE 其实charCodeAt是不能正确的得到大于0xFFFF的字符的码点的
  return str.split('').map(function (item) {
    return item.charCodeAt(0);
  });
}
function byteArrayToString(arr) {
  return arr
    .map(function (n) {
      return String.fromCharCode(n);
    })
    .join('');
}
/**
 * 添加校验位值
 */

function addChecksum(cmdData) {
  var checksum = cmdData.reduce(function (acc, next) {
    return acc + next;
  }, 0); // eslint-disable-next-line no-bitwise

  cmdData.push(checksum & 0xff);
  return cmdData;
} //调整生日的算法

function calcAgeWithBirthday(birthday) {
  var time = new Date();
  var by = birthday.getFullYear();
  var bm = birthday.getMonth();
  var bd = birthday.getDate();
  var ty = time.getFullYear();
  var tm = time.getMonth();
  var td = birthday.getDate();
  var age = ty - by;

  if (tm < bm) {
    //月份不足，年龄-1
    age--;
  } else if (tm == bm && td < bd) {
    //同月，但天数不足
    age--;
  }

  return age;
}
/**
 * 类似于 new Date(arg) 生成一个Date对象实例
 * 但是会对字符串YYYY-MM-DD 格式特殊处理为 YYYY/MM/DD 格式，因为ios上不能解析 -
 * @param {any} arg
 */

function getNewDateInstance(arg) {
  return new Date(typeof arg === 'string' ? arg.replace(/-/g, '/') : arg);
}
function formatTime(date, fmt) {
  if (fmt === void 0) {
    fmt = 'YYYY-MM-DD HH:mm:ss';
  }

  if (date.toString() === 'Invalid Date') {
    // console.warn('[formatTime] Invalid Date');
    return '';
  }

  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    // 季度
    'q+': Math.floor((date.getMonth() + 3) / 3),
  };
  var week = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };
  var dateString = fmt;

  if (/(Y+)/.test(dateString)) {
    dateString = dateString.replace(
      RegExp.$1,
      ('' + date.getFullYear()).substr(4 - RegExp.$1.length)
    );
  }

  if (/(E+)/.test(dateString)) {
    // eslint-disable-next-line no-nested-ternary
    dateString = dateString.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '星期' : '周') : '') +
        week[date.getDay()]
    );
  } // 毫秒数

  if (/(S)/.test(dateString)) {
    dateString = dateString.replace(RegExp.$1, '' + date.getMilliseconds());
  }

  Object.keys(o).forEach(function (prop) {
    if (new RegExp('(' + prop + ')').test(dateString)) {
      var value = '' + o[prop];
      dateString = dateString.replace(
        RegExp.$1,
        ('00' + value).substr(value.length)
      );
    }
  });
  return dateString;
}
function formatDateToString(d) {
  return formatTime(d, 'YYYY-MM-DD');
}
function formatDateFullToString(d) {
  return formatTime(d, 'YYYY-MM-DD hh:mm:ss');
}
function logTimeString() {
  return formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss-S');
}
function times(num, radio) {
  return Number(num.toFixed(radio));
} // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/naming-convention

function wxPromise(fn) {
  return function (obj) {
    if (obj === void 0) {
      obj = {};
    }

    return new Promise(function (resolve, reject) {
      Object.assign(obj, {
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(err) {
          reject(err);
        },
      });
      fn(obj);
    });
  };
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function timeoutPromise(overtime, data) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(data);
    }, overtime);
  });
}
/**
 * 一个字节8位，这里解析两个字节的数据
 * @param {number} h
 * @param {number} l
 */

function decodeInteger(h, l) {
  // eslint-disable-next-line no-bitwise
  var d = (h << 8) + l;
  return d;
}
/**
 * 为了处理user信息里的性别gender字段
 * 统一返回数字
 * 1： 男性
 * 0：女性
 */

function sealGenderParam(gender) {
  if (['male', 1, QNBleGender.MALE].includes(gender)) {
    return 1;
  }

  return 0;
}
/**
 * 将onAaBbCc格式转为aa-bb-cc
 * @param {string} str
 * @param {string} [symbol=-] 连接符
 * @param {boolean} [trimHeadKebab=false]
 */

function kebabCaseAndRemoveOn(str, symbol, trimHeadKebab) {
  if (symbol === void 0) {
    symbol = '_';
  }

  if (trimHeadKebab === void 0) {
    trimHeadKebab = true;
  }

  var str1 = str.replace(new RegExp('^on'), '');
  var res = str1.replace(/([A-Z])/g, function (letter) {
    return '' + (symbol + letter.toLowerCase());
  });
  return trimHeadKebab ? res.replace(new RegExp('^' + symbol), '') : res;
}
/**
 * 获取wifi信号等级
 * 0级 rssi < -100
 * 1级 rssi [-100, -85) 1格信号
 * 2级 rssi [-85, -70) 2格信号
 * 3级 rssi [-70, -55) 3格信号
 * 4级 rssi >= -55 4格信号，满格信号
 * @param rssi - 信号强度，是负数
 */

function getWifiRssiLevel(rssi) {
  if (rssi < -100) {
    return 0;
  }

  if (rssi >= -100 && rssi < -85) {
    return 1;
  }

  if (rssi >= -85 && rssi < -70) {
    return 2;
  }

  if (rssi >= -70 && rssi < -55) {
    return 3;
  }

  if (rssi >= -55) {
    return 4;
  }
}
/**
 * 判断两个对象的值是否一致
 */

function equal(o1, o2) {
  if (o1 === o2) {
    return true;
  }

  if (_typeof(o1) !== 'object' || _typeof(o2) !== 'object') {
    return false;
  }

  var o1Keys = Object.keys(o1);
  var o2Keys = Object.keys(o2);

  if (o1Keys.length !== o2Keys.length) {
    return false;
  }

  return o1Keys.every(function (key) {
    if (!o2Keys.includes(key)) {
      return false;
    } // @ts-ignore

    var o1Val = o1[key]; // @ts-ignore

    var o2Val = o2[key];
    return equal(o1Val, o2Val);
  });
}
var utils = {
  hasOwnProperty: hasOwnProperty,
  number2hex: number2hex,
  array2hex: array2hex,
  hex2Array: hex2Array,
  extractManufactureData: extractManufactureData,
  splitArray: splitArray,
  ab2hex: ab2hex,
  ab2Array: ab2Array,
  formatArrayToHex: formatArrayToHex,
  stringToByteArray: stringToByteArray,
  addChecksum: addChecksum,
  calcAgeWithBirthday: calcAgeWithBirthday,
  formatTime: formatTime,
  formatDateToString: formatDateToString,
  formatDateFullToString: formatDateFullToString,
  logTimeString: logTimeString,
  wxPromise: wxPromise,
  timeoutPromise: timeoutPromise,
  decodeInteger: decodeInteger,
  sealGenderParam: sealGenderParam,
  kebabCaseAndRemoveOn: kebabCaseAndRemoveOn,
  equal: equal,
};

var QNBleCommonExtends =
  /** @class */
  (function () {
    function QNBleCommonExtends(_a) {
      var _b = _a === void 0 ? {} : _a,
        config = _b.config,
        operation = _b.operation;

      this.setConfig(config);
      this.setOperation(operation);
    }
    /**
     * 设置config
     * @param {QNBleTypings.QNBleConfig} config
     * @returns {void}
     */

    QNBleCommonExtends.prototype.setConfig = function (config) {
      if (config) {
        this.config = config;
      }
    };
    /**
     * 设置操作类
     * @param {QNBleTypings.QNBleOperation} operation
     * @returns {void}
     */

    QNBleCommonExtends.prototype.setOperation = function (operation) {
      if (operation) {
        this.operation = operation;
      }
    };

    QNBleCommonExtends.prototype.log = function () {
      var _a;

      var params = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }

      var timeString = logTimeString();

      if (this.config.logger) {
        (_a = this.config.logger).log.apply(_a, __spread([timeString], params));
      } else {
        // eslint-disable-next-line no-console
        console.log.apply(console, __spread([timeString], params));
      }
    };

    return QNBleCommonExtends;
  })();

var QNBleNativeCommonExtends =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeCommonExtends, _super);

    function QNBleNativeCommonExtends(params) {
      if (params === void 0) {
        params = {};
      }

      var _this = _super.call(this) || this; // 是否使用默认的http请求方法
      // 例如像小程序就必需使用小程序的接口请求api，那么就需要将此值设置为false，并实现 sendHttpRequest 方法

      _this.useDefaultHttpRequest = true; // 事件监听

      _this.listener = {
        onNativeBluetoothEnableChange: function onNativeBluetoothEnableChange(
          available
        ) {
          return available;
        },
        onNativeStartDiscoveryDevice:
          function onNativeStartDiscoveryDevice() {},
        onNativeStopDiscoveryDevice: function onNativeStopDiscoveryDevice() {},
        onNativeBleDeviceFound: function onNativeBleDeviceFound(bleDevice) {
          return bleDevice;
        },
        onNativeConnected: function onNativeConnected(deviceId) {
          return deviceId;
        },
        onNativeDisconnected: function onNativeDisconnected(deviceId) {
          return deviceId;
        },
        onNativeConnectOverTime: function onNativeConnectOverTime(deviceId) {
          return deviceId;
        },
        onNativeCharacteristicValueChange:
          function onNativeCharacteristicValueChange(payload) {
            return payload;
          },
        onDeviceConnectStateChange: function onDeviceConnectStateChange() {},
        onError: function onError(err) {
          return err;
        },
      };

      _this.setConfig(params.config);

      _this.setOperation(params.operation);

      _this.setListener(params.listener);

      return _this;
    }
    /**
     * 设置内部事件监听管理
     * @param {Partial<QNBleTypings.QNBleNativeEventListener>} listener
     */

    QNBleNativeCommonExtends.prototype.setListener = function (listener) {
      if (listener) {
        Object.assign(this.listener, listener);
      }
    };

    return QNBleNativeCommonExtends;
  })(QNBleCommonExtends);

var QNBleNative =
  /** @class */
  (function (_super) {
    __extends(QNBleNative, _super);

    function QNBleNative() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }

    return QNBleNative;
  })(QNBleNativeCommonExtends);

/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.4.5';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const b64ch =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = [...b64ch];
const b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => (tab[c] = i));
  return tab;
})(b64chs);
const b64re =
  /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom =
  typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it, fn = (x) => x) =>
        new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
const _mkUriSafe = (src) =>
  src.replace(/[+\/]/g, (m0) => (m0 == '+' ? '-' : '_')).replace(/=+$/m, '');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
  // console.log('polyfilled');
  let u32,
    c0,
    c1,
    c2,
    asc = '';
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if (
      (c0 = bin.charCodeAt(i++)) > 255 ||
      (c1 = bin.charCodeAt(i++)) > 255 ||
      (c2 = bin.charCodeAt(i++)) > 255
    )
      throw new TypeError('invalid character found');
    u32 = (c0 << 16) | (c1 << 8) | c2;
    asc +=
      b64chs[(u32 >> 18) & 63] +
      b64chs[(u32 >> 12) & 63] +
      b64chs[(u32 >> 6) & 63] +
      b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + '==='.substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa
  ? (bin) => btoa(bin)
  : _hasBuffer
  ? (bin) => Buffer.from(bin, 'binary').toString('base64')
  : btoaPolyfill;
const _fromUint8Array = _hasBuffer
  ? (u8a) => Buffer.from(u8a).toString('base64')
  : (u8a) => {
      // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
      const maxargs = 0x1000;
      let strs = [];
      for (let i = 0, l = u8a.length; i < l; i += maxargs) {
        strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
      }
      return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) =>
  urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (src) => unescape(encodeURIComponent(src));
//
const _encode = _hasBuffer
  ? (s) => Buffer.from(s, 'utf8').toString('base64')
  : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode = (src, urlsafe = false) =>
  urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode(src, true);
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (src) => decodeURIComponent(escape(src));
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
  // console.log('polyfilled');
  asc = asc.replace(/\s+/g, '');
  if (!b64re.test(asc)) throw new TypeError('malformed base64.');
  asc += '=='.slice(2 - (asc.length & 3));
  let u24,
    bin = '',
    r1,
    r2;
  for (let i = 0; i < asc.length; ) {
    u24 =
      (b64tab[asc.charAt(i++)] << 18) |
      (b64tab[asc.charAt(i++)] << 12) |
      ((r1 = b64tab[asc.charAt(i++)]) << 6) |
      (r2 = b64tab[asc.charAt(i++)]);
    bin +=
      r1 === 64
        ? _fromCC((u24 >> 16) & 255)
        : r2 === 64
        ? _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255)
        : _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255);
  }
  return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob
  ? (asc) => atob(_tidyB64(asc))
  : _hasBuffer
  ? (asc) => Buffer.from(asc, 'base64').toString('binary')
  : atobPolyfill;
const _decode = _hasBuffer
  ? (a) => Buffer.from(a, 'base64').toString('utf8')
  : (a) => btou(_atob(a));
const _unURI = (a) =>
  _tidyB64(a.replace(/[-_]/g, (m0) => (m0 == '-' ? '+' : '/')));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = _hasBuffer
  ? (a) => _U8Afrom(Buffer.from(_unURI(a), 'base64'))
  : (a) => _U8Afrom(_atob(_unURI(a)), (c) => c.charCodeAt(0));
const _noEnum = (v) => {
  return {
    value: v,
    enumerable: false,
    writable: true,
    configurable: true,
  };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
  const _add = (name, body) =>
    Object.defineProperty(String.prototype, name, _noEnum(body));
  _add('fromBase64', function () {
    return decode(this);
  });
  _add('toBase64', function (urlsafe) {
    return encode(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return encode(this, true);
  });
  _add('toBase64URL', function () {
    return encode(this, true);
  });
  _add('toUint8Array', function () {
    return toUint8Array(this);
  });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
  const _add = (name, body) =>
    Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
  _add('toBase64', function (urlsafe) {
    return fromUint8Array(this, urlsafe);
  });
  _add('toBase64URI', function () {
    return fromUint8Array(this, true);
  });
  _add('toBase64URL', function () {
    return fromUint8Array(this, true);
  });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
  extendString();
  extendUint8Array();
};
const gBase64 = {
  version: version,
  VERSION: VERSION,
  atob: _atob,
  atobPolyfill: atobPolyfill,
  btoa: _btoa,
  btoaPolyfill: btoaPolyfill,
  fromBase64: decode,
  toBase64: encode,
  encode: encode,
  encodeURI: encodeURI,
  encodeURL: encodeURI,
  utob: utob,
  btou: btou,
  decode: decode,
  fromUint8Array: fromUint8Array,
  toUint8Array: toUint8Array,
  extendString: extendString,
  extendUint8Array: extendUint8Array,
  extendBuiltins: extendBuiltins,
};

var QNBleError =
  /** @class */
  (function (_super) {
    __extends(QNBleError, _super); // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

    function QNBleError(errorType, extraData) {
      var _this = _super.call(this) || this;

      if (errorType instanceof QNBleError) {
        return errorType;
      } // @ts-ignore

      var detail =
        QNBleErrorDesc[errorType] ||
        QNBleErrorDesc[QNBleErrorType.UNKNOW_ERROR];
      _this.detail = detail; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      _this.extra = extraData; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

      _this.message = JSON.stringify({
        detail: detail,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        extra: extraData instanceof Error ? extraData.message : extraData,
      });
      return _this;
    }

    return QNBleError;
  })(Error);

var QNScaleBiz =
  /** @class */
  (function (_super) {
    __extends(QNScaleBiz, _super);

    function QNScaleBiz(hostProtocol) {
      var _this = _super.call(this, hostProtocol) || this;
      /**
       * <bodyShape-personGoal>: <method>
       */

      _this.algorithmMap = {
        '1-1': 2,
        '1-2': 2,
        '1-3': 2,
        '2-1': 2,
        '2-2': 4,
        '2-3': 4,
        '2-4': 2,
        '2-5': 2,
        '3-1': 2,
        '3-2': 14,
        '3-3': 14,
        '3-6': 4,
        '3-7': 4,
        '4-1': 2,
        '4-2': 2,
        '4-3': 2,
      };
      _this.weightScale = 100;
      _this.bleNative = hostProtocol.bleNative;
      _this.bleDevice = hostProtocol.bleDevice;
      _this.listener = hostProtocol.listener;

      _this.prepareDeviceProp();

      return _this;
    }
    /**
     * 根据SDK配置和当前连接的设备型号分析算法取值和指标显示情况
     */

    QNScaleBiz.prototype.prepareDeviceProp = function () {
      var _this = this;

      var _a; // 算法

      var method = 0; // 指标

      var bodyIndexFlag = 0; // 是否显示额外指标

      var extraFlag = 0;

      var _b =
          ((_a = this.operation) === null || _a === void 0
            ? void 0
            : _a.user) || {},
        bodyShape = _b.bodyShape,
        personGoal = _b.personGoal;

      if (bodyShape && personGoal) {
        method = this.algorithmMap[bodyShape + '-' + personGoal];

        if (method === 14) {
          method = 4;
          this.operation.user.isSport = true;
        }
      }

      if (this.config.useSdk && this.config.sdkConfig) {
        // 如果使用SDK并且已经请求到了SDK的配置信息
        var sdkConfig = this.config.sdkConfig;

        if (sdkConfig.business_models && sdkConfig.business_models.length > 0) {
          var modelId_1 = this.bleDevice.modelId;
          sdkConfig.business_models.some(function (model) {
            _this.log('去匹配设备', model, '算法', method);

            if (model.internal_model === modelId_1) {
              // 如果设备列表中有匹配的型号
              if (method === 0) {
                method = model.method;
              }

              bodyIndexFlag = model.body_index_flag;
              extraFlag = model.added_index_flag;
              return true;
            }

            return false;
          });
        } // 没有找到对应设备，使用默认的相关配置

        if (method === 0) {
          method = sdkConfig.business_info.default_method;
        }

        if (bodyIndexFlag === 0) {
          bodyIndexFlag = sdkConfig.business_info.default_index_flag;
        }

        if (extraFlag === 0) {
          extraFlag = sdkConfig.business_info.default_added_flag;
        }
      }

      this.sdkObj = {
        method: method,
        bodyIndexFlag: bodyIndexFlag,
        extraFlag: extraFlag,
      };
      this.log('配置的SDK', this.sdkObj);
      return this.sdkObj;
    };
    /**
     * 请求算法库接口
     * @param {TypedScaleData} scaleData 秤上传的原始数据
     */

    QNScaleBiz.prototype.fetchScaleData = function (scaleData) {
      var _this = this;

      var _a, _b;

      if (!this.sdkObj) {
        throw new Error('请先执行 prepareDeviceProp 方法');
      }

      var age =
        this.operation.user.age ||
        calcAgeWithBirthday(getNewDateInstance(this.operation.user.birthday));
      var gender = sealGenderParam(this.operation.user.gender);
      var bodyParamsObject = {
        Body_Height: scaleData.height || this.operation.user.height,
        User_Age: age,
        User_Gender: gender,
        Person_Type: 0,
      };

      if (this.operation.user.isSport) {
        // 注入运动员相关参数
        bodyParamsObject.Person_Type = 1;
      }

      if (this.operation.user.bodyShape && this.operation.user.personGoal) {
        // 判断是否有体型和目标的选项
        bodyParamsObject.Person_Body_Shape = this.operation.user.bodyShape;
        bodyParamsObject.Person_Goal = this.operation.user.personGoal;
      }

      var scaleParam = {
        mac: scaleData.mac,
        scale_weight: scaleData.weight,
        scale_resistance: scaleData.resistance50,
        scale_resistance500: scaleData.resistance500,
        heart_rate: scaleData.heartRate,
      };
      var bodyParamString = JSON.stringify(bodyParamsObject);
      var scaleParamString = JSON.stringify(scaleParam);
      this.lastMeasurementTime = new Date();
      var params = {
        app_id: this.config.appId,
        app_type: this.config.appType,
        body_param: bodyParamString,
        scale_param: scaleParamString,
        local_name: this.bleDevice.name,
        improve_flag: scaleData.hasResistance,
        manufacturer: this.bleDevice.modelId,
        // 返回简单数据类型
        simple: 1,
        // 启用阻抗调整
        on_flag: 1,
        timestamp: this.lastMeasurementTime.getTime(),
        sdk_flag: 0,
      };

      if (this.operation.user.birthday) {
        params.birthday = this.operation.user.birthday;
      }

      if (this.config.useHerbalife) {
        // 如果设置了康宝莱算法
        params.calc_type = 10;
        params.version = this.operation.user.isSport ? 4 : 2;
      }

      if (this.config.useSdk) {
        params.sdk_flag = 1;
      }

      this.log('上传测量数据', params);
      (_b = (_a = this.listener).onStartFetchScaleData) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a);
      return this.bleNative
        .sendHttpRequest({
          data: params,
          method: 'POST',
          url: this.config.algorithmUrl,
        })
        .then(function (data) {
          var _a, _b, _c, _d;

          if (data.code !== '200') {
            _this.log('上传测量数据失败', data);

            var err = new QNBleError(
              QNBleErrorType.SEND_MEASURE_DATA_FAILED,
              data
            );
            (_b = (_a = _this.listener).onFetchScaleDataFail) === null ||
            _b === void 0
              ? void 0
              : _b.call(_a, err);
            throw err;
          }

          var measureData = _this.prepareData(data.resultData);

          if (scaleData.height) {
            measureData.stature = scaleData.height;
          }

          (_d = (_c = _this.listener).onGetScaleData) === null || _d === void 0
            ? void 0
            : _d.call(_c, {
                response: data.resultData,
                measure: measureData,
                scaleData: scaleData,
              });
          return measureData;
        })
        ['catch'](function (error) {
          var _a, _b;

          var err = new QNBleError(
            QNBleErrorType.SEND_MEASURE_DATA_FAILED,
            error
          );
          (_b = (_a = _this.listener).onFetchScaleDataFail) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, err);
          throw err;
        });
    };

    QNScaleBiz.prototype.makeMeasures = function (data, isWsp) {
      var measure = {};
      var flag = this.sdkObj.bodyIndexFlag;
      var useSdk = this.config.useSdk;
      var measureProps = [
        {
          prop: 'user',
          _if: true,
          value: this.operation.user,
        },
        {
          prop: 'device',
          _if: true,
          value: this.bleDevice,
        },
        {
          prop: 'time',
          _if: true,
          value: isWsp ? data.time : this.lastMeasurementTime,
        },
        {
          prop: 'score',
          _if: true,
          value: Number.parseFloat(data.score.toFixed(1)),
        },
        {
          prop: 'weight',
          _if: true,
          value: Number.parseFloat(data.weight.toFixed(2)),
        },
        {
          prop: 'bmi',
          _if: true,
          value: Number.parseFloat(data.bmi.toFixed(1)),
        },
        {
          prop: 'bodyfat',
          _if: true,
          value: Number.parseFloat(data.bodyfat.toFixed(1)),
        },
        {
          prop: 'heartRate',
          _if: true,
          value: function value() {
            if (isWsp) {
              return data.heartRate || 0;
            }

            return data.heart_rate
              ? Number.parseInt(data.heart_rate.toFixed(0), 10)
              : 0;
          },
        },
        {
          prop: 'subfat',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 4) & 0x01) === 1;
            }

            return data.subfat_flag;
          },
          value: Number.parseFloat(data.subfat.toFixed(1)),
        },
        {
          prop: 'visfat',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 5) & 0x01) === 1;
            }

            return data.visfat_flag;
          },
          value: Number.parseFloat(data.visfat.toFixed(0)),
        },
        {
          prop: 'water',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 6) & 0x01) === 1;
            }

            return data.water_flag;
          },
          value: Number.parseFloat(data.water.toFixed(1)),
        },
        {
          prop: 'muscle',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 7) & 0x01) === 1;
            }

            return data.muscle_flag;
          },
          value: Number.parseFloat(data.muscle.toFixed(1)),
        },
        {
          prop: 'bone',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 8) & 0x01) === 1;
            }

            return data.bone_flag;
          },
          value: Number.parseFloat((data.bone / 10).toFixed(2)),
        },
        {
          prop: 'bmr',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 9) & 0x01) === 1;
            }

            return data.bmr_flag;
          },
          value: Number.parseFloat((data.bmr * 10).toFixed(0)),
        },
        {
          prop: 'bodyShape',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 10) & 0x01) === 1;
            }

            return data.body_shape_flag;
          },
          value: function value() {
            if (isWsp) {
              return data.bodyShape;
            }

            return data.body_shape;
          },
        },
        {
          prop: 'protein',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 11) & 0x01) === 1;
            }

            return data.protein_flag;
          },
          value: Number.parseFloat(data.protein.toFixed(1)),
        },
        {
          prop: 'lbm',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 12) & 0x01) === 1;
            }

            return data.fat_free_weight_flag;
          },
          value: function value() {
            if (isWsp) {
              return Number.parseFloat(data.lbm.toFixed(2));
            }

            return Number.parseFloat(data.fat_free_weight.toFixed(2));
          },
        },
        {
          prop: 'muscleMass',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 13) & 0x01) === 1;
            }

            return data.sinew_flag;
          },
          value: function value() {
            if (isWsp) {
              // eslint-disable-next-line max-len
              return Number.parseFloat(data.muscleMass.toFixed(2));
            }

            return Number.parseFloat(data.sinew.toFixed(2));
          },
        },
        {
          prop: 'bodyAge',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 14) & 0x01) === 1;
            }

            return data.bodyage_flag;
          },
          value: function value() {
            if (isWsp) {
              return data.bodyAge;
            }

            return data.bodyage;
          },
        },
        {
          prop: 'heartIndex',
          _if: function _if() {
            if (useSdk || isWsp) {
              return ((flag >> 17) & 0x01) === 1;
            }

            return data.cardiac_index_flag;
          },
          value: function value() {
            if (isWsp) {
              return Number.parseFloat(data.heartIndex.toFixed(1)) || 0;
            }

            return Number.parseFloat(data.cardiac_index.toFixed(1)) || 0;
          },
        },
      ];
      measureProps.forEach(function (item) {
        var _a; // this.log('makeMeasures:prop', item.prop);
        // eslint-disable-next-line @typescript-eslint/naming-convention

        var _if = typeof item._if === 'function' ? item._if() : item._if;

        if (_if) {
          var value =
            typeof item.value === 'function' ? item.value() : item.value;
          Object.assign(measure, ((_a = {}), (_a[item.prop] = value), _a));
        }
      });
      return measure;
    };

    QNScaleBiz.prototype.prepareData = function (data) {
      if (!this.sdkObj) {
        throw new Error('请先执行 prepareDeviceProp 方法');
      }

      return this.makeMeasures(data);
    };

    QNScaleBiz.prototype.prepareWspMeasureData = function (data) {
      if (!this.sdkObj) {
        throw new Error('请先执行 prepareDeviceProp 方法');
      }

      return this.makeMeasures(data, true);
    };
    /**
     * 得到体重数据
     * @param {number} a1
     * @param {number} b1
     */

    QNScaleBiz.prototype.decodeWeight = function (a1, b1) {
      var d = decodeInteger(a1, b1);
      var weight = d / this.weightScale;

      while (weight > 250) {
        weight /= 10;
      }

      return weight;
    };
    /**
     * 得到身高数据
     * @param {number} a1
     * @param {number} b1
     */

    QNScaleBiz.prototype.decodeHeight = function (a1, b1) {
      var d = decodeInteger(a1, b1);
      return d / 10;
    };

    QNScaleBiz.prototype.fakeRequest = function (weight) {
      var _this = this;

      var scaleData = {
        weight: weight,
        resistance50: 500,
        resistance500: 500,
        hasResistance: 1,
      };
      return this.fetchScaleData(scaleData).then(function (res) {
        _this.log('fakeRequest返回数据', res);

        return res;
      });
    };

    return QNScaleBiz;
  })(QNBleCommonExtends);

var QNBleProtocol =
  /** @class */
  (function (_super) {
    __extends(QNBleProtocol, _super);

    function QNBleProtocol(params) {
      var _this = _super.call(this, params) || this; // serviceId

      _this.UUID_IBT_SERVICE = ''; // characteristicId_read

      _this.UUID_IBT_READ = ''; // characteristicId_write

      _this.UUID_IBT_WRITE = '';
      _this.actionFlows = new Array();
      _this.eventManager = params.eventManager;

      _this.setBleNative(params.bleNative);

      _this.setListener(params.listener);

      _this.setBleDevice(params.bleDevice);

      return _this;
    }
    /**
     * 设置原生蓝牙逻辑类
     * @param {QNBleNative} native 原生蓝牙逻辑类
     * @returns {void}
     */

    QNBleProtocol.prototype.setBleNative = function (_native) {
      this.bleNative = _native || this.bleNative;
    };
    /**
     * 设置设备逻辑类
     * @param {QNBleDevice} bleDevice
     * @returns {void}
     */

    QNBleProtocol.prototype.setBleDevice = function (bleDevice) {
      this.bleDevice = bleDevice || this.bleDevice;
    };
    /**
     * 计算体重
     * @param {*} height 高八位
     * @param {*} lower 低八位
     * @returns
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleProtocol.prototype.decodeWeight = function (height, lower) {
      // eslint-disable-next-line no-bitwise
      var num = (height << 8) + lower;
      return times(num, 2);
    };
    /**
     * @param {Partial<QNBleTypings.QNDeviceEventListener>} listener
     */

    QNBleProtocol.prototype.setListener = function (listener) {
      // /**
      //  * @deprecated
      //  */
      // this.listener = {} as T;
      // // eslint-disable-next-line no-restricted-syntax,guard-for-in
      // for (const method in listener) {
      //   // eslint-disable-next-line max-len
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
      //   (this.listener as any)[method] = new Proxy(
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     (listener as any)[method],
      //     new QNEventHandler(method, this.eventManager),
      //   );
      // }
      this.listener = listener;
    };

    Object.defineProperty(QNBleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNBleProtocol.prototype, 'characteristicReadId', {
      get: function get() {
        return this.UUID_IBT_READ;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNBleProtocol.prototype, 'characteristicWriteId', {
      get: function get() {
        return this.UUID_IBT_WRITE;
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * 初始化蓝牙特征值等
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 1:
              services = _a.sent();
              this.log('获取到蓝牙服务列表', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(
                  deviceId,
                  this.serviceId
                ),
              ];

            case 2:
              _a.sent();

              this.log('发现特征值成功，使能特征值');
              return [
                2,
                /*return*/
                this.bleNative.enableNotify(
                  deviceId,
                  this.serviceId,
                  this.characteristicReadId
                ),
              ];
          }
        });
      });
    };
    /**
     * 对外暴露的方法
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.onGetData = function (payload) {
      var hexArray = formatArrayToHex(payload.data);
      this.log(
        '[\u6536\u5230] serviceId: ' +
          payload.serviceId +
          '; characteristicId: ' +
          payload.characteristicId +
          '; data: ' +
          hexArray
      );
      return this.decode(payload);
    };
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.decode = function (payload) {
      return Promise.reject(new Error('decode方法必须被子类继承实现'));
    };
    /**
     * 往设备写入数据
     * @param {Object} payload
     * @param {number[]} payload.cmdData
     * @param {string} [payload.serviceId]
     * @param {string} [payload.characteristicId] 写数据的特征值
     * @param {boolean} [payload.needSum=true] 是否需要自动计算并添加校验位
     */

    QNBleProtocol.prototype.writeData = function (_a) {
      var cmdData = _a.cmdData,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        _b = _a.needSum,
        needSum = _b === void 0 ? true : _b;
      var data = needSum ? addChecksum(cmdData) : cmdData; // eslint-disable-next-line @typescript-eslint/naming-convention

      var _serviceId = serviceId || this.serviceId; // eslint-disable-next-line @typescript-eslint/naming-convention

      var _characteristicId = characteristicId || this.characteristicWriteId;

      this.log(
        '[\u5199\u5165] serviceId: ' +
          _serviceId +
          '; characteristicId: ' +
          _characteristicId +
          '; data: ' +
          formatArrayToHex(data)
      );
      return this.bleNative.writeData(
        this.bleDevice.deviceId,
        _serviceId,
        _characteristicId,
        data
      );
    };

    QNBleProtocol.prototype.writeCmd = function (_a) {
      var header = _a.header,
        cmd = _a.cmd,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId;
      return this.writeData({
        serviceId: serviceId,
        characteristicId: characteristicId,
        cmdData: __spread([header, cmd.length + 3], cmd),
      });
    };
    /**
     * 连接断开后，需要调用该方法，清除一些资源
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleProtocol.prototype.close = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.bleServer)
                return [
                  3, /*break*/
                  2,
                ];
              this.log('close方法中关闭蓝牙服务');
              return [
                4,
                /*yield*/
                this.bleNative.stopAdvertising(this.bleServer),
              ];

            case 1:
              _a.sent();

              return [
                3, /*break*/
                4,
              ];

            case 2:
              return [
                4,
                /*yield*/
                this.bleNative.closeBleConnection(this.bleDevice),
              ];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBleProtocol.prototype.buildAdvertisingData = function (data) {
      throw new Error('buildAdvertisingData方法必须被子类继承实现');
    };
    /**
     * 发送广播数据
     * @param {Uint8Array} data
     */

    QNBleProtocol.prototype.doAdvertising = function (data) {
      return __awaiter(this, void 0, void 0, function () {
        var cmdData, hexData, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              cmdData = this.buildAdvertisingData(data);
              hexData = array2hex(cmdData);

              if (this.currentAdvertis === hexData) {
                this.log('广播一致，不需要重启广播');
                return [
                  2,
                  /*return*/
                  undefined,
                ];
              }

              if (this.currentAdvertis) {
                this.log('需要发送的广播跟之前不一致，需要重新发送');
              }

              this.currentAdvertis = hexData;
              if (!this.bleServer)
                return [
                  3, /*break*/
                  2,
                ];
              this.log('底层正在广播，取消广播重新发送', this.bleServer);
              return [
                4,
                /*yield*/
                this.bleNative.stopAdvertising(this.bleServer),
              ];

            case 1:
              _b.sent();

              return [
                3, /*break*/
                4,
              ];

            case 2:
              _a = this;
              return [
                4,
                /*yield*/
                this.bleNative.createBleServer(),
              ];

            case 3:
              _a.bleServer = _b.sent();
              this.log('创建蓝牙广播服务成功');
              _b.label = 4;

            case 4:
              return [
                2,
                /*return*/
                this.bleNative.doAdvertising(this.bleServer, cmdData),
              ];
          }
        });
      });
    };

    return QNBleProtocol;
  })(QNBleCommonExtends);
/**
 * 处理细分业务流的协议类
 */

var QNBleActionFlow =
  /** @class */
  (function () {
    function QNBleActionFlow(protocol) {
      this.bleNative = protocol.bleNative;
      this.bleDevice = protocol.bleDevice;
      this.listener = protocol.listener;
      this.operation = protocol.operation;
      this.protocol = protocol;
    }

    QNBleActionFlow.prototype.accept = function (action) {
      if (this.acceptActions.indexOf(action) >= 0) {
        this.action = action;
        return true;
      } else {
        return false;
      }
    };
    /**
     * 写入数据
     * @param param0
     */

    QNBleActionFlow.prototype.writeData = function (_a) {
      var cmdData = _a.cmdData,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        _b = _a.needSum,
        needSum = _b === void 0 ? true : _b;
      return this.protocol.writeData({
        cmdData: cmdData,
        serviceId: serviceId,
        characteristicId: characteristicId,
        needSum: needSum,
      });
    };

    QNBleActionFlow.prototype.writeCmd = function (
      serviceUUID,
      writeUUID,
      header,
      byteList
    ) {
      return this.writeData({
        serviceId: serviceUUID,
        characteristicId: writeUUID,
        cmdData: __spread([header, byteList.length + 3], byteList),
      });
    };

    QNBleActionFlow.prototype.log = function () {
      var _a;

      var objs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
      }

      (_a = this.bleNative).log.apply(_a, __spread(objs));
    };
    /**
     * 计算体重
     * @param {*} height 高八位
     * @param {*} lower 低八位
     * @returns
     */

    QNBleActionFlow.prototype.decodeWeight = function (height, lower) {
      var num = (height << 8) + lower;
      return times(num / 100, 2);
    };

    return QNBleActionFlow;
  })();

var QNBleBaseScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(QNBleBaseScaleProtocol, _super);

    function QNBleBaseScaleProtocol() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * 集成业务工具类
     */

    QNBleBaseScaleProtocol.prototype.instanceScaleBiz = function () {
      this.scaleBizImp = new QNScaleBiz(this);
    };

    return QNBleBaseScaleProtocol;
  })(QNBleProtocol);

function getDeviceTarget(nativeDevice) {
  var bleName = nativeDevice.bluetoothName;
  /**
   * 1: 云康宝
   * 2: 时代数维
   */

  if (bleName === 'QN-HS' && nativeDevice.manufacturer.length >= 14) {
    return 1;
  }

  if (/^K12H/.test(bleName)) {
    return 2;
  }

  return 0;
}

function HSSyncTime() {
  var d = Math.floor(Date.now() / 1000);
  return [d & 0xff, (d >> 8) & 0xff, (d >> 16) & 0xff, (d >> 24) & 0xff];
}

function buildCmd(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData会自动添加和计算校验位

  return cmdData;
}

var HeightWeightScaleProfile =
  /** @class */
  (function () {
    function HeightWeightScaleProfile() {
      this.defaultAction = QNBleAction.SET_WIFI;
      this.type = QNBleDeviceType.HEIGHT_WEIGHT_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    HeightWeightScaleProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return [1, 2].includes(getDeviceTarget(nativeDevice));
    };

    HeightWeightScaleProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var deviceTarget = getDeviceTarget(nativeDevice);
      var targetDevice = {
        modelId: '0004',
        isSupportWifi: true,
        isScreenOn: true,
      };

      if (deviceTarget === 1) {
        var manufacturer = nativeDevice.manufacturer; // 身高体重秤有兼容mes和不兼容mes的版本，mac地址会发生反转, 小于26位的是不兼容mes

        var length_1 = manufacturer.length - 2;
        var macs = manufacturer.slice(-7, -1);

        if (length_1 > 26) {
          macs.reverse();
        }

        var sns = [
          number2hex(manufacturer[4]),
          number2hex(manufacturer[5]),
          number2hex(manufacturer[6]),
        ];
        Object.assign(targetDevice, {
          mac: macs.join(':'),
          sn: sns.join(''),
        });
      } else if (deviceTarget === 2) {
        var bleName = nativeDevice.bluetoothName;
        var sn = bleName.slice(-6);
        Object.assign(targetDevice, {
          mac: '',
          sn: sn,
        });
      }

      return targetDevice;
    };

    return HeightWeightScaleProfile;
  })();

var HeightWeightScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(HeightWeightScaleProtocol, _super);

    function HeightWeightScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000ABF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000ABF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000ABF2-0000-1000-8000-00805F9B34FB'; // 最后收到数据的时间

      _this.lastWeightTime = 0; // 当前执行命令的包的序号

      _this.currentCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(HeightWeightScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(
      HeightWeightScaleProtocol.prototype,
      'characteristicReadId',
      {
        get: function get() {
          return this.UUID_IBT_READ;
        },
        enumerable: false,
        configurable: true,
      }
    );
    Object.defineProperty(
      HeightWeightScaleProtocol.prototype,
      'characteristicWriteId',
      {
        get: function get() {
          return this.UUID_IBT_WRITE;
        },
        enumerable: false,
        configurable: true,
      }
    );

    HeightWeightScaleProtocol.prototype.prepare = function () {
      var _this = this;

      this.instanceScaleBiz();
      var deviceId = this.bleDevice.deviceId;
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('获取到蓝牙服务列表', services); // 查找服务特征值方案

          services.some(function (service) {
            if (service.characteristicId === _this.UUID_IBT_SERVICE) {
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(
              deviceId,
              _this.serviceId
            );
          });
        })
        .then(function () {
          _this.log('发现特征值成功'); // 使能特征值

          return _this.bleNative.enableNotify(
            deviceId,
            _this.serviceId,
            _this.characteristicReadId
          );
        })
        ['catch'](function (err) {
          _this.log('prepare出错', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    HeightWeightScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      return __awaiter(this, void 0, void 0, function () {
        var data, scaleType, _j, height, weight, fatEnable, timeData, cmd;

        return __generator(this, function (_k) {
          switch (_k.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _j = data[0];

              switch (_j) {
                case 0x10:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x12:
                  return [
                    3, /*break*/
                    10,
                  ];

                case 0x14:
                  return [
                    3, /*break*/
                    12,
                  ];

                case 0x61:
                  return [
                    3, /*break*/
                    16,
                  ];

                case 0x63:
                  return [
                    3, /*break*/
                    18,
                  ];

                case 0x65:
                  return [
                    3, /*break*/
                    23,
                  ];

                case 0x67:
                  return [
                    3, /*break*/
                    25,
                  ];

                case 0x69:
                  return [
                    3, /*break*/
                    29,
                  ];

                case 0x6b:
                  return [
                    3, /*break*/
                    31,
                  ];

                case 0x6f:
                  return [
                    3, /*break*/
                    36,
                  ];

                case 0x71:
                  return [
                    3, /*break*/
                    38,
                  ];

                case 0x73:
                  return [
                    3, /*break*/
                    43,
                  ];

                case 0x74:
                  return [
                    3, /*break*/
                    44,
                  ];
              }

              return [
                3, /*break*/
                47,
              ];

            case 1:
              height = this.scaleBizImp.decodeHeight(data[11], data[12]);
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              this.log('接收到0x10命令', height, weight);
              if (!(data[5] === 0))
                return [
                  3, /*break*/
                  2,
                ]; // 实时的重量数据

              (_b = (_a = this.listener).onGetUnsteadyWeight) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [
                3, /*break*/
                9,
              ];

            case 2:
              if (!(data[5] === 1))
                return [
                  3, /*break*/
                  4,
                ]; // 电阻测量完毕

              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, height, data),
              ];

            case 3:
              // 电阻测量完毕
              _k.sent();

              return [
                3, /*break*/
                9,
              ];

            case 4:
              if (!(data[5] === 3))
                return [
                  3, /*break*/
                  5,
                ]; // 身高实时数据

              this.lastWeightTime = height === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyHeight) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, {
                    height: height,
                  });
              return [
                3, /*break*/
                9,
              ];

            case 5:
              if (!(data[5] === 4))
                return [
                  3, /*break*/
                  8,
                ]; // 身高测量结果

              (_f = (_e = this.listener).onMeasureHeightEnd) === null ||
              _f === void 0
                ? void 0
                : _f.call(_e, {
                    weight: weight,
                    height: height,
                  });
              fatEnable = data[data.length - 2];
              if (!!fatEnable)
                return [
                  3, /*break*/
                  7,
                ];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, height, data),
              ];

            case 6:
              _k.sent();

              _k.label = 7;

            case 7:
              return [
                3, /*break*/
                9,
              ];

            case 8:
              if (data[5] === 5);

              _k.label = 9;

            case 9:
              return [
                3, /*break*/
                48,
              ];

            case 10:
              this.log('接收到0x12命令');
              this.lastWeightTime = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x13, 0x9, scaleType, 0x01, 0, 0, 0, 0],
                }),
              ];

            case 11:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 12:
              this.log('接收到0x14命令');
              if (!(this.operation.action === QNBleAction.SET_WIFI))
                return [
                  3, /*break*/
                  14,
                ]; // 通知秤准备配网

              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(),
              ];

            case 13:
              // 通知秤准备配网
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 14:
              timeData = HSSyncTime();
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x20,
                    0x8,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3],
                  ],
                }),
              ];

            case 15:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 16:
              this.log('接收到0x61命令'); // 收到开始配网的回复
              // 开始发送SSID命令

              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 17:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 18:
              this.log('接收到0x63命令');
              if (!(this.currentCmdNo < this.ssidCmdData.length))
                return [
                  3, /*break*/
                  20,
                ]; // ssid还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 19:
              // ssid还没发送完
              _k.sent();

              return [
                3, /*break*/
                22,
              ];

            case 20:
              // ssid已经发送，重置序号，开始发送wifi密码
              this.currentCmdNo = 0;
              this.log('发送启动设置 WIFI密码 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 21:
              _k.sent();

              _k.label = 22;

            case 22:
              return [
                3, /*break*/
                48,
              ];

            case 23:
              this.log('接收到0x65命令');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 24:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 25:
              this.log('接收到0x67命令');
              if (!(this.currentCmdNo < this.pwdCmdData.length))
                return [
                  3, /*break*/
                  27,
                ]; // wifi密码还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 26:
              // wifi密码还没发送完
              _k.sent();

              return [
                3, /*break*/
                28,
              ];

            case 27:
              // wifi密码已发送完，重置序号
              this.currentCmdNo = 0;
              _k.label = 28;

            case 28:
              return [
                3, /*break*/
                48,
              ];

            case 29:
              this.log('接收到0x69命令');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 30:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 31:
              this.log('接收到0x6B命令');
              if (!(this.currentCmdNo < this.dataServerUrlData.length))
                return [
                  3, /*break*/
                  33,
                ]; // 数据服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 32:
              // 数据服务器URL还没发送完
              _k.sent();

              return [
                3, /*break*/
                35,
              ];

            case 33:
              // 数据服务器URL已经发送，重置序号，开始发送OTA服务器URL
              this.currentCmdNo = 0;
              this.log('发送启动设置 OTA服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 34:
              _k.sent();

              _k.label = 35;

            case 35:
              return [
                3, /*break*/
                48,
              ];

            case 36:
              this.log('接收到0x6F命令');
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 37:
              _k.sent();

              return [
                3, /*break*/
                48,
              ];

            case 38:
              this.log('接收到0x71命令');
              if (!(this.currentCmdNo < this.otaServerUrlData.length))
                return [
                  3, /*break*/
                  40,
                ]; // OTA服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 39:
              // OTA服务器URL还没发送完
              _k.sent();

              return [
                3, /*break*/
                42,
              ];

            case 40:
              // OTA服务器URL已发送完，重置序号，开始发送加密秘钥
              this.currentCmdNo = 0;
              cmd = this.encryptKeyCmdData;
              this.log('发送加密密钥数据');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: __spread([0x72, 0x10, 0x01], cmd),
                }),
              ];

            case 41:
              _k.sent();

              _k.label = 42;

            case 42:
              return [
                3, /*break*/
                48,
              ];

            case 43: {
              this.log('接收到0x73命令'); // 写入加密密钥成功
              // 通知配网成功

              (_h = (_g = this.listener).onSetWifiSuccess) === null ||
              _h === void 0
                ? void 0
                : _h.call(_g);
              return [
                3, /*break*/
                48,
              ];
            }

            case 44:
              this.log('接收到0x74命令'); // 收到配网成功的命令

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x75, 0x04, 1],
                }),
              ];

            case 45:
              // 收到配网成功的命令
              _k.sent();

              this.currentCmdNo = 0;
              this.log('发送启动设置 数据服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 46:
              _k.sent(); // this.deviceEventListener
              //   && this.deviceEventListener.onSetWifiSuccess
              //   && this.deviceEventListener.onSetWifiSuccess();

              return [
                3, /*break*/
                48,
              ];

            case 47:
              return [
                3, /*break*/
                48,
              ];

            case 48:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    HeightWeightScaleProtocol.prototype.doPrepareSetWifi = function () {
      var _this = this;

      var _a = this.operation,
        _b = _a.wifiSsid,
        wifiSsid = _b === void 0 ? '' : _b,
        _c = _a.wifiPwd,
        wifiPwd = _c === void 0 ? '' : _c,
        _d = _a.dataServerUrl,
        dataServerUrl =
          _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/aios?code=' : _d,
        _e = _a.otaServerUrl,
        otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e,
        _f = _a.encryptKey,
        encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f;
      this.log('wifiSsid', wifiSsid, 'wifiPwd', wifiPwd);

      if (wifiSsid.length > 32) {
        return Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR));
      }

      if (wifiPwd.length > 64) {
        return Promise.reject(
          new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)
        );
      } // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

      var ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
      var pwdByteArray = stringToByteArray(wifiPwd);
      var dataServerUrlByteArray = stringToByteArray(dataServerUrl);
      var otaServerUrlByteArray = stringToByteArray(otaServerUrl);
      this.ssidCmdData = splitArray(ssidByteArray);
      this.pwdCmdData = splitArray(pwdByteArray);
      this.dataServerUrlData = splitArray(dataServerUrlByteArray);
      this.otaServerUrlData = splitArray(otaServerUrlByteArray);
      this.encryptKeyCmdData = stringToByteArray(encryptKey); // 当前发包的序号

      this.currentCmdNo = 0;
      return Promise.resolve().then(function () {
        _this.log('使能wifi成功，开始写入wifi 发送启动设置 SSID 命令');

        return _this.writeData({
          cmdData: [
            0x60,
            0x04, // 要发的总包数
            _this.ssidCmdData.length,
          ],
        });
      });
    };

    HeightWeightScaleProtocol.prototype.sendWifiSsid = function () {
      this.log(
        'ssidCmdData数据',
        this.ssidCmdData,
        'currentCmdNo',
        this.currentCmdNo
      );
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 PWD \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' +
          this.currentCmdNo +
          ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' +
          this.currentCmdNo +
          ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };

    HeightWeightScaleProtocol.prototype.dispatchSteadyData = function (
      weight,
      height,
      data
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleType,
          sendCmd,
          testTime,
          hasResistance,
          resistance50,
          resistance500,
          scaleData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _a.sent();

              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                height: height,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };
              this.log('称重结束', scaleData);
              return [
                2,
                /*return*/
                this.scaleBizImp.fetchScaleData(scaleData),
              ];
          }
        });
      });
    };

    HeightWeightScaleProtocol.bleProfile = new HeightWeightScaleProfile();
    return HeightWeightScaleProtocol;
  })(QNBleBaseScaleProtocol);

var SECOND_2000_YEAR = 946656000;
/**
 * 是否是心率秤
 * @param {number} scaleType
 */

function isHeartRateScale(scaleType) {
  return scaleType === 0x21;
}

function buildCmd$1(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData会自动添加和计算校验位
  // return addChecksum(cmdData);

  return cmdData;
}

var NormalBleScalebleProfile =
  /** @class */
  (function () {
    function NormalBleScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.NORMAL_BLE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    NormalBleScalebleProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      var bleName = nativeDevice.bluetoothName;

      if (
        bleName === 'QN-Scale' ||
        bleName === 'QN-Scale1' ||
        bleName === 'ZT-Scale1' || // 接入华为运动健康和智慧生活的秤
        // 华为hilink的秤的蓝牙名都以Hi-开头
        /^Hi-/.test(bleName)
      ) {
        return nativeDevice.manufacturer.length < 19;
      }

      return false;
    };

    NormalBleScalebleProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;

      if (manufacturer.length < 13) {
        return {};
      }

      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: manufacturer[5] !== 1,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return NormalBleScalebleProfile;
  })();

var NormalBleScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(NormalBleScaleProtocol, _super);

    function NormalBleScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFE0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFE3-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_SERVICES_1 = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ_1 = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE_1 = '0000FFF2-0000-1000-8000-00805F9B34FB';
      _this.hasReceived = false;
      _this.lastWeightTime = 0;
      _this.isHoltk = false;
      return _this;
    }

    Object.defineProperty(NormalBleScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_SERVICES_1 : this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(
      NormalBleScaleProtocol.prototype,
      'characteristicReadId',
      {
        get: function get() {
          return this.isHoltk ? this.UUID_IBT_READ_1 : this.UUID_IBT_READ;
        },
        enumerable: false,
        configurable: true,
      }
    );
    Object.defineProperty(
      NormalBleScaleProtocol.prototype,
      'characteristicWriteId',
      {
        get: function get() {
          return this.isHoltk ? this.UUID_IBT_WRITE_1 : this.UUID_IBT_WRITE;
        },
        enumerable: false,
        configurable: true,
      }
    );

    NormalBleScaleProtocol.prototype.prepare = function () {
      var _this = this; // 集成业务类

      this.instanceScaleBiz();
      var deviceId = this.bleDevice.deviceId;
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('获取到蓝牙服务列表', services); // 查找服务特征值方案

          services.some(function (service) {
            if (service === _this.UUID_IBT_SERVICES_1) {
              _this.isHoltk = true;
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(
              deviceId,
              _this.serviceId
            );
          });
        })
        .then(function () {
          _this.log('发现特征值成功'); // 使能特征值

          return _this.bleNative
            .enableNotify(deviceId, _this.serviceId, _this.characteristicReadId)
            ['catch'](function (err) {
              // 如果是华为运动健康的hilink，则再尝试使用另一套serviceId
              // 后续华为可能会支持返回service的uuid列表
              if (_this.bleNative.name === 'QNBleNativeHuaWeiHilink') {
                _this.isHoltk = true;
                return _this.bleNative.enableNotify(
                  deviceId,
                  _this.serviceId,
                  _this.characteristicReadId
                );
              }

              throw err;
            });
        })
        ['catch'](function (err) {
          _this.log('prepare出错', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    NormalBleScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          scaleType,
          _e,
          isSupportJin,
          isSupportSt,
          unitByte,
          weight,
          differ,
          timeData,
          i;

        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _e = data[0];

              switch (_e) {
                case 0x12:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x10:
                  return [
                    3, /*break*/
                    3,
                  ];

                case 0x14:
                  return [
                    3, /*break*/
                    11,
                  ];
              }

              return [
                3, /*break*/
                13,
              ];

            case 1:
              this.scaleBizImp.weightScale = (data[10] & 0x01) === 1 ? 100 : 10;
              this.lastWeightTime = 0;
              isSupportJin = ((data[10] >> 1) & 3) > 0;
              isSupportSt = ((data[10] >> 1) & 3) === 2;
              unitByte = 1;

              switch (this.operation.unit) {
                case QNBleUnit.LB:
                  unitByte = 2;
                  break;

                case QNBleUnit.JIN:
                  unitByte = isSupportJin ? 4 : 1;
                  break;

                case QNBleUnit.ST:
                  unitByte = isSupportSt ? 8 : 2;
                  break;
              }

              (_b = (_a = this.listener).onGetDeviceInfo) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      fwVersion: data[9],
                      bleVersion: data[11],
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$1(
                    0x13,
                    scaleType,
                    unitByte,
                    0x10,
                    0x00,
                    0x00,
                    0x00
                  ),
                }),
              ];

            case 2:
              _f.sent();

              return [
                3, /*break*/
                14,
              ];

            case 3:
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              if (!(data[5] === 0))
                return [
                  3, /*break*/
                  4,
                ];
              this.log('收到不稳数据', weight);
              this.lastWeightTime = weight === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyWeight) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, {
                    weight: weight,
                  }); // 重置是否有测量数据的标识

              this.hasReceived = false;
              return [
                3, /*break*/
                10,
              ];

            case 4:
              if (!(data[5] === 1))
                return [
                  3, /*break*/
                  8,
                ];
              if (!isHeartRateScale(scaleType))
                return [
                  3, /*break*/
                  5,
                ];
              return [
                3, /*break*/
                7,
              ];

            case 5:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 6:
              _f.sent();

              _f.label = 7;

            case 7:
              return [
                3, /*break*/
                10,
              ];

            case 8:
              if (!(data[5] === 2))
                return [
                  3, /*break*/
                  10,
                ];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 9:
              _f.sent();

              _f.label = 10;

            case 10:
              return [
                3, /*break*/
                14,
              ];

            case 11:
              if (!this.isHoltk) {
                return [
                  2,
                  /*return*/
                ];
              }

              differ = Date.now() / 1000 - SECOND_2000_YEAR;
              timeData = [];

              for (i = 0; i < 4; i += 1) {
                timeData.push(differ >> (i * 8));
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$1(
                    0x20,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3]
                  ),
                }),
              ];

            case 12:
              _f.sent();

              return [
                3, /*break*/
                14,
              ];

            case 13:
              return [
                3, /*break*/
                14,
              ];

            case 14:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.prototype.dispatchSteadyData = function (
      weight,
      data
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleType,
          sendCmd,
          testTime,
          hasResistance,
          resistance50,
          resistance500,
          scaleData;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd$1(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _a.sent();

              if (this.hasReceived) {
                // 已经收到稳定数据，不再处理
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.hasReceived = true;
              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };

              if (data[5] === 2) {
                Object.assign(scaleData, {
                  heartRate: data[10],
                });
              }

              this.log('称重结束', scaleData);
              return [
                2,
                /*return*/
                this.scaleBizImp.fetchScaleData(scaleData),
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.bleProfile = new NormalBleScalebleProfile();
    return NormalBleScaleProtocol;
  })(QNBleBaseScaleProtocol);

var OneToMultiBroadcastScaleProfile =
  /** @class */
  (function () {
    function OneToMultiBroadcastScaleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTM_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    OneToMultiBroadcastScaleProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return nativeDevice.bluetoothName === 'QN-S3';
    };

    OneToMultiBroadcastScaleProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[2]),
        number2hex(manufacturer[3]),
        number2hex(manufacturer[4]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: true,
        modelId: number2hex(manufacturer[16]) + number2hex(manufacturer[15]),
        mac: macs.join(':'),
      };
    };

    return OneToMultiBroadcastScaleProfile;
  })();

var OneToMultiBroadcastScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(OneToMultiBroadcastScaleProtocol, _super);

    function OneToMultiBroadcastScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0;
      return _this;
    }

    OneToMultiBroadcastScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          // 集成业务类
          this.instanceScaleBiz();
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    OneToMultiBroadcastScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, weight, status, isSteady;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              data = payload.data;
              weight = Number.parseFloat(
                this.scaleBizImp.decodeWeight(data[10], data[9]).toFixed(2)
              );
              status = data[8];
              isSteady = (status & 0x1) === 1;
              if (!!isSteady)
                return [
                  3, /*break*/
                  1,
                ];
              (_b = (_a = this.listener).onGetUnsteadyWeight) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [
                3, /*break*/
                3,
              ];

            case 1:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 2:
              _c.sent();

              _c.label = 3;

            case 3:
              return [
                2,
                /*return*/
                this.doAdvertising(data),
              ];
          }
        });
      });
    };

    OneToMultiBroadcastScaleProtocol.prototype.buildAdvertisingData = function (
      data
    ) {
      var mac1 = data[2];
      var mac2 = data[3];
      var mac3 = data[4];
      var mac4 = data[5];
      var mac5 = data[6];
      var mac6 = data[7];
      var modelIdH = data[16];
      var modelIdL = data[15];
      var unitByte = 1;

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 3;
          break;
      } // 发送广播

      return [
        0xfe,
        0xfe,
        mac6,
        mac5,
        mac4,
        mac3,
        mac2,
        mac1,
        modelIdH,
        modelIdL,
        unitByte,
        0,
        0,
        0,
        0,
        0,
      ];
    };

    OneToMultiBroadcastScaleProtocol.prototype.dispatchSteadyData = function (
      weight,
      data
    ) {
      var measureCount = decodeInteger(data[18], data[17]);

      if (this.measureCount === measureCount) {
        this.log('已经接收了该数据，不再处理', measureCount);
        return undefined;
      }

      this.measureCount = measureCount;
      var resistance50 = decodeInteger(data[12], data[11]);
      var resistance500 = 0;
      var scaleData = {
        weight: weight,
        resistance50: resistance50,
        resistance500: resistance500,
      };
      this.log('称重结束', scaleData);
      return this.scaleBizImp.fetchScaleData(scaleData);
    };

    OneToMultiBroadcastScaleProtocol.bleProfile =
      new OneToMultiBroadcastScaleProfile();
    return OneToMultiBroadcastScaleProtocol;
  })(QNBleBaseScaleProtocol);

function randomResistance() {
  return 480 + Math.floor(Math.random() * 40);
}

var OneToOneBroadcastScaleProfile =
  /** @class */
  (function () {
    function OneToOneBroadcastScaleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTO_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    OneToOneBroadcastScaleProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      var manufacturer = nativeDevice.manufacturer;
      return (
        manufacturer.length >= 26 &&
        manufacturer[2] === 0xaa &&
        (manufacturer[3] === 0xbb || manufacturer[3] === 0xcc)
      );
    };

    OneToOneBroadcastScaleProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[4]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[9]),
      ];
      var appMacs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[15]),
        number2hex(manufacturer[16]),
      ];
      return {
        isScreenOn: true,
        modelId: number2hex(manufacturer[23]) + number2hex(manufacturer[22]),
        mac: macs.join(':'),
        appMac: appMacs.join(':'),
      };
    };

    return OneToOneBroadcastScaleProfile;
  })();

var OneToOneBroadcastScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(OneToOneBroadcastScaleProtocol, _super);

    function OneToOneBroadcastScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0; // 记录刚连接额时间

      _this.baseTime = 0;
      return _this;
    }

    OneToOneBroadcastScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          // 集成业务类
          this.instanceScaleBiz();
          this.baseTime = Date.now() / 1000;
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    OneToOneBroadcastScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, weight, status, isSteady, isStore;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              data = payload.data;
              weight = Number.parseFloat(
                this.scaleBizImp.decodeWeight(data[20], data[19]).toFixed(2)
              );
              status = data[17];
              isSteady = (status & 0x1) === 1;
              isStore = ((status >> 6) & 0x1) === 1;
              if (!!isStore)
                return [
                  3, /*break*/
                  4,
                ];
              if (!!isSteady)
                return [
                  3, /*break*/
                  1,
                ];
              (_b = (_a = this.listener).onGetUnsteadyWeight) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    weight: weight,
                  });
              return [
                3, /*break*/
                3,
              ];

            case 1:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 2:
              _c.sent();

              _c.label = 3;

            case 3:
              return [
                3, /*break*/
                4,
              ];

            case 4:
              return [
                2,
                /*return*/
                this.doAdvertising(data),
              ];
          }
        });
      });
    };

    OneToOneBroadcastScaleProtocol.prototype.buildAdvertisingData = function (
      data
    ) {
      if (!this.appMac) {
        // 生成app mac
        var timestamp = +new Date();
        var byte1 = (timestamp >> 16) & 0xff;
        var byte2 = (timestamp >> 8) & 0xff;
        var byte3 = timestamp & 0xff;
        this.appMac = [byte1, byte2, byte3];
      }

      var status = data[17];
      var isStore = ((status >> 6) & 0x1) === 1;
      var isSteady = (status & 0x1) === 1;
      var mac1 = data[4];
      var mac2 = data[5];
      var mac3 = data[6];
      var mac4 = data[7];
      var mac5 = data[8];
      var mac6 = data[9];
      var modelIdH = data[23];
      var modelIdL = data[22];
      var nowStamp = isSteady ? Date.now() / 1000 : this.baseTime;
      var time1 = nowStamp & 0xff;
      var time2 = (nowStamp >> 8) & 0xff;
      var time3 = (nowStamp >> 16) & 0xff;
      var time4 = (nowStamp >> 24) & 0xff;
      var isSupportSt = data[3] === 0xcc;
      var unitByte = 1;

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 3;
          break;

        case QNBleUnit.ST:
          unitByte = isSupportSt ? 0 : 2;
          break;
      }

      var dataTypeByte = 0;

      if (isStore) {
        var storeTotalCount = (data[18] >> 4) & 0xf;
        dataTypeByte = data[18] & 0xf;
        this.log(
          '\u63A5\u6536\u5B58\u50A8\u6570\u636E,\u603B\u5171 ' +
            storeTotalCount +
            ' \u5F53\u524D ' +
            dataTypeByte
        );
      } else {
        dataTypeByte = isSteady ? 0xf : 0x0;
      } // 把data type和unit整合成一个字节

      unitByte |= dataTypeByte << 4; // 发送广播

      return [
        mac6,
        mac5,
        mac4,
        mac3,
        mac2,
        mac1,
        modelIdH,
        modelIdL,
        unitByte,
        this.appMac[2],
        this.appMac[1],
        this.appMac[0],
        time4,
        time3,
        time2,
        time1,
      ];
    };

    OneToOneBroadcastScaleProtocol.prototype.dispatchSteadyData = function (
      weight,
      data
    ) {
      var measureCount = decodeInteger(data[25], data[24]);

      if (this.measureCount === measureCount) {
        this.log('已经接收了该数据，不再处理', measureCount);
        return undefined;
      }

      this.measureCount = measureCount;
      var status = data[17];
      var hasResistance = status & 32;
      var resistance50 = hasResistance ? randomResistance() : 0;
      var resistance500 = hasResistance ? randomResistance() : 0;
      var scaleData = {
        weight: weight,
        resistance50: resistance50,
        resistance500: resistance500,
      };
      this.log('称重结束', scaleData);
      return this.scaleBizImp.fetchScaleData(scaleData);
    };

    OneToOneBroadcastScaleProtocol.bleProfile =
      new OneToOneBroadcastScaleProfile();
    return OneToOneBroadcastScaleProtocol;
  })(QNBleBaseScaleProtocol);

/**
 * 时间服务
 */

var UUID_TIME_SERVICES = '00001805-0000-1000-8000-00805F9B34FB'; // 使能当前时间服务

var UUID_TIME_WRITE_READ = '00002A2B-0000-1000-8000-00805F9B34FB';
/**
 * 配网也放在此服务下
 */
// 读特征

var UUID_WIFI_READ = '0000FFF1-0000-1000-8000-00805F9B34FB'; // 写特征

var UUID_WIFI_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB';
/**
 * 用户数据服务
 */

var UUID_USER_SERVICES = '0000181C-0000-1000-8000-00805F9B34FB'; // 使能用户数据服务,注册、访问、删除

var UUID_USER_WRITE_READ = '00002A9F-0000-1000-8000-00805F9B34FB'; // 更新性别指令

var UUID_USER_GRAND_UPDATE = '00002A8C-0000-1000-8000-00805F9B34FB'; // 更新身高

var UUID_USER_HEIGHT_UPDATE = '00002A8E-0000-1000-8000-00805F9B34FB'; // 更新出生日期

var UUID_USER_BIRTHDAY_UPDATE = '00002A85-0000-1000-8000-00805F9B34FB'; // 更新年龄

var UUID_USER_AGE_UPDATE = '00002A80-0000-1000-8000-00805F9B34FB'; // 设置用户算法

var UUID_USER_ALGORITHM_UPDATE = '00002AFF-0000-1000-8000-00805F9B34FB';
/**
 * 体重服务
 */

var UUID_WEIGHT_SERVICES = '0000181D-0000-1000-8000-00805F9B34FB'; // 读取体重特征（支持功能）

var UUID_WEIGHT_READ = '00002A9E-0000-1000-8000-00805F9B34FB'; // 使能体重服务

var UUID_WEIGHT_NOTIFY = '00002A9D-0000-1000-8000-00805F9B34FB';
/**
 * 人体组成特征服务
 */

var UUID_BODY_SERVICES = '0000181B-0000-1000-8000-00805F9B34FB'; // 使能读取人体特征服务(支持功能)

var UUID_BODY_READ = '00002A9B-0000-1000-8000-00805F9B34FB'; // 使能人体成分组成

var UUID_BODY_NOTIFY = '00002A9C-0000-1000-8000-00805F9B34FB'; // 自定义协议 （写入单位，删除用户等）

var UUID_USER_DEFINED_WRITE = '0000FFE2-0000-1000-8000-00805F9B34FB'; // 自定义协议 （读取单位，读取删除结果等）

var UUID_USER_DEFINED_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';

var WspDualScalebleProfile =
  /** @class */
  (function () {
    function WspDualScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    WspDualScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      var bleName = nativeDevice.bluetoothName;
      return (
        (bleName === 'QN-Scale' || // 接入华为运动健康和智慧生活的秤
          // 华为hilink的秤的蓝牙名都以Hi-开头
          /^Hi-/.test(bleName)) &&
        nativeDevice.manufacturer.length >= 19
      );
    };

    WspDualScalebleProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var totalUserCount = manufacturer[4];
      var registerUserCount = manufacturer[5];
      var offlineDataCount = manufacturer[6];
      var firmwareVersion = manufacturer[7];
      var scaleVersion = manufacturer[8];
      var wifiVersion = manufacturer[9];
      var scaleInfoByte = manufacturer[10];
      var hardVersion = manufacturer[17] << 8 || manufacturer[18];
      var macs = [
        number2hex(manufacturer[16]),
        number2hex(manufacturer[15]),
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
      ];
      return {
        isSupportWifi: true,
        isWspScale: true,
        isScreenOn: true,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
        totalUserCount: totalUserCount,
        registerUserCount: registerUserCount,
        offlineDataCount: offlineDataCount,
        firmwareVersion: firmwareVersion,
        scaleVersion: scaleVersion,
        wifiVersion: wifiVersion,
        scaleInfoByte: scaleInfoByte,
        hardVersion: hardVersion,
      };
    };

    return WspDualScalebleProfile;
  })();

var WspDualScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(WspDualScaleProtocol, _super);

    function WspDualScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this; // 当前执行命令的包的序号

      _this.currentCmdNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // 上一次收到的完整的wifi ssid数据包

      _this.lastReceivedWifiIno = {}; // 上一包接受的wifi ssid序号

      _this.lastReceivedWifiSsidPackNo = 0; // 当前执行配网命令的包的序号

      _this.currentSetWifiCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = []; // body字节数据

      _this.bodyByteDataArr = []; // 是存储数据

      _this.isStoreData = false; // 历史数据

      _this.historyRecords = []; // wifi服务是否已使能过了

      _this.wifiNotified = false;
      return _this;
    } // 在使能后延时准备写入数据

    WspDualScaleProtocol.prototype.delayWriteDataAfterNotify = function () {
      return __awaiter(this, void 0, void 0, function () {
        var delay;
        return __generator(this, function (_a) {
          delay = this.bleNative.name === 'QNBleNativeHuaWeiHilink' ? 200 : 50;
          return [
            2,
            /*return*/
            timeoutPromise(delay),
          ];
        });
      });
    };

    WspDualScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var services, services_1, services_1_1, serviceId, e_1_1;

        var e_1, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              // 集成业务类
              this.instanceScaleBiz();

              if (!this.operation.userIndex && !this.operation.isRegisterUser) {
                // 如果没有传入用户索引以及并且不是注册新用户行为，则使用访客
                this.operation.userIndex = 0xaa;
                this.operation.userKey = 0x270f;
                this.operation.isUpdateUser = true;
              }

              if (!(this.bleNative.name === 'QNBleNativeJDIot'))
                return [
                  3, /*break*/
                  2,
                ];
              this.log('延时2s去获取服务');
              return [
                4,
                /*yield*/
                timeoutPromise(2e3),
              ];

            case 1:
              _b.sent();

              _b.label = 2;

            case 2:
              return [
                4,
                /*yield*/
                this.bleNative.findService(this.bleDevice.deviceId),
              ];

            case 3:
              services = _b.sent();
              _b.label = 4;

            case 4:
              _b.trys.push([4, 9, 10, 11]);

              (services_1 = __values(services)),
                (services_1_1 = services_1.next());
              _b.label = 5;

            case 5:
              if (!!services_1_1.done)
                return [
                  3, /*break*/
                  8,
                ];
              serviceId = services_1_1.value; // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(
                  this.bleDevice.deviceId,
                  serviceId
                ),
              ];

            case 6:
              // eslint-disable-next-line no-await-in-loop
              _b.sent();

              _b.label = 7;

            case 7:
              services_1_1 = services_1.next();
              return [
                3, /*break*/
                5,
              ];

            case 8:
              return [
                3, /*break*/
                11,
              ];

            case 9:
              e_1_1 = _b.sent();
              e_1 = {
                error: e_1_1,
              };
              return [
                3, /*break*/
                11,
              ];

            case 10:
              try {
                if (
                  services_1_1 &&
                  !services_1_1.done &&
                  (_a = services_1['return'])
                )
                  _a.call(services_1);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [
                7,
                /*endfinally*/
              ];

            case 11:
              this.log('使能时间');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_TIME_SERVICES,
                  UUID_TIME_WRITE_READ
                ),
              ];

            case 12:
              _b.sent();

              return [
                4,
                /*yield*/
                this.doSyncTimeCmd(),
              ];

            case 13:
              _b.sent();

              if (this.operation.action === QNBleAction.SET_WIFI) {
                return [
                  2,
                  /*return*/
                  this.doNotifyWifi(),
                ];
              }

              return [
                2,
                /*return*/
                this.doPrepareMeasureWeight(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareMeasureWeight = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, isRegisterUser, deletedUserIndexArr;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.log('使能自定义服务');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_USER_DEFINED_READ
                ),
              ];

            case 1:
              _b.sent();

              this.log('同步单位');
              return [
                4,
                /*yield*/
                this.doSyncUnit(),
              ];

            case 2:
              _b.sent();

              this.log('使能用户属性');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_USER_SERVICES,
                  UUID_USER_WRITE_READ
                ),
              ];

            case 3:
              _b.sent();

              (_a = this.operation),
                (isRegisterUser = _a.isRegisterUser),
                (deletedUserIndexArr = _a.deletedUserIndexArr);

              if (deletedUserIndexArr && deletedUserIndexArr.length > 0) {
                this.log('待删除用户列表不为空，需要先删除用户');
                return [
                  2,
                  /*return*/
                  this.doDeleteUser(),
                ];
              }

              if (isRegisterUser) {
                this.log('需要注册用户');
                return [
                  2,
                  /*return*/
                  this.doRegisterUser(),
                ];
              }

              return [
                2,
                /*return*/
                this.prepareUserAndMeasure(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doPrepareSetWifi = function (payload) {
      if (payload === void 0) {
        payload = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          otaServerUrl,
          _f,
          encryptKey,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              (_a = __assign(__assign({}, this.operation), payload)),
                (_b = _a.wifiSsid),
                (wifiSsid = _b === void 0 ? '' : _b),
                (_c = _a.wifiPwd),
                (wifiPwd = _c === void 0 ? '' : _c),
                (_d = _a.dataServerUrl),
                (dataServerUrl =
                  _d === void 0
                    ? 'http://wifi.yolanda.hk:80/wifi_api/wsps?code='
                    : _d),
                (_e = _a.otaServerUrl),
                (otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e),
                (_f = _a.encryptKey),
                (encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f);

              if (wifiSsid.length > 32) {
                return [
                  2,
                  /*return*/
                  Promise.reject(
                    new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)
                  ),
                ];
              }

              if (wifiPwd.length > 64) {
                return [
                  2,
                  /*return*/
                  Promise.reject(
                    new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)
                  ),
                ];
              }

              ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
              pwdByteArray = stringToByteArray(wifiPwd);
              dataServerUrlByteArray = stringToByteArray(dataServerUrl);
              otaServerUrlByteArray = stringToByteArray(otaServerUrl);
              this.ssidCmdData = splitArray(ssidByteArray);
              this.pwdCmdData = splitArray(pwdByteArray);
              this.dataServerUrlData = splitArray(dataServerUrlByteArray);
              this.otaServerUrlData = splitArray(otaServerUrlByteArray);
              this.encryptKeyCmdData = stringToByteArray(encryptKey);
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _g.sent();

              this.log('使能wifi成功，开始写入wifi 发送启动设置 SSID 命令');
              return [
                2,
                /*return*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x60, 0x04, this.ssidCmdData.length],
                }),
              ];
          }
        });
      });
    };
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    WspDualScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          characteristicId,
          _q,
          result,
          index,
          result,
          isRegisterUser,
          flag,
          isRealTimeData,
          isStartMeasureFat,
          isStartMeasureHeart,
          weightRatio,
          weight,
          bmi,
          year,
          month,
          dayOfMonth,
          hour,
          minute,
          second,
          time;

        return __generator(this, function (_r) {
          switch (_r.label) {
            case 0:
              (data = payload.data),
                (characteristicId = payload.characteristicId);
              _q = characteristicId.toUpperCase();

              switch (_q) {
                case UUID_USER_WRITE_READ:
                  return [
                    3, /*break*/
                    1,
                  ];

                case UUID_USER_DEFINED_READ:
                  return [
                    3, /*break*/
                    7,
                  ];

                case UUID_WEIGHT_READ:
                  return [
                    3, /*break*/
                    8,
                  ];

                case UUID_BODY_READ:
                  return [
                    3, /*break*/
                    9,
                  ];

                case UUID_WEIGHT_NOTIFY:
                  return [
                    3, /*break*/
                    10,
                  ];

                case UUID_BODY_NOTIFY:
                  return [
                    3, /*break*/
                    11,
                  ];

                case UUID_WIFI_READ:
                  return [
                    3, /*break*/
                    12,
                  ];
              }

              return [
                3, /*break*/
                14,
              ];

            case 1:
              if (!(data[0] === 0x20 && data[1] === 0x01))
                return [
                  3, /*break*/
                  5,
                ];
              result = data[2];
              if (!(result === 1))
                return [
                  3, /*break*/
                  3,
                ];
              index = data[3];
              this.operation.userIndex = index;
              this.operation.isUpdateUser = true;
              (_b = (_a = this.listener).onGetRegisterUserResult) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    isSuccess: true,
                    userIndex: index,
                  });
              return [
                4,
                /*yield*/
                this.prepareUserAndMeasure(),
              ];

            case 2:
              _r.sent();

              return [
                3, /*break*/
                4,
              ];

            case 3:
              this.log('注册用户失败');
              (_d = (_c = this.listener).onGetRegisterUserResult) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, {
                    isSuccess: false,
                  });
              return [
                2,
                /*return*/
                Promise.reject(
                  new QNBleError(QNBleErrorType.REGISTER_USER_FAILED)
                ),
              ];

            case 4:
              return [
                3, /*break*/
                6,
              ];

            case 5:
              if (data[0] === 0x20 && data[1] === 0x02) {
                result = data[2];
                (_f = (_e = this.listener).onGetVisitUserResult) === null ||
                _f === void 0
                  ? void 0
                  : _f.call(_e, {
                      isSuccess: result === 1,
                    });
                if (result !== 1)
                  return [
                    2,
                    /*return*/
                    Promise.reject(
                      new QNBleError(QNBleErrorType.VISIT_USER_FAILED)
                    ),
                  ];
              }

              _r.label = 6;

            case 6:
              return [
                3, /*break*/
                15,
              ];

            case 7:
              if (data[0] === 0x20 && data[1] === 0x5) {
                // 删除用户的回调
                (_h = (_g = this.listener).onGetDeleteUserResult) === null ||
                _h === void 0
                  ? void 0
                  : _h.call(_g, {
                      isSuccess: true,
                    });
                isRegisterUser = this.operation.isRegisterUser;

                if (isRegisterUser) {
                  this.log('需要注册用户');
                  return [
                    2,
                    /*return*/
                    this.doRegisterUser(),
                  ];
                }

                return [
                  2,
                  /*return*/
                  this.prepareUserAndMeasure(),
                ];
              }

              return [
                3, /*break*/
                15,
              ];

            case 8:
              return [
                3, /*break*/
                15,
              ];

            case 9:
              _r.label = 10;

            case 10: {
              this.log('进入 UUID_WEIGHT_NOTIFY');

              if (this.bodyByteDataArr.length >= 0) {
                this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
              }

              flag = data[0];
              this.isStoreData = ((flag >> 4) & 0x01) === 1;
              isRealTimeData = ((flag >> 5) & 0x01) === 0;
              isStartMeasureFat = ((flag >> 6) & 0x01) === 1;
              isStartMeasureHeart = ((flag >> 7) & 0x01) === 1;
              this.log(
                'isRealTimeData',
                isRealTimeData,
                'isStartMeasureFat',
                isStartMeasureFat,
                'isStartMeasureHeart',
                isStartMeasureHeart
              );

              if (isStartMeasureFat) {
                (_k = (_j = this.listener).onStartMeasureFat) === null ||
                _k === void 0
                  ? void 0
                  : _k.call(_j);
              } else if (isStartMeasureHeart) {
                (_m = (_l = this.listener).onStartMeasureHeart) === null ||
                _m === void 0
                  ? void 0
                  : _m.call(_l);
              }

              if (data.length < 13) {
                return [
                  2,
                  /*return*/
                  undefined,
                ];
              }

              weightRatio = 0.05;
              weight = Number.parseFloat(
                (decodeInteger(data[2], data[1]) * weightRatio).toFixed(2)
              );

              if (isRealTimeData) {
                (_p = (_o = this.listener).onGetUnsteadyWeight) === null ||
                _p === void 0
                  ? void 0
                  : _p.call(_o, {
                      weight: weight,
                    });
              } else {
                bmi = decodeInteger(data[12], data[11]) * 0.1;
                year = decodeInteger(data[4], data[3]);
                month = data[5];
                dayOfMonth = data[6];
                hour = data[7];
                minute = data[8];
                second = data[9];
                time = new Date();
                time.setUTCFullYear(year);
                time.setUTCMonth(month - 1);
                time.setUTCDate(dayOfMonth);
                time.setUTCHours(hour);
                time.setUTCMinutes(minute);
                time.setUTCSeconds(second);
                this.partialScaleData = {
                  weight: weight,
                  bmi: bmi,
                  time: time,
                };
              }

              return [
                3, /*break*/
                15,
              ];
            }

            case 11:
              this.log('进入 UUID_BODY_NOTIFY');
              this.bodyByteDataArr.push(data);
              this.log('bodyByteDataArr', this.bodyByteDataArr);

              if (this.bodyByteDataArr.length >= 2) {
                this.buildBodyData();
              }

              return [
                3, /*break*/
                15,
              ];

            case 12:
              // 这里是跟配网相关的命令交互
              return [
                4,
                /*yield*/
                this.handleWifiCmdData(data),
              ];

            case 13:
              // 这里是跟配网相关的命令交互
              _r.sent();

              return [
                3, /*break*/
                15,
              ];

            case 14:
              return [
                3, /*break*/
                15,
              ];

            case 15:
              return [
                2,
                /*return*/
                undefined,
              ];
          }
        });
      });
    };
    /**
     * 通知设备扫描附近wifi
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     */

    WspDualScaleProtocol.prototype.doScanWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('通知设备扫描附近wifi');
              this.wifiInfoCache.rssi = 0;
              this.wifiInfoCache.ssid = [];
              this.lastReceivedWifiSsidPackNo = 0;
              return [
                4,
                /*yield*/
                this.doNotifyWifi(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x55, 0x4, 0x01],
                }),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 收到设备发送过来的wifi信息数据
     */

    WspDualScaleProtocol.prototype.onReceiveWifiSsidData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var rssi, packInfo, packCount, packNo, ssidData, info;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              rssi = data[1] - 0xff - 1;
              packInfo = data[2];
              packCount = (packInfo >> 4) & 15;
              packNo = packInfo & 15;
              ssidData = data.slice(3, data.length - 1);
              this.log(
                'onReceiveWifiSsidData',
                'packCount',
                packCount,
                'packNo',
                packNo,
                'ssidData',
                ssidData
              );

              if (packNo > this.lastReceivedWifiSsidPackNo) {
                this.wifiInfoCache.rssi = rssi;
                this.wifiInfoCache.ssid.push(byteArrayToString(ssidData));

                if (packCount === packNo) {
                  this.log(
                    'wifi ssid base64编码',
                    this.wifiInfoCache.ssid.join('')
                  );
                  info = {
                    rssi: rssi,
                    ssid: gBase64.decode(this.wifiInfoCache.ssid.join('')),
                    level: getWifiRssiLevel(rssi),
                  };
                  this.log('收到完整 wifi 信息', info);

                  if (!equal(this.lastReceivedWifiIno, info)) {
                    (_b = (_a = this.listener).onGetWifiInfo) === null ||
                    _b === void 0
                      ? void 0
                      : _b.call(_a, info);
                    this.lastReceivedWifiIno = info;
                  } else {
                    this.log(
                      '收到与上一条重复的 wifi 数据',
                      'lastReceivedWifiIno',
                      this.lastReceivedWifiIno
                    );
                  }

                  this.wifiInfoCache.rssi = 0;
                  this.wifiInfoCache.ssid = [];
                  this.lastReceivedWifiSsidPackNo = 0;
                } else {
                  this.lastReceivedWifiSsidPackNo = packNo;
                }
              } else {
                console.warn('收到重复的 wifi ssid 数据包', data);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x57, 4, packInfo],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 这个方法由外部主动调用
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */

    WspDualScaleProtocol.prototype.doSetWifi = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('doSetWifi', payload);
              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(payload),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.handleWifiCmdData = function (data) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              _g = data[0];

              switch (_g) {
                case 0x56:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x58:
                  return [
                    3, /*break*/
                    3,
                  ];

                case 0x61:
                  return [
                    3, /*break*/
                    5,
                  ];

                case 0x63:
                  return [
                    3, /*break*/
                    6,
                  ];

                case 0x65:
                  return [
                    3, /*break*/
                    11,
                  ];

                case 0x67:
                  return [
                    3, /*break*/
                    16,
                  ];

                case 0x69:
                  return [
                    3, /*break*/
                    21,
                  ];

                case 0x6b:
                  return [
                    3, /*break*/
                    24,
                  ];

                case 0x6f:
                  return [
                    3, /*break*/
                    29,
                  ];

                case 0x71:
                  return [
                    3, /*break*/
                    32,
                  ];

                case 0x73:
                  return [
                    3, /*break*/
                    36,
                  ];

                case 0x74:
                  return [
                    3, /*break*/
                    39,
                  ];

                case 0x77:
                  return [
                    3, /*break*/
                    41,
                  ];
              }

              return [
                3, /*break*/
                42,
              ];

            case 1:
              // 收到设备发送的ssid包
              return [
                4,
                /*yield*/
                this.onReceiveWifiSsidData(data),
              ];

            case 2:
              // 收到设备发送的ssid包
              _h.sent();

              return [
                3, /*break*/
                43,
              ];

            case 3:
              // Wi-Fi扫描结束
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x59, 4, 1],
                }),
              ];

            case 4:
              // Wi-Fi扫描结束
              _h.sent();

              (_b = (_a = this.listener).onScanWifiFinished) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a);
              return [
                3, /*break*/
                43,
              ];

            case 5:
              // 收到开始配网发回复
              // 开始发送SSID命令
              if (data[2] === 1) {
                this.currentCmdNo = 0;
                this.sendWifiSsid();
              }

              return [
                3, /*break*/
                43,
              ];

            case 6:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.ssidCmdData.length))
                return [
                  3, /*break*/
                  8,
                ]; // ssid还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 7:
              // ssid还没发送完
              _h.sent();

              return [
                3, /*break*/
                10,
              ];

            case 8:
              // ssid已经发送，重置序号，开始发送wifi密码
              this.currentCmdNo = 0;
              this.log('发送启动设置 WIFI密码 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 9:
              _h.sent();

              _h.label = 10;

            case 10:
              return [
                3, /*break*/
                43,
              ];

            case 11:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  15,
                ];
              if (!(this.pwdCmdData.length > 0))
                return [
                  3, /*break*/
                  13,
                ];
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 12:
              _h.sent();

              return [
                3, /*break*/
                15,
              ];

            case 13:
              // 无wifi密码，重置序号，开始发送数据服务器URL
              this.currentCmdNo = 0;
              this.log(
                '无wifi密码，跳过 66h 和 67h 命令，开始发送启动设置 数据服务器 命令'
              );
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 14:
              _h.sent();

              _h.label = 15;

            case 15:
              return [
                3, /*break*/
                43,
              ];

            case 16:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.pwdCmdData.length))
                return [
                  3, /*break*/
                  18,
                ]; // wifi密码还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 17:
              // wifi密码还没发送完
              _h.sent();

              return [
                3, /*break*/
                20,
              ];

            case 18:
              // wifi密码已经发送，重置序号，开始发送数据服务器URL
              this.currentCmdNo = 0;
              this.log('发送启动设置 数据服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 19:
              _h.sent();

              _h.label = 20;

            case 20:
              return [
                3, /*break*/
                43,
              ];

            case 21:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  23,
                ];
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 22:
              _h.sent();

              _h.label = 23;

            case 23:
              return [
                3, /*break*/
                43,
              ];

            case 24:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.dataServerUrlData.length))
                return [
                  3, /*break*/
                  26,
                ]; // 数据服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 25:
              // 数据服务器URL还没发送完
              _h.sent();

              return [
                3, /*break*/
                28,
              ];

            case 26:
              // 数据服务器URL已经发送，重置序号，开始发送OTA服务器URL
              this.currentCmdNo = 0;
              this.log('发送启动设置 OTA服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 27:
              _h.sent();

              _h.label = 28;

            case 28:
              return [
                3, /*break*/
                43,
              ];

            case 29:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  31,
                ];
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 30:
              _h.sent();

              _h.label = 31;

            case 31:
              return [
                3, /*break*/
                43,
              ];

            case 32:
              this.currentCmdNo = data[2];
              if (!(this.currentCmdNo < this.otaServerUrlData.length))
                return [
                  3, /*break*/
                  34,
                ]; // OTA服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 33:
              // OTA服务器URL还没发送完
              _h.sent();

              return [
                3, /*break*/
                35,
              ];

            case 34:
              // OTA服务器URL已经发送，重置序号，开始发送加密密钥
              this.currentCmdNo = 0;
              this.sendEncryptKey();
              _h.label = 35;

            case 35:
              return [
                3, /*break*/
                43,
              ];

            case 36:
              if (!(data[2] === 0))
                return [
                  3, /*break*/
                  38,
                ];
              return [
                4,
                /*yield*/
                this.sendEncryptKey(),
              ];

            case 37:
              _h.sent();

              _h.label = 38;

            case 38:
              // 写入加密密钥成功，这里需要发送请求给服务器
              return [
                3, /*break*/
                43,
              ];

            case 39:
              // 收到秤配网成功的命令
              (_d = (_c = this.listener).onGetSetWifiResult) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, data[2] === 1);
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x75, 4, 1],
                }),
              ];

            case 40:
              _h.sent();

              this.log('配网成功');
              return [
                3, /*break*/
                43,
              ];

            case 41:
              // 收到配网查询回复
              // 0:wifi未连接
              // 1:wifi已连接
              // 2:wifi已连接服务器
              // 3:wifi未连接服务器
              (_f = (_e = this.listener).onGetQueryWifiConnectStatusResult) ===
                null || _f === void 0
                ? void 0
                : _f.call(_e, data[2]);
              return [
                3, /*break*/
                43,
              ];

            case 42:
              return [
                3, /*break*/
                43,
              ];

            case 43:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.buildBodyData = function () {
      var _a, _b, _c, _d;

      var data = __spread(this.bodyByteDataArr[0], this.bodyByteDataArr[1]);

      this.log('buildBodyData', 'data', data);

      if (data.length < 37) {
        // 数据不对，删除第一个
        this.bodyByteDataArr.splice(0, 1);
        return;
      } // 处理数据，删除所有缓存数据

      this.bodyByteDataArr.splice(0, this.bodyByteDataArr.length);
      var year = decodeInteger(data[5], data[4]);
      var month = data[6];
      var dayOfMonth = data[7];
      var hour = data[8];
      var minute = data[9];
      var second = data[10];
      var time = new Date();
      time.setUTCFullYear(year);
      time.setUTCMonth(month - 1);
      time.setUTCDate(dayOfMonth);
      time.setUTCHours(hour);
      time.setUTCMinutes(minute);
      time.setUTCSeconds(second);
      var realMassRatio = 0.05; // 体脂率

      var bodyfat = decodeInteger(data[3], data[2]) * 0.1; // bmr
      // 这里/10 会在 QNScaleBiz。ts 中 x10

      var bmr = decodeInteger(data[13], data[12]) / 10; // 骨骼肌率

      var muscle = decodeInteger(data[15], data[14]) * 0.1; // 肌肉量

      var muscleMass = decodeInteger(data[17], data[16]) * realMassRatio; // 去脂体重

      var lbm = decodeInteger(data[19], data[18]) * realMassRatio; // 体水分

      var water = decodeInteger(data[21], data[20]) * 0.1; // 阻抗

      var resistance50 = decodeInteger(data[23], data[22]); // 阻抗

      var resistance500 = decodeInteger(data[25], data[24]); // 骨量
      // 这里x10 会在 QNScaleBiz.ts中 /10的

      var bone = decodeInteger(data[27], data[26]) * realMassRatio * 10; // 内脏脂肪等级

      var visfat = data[28] & 0xff; // 皮下脂肪

      var subfat = decodeInteger(data[30], data[29]) * 0.1; // 蛋白质

      var protein = decodeInteger(data[32], data[31]) * 0.1; // 体年龄

      var bodyAge = data[33] & 0xff; // 心率

      var heartRate = data[34] & 0xff; // 分数

      var score = decodeInteger(data[36], data[35]) * 0.1; // 体型

      var bodyShape = data[37] & 0xff; // 心脏指数

      var heartIndex = (data[38] & 0xff) * 0.1;
      this.log('isStoreData', this.isStoreData);

      var measureData = __assign(__assign({}, this.partialScaleData), {
        bodyfat: bodyfat,
        bmr: bmr,
        muscle: muscle,
        muscleMass: muscleMass,
        lbm: lbm,
        heartIndex: heartIndex,
        bodyShape: bodyShape,
        score: score,
        heartRate: heartRate,
        bodyAge: bodyAge,
        protein: protein,
        subfat: subfat,
        visfat: visfat,
        bone: bone,
        water: water,
        time: time,
      });

      this.log('measureData', measureData);
      var mdata = {
        measure: this.scaleBizImp.prepareWspMeasureData(measureData),
        scaleData: {
          resistance500: resistance500,
          resistance50: resistance50,
        },
        sdkObj: this.scaleBizImp.sdkObj,
      };
      this.log('mdata', mdata);

      if (this.isStoreData) {
        // 这里处理存储数据的逻辑
        this.log('正在接收存储数据');
        this.historyRecords.push(mdata);
      } else {
        try {
          if (this.historyRecords.length > 0) {
            this.log('回调存储的历史数据', this.historyRecords);
            (_b = (_a = this.listener).onGetStoredDatas) === null ||
            _b === void 0
              ? void 0
              : _b.call(_a, __spread(this.historyRecords));
            this.historyRecords = [];
          }

          this.log('回调当前测量完成的数据', mdata);
          (_d = (_c = this.listener).onGetScaleData) === null || _d === void 0
            ? void 0
            : _d.call(_c, mdata);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      }
    };

    WspDualScaleProtocol.prototype.doNotifyWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.wifiNotified) {
                return [
                  2,
                  /*return*/
                  Promise.resolve(0),
                ];
              }

              this.log('使能WiFi特性');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_TIME_SERVICES,
                  UUID_WIFI_READ
                ),
              ];

            case 1:
              _a.sent();

              this.wifiNotified = true;
              return [
                2,
                /*return*/
                Promise.resolve(0),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.sendWifiSsid = function () {
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E'
      );
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1; // this.bleApi.log(`发送第 ${this.currentCmdNo} 包 PWD 数据`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1; // this.bleApi.log(`发送第 ${this.currentCmdNo} 包 DATA服务器 数据`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1; // this.bleApi.log(`发送第 ${this.currentCmdNo} 包 OTA服务器 数据`)

      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.sendEncryptKey = function () {
      var cmd = this.encryptKeyCmdData;
      this.log('发送加密密钥数据');
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_WIFI_WRITE,
        cmdData: __spread([0x72, 20, this.currentCmdNo], cmd),
      });
    };

    WspDualScaleProtocol.prototype.doDeleteUser = function () {
      // 删除用户
      var deletedUserIndexArr = this.operation.deletedUserIndexArr;
      var flag = 0;
      deletedUserIndexArr.forEach(function (value) {
        flag |= 1 << (value - 1);
      });
      return this.writeData({
        serviceId: UUID_BODY_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE,
        cmdData: [0x05, flag, 0],
      });
    };

    WspDualScaleProtocol.prototype.doRegisterUser = function () {
      var userKey = this.operation.userKey;
      var keyH = (userKey >> 8) & 0xff;
      var keyL = userKey & 0xff;
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_WRITE_READ,
        cmdData: [0x01, keyL, keyH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doReadScaleSupport = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('读取体重特性');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES,
                  UUID_WEIGHT_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 2:
              _a.sent();

              this.log('读取体脂特性');
              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_BODY_READ
                ),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 4:
              _a.sent();

              this.log('使能体重特性');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_WEIGHT_SERVICES,
                  UUID_WEIGHT_NOTIFY
                ),
              ];

            case 5:
              _a.sent();

              this.log('使能体脂特性');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  UUID_BODY_SERVICES,
                  UUID_BODY_NOTIFY
                ),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncTimeCmd = function () {
      var now = new Date();
      var year = now.getUTCFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = now.getUTCMonth() + 1;
      var day = now.getUTCDate();
      var hour = now.getUTCHours();
      var minute = now.getUTCMinutes();
      var second = now.getUTCSeconds();
      var dayOffWeek = now.getUTCDay() - 1;

      if (dayOffWeek === 0) {
        dayOffWeek = 7;
      }

      this.currentCmdNo = 0; // 当前已发送的命令序号

      var bytes = [
        yearL,
        yearH,
        month,
        day,
        hour,
        minute,
        second,
        dayOffWeek,
        0,
        0,
      ];
      return this.writeData({
        serviceId: UUID_TIME_SERVICES,
        characteristicId: UUID_TIME_WRITE_READ,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUnit = function () {
      var unitByte = 1; // STUB isSupportJin和isSupportSt这里是写死的，不知道协议是怎样规定，到时候问问

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          unitByte = 2;
          break;

        case QNBleUnit.JIN:
          unitByte = 4;
          break;

        case QNBleUnit.ST:
          unitByte = 2;
          break;
      }

      var bytes = [0x03, 0x00, unitByte];
      return this.writeData({
        serviceId: UUID_BODY_SERVICES,
        characteristicId: UUID_USER_DEFINED_WRITE,
        cmdData: bytes,
      });
    }; // 访问用户流程

    WspDualScaleProtocol.prototype.prepareUserAndMeasure = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.doVisitUser(),
              ];

            case 1:
              _a.sent();

              this.log('访问用户成功，开始更新用户信息');
              return [
                4,
                /*yield*/
                this.doSyncUserInfo(),
              ];

            case 2:
              _a.sent();

              this.log('更新用户资料成功，开始读取秤端特性');
              return [
                4,
                /*yield*/
                this.doReadScaleSupport(),
              ];

            case 3:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doVisitUser = function () {
      var _a = this.operation,
        userIndex = _a.userIndex,
        userKey = _a.userKey;
      var secretH = (userKey >> 8) & 0xff;
      var secretL = userKey & 0xff;
      var bytes = [0x02, userIndex, secretL, secretH];
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_WRITE_READ,
        cmdData: bytes,
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncUserInfo = function () {
      return __awaiter(this, void 0, void 0, function () {
        var isUpdateUser;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              isUpdateUser = this.operation.isUpdateUser;

              if (!isUpdateUser) {
                this.log('无需同步用户信息');
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.log('开始同步用户信息');
              return [
                4,
                /*yield*/
                this.doSyncGender(),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncHeight(),
              ];

            case 2:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncBirthday(),
              ];

            case 3:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAge(),
              ];

            case 4:
              _a.sent();

              return [
                4,
                /*yield*/
                this.doSyncAlgorithm(),
              ];

            case 5:
              _a.sent();

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.prototype.doSyncAlgorithm = function () {
      this.log('同步算法');
      var deviceMethod = this.operation.user.isSport ? 13 : 3;
      var sdkObj = this.scaleBizImp.sdkObj;
      this.log('sdkObj', sdkObj);

      if (sdkObj) {
        switch (sdkObj.method) {
          case 2:
            deviceMethod = 3;
            break;

          case 3:
            deviceMethod = 1;
            break;
          // 交流v2

          case 4:
            deviceMethod = 2;
            break;

          case 5:
            deviceMethod = 4;
            break;

          case 6:
            deviceMethod = 5;
            break;

          case 1:
            deviceMethod = 6;
            break;
        }

        if (this.operation.user.isSport) {
          deviceMethod += 10;
        }
      }

      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_ALGORITHM_UPDATE,
        cmdData: [deviceMethod, 0],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncAge = function () {
      var birthday = this.operation.user.birthday;
      var age = this.operation.user.age;
      age = age || calcAgeWithBirthday(getNewDateInstance(birthday));
      this.log('同步年龄', age);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_AGE_UPDATE,
        cmdData: [age],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncBirthday = function () {
      var birthday = this.operation.user.birthday;
      var birthdayDate = getNewDateInstance(birthday);
      var year = birthdayDate.getFullYear();
      var yearH = (year >> 8) & 0xff;
      var yearL = year & 0xff;
      var month = birthdayDate.getMonth() + 1;
      var day = birthdayDate.getDate();
      this.log('同步生日', formatDateToString(birthdayDate));
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_BIRTHDAY_UPDATE,
        cmdData: [yearL, yearH, month, day],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncHeight = function () {
      var height = this.operation.user.height;
      var heightH = (height >> 8) & 0xff;
      var heightL = height & 0xff;
      this.log('同步身高', height);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_HEIGHT_UPDATE,
        cmdData: [heightL, heightH],
        needSum: false,
      });
    };

    WspDualScaleProtocol.prototype.doSyncGender = function () {
      var gender = this.operation.user.gender; // NOTE 注意这里 协议那边要求的是 0：男性 1：女性

      var genderByte = gender === QNBleGender.MALE ? 0 : 1;
      this.log('同步性别', genderByte);
      return this.writeData({
        serviceId: UUID_USER_SERVICES,
        characteristicId: UUID_USER_GRAND_UPDATE,
        cmdData: [genderByte],
        needSum: false,
      });
    };
    /**
     * 查询wifi连接状态
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1：表示查询wifi是否连接 2：查询wifi是否连接服务器
     */

    WspDualScaleProtocol.prototype.queryWifiConnectStatus = function (type) {
      if (type === void 0) {
        type = 1;
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.writeData({
                  serviceId: UUID_TIME_SERVICES,
                  characteristicId: UUID_WIFI_WRITE,
                  cmdData: [0x76, 4, type],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleProtocol.bleProfile = new WspDualScalebleProfile();
    return WspDualScaleProtocol;
  })(QNBleBaseScaleProtocol);

var ShareCLScaleProfile =
  /** @class */
  (function () {
    function ShareCLScaleProfile() {
      this.defaultAction = QNBleAction.SET_WIFI;
      this.type = QNBleDeviceType.SHARE_SCALE_CL;
      this.transferType = QNBleTransferType.BLE;
    } // eslint-disable-next-line class-methods-use-this

    ShareCLScaleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-GXC';
    };

    ShareCLScaleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
      ];
      var modelIds = [number2hex(manufacturer[4]), number2hex(manufacturer[5])];
      var sns = [
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
      ];
      return {
        modelId: modelIds.join(''),
        isSupportWifi: true,
        isScreenOn: true,
        mac: macs.join(':'),
        sn: sns.join(''),
      };
    };

    return ShareCLScaleProfile;
  })();

var ShareCLScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(ShareCLScaleProtocol, _super);

    function ShareCLScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000ABF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000ABF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000ABF2-0000-1000-8000-00805F9B34FB'; // 当前执行命令的包的序号

      _this.currentCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(ShareCLScaleProtocol.prototype, 'action', {
      get: function get() {
        return (
          this.operation.action || ShareCLScaleProtocol.bleProfile.defaultAction
        );
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    ShareCLScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var data, _g, retV;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              data = payload.data;
              _g = data[0];

              switch (_g) {
                case 0x12:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x14:
                  return [
                    3, /*break*/
                    5,
                  ];

                case 0x51:
                  return [
                    3, /*break*/
                    6,
                  ];

                case 0x61:
                  return [
                    3, /*break*/
                    7,
                  ];

                case 0x63:
                  return [
                    3, /*break*/
                    9,
                  ];

                case 0x65:
                  return [
                    3, /*break*/
                    14,
                  ];

                case 0x67:
                  return [
                    3, /*break*/
                    16,
                  ];

                case 0x69:
                  return [
                    3, /*break*/
                    21,
                  ];

                case 0x6b:
                  return [
                    3, /*break*/
                    23,
                  ];

                case 0x6f:
                  return [
                    3, /*break*/
                    28,
                  ];

                case 0x71:
                  return [
                    3, /*break*/
                    30,
                  ];

                case 0x73:
                  return [
                    3, /*break*/
                    34,
                  ];

                case 0x79:
                  return [
                    3, /*break*/
                    35,
                  ];

                case 0x81:
                  return [
                    3, /*break*/
                    38,
                  ];
              }

              return [
                3, /*break*/
                39,
              ];

            case 1:
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status：1-正常回复，2-生产测试回复（由于3.5寸共享称存在蓝牙配网的可能，保留对原有配网协议的兼容）
                    0x01,
                  ],
                }),
              ];

            case 2:
              _h.sent();

              if (!(this.action === QNBleAction.SET_WIFI))
                return [
                  3, /*break*/
                  4,
                ]; // 通知秤准备配网

              return [
                4,
                /*yield*/
                this.setWifi(),
              ];

            case 3:
              // 通知秤准备配网
              _h.sent();

              _h.label = 4;

            case 4:
              return [
                3, /*break*/
                40,
              ];

            case 5:
              return [
                3, /*break*/
                40,
              ];

            case 6:
              // data[2]
              // 1 进入休眠
              (_a = this.sleepScaleCallback) === null || _a === void 0
                ? void 0
                : _a.call(
                    this,
                    {
                      errCode: data[2],
                    },
                    payload,
                    this
                  );
              return [
                3, /*break*/
                40,
              ];

            case 7:
              // 收到开始配网的回复
              // 开始发送SSID命令
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 8:
              _h.sent();

              return [
                3, /*break*/
                40,
              ];

            case 9:
              if (!(this.currentCmdNo < this.ssidCmdData.length))
                return [
                  3, /*break*/
                  11,
                ]; // ssid还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 10:
              // ssid还没发送完
              _h.sent();

              return [
                3, /*break*/
                13,
              ];

            case 11:
              // ssid已经发送，重置序号，开始发送wifi密码
              this.currentCmdNo = 0;
              this.log('发送启动设置 WIFI密码 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 0x04, this.pwdCmdData.length],
                }),
              ];

            case 12:
              _h.sent();

              _h.label = 13;

            case 13:
              return [
                3, /*break*/
                40,
              ];

            case 14:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 15:
              _h.sent();

              return [
                3, /*break*/
                40,
              ];

            case 16:
              if (!(this.currentCmdNo < this.pwdCmdData.length))
                return [
                  3, /*break*/
                  18,
                ]; // wifi密码还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 17:
              // wifi密码还没发送完
              _h.sent();

              return [
                3, /*break*/
                20,
              ];

            case 18:
              // wifi密码已发送完，重置序号
              this.currentCmdNo = 0;
              this.log('发送启动设置 数据服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 0x04, this.dataServerUrlData.length],
                }),
              ];

            case 19:
              _h.sent();

              _h.label = 20;

            case 20:
              return [
                3, /*break*/
                40,
              ];

            case 21:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 22:
              _h.sent();

              return [
                3, /*break*/
                40,
              ];

            case 23:
              if (!(this.currentCmdNo < this.dataServerUrlData.length))
                return [
                  3, /*break*/
                  25,
                ]; // 数据服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 24:
              // 数据服务器URL还没发送完
              _h.sent();

              return [
                3, /*break*/
                27,
              ];

            case 25:
              // 数据服务器URL已经发送，重置序号，开始发送OTA服务器URL
              this.currentCmdNo = 0;
              this.log('发送启动设置 OTA服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 0x04, this.otaServerUrlData.length],
                }),
              ];

            case 26:
              _h.sent();

              _h.label = 27;

            case 27:
              return [
                3, /*break*/
                40,
              ];

            case 28:
              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 29:
              _h.sent();

              return [
                3, /*break*/
                40,
              ];

            case 30:
              if (!(this.currentCmdNo < this.otaServerUrlData.length))
                return [
                  3, /*break*/
                  32,
                ]; // OTA服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 31:
              // OTA服务器URL还没发送完
              _h.sent();

              return [
                3, /*break*/
                33,
              ];

            case 32:
              // OTA服务器URL已发送完，重置序号，开始发送加密秘钥
              this.currentCmdNo = 0; // const cmd = this.encryptKeyCmdData;
              // this.log('发送加密密钥数据');
              // await this.writeData({
              //   cmdData: [
              //     0x72,
              //     0x10,
              //     0x01,
              //     ...cmd,
              //   ],
              // });

              (_c = (_b = this.listener).onSetWifiSuccess) === null ||
              _c === void 0
                ? void 0
                : _c.call(_b);
              (_d = this.setWifiCallback) === null || _d === void 0
                ? void 0
                : _d.call(
                    this,
                    {
                      errCode: 1,
                    },
                    payload,
                    this
                  );
              _h.label = 33;

            case 33:
              return [
                3, /*break*/
                40,
              ];

            case 34: {
              // 写入加密密钥成功
              // 通知配网成功
              // this.listener.onSetWifiSuccess();
              return [
                3, /*break*/
                40,
              ];
            }

            case 35:
              retV = {
                errCode: data[2],
              };

              if (data[2] === 0) {
                // 重新定义100为检测中的状态
                retV.errCode = 100;
              } else if (data[2] === 2) {
                // 配网失败 设为 0
                retV.errCode = 0;
              }

              (_e = this.checkWifiStatusCallback) === null || _e === void 0
                ? void 0
                : _e.call(this, retV, payload, this);
              if (!(data[2] === 0))
                return [
                  3, /*break*/
                  37,
                ]; // 正在检测

              this.log('检测wifi功能中···');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x78, 0x04, 0x01],
                }),
              ];

            case 36:
              _h.sent();

              _h.label = 37;

            case 37:
              return [
                3, /*break*/
                40,
              ];

            case 38:
              // data[2]
              // 1 成功
              // 0 失败
              (_f = this.syncDataCallback) === null || _f === void 0
                ? void 0
                : _f.call(
                    this,
                    {
                      errCode: data[2],
                    },
                    payload,
                    this
                  );
              return [
                3, /*break*/
                40,
              ];

            case 39:
              return [
                3, /*break*/
                40,
              ];

            case 40:
              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.prototype.setWifi = function (operaton, callback) {
      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          otaServerUrl,
          _f,
          encryptKey,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        var _this = this;

        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              this.setWifiCallback = callback;
              (_a = __assign(__assign({}, this.operation), operaton || {})),
                (_b = _a.wifiSsid),
                (wifiSsid = _b === void 0 ? '' : _b),
                (_c = _a.wifiPwd),
                (wifiPwd = _c === void 0 ? '' : _c),
                (_d = _a.dataServerUrl),
                (dataServerUrl =
                  _d === void 0
                    ? 'http://wifi.yolanda.hk:80/wifi_api/aios?code='
                    : _d),
                (_e = _a.otaServerUrl),
                (otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e),
                (_f = _a.encryptKey),
                (encryptKey = _f === void 0 ? '' : _f);
              this.log('wifiSsid', wifiSsid, 'wifiPwd', wifiPwd);

              if (wifiSsid.length > 32) {
                return [
                  2,
                  /*return*/
                  Promise.reject(
                    new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)
                  ),
                ];
              }

              if (wifiPwd.length > 64) {
                return [
                  2,
                  /*return*/
                  Promise.reject(
                    new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)
                  ),
                ];
              }

              ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
              pwdByteArray = stringToByteArray(wifiPwd);
              dataServerUrlByteArray = stringToByteArray(dataServerUrl);
              otaServerUrlByteArray = stringToByteArray(otaServerUrl);
              this.ssidCmdData = splitArray(ssidByteArray);
              this.pwdCmdData = splitArray(pwdByteArray);
              this.dataServerUrlData = splitArray(dataServerUrlByteArray);
              this.otaServerUrlData = splitArray(otaServerUrlByteArray);
              this.encryptKeyCmdData = stringToByteArray(encryptKey); // 当前发包的序号

              this.currentCmdNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status：1-正常回复，2-生产测试回复（由于3.5寸共享称存在蓝牙配网的可能，保留对原有配网协议的兼容）
                    0x01,
                  ],
                }),
              ];

            case 1:
              _g.sent();

              return [
                2,
                /*return*/
                Promise.resolve().then(function () {
                  _this.log('开始写入wifi 发送启动设置 SSID 命令');

                  return _this.writeData({
                    cmdData: [
                      0x60,
                      0x04, // 要发的总包数
                      _this.ssidCmdData.length,
                    ],
                  });
                }),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.prototype.sendWifiSsid = function () {
      this.log(
        'ssidCmdData数据',
        this.ssidCmdData,
        'currentCmdNo',
        this.currentCmdNo
      );
      var cmd = this.ssidCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 SSID \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x62, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendWifiPwd = function () {
      var cmd = this.pwdCmdData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' + this.currentCmdNo + ' \u5305 PWD \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x66, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendDataServerUrl = function () {
      var cmd = this.dataServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' +
          this.currentCmdNo +
          ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x6a, cmdLength, this.currentCmdNo], cmd),
      });
    };

    ShareCLScaleProtocol.prototype.sendOtaServerUrl = function () {
      var cmd = this.otaServerUrlData[this.currentCmdNo];
      var cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

      this.currentCmdNo += 1;
      this.log(
        '\u53D1\u9001\u7B2C ' +
          this.currentCmdNo +
          ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
      );
      return this.writeData({
        cmdData: __spread([0x70, cmdLength, this.currentCmdNo], cmd),
      });
    };
    /**
     * 通知设备进入全休眠模式
     */

    ShareCLScaleProtocol.prototype.sleepScale = function (callback) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('通知设备进入全休眠模式');
              this.sleepScaleCallback = callback;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status：1-正常回复，2-生产测试回复（由于3.5寸共享称存在蓝牙配网的可能，保留对原有配网协议的兼容）
                    0x02,
                  ],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [0x50, 0x04, 0x01],
                }),
              ];
          }
        });
      });
    };
    /**
     * 检测wifi状态
     */

    ShareCLScaleProtocol.prototype.checkWifiStatus = function (callback) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.checkWifiStatusCallback = callback;
              this.log('检测wifi功能');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status：1-正常回复，2-生产测试回复（由于3.5寸共享称存在蓝牙配网的可能，保留对原有配网协议的兼容）
                    0x02,
                  ],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [0x78, 0x04, 0x01],
                }),
              ];
          }
        });
      });
    };
    /**
     * 同步一些数据
     */

    ShareCLScaleProtocol.prototype.syncData = function (payload, callback) {
      return __awaiter(this, void 0, void 0, function () {
        var chargeTimeH,
          chargeTimeL,
          unChargeTimeH,
          unChargeTimeL,
          _a,
          offScreenStartTime,
          offScreenEndTime,
          offScreenStartHour,
          offScreenStartMin,
          offScreenEndHour,
          offScreenEndtMin;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.log('同步数据');
              this.syncDataCallback = callback;
              chargeTimeH = (payload.syncTimeDurationInCharge >> 8) & 0xff;
              chargeTimeL = payload.syncTimeDurationInCharge & 0xff;
              unChargeTimeH = (payload.syncTimeDurationUnCharge >> 8) & 0xff;
              unChargeTimeL = payload.syncTimeDurationUnCharge & 0xff;
              (_a = __read(payload.offScreenTimeDuration, 2)),
                (offScreenStartTime = _a[0]),
                (offScreenEndTime = _a[1]);
              offScreenStartHour = Number(offScreenStartTime.split(':')[0]);
              offScreenStartMin = Number(offScreenStartTime.split(':')[1]);
              offScreenEndHour = Number(offScreenEndTime.split(':')[0]);
              offScreenEndtMin = Number(offScreenEndTime.split(':')[1]);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    0x4, // Status：1-正常回复，2-生产测试回复（由于3.5寸共享称存在蓝牙配网的可能，保留对原有配网协议的兼容）
                    0x01,
                  ],
                }),
              ];

            case 1:
              _b.sent();

              return [
                2,
                /*return*/
                this.writeData({
                  cmdData: [
                    0x80,
                    0x04,
                    payload.fatSwitch,
                    chargeTimeH,
                    chargeTimeL,
                    unChargeTimeH,
                    unChargeTimeL,
                    offScreenStartHour,
                    offScreenStartMin,
                    offScreenEndHour,
                    offScreenEndtMin,
                    payload.voice,
                  ],
                }),
              ];
          }
        });
      });
    };

    ShareCLScaleProtocol.bleProfile = new ShareCLScaleProfile();
    return ShareCLScaleProtocol;
  })(QNBleProtocol);

var ShareScalebleProfile =
  /** @class */
  (function () {
    function ShareScalebleProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.SHARE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    } // eslint-disable-next-line class-methods-use-this

    ShareScalebleProfile.prototype.isTargetDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-GXC';
    };

    ShareScalebleProfile.prototype.buildTargetDevice = function (nativeDevice) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[14]),
        number2hex(manufacturer[13]),
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
      ];
      var modelIds = [number2hex(manufacturer[4]), number2hex(manufacturer[5])];
      var sns = [
        number2hex(manufacturer[6]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[8]),
      ];
      return {
        modelId: modelIds.join(''),
        isSupportWifi: true,
        isScreenOn: true,
        mac: macs.join(':'),
        sn: sns.join(''),
      };
    };

    return ShareScalebleProfile;
  })();

var ShareScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(ShareScaleProtocol, _super);

    function ShareScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFE0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFE1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ_1 = '0000FFE2-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFE3-0000-1000-8000-00805F9B34FB';
      _this.isHoltk = false; // 当前执行命令的包的序号

      _this.currentCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = [];
      return _this;
    }
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */
    // eslint-disable-next-line class-methods-use-this

    ShareScaleProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          switch (payload.data[0]) {
            case 0x65:
              // payload.data[2]
              // 1 成功
              // 0 失败
              (_a = this.syncDataCallback) === null || _a === void 0
                ? void 0
                : _a.call(
                    this,
                    {
                      errCode: payload.data[2],
                    },
                    payload,
                    this
                  );
              break;

            case 0x68:
              (_b = this.rebootCallback) === null || _b === void 0
                ? void 0
                : _b.call(
                    this,
                    {
                      errCode: payload.data[2],
                    },
                    payload,
                    this
                  );
              break;
          }

          return [
            2,
            /*return*/
            Promise.resolve(payload),
          ];
        });
      });
    };

    ShareScaleProtocol.prototype.syncData = function (payload, callback) {
      this.log('[ShareScaleProtocol] 同步数据');
      this.syncDataCallback = callback;
      var lightStartTimeHour = Number(payload.lightStartTime.split(':')[0]);
      var lightStartTimeMin = Number(payload.lightStartTime.split(':')[1]);
      var lightStartTimeSec = Number(payload.lightStartTime.split(':')[2]);
      var lightContinueTimeHour = Number(
        payload.lightContinueTime.split(':')[0]
      );
      var lightContinueTimeMin = Number(
        payload.lightContinueTime.split(':')[1]
      );
      return this.writeData({
        cmdData: [
          0x64,
          0xa,
          payload.voice,
          payload.lightSwitch,
          lightStartTimeHour,
          lightStartTimeMin,
          lightStartTimeSec,
          lightContinueTimeHour,
          lightContinueTimeMin,
        ],
      });
    };

    ShareScaleProtocol.prototype.reboot = function (callback) {
      this.log('[ShareScaleProtocol] 重启设备');
      this.rebootCallback = callback;
      return this.writeData({
        cmdData: [0x69, 0x04, 0x01],
      });
    };

    ShareScaleProtocol.bleProfile = new ShareScalebleProfile();
    return ShareScaleProtocol;
  })(QNBleProtocol);

function getUnitString(unitNumber) {
  var unitMapping = {
    0: QNBleUnit.MMHG,
    1: QNBleUnit.KPA,
  }; // bit1 当前单位 0-mmgh 1-kpa
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

function parseMeasureInfo(data) {
  var user = data[2];
  var year = Number('20' + data[3]);
  var month = data[4];
  var day = data[5];
  var hour = data[6];
  var minute = data[7];
  var second = data[8];
  var dateTimeString = formatTime(
    new Date(year, month - 1, day, hour, minute, second),
    'YYYY-MM-DD HH:mm:ss'
  ); // 收缩压

  var hyper_h = data[9];
  var hyper_l = data[10];
  var hyper = (hyper_h << 8) + hyper_l; // 舒张压

  var hypot = data[11]; // 心率

  var heartRate = data[12]; // 数据状态

  var result = data[13]; // bit 0

  var unit = getUnitString(result & 1); // bit1-bit3 血压判断结果 需要和12指令的血压标准一起判断

  var resultValue = (result >> 1) & 7;
  var response = {
    user: user,
    dateTimeString: dateTimeString,
    // 千帕单位设备放大了10倍传递的数据，设备不能传送小数
    hyper: unit === QNBleUnit.KPA ? hyper / 10 : hyper,
    // 千帕单位设备放大了10倍传递的数据，设备不能传送小数
    hypot: unit === QNBleUnit.KPA ? hypot / 10 : hypot,
    heartRate: heartRate,
    unit: unit,
    // 千帕单位设备放大了10倍传递的数据，设备不能传送小数
    value: resultValue,
  };
  return response;
}

var SphygmomanometerProtocolProfile =
  /** @class */
  (function () {
    function SphygmomanometerProtocolProfile() {
      this.defaultAction = QNBleAction.NOT_SET;
      this.type = QNBleDeviceType.SPHYGMOMANOMETER;
      this.transferType = QNBleTransferType.BLE;
    }

    SphygmomanometerProtocolProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return nativeDevice.bluetoothName === 'QN-Hem';
    };

    SphygmomanometerProtocolProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[4]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
        // bit 0-02为血压计标准
        // 十进制值：0-中国血压标准，1-美国血压标准，2-欧洲血压标准，3-日本血压标准
        spStandardType: manufacturer[10] & 7,
        // single单蓝牙，dual双模血压计
        spDeviceType: number2hex(manufacturer[11]) === '05' ? 'dual' : 'single',
      };
    };

    return SphygmomanometerProtocolProfile;
  })();

var SphygmomanometerProtocol =
  /** @class */
  (function (_super) {
    __extends(SphygmomanometerProtocol, _super);

    function SphygmomanometerProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB'; // 蓝牙配对

      _this.UUID_COMPAIRE_READ = '0000FFF3-0000-1000-8000-00805F9B34FB';
      _this.UUID_COMPAIRE_WRITE = '0000FFF4-0000-1000-8000-00805F9B34FB'; // 配对状态

      _this.blePaireStatus = 0; // 历史数据总数

      _this.historyCount = 0; // 记录收到的上一条历史数据。做去重对比

      _this.lastReceivedHistoryData = {}; // 是否取消了数据同步，一旦取消就不再接收后续数据

      _this.isCancelHistoryData = false; // 当前已接收的历史数据序号

      _this.currentRecivedHistoryDataNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // 上一次收到的完整的wifi ssid数据包

      _this.lastReceivedWifiIno = {}; // 上一包接受的wifi ssid序号

      _this.lastReceivedWifiSsidPackNo = 0; // 当前执行配网命令的包的序号

      _this.currentSetWifiCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(SphygmomanometerProtocol.prototype, 'action', {
      get: function get() {
        return (
          this.operation.action ||
          SphygmomanometerProtocol.bleProfile.defaultAction
        );
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     */

    SphygmomanometerProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('获取到蓝牙服务列表', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(
                  deviceId,
                  this.serviceId
                ),
              ];

            case 4:
              _a.sent(); // if ([
              //   QNBleAction.SP_SYNC_CURRENT_DATA,
              //   QNBleAction.SP_SYNC_HISTORY_DATA,
              // ].includes(this.operation.action)) {
              // }

              this.log(
                '发现特征值成功，使能特征值',
                'deviceId',
                deviceId,
                'serviceId',
                this.serviceId,
                'characteristicId',
                this.characteristicReadId
              );
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  deviceId,
                  this.serviceId,
                  this.characteristicReadId
                ),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    SphygmomanometerProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      return __awaiter(this, void 0, void 0, function () {
        var data, _o, retValue, _p, status_1;

        return __generator(this, function (_q) {
          switch (_q.label) {
            case 0:
              data = payload.data;
              _q.label = 1;

            case 1:
              _q.trys.push([1, , 67, 68]);

              _o = data[0];

              switch (_o) {
                case 0x12:
                  return [
                    3, /*break*/
                    2,
                  ];

                case 0x14:
                  return [
                    3, /*break*/
                    6,
                  ];

                case 0x10:
                  return [
                    3, /*break*/
                    16,
                  ];

                case 0x23:
                  return [
                    3, /*break*/
                    20,
                  ];

                case 0x56:
                  return [
                    3, /*break*/
                    22,
                  ];

                case 0x58:
                  return [
                    3, /*break*/
                    24,
                  ];

                case 0x61:
                  return [
                    3, /*break*/
                    26,
                  ];

                case 0x63:
                  return [
                    3, /*break*/
                    27,
                  ];

                case 0x65:
                  return [
                    3, /*break*/
                    32,
                  ];

                case 0x67:
                  return [
                    3, /*break*/
                    36,
                  ];

                case 0x69:
                  return [
                    3, /*break*/
                    41,
                  ];

                case 0x6b:
                  return [
                    3, /*break*/
                    44,
                  ];

                case 0x6f:
                  return [
                    3, /*break*/
                    49,
                  ];

                case 0x71:
                  return [
                    3, /*break*/
                    52,
                  ];

                case 0x73:
                  return [
                    3, /*break*/
                    57,
                  ];

                case 0x74:
                  return [
                    3, /*break*/
                    60,
                  ];

                case 0x77:
                  return [
                    3, /*break*/
                    62,
                  ];

                case 0xa0:
                  return [
                    3, /*break*/
                    63,
                  ];
              }

              return [
                3, /*break*/
                65,
              ];

            case 2:
              if (!(this.lastCmd !== 0x12))
                return [
                  3, /*break*/
                  4,
                ];
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 3:
              _q.sent();

              return [
                3, /*break*/
                5,
              ];

            case 4:
              this.log('收到重复的0x12命令数据，舍弃');
              _q.label = 5;

            case 5:
              return [
                3, /*break*/
                66,
              ];

            case 6:
              if (!(this.lastCmd !== 0x14))
                return [
                  3, /*break*/
                  14,
                ];
              retValue = data[2];
              (_b = (_a = this.listener).onGetDeviceSetStatus) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, retValue);
              if (!(retValue === 1))
                return [
                  3, /*break*/
                  13,
                ];
              _p = this.action;

              switch (_p) {
                case QNBleAction.SP_SYNC_CURRENT_DATA:
                  return [
                    3, /*break*/
                    7,
                  ];

                case QNBleAction.SP_SYNC_HISTORY_DATA:
                  return [
                    3, /*break*/
                    8,
                  ];

                case QNBleAction.SET_WIFI:
                  return [
                    3, /*break*/
                    10,
                  ];
              }

              return [
                3, /*break*/
                12,
              ];

            case 7:
              // do nothing
              // 设备默认会发送10命令上传当前测量数据
              return [
                3, /*break*/
                13,
              ];

            case 8:
              // 准备读取历史数据
              return [
                4,
                /*yield*/
                this.prepareSyncHistoryData(),
              ];

            case 9:
              // 准备读取历史数据
              _q.sent();

              return [
                3, /*break*/
                13,
              ];

            case 10:
              // 通知设备扫描附近wifi
              return [
                4,
                /*yield*/
                this.doScanWifi(),
              ];

            case 11:
              // 通知设备扫描附近wifi
              _q.sent();

              return [
                3, /*break*/
                13,
              ];

            case 12:
              return [
                3, /*break*/
                13,
              ];

            case 13:
              return [
                3, /*break*/
                15,
              ];

            case 14:
              this.log('收到重复的0x14命令数据，舍弃');
              _q.label = 15;

            case 15:
              return [
                3, /*break*/
                66,
              ];

            case 16:
              if (!(this.lastCmd !== 0x10))
                return [
                  3, /*break*/
                  18,
                ]; // if (this.action === QNBleAction.SP_SYNC_CURRENT_DATA) {
              //   await this.doSyncCurrentData(data);
              // } else {
              //   this.log('指定的operation.action不是同步当前数据动作，忽略同步当前数据');
              // }

              return [
                4,
                /*yield*/
                this.doSyncCurrentData(data),
              ];

            case 17:
              // if (this.action === QNBleAction.SP_SYNC_CURRENT_DATA) {
              //   await this.doSyncCurrentData(data);
              // } else {
              //   this.log('指定的operation.action不是同步当前数据动作，忽略同步当前数据');
              // }
              _q.sent();

              return [
                3, /*break*/
                19,
              ];

            case 18:
              this.log('收到重复的0x10命令数据，舍弃');
              _q.label = 19;

            case 19:
              return [
                3, /*break*/
                66,
              ];

            case 20:
              // if (!this.isCancelHistoryData) {
              //   await this.doSyncHistoryData(data);
              // }
              return [
                4,
                /*yield*/
                this.doSyncHistoryData(data),
              ];

            case 21:
              // if (!this.isCancelHistoryData) {
              //   await this.doSyncHistoryData(data);
              // }
              _q.sent();

              return [
                3, /*break*/
                66,
              ];

            case 22:
              return [
                4,
                /*yield*/
                this.onReceiveWifiSsidData(data),
              ];

            case 23:
              _q.sent();

              return [
                3, /*break*/
                66,
              ];

            case 24:
              // wifi扫描结束
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x59, 4, 1],
                }),
              ];

            case 25:
              // wifi扫描结束
              _q.sent();

              (_d = (_c = this.listener).onScanWifiFinished) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c);
              return [
                3, /*break*/
                66,
              ];

            case 26:
              // 发送ssid
              if (data[2] === 1) {
                this.currentSetWifiCmdNo = 0;
                this.log('开始发送 WIFI ssid ');
                this.sendWifiSsid();
              }

              return [
                3, /*break*/
                66,
              ];

            case 27:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.ssidCmdData.length))
                return [
                  3, /*break*/
                  29,
                ]; // ssid还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiSsid(),
              ];

            case 28:
              // ssid还没发送完
              _q.sent();

              return [
                3, /*break*/
                31,
              ];

            case 29:
              // ssid已经发送，重置序号，开始发送wifi密码
              this.currentSetWifiCmdNo = 0;
              this.log('APP启动发送 WIFI PASSWORD命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x64, 4, this.pwdCmdData.length],
                }),
              ];

            case 30:
              _q.sent();

              _q.label = 31;

            case 31:
              return [
                3, /*break*/
                66,
              ];

            case 32:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  35,
                ];
              if (!(this.pwdCmdData.length > 0))
                return [
                  3, /*break*/
                  33,
                ];
              this.log('准备发送密码');
              this.currentSetWifiCmdNo = 0;
              this.sendWifiPwd();
              return [
                3, /*break*/
                35,
              ];

            case 33:
              this.log('无密码，不发送66h，通知设备准备开始发送 server_url');
              this.currentSetWifiCmdNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 4, this.dataServerUrlData.length],
                }),
              ];

            case 34:
              _q.sent();

              _q.label = 35;

            case 35:
              return [
                3, /*break*/
                66,
              ];

            case 36:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.pwdCmdData.length))
                return [
                  3, /*break*/
                  38,
                ]; // wifi密码还没发送完

              return [
                4,
                /*yield*/
                this.sendWifiPwd(),
              ];

            case 37:
              // wifi密码还没发送完
              _q.sent();

              return [
                3, /*break*/
                40,
              ];

            case 38:
              // wifi密码已发送完，重置序号
              this.currentSetWifiCmdNo = 0; // 发送server_url

              this.log('通知设备开始发送 data_server_url');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x68, 4, this.dataServerUrlData.length],
                }),
              ];

            case 39:
              _q.sent();

              _q.label = 40;

            case 40:
              return [
                3, /*break*/
                66,
              ];

            case 41:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  43,
                ];
              this.log('开始发送SEVER URL');
              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 42:
              _q.sent();

              _q.label = 43;

            case 43:
              return [
                3, /*break*/
                66,
              ];

            case 44:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.dataServerUrlData.length))
                return [
                  3, /*break*/
                  46,
                ]; // 数据服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendDataServerUrl(),
              ];

            case 45:
              // 数据服务器URL还没发送完
              _q.sent();

              return [
                3, /*break*/
                48,
              ];

            case 46:
              // 数据服务器URL已经发送，重置序号，开始发送OTA URL数据
              this.currentSetWifiCmdNo = 0;
              this.log('发送启动设置 OTA服务器 命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x6e, 4, this.otaServerUrlData.length],
                }),
              ];

            case 47:
              _q.sent();

              _q.label = 48;

            case 48:
              return [
                3, /*break*/
                66,
              ];

            case 49:
              if (!(data[2] === 1))
                return [
                  3, /*break*/
                  51,
                ];
              this.log('开始发送OTA URL');
              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 50:
              _q.sent();

              _q.label = 51;

            case 51:
              return [
                3, /*break*/
                66,
              ];

            case 52:
              this.currentSetWifiCmdNo = data[2];
              if (!(this.currentSetWifiCmdNo < this.otaServerUrlData.length))
                return [
                  3, /*break*/
                  54,
                ]; // ota服务器URL还没发送完

              return [
                4,
                /*yield*/
                this.sendOtaServerUrl(),
              ];

            case 53:
              // ota服务器URL还没发送完
              _q.sent();

              return [
                3, /*break*/
                56,
              ];

            case 54:
              // ota服务器URL已经发送，重置序号，开始发送密钥数据
              this.currentSetWifiCmdNo = 0;
              this.log('发送密钥');
              return [
                4,
                /*yield*/
                this.sendEncryptKeyData(),
              ];

            case 55:
              _q.sent();

              _q.label = 56;

            case 56:
              return [
                3, /*break*/
                66,
              ];

            case 57:
              if (!(data[2] === 0))
                return [
                  3, /*break*/
                  59,
                ];
              this.log('密钥发送失败，重发密钥');
              return [
                4,
                /*yield*/
                this.sendEncryptKeyData(),
              ];

            case 58:
              _q.sent();

              _q.label = 59;

            case 59:
              return [
                3, /*break*/
                66,
              ];

            case 60:
              // TODO wifi连接状态回调可以合并成一个回调
              if (data[2] === 1) {
                (_f = (_e = this.listener).onSetWifiSuccess) === null ||
                _f === void 0
                  ? void 0
                  : _f.call(_e);
              } else {
                (_h = (_g = this.listener).onSetWifiFail) === null ||
                _h === void 0
                  ? void 0
                  : _h.call(_g, data[2]);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x75, 4, 1],
                }),
              ];

            case 61:
              _q.sent();

              return [
                3, /*break*/
                66,
              ];

            case 62:
              // 收到配网查询回复
              // 0:wifi未连接
              // 1:wifi已连接
              // 2:wifi已连接服务器
              // 3:wifi未连接服务器
              (_k = (_j = this.listener).onGetQueryWifiConnectStatusResult) ===
                null || _k === void 0
                ? void 0
                : _k.call(_j, data[2]);
              return [
                3, /*break*/
                66,
              ];

            case 63:
              status_1 = data[2];
              this.blePaireStatus = status_1;
              (_m = (_l = this.listener).onGetBlePaireStatus) === null ||
              _m === void 0
                ? void 0
                : _m.call(_l, status_1);
              return [
                4,
                /*yield*/
                this.writeData({
                  characteristicId: this.UUID_COMPAIRE_WRITE,
                  cmdData: [0xa1, 4, 1],
                }),
              ];

            case 64:
              _q.sent();

              return [
                3, /*break*/
                66,
              ];

            case 65:
              return [
                3, /*break*/
                66,
              ];

            case 66:
              return [
                3, /*break*/
                68,
              ];

            case 67:
              this.lastCmd = data[0];
              return [
                7,
                /*endfinally*/
              ];

            case 68:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.prototype.getDeviceInfo = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var deviceInfo,
          chargeType,
          supportChangeLanguage,
          standardType,
          deviceStatus,
          chargeStatus,
          unit,
          language,
          volume,
          historyCount,
          modelId,
          softwareVersion,
          bleVersion,
          bleProtocolVersion,
          nowDate,
          year,
          month,
          day,
          hour,
          minute,
          second,
          timeZoneOffset,
          timeZone;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              deviceInfo = data[2];
              chargeType = deviceInfo & 1;
              supportChangeLanguage = (deviceInfo >> 1) & 3;
              standardType = (deviceInfo >> 3) & 7;
              deviceStatus = data[4];
              chargeStatus = deviceStatus & 1;
              unit = getUnitString((deviceStatus >> 1) & 1);
              language = (deviceStatus >> 2) & 3;
              volume = (deviceStatus >> 4) & 7;
              historyCount = data[11];
              this.historyCount = historyCount;
              modelId = number2hex(data[12]) + number2hex(data[13]);
              softwareVersion = data[14];
              bleVersion = data[15];
              bleProtocolVersion = data[16];
              (_b = (_a = this.listener).onGetDeviceInfo) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      modelId: modelId,
                      deviceInfo: {
                        chargeType: chargeType,
                        supportChangeLanguage: supportChangeLanguage,
                        standardType: standardType,
                      },
                      deviceStatus: {
                        chargeStatus: chargeStatus,
                        unit: unit,
                        language: language,
                        volume: volume,
                      },
                      historyCount: historyCount,
                      softwareVersion: softwareVersion,
                      bleVersion: bleVersion,
                      bleProtocolVersion: bleProtocolVersion,
                    },
                  });
              nowDate = new Date();
              year = Number(
                ('' + nowDate.getFullYear()).split('').splice(2).join('')
              );
              month = nowDate.getMonth() + 1;
              day = nowDate.getDate();
              hour = nowDate.getHours();
              minute = nowDate.getMinutes();
              second = nowDate.getSeconds();
              timeZoneOffset = nowDate.getTimezoneOffset() / 15;
              timeZone =
                Math.abs(timeZoneOffset) | (timeZoneOffset > 0 ? 0x80 : 0);
              this.log(
                '同步时间',
                year,
                month,
                day,
                hour,
                minute,
                second,
                timeZone
              );
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [
                    0x13,
                    13,
                    year,
                    month,
                    day,
                    hour,
                    minute,
                    second, // 单位切换 0xff：不切换单位；00：mmgh；01：kpa
                    0xff, // 0xff：不修改音量，音量 00~05
                    0xff, // 0xFF：不切换语言；00：中文 ；01：英文
                    0xff,
                    timeZone,
                  ],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 同步当前数据
     */

    SphygmomanometerProtocol.prototype.doSyncCurrentData = function (data) {
      var _a, _b, _c, _d, _e, _f;

      return __awaiter(this, void 0, void 0, function () {
        var measureStatus, measureCmdData, measureInfo, _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              measureStatus = data[2]; // 去掉状态字节

              data.splice(2, 1);
              measureCmdData = data;
              this.log(
                'doSyncCurrentData',
                'measureStatus',
                measureStatus,
                'measureCmdData',
                measureCmdData
              );
              measureInfo = parseMeasureInfo(measureCmdData);
              _g = measureStatus;

              switch (_g) {
                case 0:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 1:
                  return [
                    3, /*break*/
                    2,
                  ];

                case 2:
                  return [
                    3, /*break*/
                    4,
                  ];
              }

              return [
                3, /*break*/
                6,
              ];

            case 1:
              (_b = (_a = this.listener).onMeasuring) === null || _b === void 0
                ? void 0
                : _b.call(_a, measureInfo);
              return [
                3, /*break*/
                7,
              ];

            case 2:
              this.log('回调onMeasureSuccess');
              (_d = (_c = this.listener).onMeasureSuccess) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, measureInfo);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 4, 0x10],
                }),
              ];

            case 3:
              _h.sent();

              return [
                3, /*break*/
                7,
              ];

            case 4:
              (_f = (_e = this.listener).onMeasureFail) === null ||
              _f === void 0
                ? void 0
                : _f.call(_e, measureInfo);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 4, 0x10],
                }),
              ];

            case 5:
              _h.sent();

              return [
                3, /*break*/
                7,
              ];

            case 6:
              return [
                3, /*break*/
                7,
              ];

            case 7:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 通知设备准备同步历史数据
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'prepareSyncHistoryData', ...args)
     */

    SphygmomanometerProtocol.prototype.prepareSyncHistoryData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('通知设备准备同步历史数据');
              this.currentRecivedHistoryDataNo = 0;
              this.isCancelHistoryData = false;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x22, 4, 1],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 同步历史数据
     */

    SphygmomanometerProtocol.prototype.doSyncHistoryData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var measureInfo;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              measureInfo = parseMeasureInfo(data);
              this.log('doSyncHistoryData', measureInfo); // 判断是否与上一条数据一致

              if (!equal(measureInfo, this.lastReceivedHistoryData)) {
                (_b = (_a = this.listener).onGetHistoryData) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, measureInfo);
                this.lastReceivedHistoryData = measureInfo;
              } else {
                this.log(
                  'doSyncHistoryData',
                  '收到与上一条重复的数据',
                  'lastReceivedHistoryData',
                  this.lastReceivedHistoryData
                );
              }

              this.currentRecivedHistoryDataNo += 1; // 通知设备继续发送数据

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x24, 4, this.isCancelHistoryData ? 0 : 1],
                }),
              ];

            case 1:
              // 通知设备继续发送数据
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 取消同步历史数据
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'cancelSyncHistoryData', ...args)
     */

    SphygmomanometerProtocol.prototype.cancelSyncHistoryData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('取消历史数据同步'); // 注意。这里要在收到的数据后再去回复终止命令

          this.isCancelHistoryData = true;
          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * 通知设备扫描附近wifi
     * 可在外部使用 qnble.callProtocolMethodAsync(deviceId, 'doScanWifi', ...args)
     */

    SphygmomanometerProtocol.prototype.doScanWifi = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('通知设备扫描附近wifi');
              this.wifiInfoCache.rssi = 0;
              this.wifiInfoCache.ssid = [];
              this.lastReceivedWifiSsidPackNo = 0;
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x55, 4, 1],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 收到设备发送过来的wifi信息数据
     */

    SphygmomanometerProtocol.prototype.onReceiveWifiSsidData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var rssi, packInfo, packCount, packNo, ssidData, info;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              rssi = data[1] - 0xff - 1;
              packInfo = data[2];
              packCount = (packInfo >> 4) & 15;
              packNo = packInfo & 15;
              ssidData = data.slice(3, data.length - 1);
              this.log(
                'onReceiveWifiSsidData',
                'packCount',
                packCount,
                'packNo',
                packNo,
                'ssidData',
                ssidData
              );

              if (packNo > this.lastReceivedWifiSsidPackNo) {
                this.wifiInfoCache.rssi = rssi;
                this.wifiInfoCache.ssid.push(byteArrayToString(ssidData));

                if (packCount === packNo) {
                  this.log(
                    'wifi ssid base64编码',
                    this.wifiInfoCache.ssid.join('')
                  );
                  info = {
                    rssi: rssi,
                    ssid: gBase64.decode(this.wifiInfoCache.ssid.join('')),
                    level: getWifiRssiLevel(rssi),
                  };
                  this.log('收到完整 wifi 信息', info);

                  if (!equal(this.lastReceivedWifiIno, info)) {
                    (_b = (_a = this.listener).onGetWifiInfo) === null ||
                    _b === void 0
                      ? void 0
                      : _b.call(_a, info);
                    this.lastReceivedWifiIno = info;
                  } else {
                    this.log(
                      '收到与上一条重复的 wifi 数据',
                      'lastReceivedWifiIno',
                      this.lastReceivedWifiIno
                    );
                  }

                  this.wifiInfoCache.rssi = 0;
                  this.wifiInfoCache.ssid = [];
                  this.lastReceivedWifiSsidPackNo = 0;
                } else {
                  this.lastReceivedWifiSsidPackNo = packNo;
                }
              } else {
                console.warn('收到重复的 wifi ssid 数据包', data);
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x57, 4, packInfo],
                }),
              ];

            case 1:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 这个方法由外部主动调用
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'doSetWifi', ...args)
     */

    SphygmomanometerProtocol.prototype.doSetWifi = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('doSetWifi', payload);
              return [
                4,
                /*yield*/
                this.doPrepareSetWifi(payload),
              ];

            case 1:
              _a.sent(); // APP启动发送WIFI SSID 命令

              this.log('APP启动发送WIFI SSID命令');
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x60, 4, this.ssidCmdData.length],
                }),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.prototype.doPrepareSetWifi = function (payload) {
      if (payload === void 0) {
        payload = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        var _a,
          _b,
          wifiSsid,
          _c,
          wifiPwd,
          _d,
          dataServerUrl,
          _e,
          encryptKey,
          _f,
          otaServerUrl,
          ssidByteArray,
          pwdByteArray,
          dataServerUrlByteArray,
          otaServerUrlByteArray;

        return __generator(this, function (_g) {
          (_a = __assign(__assign({}, this.operation), payload)),
            (_b = _a.wifiSsid),
            (wifiSsid = _b === void 0 ? '' : _b),
            (_c = _a.wifiPwd),
            (wifiPwd = _c === void 0 ? '' : _c),
            (_d = _a.dataServerUrl),
            (dataServerUrl = _d === void 0 ? '' : _d),
            (_e = _a.encryptKey),
            (encryptKey = _e === void 0 ? '' : _e),
            (_f = _a.otaServerUrl),
            (otaServerUrl = _f === void 0 ? 'https://ota.yolanda.hk' : _f);
          this.log(
            'wifiSsid',
            wifiSsid,
            'wifiPwd',
            wifiPwd,
            'dataServerUrl',
            dataServerUrl,
            'encryptKey',
            encryptKey
          );

          if (wifiSsid.length > 32) {
            return [
              2,
              /*return*/
              Promise.reject(new QNBleError(QNBleErrorType.WIFI_SSID_ERROR)),
            ];
          }

          if (wifiPwd.length > 64) {
            return [
              2,
              /*return*/
              Promise.reject(
                new QNBleError(QNBleErrorType.WIFI_PASSWORD_ERROR)
              ),
            ];
          }

          ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
          pwdByteArray = stringToByteArray(wifiPwd);
          this.log('pwdByteArray', pwdByteArray, 'wifiPwd', wifiPwd);
          dataServerUrlByteArray = stringToByteArray(dataServerUrl);
          otaServerUrlByteArray = stringToByteArray(otaServerUrl);
          this.ssidCmdData = splitArray(ssidByteArray);
          this.pwdCmdData = splitArray(pwdByteArray);
          this.dataServerUrlData = splitArray(dataServerUrlByteArray);
          this.otaServerUrlData = splitArray(otaServerUrlByteArray);
          this.encryptKeyCmdData = stringToByteArray(encryptKey); // 当前发包的序号

          this.currentSetWifiCmdNo = 0;
          return [
            2,
            /*return*/
            Promise.resolve(0),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendWifiSsid = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          this.log(
            'ssidCmdData数据',
            this.ssidCmdData,
            'currentSetWifiCmdNo',
            this.currentSetWifiCmdNo
          );
          cmd = this.ssidCmdData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

          this.currentSetWifiCmdNo += 1; // 高4位表示此数据需要传输多少包,低4位表示目前传输的是第几包,例如0X21,表示总共两包,目前传输的是第一包
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 SSID \u6570\u636E'
          );
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x62, cmdLength, this.currentSetWifiCmdNo],
                cmd
              ),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendWifiPwd = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          this.log('pwdCmdData', this.pwdCmdData);
          cmd = this.pwdCmdData[this.currentSetWifiCmdNo] || [];
          cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

          this.currentSetWifiCmdNo += 1;
          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 PWD \u6570\u636E'
          ); // 高4位表示此数据需要传输多少包,低4位表示目前传输的是第几包,例如0X21,表示总共两包,目前传输的是第一包
          // const packInfo = cmdCount > 0 ? ((cmdCount << 4) + this.currentSetWifiCmdNo) : 0;

          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x66, cmdLength, this.currentSetWifiCmdNo],
                cmd
              ),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendDataServerUrl = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          cmd = this.dataServerUrlData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

          this.currentSetWifiCmdNo += 1; // 高4位表示此数据需要传输多少包,低4位表示目前传输的是第几包,例如0X21,表示总共两包,目前传输的是第一包
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 DATA\u670D\u52A1\u5668 \u6570\u636E'
          );
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x6a, cmdLength, this.currentSetWifiCmdNo],
                cmd
              ),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendOtaServerUrl = function () {
      return __awaiter(this, void 0, void 0, function () {
        var cmd, cmdLength;
        return __generator(this, function (_a) {
          cmd = this.otaServerUrlData[this.currentSetWifiCmdNo];
          cmdLength = cmd.length + 4; // 这里进行+1，发给硬件的序号是从1开始的

          this.currentSetWifiCmdNo += 1; // 高4位表示此数据需要传输多少包,低4位表示目前传输的是第几包,例如0X21,表示总共两包,目前传输的是第一包
          // const packInfo = (cmdCount << 4) + this.currentSetWifiCmdNo;

          this.log(
            '\u53D1\u9001\u7B2C ' +
              this.currentSetWifiCmdNo +
              ' \u5305 OTA\u670D\u52A1\u5668 \u6570\u636E'
          );
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x70, cmdLength, this.currentSetWifiCmdNo],
                cmd
              ),
            }),
          ];
        });
      });
    };

    SphygmomanometerProtocol.prototype.sendEncryptKeyData = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log('发送秘钥');
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: __spread(
                [0x72, this.encryptKeyCmdData.length + 4, 1],
                this.encryptKeyCmdData
              ),
            }),
          ];
        });
      });
    };
    /**
     * 查询wifi连接状态
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'queryWifiConnectStatus', ...args)
     * @param {number} type 1：表示查询wifi是否连接 2：查询wifi是否连接服务器
     */

    SphygmomanometerProtocol.prototype.queryWifiConnectStatus = function (
      type
    ) {
      if (type === void 0) {
        type = 1;
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x76, 4, type],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 准备蓝牙配对
     */

    SphygmomanometerProtocol.prototype.prepareBlePaire = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('使能蓝牙配对');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  this.UUID_IBT_SERVICE,
                  this.UUID_COMPAIRE_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    SphygmomanometerProtocol.bleProfile = new SphygmomanometerProtocolProfile();
    return SphygmomanometerProtocol;
  })(QNBleProtocol);

function getUnitString$1(unitNumber) {
  var unitMapping = {
    1: QNBleUnit.G,
    2: QNBleUnit.ML,
    4: QNBleUnit.MILKML,
    8: QNBleUnit.OZ,
    22: QNBleUnit.LBOZ,
  }; // 称端单位，0x01- g，0x02- ml，0x04 - ml（牛奶），0x08 - fl.oz，0x10- lb：oz；
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

function computedWeight(weight, precision) {
  var dividePrecision = precision ? 10 : 1;
  return (weight = Number((weight / dividePrecision).toFixed(1)));
}

var BleKitchenScaleProtocolProfile =
  /** @class */
  (function () {
    function BleKitchenScaleProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.BLE_KITCHEN_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    BleKitchenScaleProtocolProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return nativeDevice.bluetoothName === 'QN-KS';
    };

    BleKitchenScaleProtocolProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return BleKitchenScaleProtocolProfile;
  })();

var BleKitchenScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(BleKitchenScaleProtocol, _super);

    function BleKitchenScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = 'FFF0';
      _this.UUID_IBT_READ = 'FFF1';
      _this.UUID_IBT_WRITE = 'FFF2';
      return _this;
    }

    BleKitchenScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  deviceId,
                  this.serviceId,
                  this.characteristicReadId
                ),
              ];

            case 2:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    BleKitchenScaleProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              data = payload.data;
              _a = data[0];

              switch (_a) {
                case 0x10:
                  return [
                    3, /*break*/
                    1,
                  ];
              }

              return [
                3, /*break*/
                3,
              ];

            case 1:
              return [
                4,
                /*yield*/
                this.onGetScaleData(data),
              ];

            case 2:
              _b.sent();

              return [
                3, /*break*/
                4,
              ];

            case 3:
              return [
                3, /*break*/
                4,
              ];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    BleKitchenScaleProtocol.prototype.onGetScaleData = function (data) {
      return __awaiter(this, void 0, void 0, function () {
        var scaleMessage,
          isPeeled,
          type,
          overWeight,
          isSteady,
          precision,
          range,
          weightUnit,
          getWeight,
          weight,
          scaleData;
        return __generator(this, function (_a) {
          scaleMessage = data[8];
          isPeeled = scaleMessage & 1;
          type = (scaleMessage >> 1) & 1;
          overWeight = (scaleMessage >> 2) & 1 ? true : false;
          isSteady = (scaleMessage >> 3) & 1;
          precision = (scaleMessage >> 4) & 1;
          range = (scaleMessage >> 7) & 1;
          weightUnit = getUnitString$1(parseInt(String(data[7]), 16));
          getWeight = Number.parseFloat(
            this.decodeWeight(data[9], data[10]).toFixed(2)
          );
          weight = computedWeight(getWeight, precision);
          scaleData = {
            weight: weight,
            weightUnit: weightUnit,
            isPeeled: isPeeled,
            type: type,
            overWeight: overWeight,
            isSteady: isSteady,
            range: range,
          };
          this.listener.onGetScaleData(scaleData);
          return [
            2,
            /*return*/
            this.doAdvertising(data),
          ];
        });
      });
    };
    /**
     * 这个方法由外部主动调用
     * 可使用 qnble.callProtocolMethodAsync(deviceId, 'doSetControl', ...args)
     */

    BleKitchenScaleProtocol.prototype.doSetControl = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [
            2,
            /*return*/
            this.writeData({
              cmdData: [0x13, 0x04, payload.control],
            }),
          ];
        });
      });
    };

    BleKitchenScaleProtocol.bleProfile = new BleKitchenScaleProtocolProfile();
    return BleKitchenScaleProtocol;
  })(QNBleProtocol);

function getUnitString$2(unitNumber) {
  var unitMapping = {
    1: QNBleUnit.G,
    2: QNBleUnit.ML,
    3: QNBleUnit.OZ,
    4: QNBleUnit.LBOZ,
    5: QNBleUnit.MILKML,
  }; // 称端单位，0x01- g，0x02- ml，0x04 - ml（牛奶），0x08 - fl.oz，0x10- lb：oz；
  // @ts-ignore

  var unit = unitMapping[unitNumber];
  return unit;
}

var BroadcastKitchenScaleProtocolProfile =
  /** @class */
  (function () {
    function BroadcastKitchenScaleProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.OTO_BROADCAST_SCALE;
      this.transferType = QNBleTransferType.BROADCAST;
    }

    BroadcastKitchenScaleProtocolProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      var manufacturer = nativeDevice.manufacturer;
      /**
       * 美恩厨房秤 data1(1)、data2(2)：固定为7A、5F，用于APP识别
       */

      return manufacturer[0] === 0x7a && manufacturer[1] === 0x5f;
    };

    BroadcastKitchenScaleProtocolProfile.prototype.buildTargetDevice =
      function (nativeDevice) {
        if (!this.isTargetDevice(nativeDevice)) {
          return null;
        }

        var manufacturer = nativeDevice.manufacturer;
        var macs = [
          number2hex(manufacturer[9]),
          number2hex(manufacturer[10]),
          number2hex(manufacturer[11]),
          number2hex(manufacturer[12]),
          number2hex(manufacturer[13]),
          number2hex(manufacturer[14]),
        ];
        return {
          modelId: number2hex(manufacturer[6]) + number2hex(manufacturer[7]),
          mac: macs.join(':'),
        };
      };

    return BroadcastKitchenScaleProtocolProfile;
  })();

var BroadcastKitchenScaleProtocol =
  /** @class */
  (function (_super) {
    __extends(BroadcastKitchenScaleProtocol, _super);

    function BroadcastKitchenScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.measureCount = 0;
      return _this;
    }

    BroadcastKitchenScaleProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          data = this.bleDevice.manufacturer;
          return [
            2,
            /*return*/
            this.decode({
              data: data,
            }),
          ];
        });
      });
    };
    /**
     * @override
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    BroadcastKitchenScaleProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data,
          weight,
          scaleMessage,
          isSteady,
          weightUnitIndex,
          overWeight,
          type,
          isPeeled,
          weightUnit,
          scaleData;
        return __generator(this, function (_a) {
          data = payload.data;
          weight = Number.parseFloat(
            this.decodeWeight(data[3], data[4]).toFixed(2)
          );
          scaleMessage = data[8];
          isSteady = (scaleMessage >> 7) & 1;
          weightUnitIndex = (scaleMessage >> 1) & 7;
          overWeight = (scaleMessage >> 6) & 1 ? true : false;
          type = (scaleMessage >> 5) & 1;
          isPeeled = (scaleMessage >> 4) & 1;
          weightUnit = getUnitString$2(weightUnitIndex);
          scaleData = {
            weight: weight,
            weightUnit: weightUnit,
            isPeeled: isPeeled,
            type: type,
            overWeight: overWeight,
            isSteady: isSteady,
          };
          this.listener.onGetScaleData(scaleData);
          return [
            2,
            /*return*/
            this.doAdvertising(data),
          ];
        });
      });
    };

    BroadcastKitchenScaleProtocol.bleProfile =
      new BroadcastKitchenScaleProtocolProfile();
    return BroadcastKitchenScaleProtocol;
  })(QNBleProtocol);

var FasciaGunMCUProtocolProfile =
  /** @class */
  (function () {
    function FasciaGunMCUProtocolProfile() {
      this.defaultAction = QNBleAction.FG_ADJUST_SETTING;
      this.transferType = QNBleTransferType.BLE;
      this.type = QNBleDeviceType.FASCIA_GUN;
    }

    FasciaGunMCUProtocolProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return nativeDevice.bluetoothName === 'Hi-QNCM10A-120C000';
    };

    FasciaGunMCUProtocolProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var modelId = number2hex(manufacturer[2]) + number2hex(manufacturer[3]);
      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      var targetDevice = {
        modelId: modelId,
        mac: macs.join(':'),
        isSupportWifi: false,
        isScreenOn: false,
      };
      return targetDevice;
    };

    return FasciaGunMCUProtocolProfile;
  })();

var FasciaGunMCUProtocol =
  /** @class */
  (function (_super) {
    __extends(FasciaGunMCUProtocol, _super);

    function FasciaGunMCUProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_READ = 'FFF1';
      _this.UUID_IBT_WRITE = 'FFF2';
      _this.UUID_IBT_SERVICE = 'FFF0';
      return _this;
    }

    FasciaGunMCUProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('获取到蓝牙服务列表', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(
                  deviceId,
                  this.serviceId
                ),
              ];

            case 4:
              _a.sent();

              this.log('发现特征值成功，使能特征值');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  deviceId,
                  this.serviceId,
                  this.characteristicReadId
                ),
              ];

            case 5:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    FasciaGunMCUProtocol.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, header, _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              data = payload.data;
              header = data[0];
              _a = header;

              switch (_a) {
                case 0x10:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x21:
                  return [
                    3, /*break*/
                    3,
                  ];

                case 0x31:
                  return [
                    3, /*break*/
                    4,
                  ];

                case 0x41:
                  return [
                    3, /*break*/
                    5,
                  ];
              }

              return [
                3, /*break*/
                6,
              ];

            case 1:
              // 收到设备信息
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 2:
              // 收到设备信息
              _b.sent();

              return [
                3, /*break*/
                7,
              ];

            case 3:
              // 收到设置筋膜枪档位结果
              this.setDeviceWorkGearResult(data);
              return [
                3, /*break*/
                7,
              ];

            case 4:
              this.setDeviceWorkTimeResult(data);
              return [
                3, /*break*/
                7,
              ];

            case 5:
              this.setDeviceWorkModeResult(data);
              return [
                3, /*break*/
                7,
              ];

            case 6:
              return [
                3, /*break*/
                7,
              ];

            case 7:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x10 收到设备信息

    FasciaGunMCUProtocol.prototype.getDeviceInfo = function (data) {
      var _a;

      return __awaiter(this, void 0, void 0, function () {
        var id, bcuVer, bleVer, gear, gmqMode, batteryInfo;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              id = (data[2] << 8) + data[3];
              bcuVer = data[4];
              bleVer = data[5];
              gear = data[6];
              gmqMode = data[7];
              batteryInfo = data[8];
              (_a = this.listener) === null || _a === void 0
                ? void 0
                : _a.onGetDeviceInfo({
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      id: id,
                      bcuVer: bcuVer,
                      bleVer: bleVer,
                      gear: gear,
                      gmqMode: gmqMode,
                      batteryInfo: batteryInfo,
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x11,
                  cmd: [0x01],
                }),
              ];

            case 1:
              _b.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 设置工作档位
     * @param gear 1-30
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkGear = function (gear) {
      return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              data = Number.parseInt(gear.toString());

              if (data < 1 || data > 30) {
                this.log(
                  '\u6863\u4F4D\u53C2\u6570: ' +
                    data +
                    ',\u4E0D\u5728\u6B63\u786E\u8303\u56F4\u5185,\u65E0\u6CD5\u8BBE\u7F6E'
                );
                return [
                  2,
                  /*return*/
                  Promise.reject(),
                ];
              }

              this.log(
                '\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u6863\u4F4D\u4E3A: ' +
                  data
              );
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x20,
                  cmd: [data],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x21

    FasciaGunMCUProtocol.prototype.setDeviceWorkGearResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u6863\u4F4D\u8BBE\u7F6E\u7ED3\u679C: ' +
          (result ? '成功' : '失败')
      );
    };
    /**
     * 设置设备工作时间(单位:min)
     * @param time 范围5-300 分度 5
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkTime = function (time) {
      return __awaiter(this, void 0, void 0, function () {
        var data, cmd;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              data = Number.parseInt((time / 5).toString()) * 5;

              if (data < 5 || data > 300) {
                this.log(
                  '\u5DE5\u4F5C\u65F6\u95F4\u53C2\u6570: ' +
                    data +
                    ',\u4E0D\u5728\u6B63\u786E\u8303\u56F4\u5185,\u65E0\u6CD5\u8BBE\u7F6E'
                );
                return [
                  2,
                  /*return*/
                  Promise.reject(),
                ];
              }

              this.log(
                '\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u5DE5\u4F5C\u65F6\u95F4\u4E3A: ' +
                  data +
                  'min'
              );
              cmd = [];
              cmd.push((data >> 8) & 0xff);
              cmd.push(data & 0xff);
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x30,
                  cmd: cmd,
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x31

    FasciaGunMCUProtocol.prototype.setDeviceWorkTimeResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u5DE5\u4F5C\u65F6\u95F4\u8BBE\u7F6E\u7ED3\u679C: ' +
          (result ? '成功' : '失败')
      );
    };
    /**
     * 设置筋膜枪工作模式
     * @param mode 1 待机 2 工作模式
     */

    FasciaGunMCUProtocol.prototype.setDeviceWorkMode = function (mode) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log(
                '\u5C1D\u8BD5\u8BBE\u7F6E\u7B4B\u819C\u67AA\u5DE5\u4F5C\u6A21\u5F0F\u4E3A: ' +
                  mode
              );
              return [
                4,
                /*yield*/
                this.writeCmd({
                  header: 0x40,
                  cmd: [mode],
                }),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    }; // 0x41

    FasciaGunMCUProtocol.prototype.setDeviceWorkModeResult = function (data) {
      var result = data[2] === 0x01;
      this.log(
        '\u7B4B\u819C\u67AA\u5DE5\u4F5C\u6A21\u5F0F\u8BBE\u7F6E\u7ED3\u679C: ' +
          (result ? '成功' : '失败')
      );
    };

    FasciaGunMCUProtocol.bleProfle = new FasciaGunMCUProtocolProfile();
    return FasciaGunMCUProtocol;
  })(QNBleProtocol);

var WspDualScaleMesProfle =
  /** @class */
  (function () {
    function WspDualScaleMesProfle() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    } // 是否生产广播

    WspDualScaleMesProfle.prototype.isProduceDevice = function (nativeDevice) {
      return nativeDevice.bluetoothName === 'QN-FAC';
    }; // 是否成品广播

    WspDualScaleMesProfle.prototype.isProductDevice = function (nativeDevice) {
      return (
        nativeDevice.bluetoothName === 'QN-Scale' ||
        nativeDevice.bluetoothName === 'QN-HS'
      );
    };

    WspDualScaleMesProfle.prototype.isTargetDevice = function (nativeDevice) {
      return (
        this.isProduceDevice(nativeDevice) || this.isProductDevice(nativeDevice)
      );
    };

    WspDualScaleMesProfle.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      var device = this.buildProduceTargetDevice(nativeDevice);

      if (device == null) {
        device = this.buildProductTargetDevice(nativeDevice);
      }

      return device;
    }; // 构建生产时的广播数据

    WspDualScaleMesProfle.prototype.buildProduceTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isProduceDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var mac1 = number2hex(manufacturer[2]);
      var mac2 = number2hex(manufacturer[3]);
      var mac3 = number2hex(manufacturer[4]);
      var mac4 = number2hex(manufacturer[5]);
      var mac5 = number2hex(manufacturer[6]);
      var mac6 = number2hex(manufacturer[7]);
      var mac =
        mac6 + ':' + mac5 + ':' + mac4 + ':' + mac3 + ':' + mac2 + ':' + mac1;
      var fatStatus = (manufacturer[8] << 8) + manufacturer[9];
      var moduleTestFlag = ((fatStatus >> 0) & 0x01) == 0x01; // 模块测试

      var semiProductFlag = ((fatStatus >> 1) & 0x01) == 0x01; // 半成品

      var calibrationFlag = ((fatStatus >> 2) & 0x01) == 0x01; // 标定

      var reviewFlag = ((fatStatus >> 3) & 0x01) == 0x01; // 回检

      var partialFlag = ((fatStatus >> 4) & 0x01) == 0x01; // 偏载

      var scaleType = manufacturer[10];
      var targetDevice = {
        moduleTestFlag: moduleTestFlag,
        semiProductFlag: semiProductFlag,
        calibrationFlag: calibrationFlag,
        reviewFlag: reviewFlag,
        partialFlag: partialFlag,
        type: QNBleDeviceType.NORMAL_BLE_SCALE,
      };

      switch (scaleType) {
        case 0x01:
          targetDevice.type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
          break;

        case 0x02:
          targetDevice.type = QNBleDeviceType.NORMAL_BLE_SCALE;
          break;

        case 0x03:
          targetDevice.type = QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE;
          break;

        case 0x04:
          targetDevice.type = QNBleDeviceType.HEIGHTWEIGHT;
          break;

        case 0x08:
          targetDevice.type = QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE;
          break;
      }

      return __assign(__assign({}, targetDevice), {
        name: nativeDevice.bluetoothName,
        isScreenOn: true,
        mac: mac,
        isSupportWifi: true,
      });
    };
    /**
     * 成品设备
     */

    WspDualScaleMesProfle.prototype.buildProductTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isProductDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var mac = '';
      var sn = '';
      var type = QNBleDeviceType.NORMAL_BLE_SCALE;

      if (nativeDevice.bluetoothName === 'QN-HS') {
        type = QNBleDeviceType.HEIGHTWEIGHT;
      } else if (nativeDevice.bluetoothName === 'QN-HS2') {
        type = QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE;
      } else {
        if (nativeDevice.services.includes('181D')) {
          if (manufacturer.length < 17) {
            type = QNBleDeviceType.NORMAL_BLE_SCALE;
          } else {
            if (((manufacturer[10] >> 4) & 0x01) === 0x01) {
              type = QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE;
            } else {
              type = QNBleDeviceType.WSP_DUAL_MODE_SCALE;
            }
          }
        }
      }

      switch (type) {
        // TODO 确认CP30A的成品取mac地址逻辑是否一致
        case QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE:
        case QNBleDeviceType.HEIGHTWEIGHT:
          sn = manufacturer
            .slice(4, -1)
            .map(function (v) {
              return String.fromCharCode(v);
            })
            .join('')
            .slice(0, 15);
          mac =
            number2hex(manufacturer[24]) +
            ':' +
            number2hex(manufacturer[23]) +
            ':' +
            number2hex(manufacturer[22]) +
            ':' +
            number2hex(manufacturer[21]) +
            ':' +
            number2hex(manufacturer[20]) +
            ':' +
            number2hex(manufacturer[19]);
          break;

        case QNBleDeviceType.NORMAL_BLE_SCALE:
          mac =
            number2hex(manufacturer[12]) +
            ':' +
            number2hex(manufacturer[11]) +
            ':' +
            number2hex(manufacturer[10]) +
            ':' +
            number2hex(manufacturer[9]) +
            ':' +
            number2hex(manufacturer[8]) +
            ':' +
            number2hex(manufacturer[7]);
          break;

        default:
          mac =
            number2hex(manufacturer[16]) +
            ':' +
            number2hex(manufacturer[15]) +
            ':' +
            number2hex(manufacturer[14]) +
            ':' +
            number2hex(manufacturer[13]) +
            ':' +
            number2hex(manufacturer[12]) +
            ':' +
            number2hex(manufacturer[11]);
          break;
      }

      var targetDevice = {
        moduleTestFlag: true,
        semiProductFlag: true,
        calibrationFlag: true,
        reviewFlag: true,
        partialFlag: true,
        scaleType: 0,
        type: type,
      };
      return __assign(__assign({}, targetDevice), {
        name: nativeDevice.bluetoothName,
        isScreenOn: true,
        mac: mac,
        sn: sn,
        isSupportWifi: true,
      });
    }; // 工位数据通知

    WspDualScaleMesProfle.UUID_NOTIFY = 'FFF1'; // 工位数据写入

    WspDualScaleMesProfle.UUID_WRITE = 'FFF2'; // 八电极工位数据通知

    WspDualScaleMesProfle.EIGHT_UUID_NOTIFY = 'FFE3'; // 八电极工位数据写入

    WspDualScaleMesProfle.EIGHT_UUID_WRITE = 'FFE4'; // 八电极配网数据通知

    WspDualScaleMesProfle.EIGHT_UUID_WIFI_NOTIFY = 'FFE1'; // 八电极配网数据写入

    WspDualScaleMesProfle.EIGHT_UUID_WIFI_WRITE = 'FFE2'; // 身高体重工位数据通知

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_NOTIFY = 'ABF1'; // 身高体重工位数据写入

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_WRITE = 'ABF2'; // 身高体重单蓝牙工位数据通知

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_NOTIFY = '8A82'; // 身高体重蓝牙看工位数据写入

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE = '8A83'; // 时间服务

    WspDualScaleMesProfle.UUID_TIME_SERVICES = '1805'; // 设备服务

    WspDualScaleMesProfle.UUID_DEVICE_SERVICES = '180A'; // 八电极设备服务

    WspDualScaleMesProfle.EIGHT_UUID_DEVICE_SERVICES = 'FFE0'; // 身高体重设备服务

    WspDualScaleMesProfle.HEIGHTWEIGHT_UUID_DEVICE_SERVICES = 'ABF0'; // 身高体重单蓝牙设备服务

    WspDualScaleMesProfle.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES = '78B2'; // sn特征

    WspDualScaleMesProfle.UUID_SN = '2A25';
    return WspDualScaleMesProfle;
  })();

var CalibrationFlow =
  /** @class */
  (function (_super) {
    __extends(CalibrationFlow, _super);

    function CalibrationFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_CALIBRATION]; //标定重量

      _this.calibrationWeight = 0;
      _this.calibrationResult = false;
      _this.uuids = uuids;
      return _this;
    } //需要做

    CalibrationFlow.prototype.execute = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x11, 0x01]
          );
          (_b = (_a = this.listener).onDeviceStateChange) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.START_CALIBRATION,
              });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    CalibrationFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x12:
              //收到标定工位的标定数据
              this.getCalibrationWeightData(data);
              break;

            case 0x13:
              //收到标定工位的保存结果
              this.getCalibrationResultData(data);
              break;

            case 0x15:
              //收到快速配网发送SSID回复
              this.getQuickPairWifiSSIDResult();
              break;

            case 0x17:
              //收到快速配网发送pwd回复
              this.getQuickPairWifiPWDResult();
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * 收到标定数值 0x12
     */

    CalibrationFlow.prototype.getCalibrationWeightData = function (byteList) {
      var _a, _b;

      var retValue = byteList[3];
      var weight = (byteList[4] << 8) + byteList[5];

      if (this.calibrationWeight == weight) {
        return;
      }

      this.calibrationWeight = weight;
      this.confirmCalibrationWeightData(retValue);

      if (retValue == 5) {
        this.calibrationResult = weight == 0x01;

        if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
          // 蓝牙称没有快速配网，直接判断成功与否
          this.setCalibrationResult();
        } else {
          this.setQuickPairWifiSSID();
        }
      } else {
        var calibrationType = MesCalibrationType.ZONE;

        switch (retValue) {
          case 2:
            calibrationType = MesCalibrationType.FIFTY;
            break;

          case 3:
            calibrationType = MesCalibrationType.HUNDRED;
            break;

          case 4:
            calibrationType = MesCalibrationType.HUNDRED_FIFTY;
            break;

          default:
            return;
        }

        (_b = (_a = this.listener).onGetCalibrationData) === null ||
        _b === void 0
          ? void 0
          : _b.call(_a, {
              calibrationType: calibrationType,
              weight: weight,
            }); // this.deviceEventListener && this.deviceEventListener.onGetCalibrationData(calibrationType, weight)
      }
    };

    CalibrationFlow.prototype.confirmCalibrationWeightData = function (
      retValue
    ) {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x12, retValue]
      );
    };
    /**
     * 收到标定结果 0x13
     */

    CalibrationFlow.prototype.getCalibrationResultData = function (byteList) {
      var _a, _b, _c, _d;

      var isSuccess = byteList[3] == 0x01 && this.calibrationResult;
      (_b = (_a = this.listener).onCalibrationCodeStatus) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onCalibrationCodeStatus(success)
      // this.wspMesActionCallback(MesBehavior.STOP_CALIBRATION)

      (_d = (_c = this.listener).onDeviceStateChange) === null || _d === void 0
        ? void 0
        : _d.call(_c, {
            behavior: MesBehavior.STOP_CALIBRATION,
          });
    };

    CalibrationFlow.prototype.setQuickPairWifiSSID = function () {
      var ssid = this.operation.wifiSsid || '';
      var assiiList = [];

      for (var i = 0; i < ssid.length; i++) {
        var item = ssid.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      ssid = assiiList.join('');
      var byteList = hex2Array(ssid);
      byteList.unshift(0x14);
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        byteList
      );
    };

    CalibrationFlow.prototype.getQuickPairWifiSSIDResult = function () {
      this.setQuickPairWifiPWD();
    };

    CalibrationFlow.prototype.setQuickPairWifiPWD = function () {
      var pwd = this.operation.wifiPwd || '';
      var assiiList = [];

      for (var i = 0; i < pwd.length; i++) {
        var item = pwd.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      pwd = assiiList.join('');
      var byteList = hex2Array(pwd);
      byteList.unshift(0x16);
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        byteList
      );
    };

    CalibrationFlow.prototype.getQuickPairWifiPWDResult = function () {
      this.setCalibrationResult();
    };

    CalibrationFlow.prototype.setCalibrationResult = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x13, this.calibrationResult ? 0x01 : 0x00]
      );
    };

    return CalibrationFlow;
  })(QNBleActionFlow);

var PartialWeightFlow =
  /** @class */
  (function (_super) {
    __extends(PartialWeightFlow, _super);

    function PartialWeightFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_MODULE_TEST];
      _this.moduleTestWeightFlag = false;
      _this.moduleTestHeightFlag = false;
      _this.moduleTestImpFlag = false;
      _this.modelIdResult = false;
      _this.moduleTestResult = false;
      _this.segmentsRes = {};
      _this.uuids = uuids;
      return _this;
    } // 需要做

    PartialWeightFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          console.log('模块flow执行');
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x01, 0x01]
          );
          this.listener.onDeviceStateChange({
            behavior: MesBehavior.START_MODULE_TEST,
          });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    PartialWeightFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x01:
              // 收到进入测试工位
              console.log('收到进入测试工位');
              this.setModuleTestSnData();
              break;

            case 0x02:
              // 收到测试工位sn
              this.getModuleTestSnDataResult(data);
              break;

            case 0x03:
              // 收到测试工位体脂
              this.getModuleTestResistanceData(data);
              break;

            case 0xa3:
              // 收到测试工位体脂(八电极)
              this.getModuleTestResistanceDataWithEightElec(data);
              break;

            case 0x04:
              // 收到测试工位体重
              this.getModuleTestWeightData(data);
              break;

            case 0x05:
              this.getModuleTestCmdResult(data);
              break;

            case 0x06:
              // 收到身高体重测试工位身高
              this.getModuleTestHeightData(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * 进入模块测试工位 0x01
     */

    PartialWeightFlow.prototype.startModuleTest = function () {
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.START_MODULE_TEST,
      });
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x01, 0x01]
      );
    };
    /**
     * 设置sn码 0x02
     */

    PartialWeightFlow.prototype.setModuleTestSnData = function () {
      var sn = this.operation.sn;
      this.log('准备写入sn码', sn);
      var assiiList = [];

      for (var i = 0; i < sn.length; i++) {
        var item = sn.substring(i, i + 1);
        item = item.charCodeAt(0).toString(16);

        if (item.length == 1) {
          item = '0' + item;
        }

        assiiList.push(item);
      }

      sn = assiiList.join('');
      var data = hex2Array(sn);
      data.unshift(0x02);
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        data
      );
    };

    PartialWeightFlow.prototype.getModuleTestSnDataResult = function (data) {
      var isSuccess = data[3] == 0x01;
      console.log('开始回调数据结果', this.listener);
      this.listener.onModuleTestWriteSnState({
        isSuccess: isSuccess,
      }); // this.deviceEventListener && this.deviceEventListener.onModuleTestWriteSnState(success)

      if (isSuccess) {
        // sn码设置成功后才进行下一步
        this.startModuleTestWeight();
      } else {
        this.setModuleTestResult(false);
      }
    };
    /**
     * 进入重量测试 0x04
     */

    PartialWeightFlow.prototype.startModuleTestWeight = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x04, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestWeightData = function (data) {
      var _a, _b;

      if (data[3] !== 0x01 || this.moduleTestWeightFlag) {
        return;
      }

      this.moduleTestWeightFlag = true;
      var weight = (data[4] << 8) + data[5];
      (_b = (_a = this.listener).onModuleTestWeightData) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            weight: weight,
          });
    };
    /**
     * 进入身高测试 0x06
     */

    PartialWeightFlow.prototype.startModuleTestHeight = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x06, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestHeightData = function (data) {
      var _a, _b;

      if (data[3] !== 0x01) {
        return;
      } // 过滤非结果数据

      if (this.moduleTestHeightFlag) {
        return;
      } // 只收到一次结果即可

      this.moduleTestHeightFlag = true;
      var height = times(((data[4] << 8) + data[5]) / 10, 1);
      (_b = (_a = this.listener).onModuleTestHeightData) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            height: height,
          });
    };
    /**
     * 进入阻抗测试 0x03
     */

    PartialWeightFlow.prototype.startModuleTestResistance = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x03, 0x01]
      );
    };

    PartialWeightFlow.prototype.getModuleTestResistanceData = function (data) {
      if (data[3] != 0x01) {
        return;
      } // 过滤非结果数据

      if (this.moduleTestImpFlag) {
        return;
      } // 只收到一次结果即可

      this.moduleTestImpFlag = true;
      var res50 = (data[4] << 8) + data[5];
      var res500 = (data[6] << 8) + data[7];
      this.listener.onModuleTestResistanceData({
        res50: res50,
        res500: res500,
      });
    };
    /**
     * 获取八电极阻抗
     */

    PartialWeightFlow.prototype.getModuleTestResistanceDataWithEightElec =
      function (data) {
        if (data.length < 15) {
          return;
        }

        var pack = data[3];

        if (pack == 1) {
          this.segmentsRes = {
            lf20: times(((data[4] << 8) + data[5]) / 10, 1),
            lf100: times(((data[6] << 8) + data[7]) / 10, 1),
            rf20: times(((data[8] << 8) + data[9]) / 10, 1),
            rf100: times(((data[10] << 8) + data[11]) / 10, 1),
            lh20: times(((data[12] << 8) + data[13]) / 10, 1),
          };
        } else {
          var secondSegmentsRes = {
            lh100: times(((data[4] << 8) + data[5]) / 10, 1),
            rh20: times(((data[6] << 8) + data[7]) / 10, 1),
            rh100: times(((data[8] << 8) + data[9]) / 10, 1),
            t20: times(((data[10] << 8) + data[11]) / 10, 1),
            t100: times(((data[12] << 8) + data[13]) / 10, 1),
          };
          var obj = Object.assign(this.segmentsRes, secondSegmentsRes);
          this.listener.onModuleTestResistanceData(obj);
        }
      };
    /**
     * 停止模块测试 0x05
     */

    PartialWeightFlow.prototype.setModuleTestResult = function (success) {
      this.moduleTestResult = success;
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x05, success ? 0x01 : 0x00]
      );
    };

    PartialWeightFlow.prototype.getModuleTestCmdResult = function (data) {
      var isSuccess = this.moduleTestResult && data[3] == 0x01;
      this.listener.onModuleTestCodeStatus({
        isSuccess: isSuccess,
      });
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.STOP_MODULE_TEST,
      });
    };

    return PartialWeightFlow;
  })(QNBleActionFlow);

var ModelProductFlow =
  /** @class */
  (function (_super) {
    __extends(ModelProductFlow, _super);

    function ModelProductFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.baseStamp2000 = Date.now() / 1000 - 946656000;
      _this.acceptActions = [QNBleAction.MES_MODEL_PRODUCT];
      _this.deviceType = 0;
      _this.isSupportQuickPair = false;
      _this.modelIdResult = false;
      _this.timerId = 0;
      _this.wifiPairFailNum = 0; // 当前执行命令的包的序号

      _this.currentCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = []; // body字节数据

      _this.bodyByteDataArr = [];
      _this.measureResult = {};
      _this.uuids = uuids;
      return _this;
    } // 需要做

    ModelProductFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.setDeviceTime();
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    ModelProductFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, byteList, header, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          byteList = data;
          header = data[0];

          switch (header) {
            case 0x12:
              this.getDeviceInfo(byteList);
              break;

            case 0x14:
              this.getUnitAndScreenTimeResult();
              break;

            case 0x21:
              this.getDeviceTimeResult();

            case 0x10:
              this.getMeasureData(byteList);
              break;

            case 0x41:
              this.getModelIdAndWeightResult(byteList);
              break;

            case 0x49:
              this.getHeightWeightConfigResult(byteList);
              break;

            case 0x61:
              this.getSsidTotalPackResult(byteList);
              break;

            case 0x63:
              this.getWifiSsidDataResult(byteList);
              break;

            case 0x65:
              this.getWifiPwdTotalPackDataResult(byteList);
              break;

            case 0x67:
              this.getWifiPwdDataResult(byteList);
              break;

            case 0x69:
              this.getServerUrlTotalPackDataResult(byteList);
              break;

            case 0x6b:
              this.getServerUrlDataResult(byteList);
              break;

            case 0x6f:
              this.getWifiOtaTotalPackDataResult(byteList);
              break;

            case 0x71:
              this.getWifiOtaDataResult(byteList);
              break;

            case 0x73:
              this.getWifiEncryptDataResult(byteList);
              break;

            case 0x74:
              this.getWifiConnectNetResult(byteList);
              break;

            case 0x77:
              this.getScaleWifiStatusResult(byteList);
              break;

            case 0x78:
              this.getWifiConnectServerResult(byteList);
              break;
          }

          if (header != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = byteList[2];

          switch (type) {
            case 0x51:
              // 型号写入
              this.getModelIdDataResult(byteList);
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    }; // 0x20

    ModelProductFlow.prototype.setDeviceTime = function () {
      var _a, _b;

      var byteList = [
        this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT ? 0x50 : 0x00,
      ];

      for (var i = 0; i < 4; i += 1) {
        byteList.push((this.baseStamp2000 >> (i * 8)) & 0xff);
      }

      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x20,
        byteList
      );
      (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            behavior: MesBehavior.START_MODEL_ID,
          });
      this.listener.onDeviceStateChange({
        behavior: MesBehavior.START_MODEL_ID,
      });
    }; // 0x12

    ModelProductFlow.prototype.getDeviceInfo = function (byteList) {
      if (byteList.length < 15) {
        return;
      }

      this.deviceType = byteList[2];
      this.isSupportQuickPair = (byteList[10] >> 6 && 0x01) == 0x01;
      this.setUnitAndScreenTime();
    }; // 0x13

    ModelProductFlow.prototype.setUnitAndScreenTime = function () {
      var byteList = [this.deviceType];

      switch (this.operation.unit) {
        case QNBleUnit.LB:
          byteList.push(0x02);
          break;

        case QNBleUnit.JIN:
          byteList.push(0x04);
          break;

        case QNBleUnit.ST:
          byteList.push(0x03);
          break;

        default:
          byteList.push(0x01);
          break;
      }

      byteList.push(0x10);
      var isHeartRate = this.operation.isHeartRate ? 0x00 : 0x01;
      byteList.push(isHeartRate);
      byteList.push(0x00);
      byteList.push(0x00);
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x13,
        byteList
      );
    }; // 0x14

    ModelProductFlow.prototype.getUnitAndScreenTimeResult = function () {}; // 0x21

    ModelProductFlow.prototype.getDeviceTimeResult = function () {}; // 0x10

    ModelProductFlow.prototype.getMeasureData = function (byteList) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      if (this.bleDevice.type === QNBleDeviceType.WSP_DUAL_MODE_SCALE) {
        if (byteList.length < 11) {
          return;
        }

        var weight_1 = this.decodeWeight(byteList[3], byteList[4]);
        var res50_1 = byteList[7] + (byteList[6] << 8);
        var res500_1 = byteList[9] + (byteList[8] << 8);
        var state_1 = byteList[5];

        if (state_1 !== 1) {
          (_b = (_a = this.listener).onGetUnsteadyWeight) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, {
                weight: weight_1,
              }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)
        } else {
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData({
            weight: weight_1,
            res50: res50_1,
            res500: res500_1,
          });
        }

        return;
      }

      if (this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT) {
        if (byteList.length < 16) {
          return;
        }

        var weight_2 = this.decodeWeight(byteList[3], byteList[4]);
        var height = times(((byteList[11] << 8) + byteList[12]) / 10, 1);
        var res50_2 = byteList[7] + (byteList[6] << 8);
        var res500_2 = byteList[9] + (byteList[8] << 8);
        var state_2 = byteList[5];

        if (state_2 !== 1) {
          (_d = (_c = this.listener).onGetUnsteadyHeightWeight) === null ||
          _d === void 0
            ? void 0
            : _d.call(_c, {
                weight: weight_2,
                height: height,
              });
        } else {
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData({
            weight: weight_2,
            height: height,
            res50: res50_2,
            res500: res500_2,
          });
        }

        return;
      }

      if (this.bleDevice.type === QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE) {
        if (byteList.length < 8) {
          return;
        }

        var weight_3 = this.decodeWeight(byteList[5], byteList[6]);
        this.listener.onGetUnsteadyWeight({
          weight: weight_3,
        }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)

        if (byteList.length >= 19 && byteList[1] == 0x13) {
          this.measureResult = {
            weight: this.decodeWeight(byteList[4], byteList[5]),
            lf20: times(((byteList[6] << 8) + byteList[7]) / 10, 1),
            lf100: times(((byteList[8] << 8) + byteList[9]) / 10, 1),
            rf20: times(((byteList[10] << 8) + byteList[11]) / 10, 1),
            rf100: times(((byteList[12] << 8) + byteList[13]) / 10, 1),
            lh20: times(((byteList[14] << 8) + byteList[15]) / 10, 1),
            lh100: times(((byteList[16] << 8) + byteList[17]) / 10, 1),
          };
        } else if (byteList.length >= 13 && byteList[1] == 0x0d) {
          var result = {
            rh20: times(((byteList[4] << 8) + byteList[5]) / 10, 1),
            rh100: times(((byteList[6] << 8) + byteList[7]) / 10, 1),
            t20: times(((byteList[8] << 8) + byteList[9]) / 10, 1),
            t100: times(((byteList[10] << 8) + byteList[11]) / 10, 1),
          };
          var obj = Object.assign(this.measureResult, result);
          this.confirmReceiveMeasureData();
          this.listener.onGetOriginScaleData(obj);
        }

        return;
      } // 捕获其他秤

      if (byteList.length < 11) {
        return;
      }

      var weight = this.decodeWeight(byteList[3], byteList[4]);
      var res50 = byteList[7] + (byteList[6] << 8);
      var res500 = byteList[9] + (byteList[8] << 8);
      var state = byteList[5];

      if (state != 1) {
        (_f = (_e = this.listener).onGetUnsteadyWeight) === null ||
        _f === void 0
          ? void 0
          : _f.call(_e, {
              weight: weight,
            }); // this.deviceEventListener && this.deviceEventListener.onGetUnreadyWeightData(weight)
      } else {
        this.confirmReceiveMeasureData();
        (_h = (_g = this.listener).onGetOriginScaleData) === null ||
        _h === void 0
          ? void 0
          : _h.call(_g, {
              weight: weight,
              res50: res50,
              res500: res500,
            });
      }
    }; // 0x1F

    ModelProductFlow.prototype.confirmReceiveMeasureData = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x1f,
        [this.deviceType, 0x10]
      );
    }; // 0x40 设置秤体ID

    ModelProductFlow.prototype.setDeviceID = function () {
      var _this = this;

      var utcTime1 = this.baseStamp2000 & 0xff;
      var utcTime2 = (this.baseStamp2000 >> 8) & 0xff;
      var utcTime3 = (this.baseStamp2000 >> 16) & 0xff;
      var utcTime4 = (this.baseStamp2000 >> 24) & 0xff;
      var macByteList = hex2Array(this.bleDevice.mac.split(':').join(''));

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        macByteList = macByteList.reverse();
      }

      var key =
        (utcTime1 ^ utcTime2 ^ utcTime3 ^ utcTime4) +
        ((macByteList[0] << 1) +
          (macByteList[1] << 1) +
          (macByteList[2] << 1) +
          (macByteList[3] << 2) +
          (macByteList[4] << 2) +
          (macByteList[5] << 2));
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x40,
        [this.deviceType, key & 0xff]
      );
      setTimeout(function () {
        // 防止两条命令之间时间过短导致写入失败
        _this.setDeviceModelIDAndWeight();
      }, 500);
    };

    ModelProductFlow.prototype.setDeviceModelIDAndWeight = function () {
      var utcTime1 = this.baseStamp2000 & 0xff;
      var utcTime2 = (this.baseStamp2000 >> 8) & 0xff;
      var utcTime3 = (this.baseStamp2000 >> 16) & 0xff;
      var utcTime4 = (this.baseStamp2000 >> 24) & 0xff;
      var macByteList = hex2Array(this.bleDevice.mac.split(':').join(''));

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        macByteList = macByteList.reverse();
      }

      var cmdSource =
        ((utcTime1 + 1) ^ (utcTime2 + 1) ^ (utcTime3 + 1) ^ (utcTime4 + 1)) +
        ((macByteList[0] >> 1) +
          (macByteList[1] >> 1) +
          (macByteList[2] >> 1) +
          (macByteList[3] >> 2) +
          (macByteList[4] >> 2) +
          (macByteList[5] >> 2));
      var cmd = cmdSource & 0xff;
      var modeIdByteList = hex2Array(this.operation.modelId);
      var aliIdByteList = [0, 0];
      var minWeightList = hex2Array(this.operation.minWeight);
      var maxWeightList = hex2Array(this.operation.maxWeight);
      var overrideWeightList = hex2Array(this.operation.overrideWeight);
      var byteList = [this.deviceType];

      if (this.bleDevice.type !== QNBleDeviceType.NORMAL_BLE_SCALE) {
        byteList.push(cmd);
      }

      byteList.push(modeIdByteList[0], modeIdByteList[1]);
      byteList.push(aliIdByteList[0], aliIdByteList[1]);
      byteList.push(minWeightList[0], minWeightList[1]);
      byteList.push(maxWeightList[0], maxWeightList[1]);
      byteList.push(overrideWeightList[0], overrideWeightList[1]);

      switch (this.operation.batteryType) {
        case 9:
          byteList.push(0x03);
          break;

        case 3:
          byteList.push(0x01);
          break;

        case 2:
          byteList.push(0x02);
          break;

        default:
          byteList.push(0x00);
          break;
      }

      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        this.writeCmd(
          this.uuids.produce.serviceUUID,
          this.uuids.produce.writeUUID,
          cmd,
          byteList
        );
      } else {
        this.writeCmd(
          this.uuids.produce.serviceUUID,
          this.uuids.produce.writeUUID,
          0x43,
          byteList
        );
      }
    }; // 0x41

    ModelProductFlow.prototype.getModelIdAndWeightResult = function (byteList) {
      var _a, _b;

      if (byteList.length < 9) {
        return;
      }

      var sucessCondition =
        this.bleDevice.type === QNBleDeviceType.NORMAL_BLE_SCALE ? 0 : 1;
      var isSuccess = byteList[7] == sucessCondition;
      (_b = (_a = this.listener).onGetWriteModelIdResult) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onGetWriteModelIdResult(success)

      if (isSuccess) {
        this.startWifiConfig();
      } else {
        this.setModelIdDataResult(false);
      }
    }; // 开始配置wifi

    ModelProductFlow.prototype.startWifiConfig = function () {
      if (this.bleDevice.type == QNBleDeviceType.NORMAL_BLE_SCALE) {
        // 普通蓝牙称配网直接成功
        this.listener.onGetWifiResult({
          isSuccess: true,
        });
        this.setModelIdDataResult(true);
      } else {
        if (this.isSupportQuickPair) {
          this.checkScaleWifiStatus();
        } else {
          this.setWifiSsidTotalPackData();
        }
      }
    }; // 准备wifi数据

    ModelProductFlow.prototype.prepareWifiData = function () {
      var _a = this.operation,
        _b = _a.wifiSsid,
        wifiSsid = _b === void 0 ? '' : _b,
        _c = _a.wifiPwd,
        wifiPwd = _c === void 0 ? '' : _c,
        _d = _a.dataServerUrl,
        dataServerUrl =
          _d === void 0 ? 'http://wifi.yolanda.hk:80/wifi_api/wsps?code=' : _d,
        _e = _a.otaServerUrl,
        otaServerUrl = _e === void 0 ? 'https://ota.yolanda.hk' : _e,
        _f = _a.encryptKey,
        encryptKey = _f === void 0 ? 'yolandakitnewhdr' : _f; // eslint-disable-next-line no-console

      this.log(
        'ssid:',
        wifiSsid,
        'pwd:',
        wifiPwd,
        'dataServerUrl',
        dataServerUrl,
        'otaServerUrl',
        otaServerUrl,
        'encryptKey',
        encryptKey
      );
      var ssidByteArray = stringToByteArray(gBase64.encode(wifiSsid));
      var pwdByteArray = stringToByteArray(wifiPwd);
      var dataServerUrlByteArray = stringToByteArray(dataServerUrl);
      var otaServerUrlByteArray = stringToByteArray(otaServerUrl);
      this.ssidCmdData = splitArray(ssidByteArray);
      this.pwdCmdData = splitArray(pwdByteArray);
      this.dataServerUrlData = splitArray(dataServerUrlByteArray);
      this.otaServerUrlData = splitArray(otaServerUrlByteArray);
      this.encryptKeyCmdData = stringToByteArray(encryptKey);
    }; // 0x76 获取wifi状态

    ModelProductFlow.prototype.checkScaleWifiStatus = function () {
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x76,
        [0x02]
      );
    };

    ModelProductFlow.prototype.getScaleWifiStatusResult = function (byteList) {
      var _a, _b;

      if (byteList.length < 4) {
        return;
      }

      var isSuccess = byteList[2] == 0x02;

      if (isSuccess) {
        (_b = (_a = this.listener).onGetWifiResult) === null || _b === void 0
          ? void 0
          : _b.call(_a, {
              isSuccess: isSuccess,
            });
        this.setModelIdDataResult(true); // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(isSuccess)
      } else {
        this.setWifiSsidTotalPackData();
      }
    }; // 0x60

    ModelProductFlow.prototype.setWifiSsidTotalPackData = function () {
      var _this = this;

      this.prepareWifiData();
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x60,
        [this.ssidCmdData.length]
      );
      this.timerId = setTimeout(function () {
        _this.wifiPairFailNum += 1;

        if (_this.wifiPairFailNum >= 4) {
          _this.setModelIdDataResult(false);
        } else {
          _this.setWifiSsidTotalPackData();
        }
      }, 500);
    }; // 0x61

    ModelProductFlow.prototype.getSsidTotalPackResult = function (byteList) {
      this.timerId && clearTimeout(this.timerId);
      this.timerId = undefined;

      if (byteList[2] === 0x00) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiSsidData(1);
      }
    }; // 0x62

    ModelProductFlow.prototype.setWifiSsidData = function (index) {
      var byteList = this.ssidCmdData[index - 1];
      byteList.unshift(index);
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x62,
        byteList
      );
    }; // 0x63

    ModelProductFlow.prototype.getWifiSsidDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.ssidCmdData.length) {
        this.setWifiPwdTotalPackData();
      } else {
        this.setWifiSsidData(curPack + 1);
      }
    }; // 0x64

    ModelProductFlow.prototype.setWifiPwdTotalPackData = function () {
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x64,
        [this.pwdCmdData.length]
      );
    }; // 0x65

    ModelProductFlow.prototype.getWifiPwdTotalPackDataResult = function (
      byteList
    ) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiPwdData(1);
      }
    }; // 0x66

    ModelProductFlow.prototype.setWifiPwdData = function (index) {
      if (this.pwdCmdData.length == 0) {
        this.setWifiServerUrlTotalPackData();
      } else {
        var byteList = this.pwdCmdData[index - 1];
        byteList.unshift(index);
        this.writeCmd(
          this.uuids.wifi.serviceUUID,
          this.uuids.wifi.writeUUID,
          0x66,
          byteList
        );
      }
    }; // 0x67

    ModelProductFlow.prototype.getWifiPwdDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.pwdCmdData.length) {
        this.setWifiServerUrlTotalPackData();
      } else {
        this.setWifiPwdData(curPack + 1);
      }
    }; // 0x68

    ModelProductFlow.prototype.setWifiServerUrlTotalPackData = function () {
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x68,
        [this.dataServerUrlData.length]
      );
    }; // 0x69

    ModelProductFlow.prototype.getServerUrlTotalPackDataResult = function (
      byteList
    ) {
      if (byteList[2] === 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiServerUrlData(1);
      }
    }; // 0x6A

    ModelProductFlow.prototype.setWifiServerUrlData = function (index) {
      var byteList = this.dataServerUrlData[index - 1];
      byteList.unshift(index);
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x6a,
        byteList
      );
    }; // 0x6B

    ModelProductFlow.prototype.getServerUrlDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.dataServerUrlData.length) {
        this.setWifiOtaTotalPackData();
      } else {
        this.setWifiServerUrlData(curPack + 1);
      }
    }; // 0x6E

    ModelProductFlow.prototype.setWifiOtaTotalPackData = function () {
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x6e,
        [this.otaServerUrlData.length]
      );
    }; // 0x6F

    ModelProductFlow.prototype.getWifiOtaTotalPackDataResult = function (
      byteList
    ) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      } else {
        this.setWifiOtaData(1);
      }
    }; // 0x70

    ModelProductFlow.prototype.setWifiOtaData = function (index) {
      var byteList = this.otaServerUrlData[index - 1];
      byteList.unshift(index);
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x70,
        byteList
      );
    }; // 0x71

    ModelProductFlow.prototype.getWifiOtaDataResult = function (byteList) {
      var curPack = byteList[2];

      if (curPack == this.otaServerUrlData.length) {
        this.setWifiEncryptData();
      } else {
        this.setWifiOtaData(curPack + 1);
      }
    }; // 0x72

    ModelProductFlow.prototype.setWifiEncryptData = function () {
      var byteList = this.encryptKeyCmdData;
      byteList.unshift(byteList.length);
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x72,
        byteList
      );
    }; // 0x73

    ModelProductFlow.prototype.getWifiEncryptDataResult = function (byteList) {
      if (byteList[2] == 0) {
        this.setModelIdDataResult(false);
      }
    }; // 0x74

    ModelProductFlow.prototype.getWifiConnectNetResult = function (byteList) {
      this.writeCmd(
        this.uuids.wifi.serviceUUID,
        this.uuids.wifi.writeUUID,
        0x75,
        [0x01]
      );

      if (byteList[2] == 0) {
        // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(false)
        this.setModelIdDataResult(false);
      }
    }; // 0x78

    ModelProductFlow.prototype.getWifiConnectServerResult = function (
      byteList
    ) {
      var _a, _b;

      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.bleDevice.type === QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE
          ? WspDualScaleMesProfle.EIGHT_UUID_WIFI_WRITE
          : WspDualScaleMesProfle.UUID_WRITE,
        0x79,
        [0x01]
      );
      var isSuccess = byteList[2] == 0x01;
      (_b = (_a = this.listener).onGetWifiResult) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onGetWifiResult(success)

      if (this.bleDevice.type !== QNBleDeviceType.HEIGHTWEIGHT) {
        this.setModelIdDataResult(isSuccess);
      }
    };
    /**
     * 身高体重秤设置信息(型号写入) 0x48
     */

    ModelProductFlow.prototype.startHeightWeightConfig = function () {
      var _a, _b, _c, _d, _e, _f;

      console.log('开始写入配置', this.operation);
      var byteList = [this.deviceType, 0x00, 0x00, 0x00];
      var modeIdByteList = hex2Array(this.operation.modelId);
      var minWeightList = hex2Array(this.operation.minWeight);
      var maxWeightList = hex2Array(this.operation.maxWeight);
      byteList.push(
        (_a = modeIdByteList[0]) !== null && _a !== void 0 ? _a : 0,
        (_b = modeIdByteList[1]) !== null && _b !== void 0 ? _b : 0
      );
      byteList.push(
        (_c = minWeightList[0]) !== null && _c !== void 0 ? _c : 0,
        (_d = minWeightList[1]) !== null && _d !== void 0 ? _d : 0
      );
      byteList.push(
        (_e = maxWeightList[0]) !== null && _e !== void 0 ? _e : 0,
        (_f = maxWeightList[1]) !== null && _f !== void 0 ? _f : 0
      );
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x48,
        byteList
      );
    };
    /**
     * 身高体重秤型号写入结果 0x49
     */

    ModelProductFlow.prototype.getHeightWeightConfigResult = function (
      byteList
    ) {
      var isSuccess = byteList[3] === 1;
      this.listener.onGetWriteModelIdResult({
        isSuccess: isSuccess,
      });
      this.setModelIdDataResult(isSuccess);
    };
    /**
     * 型号写入结果 0x51
     */

    ModelProductFlow.prototype.setModelIdDataResult = function (success) {
      this.modelIdResult = success;
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x51, success ? 0x01 : 0x00]
      );
    };

    ModelProductFlow.prototype.getModelIdDataResult = function (byteList) {
      var _this = this;

      var _a, _b;

      var isSuccess = byteList[3] === 1 && this.modelIdResult;
      (_b = (_a = this.listener).onReviewCodeStatus) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          });

      if (isSuccess) {
        // setTimeout(() => {
        this.setDeviceSleepMode();
        setTimeout(function () {
          var _a, _b;

          (_b = (_a = _this.listener).onDeviceStateChange) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.STOP_MODEL_ID,
              });
        }, 1000); // }, 200);
      }
    }; // 0x50

    ModelProductFlow.prototype.setDeviceSleepMode = function () {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0x50,
        [this.deviceType]
      );
    };

    return ModelProductFlow;
  })(QNBleActionFlow);

var PartialWeightFlow$1 =
  /** @class */
  (function (_super) {
    __extends(PartialWeightFlow, _super);

    function PartialWeightFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_PARTIAL];
      _this.uuids = uuids;
      return _this;
    } //需要做

    PartialWeightFlow.prototype.execute = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x31, 0x01]
          );
          this.listener.onDeviceStateChange({
            behavior: MesBehavior.START_PARTIAL,
          });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    PartialWeightFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x32:
              //收到偏载数据值
              this.getPartialWeightData(data);
              break;

            case 0x33:
              //收到偏载标识保存结果
              this.getPartialWeightDataResult(data);
              break;

            case 0x41:
              //删除工位
              this.getPartialWeightData(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * 偏载锁定重量 0x32
     */

    PartialWeightFlow.prototype.getPartialWeightData = function (byteList) {
      this.setPartialWeightDataResult(1);
      var weight = this.decodeWeight(byteList[3], byteList[4]);
      this.listener.onGetPartialWeightData({
        weight: weight,
      }); // const success = this.deviceEventListener && this.deviceEventListener.onGetPartialWeightData(weight)
    }; //1收到数据 2 偏载成功 3 偏载失败

    PartialWeightFlow.prototype.setPartialWeightDataResult = function (state) {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x32, state]
      );
    };
    /**
     * 收到偏载标示保存结果 0x33
     */

    PartialWeightFlow.prototype.getPartialWeightDataResult = function (
      byteList
    ) {
      var isSuccess = byteList[3] === 0x01;
      this.listener.onPartialCodeStatus({
        isSuccess: isSuccess,
      }); // this.deviceEventListener && this.deviceEventListener.onPartialCodeStatus(success)

      this.listener.onDeviceStateChange({
        behavior: MesBehavior.STOP_PARTIAL,
      });
    };

    return PartialWeightFlow;
  })(QNBleActionFlow);

var ReviewFlow =
  /** @class */
  (function (_super) {
    __extends(ReviewFlow, _super);

    function ReviewFlow(protocol, uuids) {
      var _this = _super.call(this, protocol) || this;

      _this.acceptActions = [QNBleAction.MES_REVIEW];
      _this.uuids = uuids;
      return _this;
    } //需要做

    ReviewFlow.prototype.execute = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_c) {
          this.writeCmd(
            this.uuids.produce.serviceUUID,
            this.uuids.produce.writeUUID,
            0xfd,
            [0x21, 0x01]
          );
          (_b = (_a = this.listener).onDeviceStateChange) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, {
                behavior: MesBehavior.START_BACKHOE,
              });
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    ReviewFlow.prototype.decode = function (payload) {
      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, type;
        return __generator(this, function (_a) {
          (data = payload.data), (characteristicId = payload.characteristicId);

          if (characteristicId === WspDualScaleMesProfle.UUID_SN) {
            return [
              2,
              /*return*/
            ];
          }

          if (data[0] != 0xfd) {
            return [
              2,
              /*return*/
            ];
          }

          type = data[2];

          switch (type) {
            case 0x22:
              //收到回检数据值
              this.getReviewWeightData(data);
              break;

            case 0x23:
              //收到回检标识保存结果
              this.getReviewWeightDataResult(data);
              break;
          }

          return [
            2,
            /*return*/
          ];
        });
      });
    };
    /**
     * 进入回检 0x21
     */

    ReviewFlow.prototype.enterReview = function () {
      var _a, _b;

      (_b = (_a = this.listener).onDeviceStateChange) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            behavior: MesBehavior.START_BACKHOE,
          }); // this.listener.onDeviceStateChange({behavior:MesBehavior.START_BACKHOE)

      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x21, 0x01]
      );
    };
    /**
     * 收到回检重量 0x22
     */

    ReviewFlow.prototype.getReviewWeightData = function (byteList) {
      var _a, _b;

      this.setReviewWeightDataResult(1);
      var weight = this.decodeWeight(byteList[3], byteList[4]);
      (_b = (_a = this.listener).onGetReviewWeightData) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            weight: weight,
          }); // const success = this.deviceEventListener && this.deviceEventListener.onGetReviewWeightData(weight)
    }; //1 收到重量值 2 回检成功 3 回检失败

    ReviewFlow.prototype.setReviewWeightDataResult = function (state) {
      this.writeCmd(
        this.uuids.produce.serviceUUID,
        this.uuids.produce.writeUUID,
        0xfd,
        [0x22, state]
      );
    };
    /**
     * 收到回检标示保存结果 0x23
     */

    ReviewFlow.prototype.getReviewWeightDataResult = function (byteList) {
      var _a, _b, _c, _d;

      var isSuccess = byteList[3] == 0x01 && byteList[3] == 0x01;
      (_b = (_a = this.listener).onReviewCodeStatus) === null || _b === void 0
        ? void 0
        : _b.call(_a, {
            isSuccess: isSuccess,
          }); // this.deviceEventListener && this.deviceEventListener.onReviewCodeStatus(success)

      (_d = (_c = this.listener).onDeviceStateChange) === null || _d === void 0
        ? void 0
        : _d.call(_c, {
            behavior: MesBehavior.STOP_BACKHOE,
          });
    };

    return ReviewFlow;
  })(QNBleActionFlow);

var WspMes = {
  WspDualScaleMesProfle: WspDualScaleMesProfle,
  CalibrationFlow: CalibrationFlow,
  ModuleTestFlow: PartialWeightFlow,
  ModelProductFlow: ModelProductFlow,
  PartialWeightFlow: PartialWeightFlow$1,
  ReviewFlow: ReviewFlow,
};

var WspDualScaleMesProfle$1 = WspMes.WspDualScaleMesProfle,
  CalibrationFlow$1 = WspMes.CalibrationFlow,
  ReviewFlow$1 = WspMes.ReviewFlow,
  PartialWeightFlow$2 = WspMes.PartialWeightFlow,
  ModuleTestFlow = WspMes.ModuleTestFlow,
  ModelProductFlow$1 = WspMes.ModelProductFlow;

var WspDualScaleMesProtocol =
  /** @class */
  (function (_super) {
    __extends(WspDualScaleMesProtocol, _super);

    function WspDualScaleMesProtocol() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * 准备工作，在此接收所有的特征值
     *
     * @memberof WspDualScaleMesProtocol
     */

    WspDualScaleMesProtocol.prototype.prepare = function () {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var uuids;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.bleNative.findService(this.bleDevice.deviceId),
              ];

            case 1:
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID: WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.UUID_WRITE,
                },
                wifi: {
                  serviceUUID: WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.UUID_WRITE,
                },
              };
              if (
                !(
                  this.bleDevice.type ===
                  QNBleDeviceType.WSP_EIGHT_DUAL_MODE_SCALE
                )
              )
                return [
                  3, /*break*/
                  4,
                ]; // 八电极

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.EIGHT_UUID_NOTIFY
                ),
              ];

            case 2:
              // 八电极
              _c.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.EIGHT_UUID_WIFI_NOTIFY
                ),
              ];

            case 3:
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.EIGHT_UUID_WRITE,
                },
                wifi: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.EIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.EIGHT_UUID_WIFI_WRITE,
                },
              };
              return [
                3, /*break*/
                6,
              ];

            case 4:
              if (!(this.bleDevice.type === QNBleDeviceType.HEIGHTWEIGHT))
                return [
                  3, /*break*/
                  6,
                ]; // 身高体重秤 CP30B

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_NOTIFY
                ),
              ];

            case 5:
              // 身高体重秤 CP30B
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_WRITE,
                },
                wifi: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_DEVICE_SERVICES,
                  writeUUID: WspDualScaleMesProfle$1.HEIGHTWEIGHT_UUID_WRITE,
                },
              };
              _c.label = 6;

            case 6:
              if (
                !(
                  this.bleDevice.type ===
                  QNBleDeviceType.HEIGHTWEIGHT_SINGLE_BLE
                )
              )
                return [
                  3, /*break*/
                  8,
                ]; // 身高体重单蓝牙秤 CP30A

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_NOTIFY
                ),
              ];

            case 7:
              // 身高体重单蓝牙秤 CP30A
              _c.sent();

              uuids = {
                produce: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  writeUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE,
                },
                wifi: {
                  serviceUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_DEVICE_SERVICES,
                  writeUUID:
                    WspDualScaleMesProfle$1.HEIGHTWEIGHT_SINGLE_BLE_UUID_WRITE,
                },
              };
              return [
                3, /*break*/
                10,
              ];

            case 8:
              // 普通秤
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.UUID_TIME_SERVICES,
                  WspDualScaleMesProfle$1.UUID_NOTIFY
                ),
              ];

            case 9:
              // 普通秤
              _c.sent();

              _c.label = 10;

            case 10:
              if (this.operation.action === QNBleAction.MES_READ_SN) {
                (_b = (_a = this.listener).onDeviceStateChange) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      behavior: MesBehavior.STOP_READ_SN,
                    });
              }

              return [
                4,
                /*yield*/
                this.bleNative.readBleCharacteristicValue(
                  this.bleDevice.deviceId,
                  WspDualScaleMesProfle$1.UUID_DEVICE_SERVICES,
                  WspDualScaleMesProfle$1.UUID_SN
                ),
              ];

            case 11:
              _c.sent();

              this.actionFlows.push(new CalibrationFlow$1(this, uuids));
              this.actionFlows.push(new ReviewFlow$1(this, uuids));
              this.actionFlows.push(new PartialWeightFlow$2(this, uuids));
              this.actionFlows.push(new ModuleTestFlow(this, uuids));
              this.actionFlows.push(new ModelProductFlow$1(this, uuids));
              this.applyFlow();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    WspDualScaleMesProtocol.prototype.applyFlow = function () {
      var e_1, _a;

      try {
        for (
          var _b = __values(this.actionFlows), _c = _b.next();
          !_c.done;
          _c = _b.next()
        ) {
          var flow = _c.value;

          if (flow.accept(this.operation.action)) {
            flow.action = this.operation.action;
            this.currentFlow = flow;
            break;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1,
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b['return'])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      if (this.currentFlow) {
        this.currentFlow.execute();
      }
    };
    /**
     * 解析命令
     * @param {Partial<QNBleTypings.TypedCharacteristicValueChangePayload>} payload
     */

    WspDualScaleMesProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data, characteristicId, sn, _e, _f, num, item;

        var e_2, _g;

        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              (data = payload.data),
                (characteristicId = payload.characteristicId);

              if (characteristicId === WspDualScaleMesProfle$1.UUID_SN) {
                sn = '';

                try {
                  // eslint-disable-next-line no-restricted-syntax
                  for (
                    _e = __values(payload.data), _f = _e.next();
                    !_f.done;
                    _f = _e.next()
                  ) {
                    num = _f.value;
                    item = String.fromCharCode(num);
                    sn += item;
                  }
                } catch (e_2_1) {
                  e_2 = {
                    error: e_2_1,
                  };
                } finally {
                  try {
                    if (_f && !_f.done && (_g = _e['return'])) _g.call(_e);
                  } finally {
                    if (e_2) throw e_2.error;
                  }
                }

                (_b = (_a = this.listener).onGetSnCode) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      sn: sn,
                    });

                if (this.operation.action === QNBleAction.MES_READ_SN) {
                  (_d = (_c = this.listener).onDeviceStateChange) === null ||
                  _d === void 0
                    ? void 0
                    : _d.call(_c, {
                        behavior: MesBehavior.STOP_READ_SN,
                      });
                }
              }

              if (!this.currentFlow)
                return [
                  3, /*break*/
                  2,
                ];
              return [
                4,
                /*yield*/
                this.currentFlow.decode(payload),
              ];

            case 1:
              _h.sent();

              _h.label = 2;

            case 2:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /************  删除工位  *************/

    /**
     * 删除工位 0x41
     * 0x00 所有工位 0x01 模块测试 0x02 半成品
     * 0x04 标定工位 0x08 重量回检 0x10 偏载  0x02 写型号
     */

    WspDualScaleMesProtocol.prototype.resetStation = function (station) {
      // this.writeCmd(this.getProduceUUID().serviceUUID, this.getProduceUUID().writeUUID, 0xFD, [0x41, station])
    };

    WspDualScaleMesProtocol.prototype.getCurrentFlow = function () {
      return this.currentFlow;
    };

    WspDualScaleMesProtocol.bleProfile = new WspDualScaleMesProfle$1();
    WspDualScaleMesProtocol.WspMes = WspMes;
    return WspDualScaleMesProtocol;
  })(QNBleProtocol);

var SECOND_2000_YEAR$1 = 946656000;
/**
 * 是否是心率秤
 * @param {number} scaleType
 */

function isHeartRateScale$1(scaleType) {
  return scaleType === 0x21;
}

function buildCmd$2(cmd, deviceType) {
  var data = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    data[_i - 2] = arguments[_i];
  }

  var cmdData = __spread([cmd, data.length + 4, deviceType], data); // writeData会自动添加和计算校验位
  // return addChecksum(cmdData);

  return cmdData;
}

var NormalBleScaleBleProfle =
  /** @class */
  (function () {
    function NormalBleScaleBleProfle() {
      this.defaultAction = QNBleAction.MEASURE_WEIGHT;
      this.type = QNBleDeviceType.NORMAL_BLE_SCALE;
      this.transferType = QNBleTransferType.BLE;
    }

    NormalBleScaleBleProfle.prototype.isTargetDevice = function (nativeDevice) {
      var bleName = nativeDevice.bluetoothName;

      if (
        bleName === 'QN-Scale' ||
        bleName === 'QN-Scale1' ||
        bleName === 'ZT-Scale1' || // 接入华为运动健康和智慧生活的秤
        // 华为hilink的秤的蓝牙名都以Hi-开头
        /^Hi-/.test(bleName)
      ) {
        return nativeDevice.manufacturer.length < 19;
      }

      return false;
    };

    NormalBleScaleBleProfle.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;

      if (manufacturer.length === 0) {
        return {};
      }

      var macs = [
        number2hex(manufacturer[12]),
        number2hex(manufacturer[11]),
        number2hex(manufacturer[10]),
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
      ];
      return {
        isScreenOn: manufacturer[5] !== 1,
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return NormalBleScaleBleProfle;
  })();

var NormalBleScaleProtocol$1 =
  /** @class */
  (function (_super) {
    __extends(NormalBleScaleProtocol, _super);

    function NormalBleScaleProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = 'FFE0';
      _this.UUID_IBT_READ = 'FFE1';
      _this.UUID_IBT_WRITE = 'FFE3';
      _this.UUID_IBT_SERVICES_1 = 'FFF0';
      _this.UUID_IBT_READ_1 = 'FFF1';
      _this.UUID_IBT_WRITE_1 = 'FFF2';
      _this.hasReceived = false;
      _this.lastWeightTime = 0;
      _this.isHoltk = false;
      return _this;
    }

    Object.defineProperty(NormalBleScaleProtocol.prototype, 'serviceId', {
      get: function get() {
        return this.isHoltk ? this.UUID_IBT_SERVICES_1 : this.UUID_IBT_SERVICE;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(
      NormalBleScaleProtocol.prototype,
      'characteristicReadId',
      {
        get: function get() {
          return this.isHoltk ? this.UUID_IBT_READ_1 : this.UUID_IBT_READ;
        },
        enumerable: false,
        configurable: true,
      }
    );
    Object.defineProperty(
      NormalBleScaleProtocol.prototype,
      'characteristicWriteId',
      {
        get: function get() {
          return this.isHoltk ? this.UUID_IBT_WRITE_1 : this.UUID_IBT_WRITE;
        },
        enumerable: false,
        configurable: true,
      }
    );

    NormalBleScaleProtocol.prototype.prepare = function () {
      var _this = this; // 集成业务类

      this.instanceScaleBiz();
      var deviceId = this.bleDevice.deviceId;
      return this.bleNative
        .findService(deviceId)
        .then(function (services) {
          _this.log('获取到蓝牙服务列表', services); // 查找服务特征值方案

          services.some(function (service) {
            if (service.characteristicId === _this.UUID_IBT_SERVICES_1) {
              _this.isHoltk = true;
              return true;
            }

            return false;
          });

          _this.log('deviceId', deviceId, 'serviceId', _this.serviceId);

          return timeoutPromise(100).then(function () {
            return _this.bleNative.findBleDeviceCharacteristics(
              deviceId,
              _this.serviceId
            );
          });
        })
        .then(function () {
          _this.log('发现特征值成功'); // 使能特征值

          return _this.bleNative
            .enableNotify(deviceId, _this.serviceId, _this.characteristicReadId)
            ['catch'](function (err) {
              // 如果是华为运动健康的hilink，则再尝试使用另一套serviceId
              // 后续华为可能会支持返回service的uuid列表
              if (_this.bleNative.name === 'QNBleNativeHuaWeiHilink') {
                _this.isHoltk = true;
                return _this.bleNative.enableNotify(
                  deviceId,
                  _this.serviceId,
                  _this.characteristicReadId
                );
              }

              throw err;
            });
        })
        ['catch'](function (err) {
          _this.log('prepare出错', err);

          throw err;
        });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    NormalBleScaleProtocol.prototype.decode = function (payload) {
      var _a, _b, _c, _d;

      return __awaiter(this, void 0, void 0, function () {
        var data,
          scaleType,
          _e,
          isSupportJin,
          isSupportSt,
          unitByte,
          weight,
          differ,
          timeData,
          i;

        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              data = payload.data;
              scaleType = data[2];
              _e = data[0];

              switch (_e) {
                case 0x12:
                  return [
                    3, /*break*/
                    1,
                  ];

                case 0x10:
                  return [
                    3, /*break*/
                    3,
                  ];

                case 0x14:
                  return [
                    3, /*break*/
                    11,
                  ];
              }

              return [
                3, /*break*/
                13,
              ];

            case 1:
              this.scaleBizImp.weightScale = (data[10] & 0x01) === 1 ? 100 : 10;
              this.lastWeightTime = 0;
              isSupportJin = ((data[10] >> 1) & 3) > 0;
              isSupportSt = ((data[10] >> 1) & 3) === 2;
              unitByte = 1;

              switch (this.operation.unit) {
                case QNBleUnit.LB:
                  unitByte = 2;
                  break;

                case QNBleUnit.JIN:
                  unitByte = isSupportJin ? 4 : 1;
                  break;

                case QNBleUnit.ST:
                  unitByte = isSupportSt ? 8 : 2;
                  break;
              }

              (_b = (_a = this.listener).onGetDeviceInfo) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      fwVersion: data[9],
                      bleVersion: data[11],
                    },
                  });
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$2(
                    0x13,
                    scaleType,
                    unitByte,
                    0x10,
                    0x00,
                    0x00,
                    0x00
                  ),
                }),
              ];

            case 2:
              _f.sent();

              return [
                3, /*break*/
                14,
              ];

            case 3:
              weight = this.scaleBizImp.decodeWeight(data[3], data[4]);
              if (!(data[5] === 0))
                return [
                  3, /*break*/
                  4,
                ];
              this.log('收到不稳数据', weight);
              this.lastWeightTime = weight === 0 ? 0 : new Date().getTime();
              (_d = (_c = this.listener).onGetUnsteadyWeight) === null ||
              _d === void 0
                ? void 0
                : _d.call(_c, {
                    weight: weight,
                  }); // 重置是否有测量数据的标识

              this.hasReceived = false;
              return [
                3, /*break*/
                10,
              ];

            case 4:
              if (!(data[5] === 1))
                return [
                  3, /*break*/
                  8,
                ];
              if (!isHeartRateScale$1(scaleType))
                return [
                  3, /*break*/
                  5,
                ];
              return [
                3, /*break*/
                7,
              ];

            case 5:
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 6:
              _f.sent();

              _f.label = 7;

            case 7:
              return [
                3, /*break*/
                10,
              ];

            case 8:
              if (!(data[5] === 2))
                return [
                  3, /*break*/
                  10,
                ];
              return [
                4,
                /*yield*/
                this.dispatchSteadyData(weight, data),
              ];

            case 9:
              _f.sent();

              _f.label = 10;

            case 10:
              return [
                3, /*break*/
                14,
              ];

            case 11:
              if (!this.isHoltk) {
                return [
                  2,
                  /*return*/
                ];
              }

              differ = Date.now() / 1000 - SECOND_2000_YEAR$1;
              timeData = [];

              for (i = 0; i < 4; i += 1) {
                timeData.push(differ >> (i * 8));
              }

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: buildCmd$2(
                    0x20,
                    scaleType,
                    timeData[0],
                    timeData[1],
                    timeData[2],
                    timeData[3]
                  ),
                }),
              ];

            case 12:
              _f.sent();

              return [
                3, /*break*/
                14,
              ];

            case 13:
              return [
                3, /*break*/
                14,
              ];

            case 14:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.prototype.dispatchSteadyData = function (
      weight,
      data
    ) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var scaleType,
          sendCmd,
          testTime,
          hasResistance,
          resistance50,
          resistance500,
          scaleData;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              scaleType = data[2];
              sendCmd = buildCmd$2(0x1f, scaleType, 0x10);
              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: sendCmd,
                }),
              ];

            case 1:
              _c.sent();

              if (this.hasReceived) {
                // 已经收到稳定数据，不再处理
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              this.hasReceived = true;
              testTime = new Date().getTime() - this.lastWeightTime;
              hasResistance = Number(testTime > 4000);
              resistance50 = decodeInteger(data[6], data[7]);
              resistance500 = decodeInteger(data[8], data[9]);
              scaleData = {
                weight: weight,
                resistance50: resistance50,
                resistance500: resistance500,
                hasResistance: hasResistance,
              };

              if (data[5] === 2) {
                Object.assign(scaleData, {
                  heartRate: data[10],
                });
              }

              this.log('称重结束', scaleData);
              (_b = (_a = this.listener).onGetScaleData) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    scaleData: scaleData,
                  });
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    NormalBleScaleProtocol.bleProfle = new NormalBleScaleBleProfle();
    return NormalBleScaleProtocol;
  })(QNBleBaseScaleProtocol);

var ThermometerProtocolProfile =
  /** @class */
  (function () {
    function ThermometerProtocolProfile() {
      this.defaultAction = QNBleAction.MEASURE;
      this.type = QNBleDeviceType.THERMOMETER;
      this.transferType = QNBleTransferType.BLE;
    }

    ThermometerProtocolProfile.prototype.isTargetDevice = function (
      nativeDevice
    ) {
      return nativeDevice.bluetoothName === 'QN-Thermo';
    };

    ThermometerProtocolProfile.prototype.buildTargetDevice = function (
      nativeDevice
    ) {
      if (!this.isTargetDevice(nativeDevice)) {
        return null;
      }

      var manufacturer = nativeDevice.manufacturer;
      var macs = [
        number2hex(manufacturer[9]),
        number2hex(manufacturer[8]),
        number2hex(manufacturer[7]),
        number2hex(manufacturer[6]),
        number2hex(manufacturer[5]),
        number2hex(manufacturer[4]),
      ];
      return {
        modelId: number2hex(manufacturer[2]) + number2hex(manufacturer[3]),
        mac: macs.join(':'),
      };
    };

    return ThermometerProtocolProfile;
  })();

var ThermometerProtocol =
  /** @class */
  (function (_super) {
    __extends(ThermometerProtocol, _super);

    function ThermometerProtocol() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;

      _this.UUID_IBT_SERVICE = '0000FFF0-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_READ = '0000FFF1-0000-1000-8000-00805F9B34FB';
      _this.UUID_IBT_WRITE = '0000FFF2-0000-1000-8000-00805F9B34FB'; // 蓝牙配对

      _this.UUID_COMPAIRE_READ = '0000FFF3-0000-1000-8000-00805F9B34FB';
      _this.UUID_COMPAIRE_WRITE = '0000FFF4-0000-1000-8000-00805F9B34FB'; // 配对状态

      _this.blePaireStatus = 0; // 历史数据总数

      _this.historyCount = 0; // 记录收到的上一条历史数据。做去重对比

      _this.lastReceivedHistoryData = {}; // 是否取消了数据同步，一旦取消就不再接收后续数据

      _this.isCancelHistoryData = false; // 当前已接收的历史数据序号

      _this.currentRecivedHistoryDataNo = 0;
      _this.wifiInfoCache = {
        rssi: 0,
        ssid: [],
      }; // 上一次收到的完整的wifi ssid数据包

      _this.lastReceivedWifiIno = {}; // 上一包接受的wifi ssid序号

      _this.lastReceivedWifiSsidPackNo = 0; // 当前执行配网命令的包的序号

      _this.currentSetWifiCmdNo = 0; // wifi账号指令数据

      _this.ssidCmdData = []; // wifi密码指令数据

      _this.pwdCmdData = []; // 数据服务地址指令数据

      _this.dataServerUrlData = []; // OTA升级地址指令数据

      _this.otaServerUrlData = []; // 秘钥指令数据

      _this.encryptKeyCmdData = [];
      return _this;
    }

    Object.defineProperty(ThermometerProtocol.prototype, 'action', {
      get: function get() {
        return (
          this.operation.action || ThermometerProtocol.bleProfile.defaultAction
        );
      },
      enumerable: false,
      configurable: true,
    });
    /**
     * @override
     */

    ThermometerProtocol.prototype.prepare = function () {
      return __awaiter(this, void 0, void 0, function () {
        var deviceId, services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              deviceId = this.bleDevice.deviceId;
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 1:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.findService(deviceId),
              ];

            case 2:
              services = _a.sent();
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              this.log('获取到蓝牙服务列表', services);
              return [
                4,
                /*yield*/
                this.bleNative.findBleDeviceCharacteristics(
                  deviceId,
                  this.serviceId
                ),
              ];

            case 4:
              _a.sent(); // if ([
              //   QNBleAction.SP_SYNC_CURRENT_DATA,
              //   QNBleAction.SP_SYNC_HISTORY_DATA,
              // ].includes(this.operation.action)) {
              // }

              this.log(
                '发现特征值成功，使能特征值',
                'deviceId',
                deviceId,
                'serviceId',
                this.serviceId,
                'characteristicId',
                this.characteristicReadId
              );
              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  deviceId,
                  this.serviceId,
                  this.characteristicReadId
                ),
              ];

            case 6:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * @override
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    ThermometerProtocol.prototype.decode = function (payload) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var data, _c, status_1;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              data = payload.data;
              _d.label = 1;

            case 1:
              _d.trys.push([1, , 14, 15]);

              _c = data[0];

              switch (_c) {
                case 0x12:
                  return [
                    3, /*break*/
                    2,
                  ];

                case 0x10:
                  return [
                    3, /*break*/
                    6,
                  ];

                case 0xa0:
                  return [
                    3, /*break*/
                    10,
                  ];
              }

              return [
                3, /*break*/
                12,
              ];

            case 2:
              if (!(this.lastCmd !== 0x12))
                return [
                  3, /*break*/
                  4,
                ];
              return [
                4,
                /*yield*/
                this.getDeviceInfo(data),
              ];

            case 3:
              _d.sent();

              return [
                3, /*break*/
                5,
              ];

            case 4:
              this.log('收到重复的0x12命令数据，舍弃');
              _d.label = 5;

            case 5:
              return [
                3, /*break*/
                13,
              ];

            case 6:
              if (!(this.lastCmd !== 0x10))
                return [
                  3, /*break*/
                  8,
                ];
              return [
                4,
                /*yield*/
                this.onRecieveCurrentData(data),
              ];

            case 7:
              _d.sent();

              return [
                3, /*break*/
                9,
              ];

            case 8:
              this.log('收到重复的0x10命令数据，舍弃');
              _d.label = 9;

            case 9:
              return [
                3, /*break*/
                13,
              ];

            case 10:
              status_1 = data[2];
              this.blePaireStatus = status_1;
              (_b = (_a = this.listener).onGetBlePaireStatus) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, status_1);
              return [
                4,
                /*yield*/
                this.writeData({
                  characteristicId: this.UUID_COMPAIRE_WRITE,
                  cmdData: [0xa1, 4, 1],
                }),
              ];

            case 11:
              _d.sent();

              return [
                3, /*break*/
                13,
              ];

            case 12:
              return [
                3, /*break*/
                13,
              ];

            case 13:
              return [
                3, /*break*/
                15,
              ];

            case 14:
              this.lastCmd = data[0];
              return [
                7,
                /*endfinally*/
              ];

            case 15:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    ThermometerProtocol.prototype.getDeviceInfo = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var macs, modelId, modeByte;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              macs = [
                number2hex(data[10]),
                number2hex(data[9]),
                number2hex(data[8]),
                number2hex(data[7]),
                number2hex(data[6]),
                number2hex(data[5]),
              ];
              modelId = number2hex(data[11]) + number2hex(data[12]);
              modeByte = data[2];
              (_b = (_a = this.listener).onGetDeviceInfo) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, {
                    deviceId: this.bleDevice.deviceId,
                    info: {
                      mac: macs.join(':'),
                      modelId: modelId,
                      deviceStatus: {
                        unit: (modeByte >> 3) & 1,
                        mode: (modeByte >> 4) & 15,
                      },
                      historyCount: 0,
                      softwareVersion: data[13],
                      bleVersion: data[14],
                      bleProtocolVersion: data[15],
                    },
                  }); // 准备回复13命令

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x13, 0x04, 0x01],
                }),
              ];

            case 1:
              // 准备回复13命令
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 同步当前数据
     */

    ThermometerProtocol.prototype.onRecieveCurrentData = function (data) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var modeByte, value;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              modeByte = data[2];
              value =
                Number.parseInt(number2hex(data[3]) + number2hex(data[4]), 16) /
                10;
              return [
                4,
                /*yield*/
                (_b = (_a = this.listener).onGetCurrentData) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, {
                      value: value,
                      unit: (modeByte >> 3) & 1,
                      mode: (modeByte >> 4) & 15,
                    }),
              ];

            case 1:
              _c.sent();

              return [
                4,
                /*yield*/
                this.writeData({
                  cmdData: [0x1f, 0x04, 0x10],
                }),
              ];

            case 2:
              _c.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 准备蓝牙配对
     */

    ThermometerProtocol.prototype.prepareBlePaire = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('使能蓝牙配对');
              return [
                4,
                /*yield*/
                this.bleNative.enableNotify(
                  this.bleDevice.deviceId,
                  this.UUID_IBT_SERVICE,
                  this.UUID_COMPAIRE_READ
                ),
              ];

            case 1:
              _a.sent();

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    ThermometerProtocol.bleProfile = new ThermometerProtocolProfile();
    return ThermometerProtocol;
  })(QNBleProtocol);

var QNBleProtocols = {
  HeightWeightScaleProtocol: HeightWeightScaleProtocol,
  NormalBleScaleProtocol: NormalBleScaleProtocol,
  OneToMultiBroadcastScaleProtocol: OneToMultiBroadcastScaleProtocol,
  OneToOneBroadcastScaleProtocol: OneToOneBroadcastScaleProtocol,
  WspDualScaleProtocol: WspDualScaleProtocol,
  ShareCLScaleProtocol: ShareCLScaleProtocol,
  ShareScaleProtocol: ShareScaleProtocol,
  WspDualScaleMesProtocol: WspDualScaleMesProtocol,
  SphygmomanometerProtocol: SphygmomanometerProtocol,
  ThermometerProtocol: ThermometerProtocol,
  BleKitchenScaleProtocol: BleKitchenScaleProtocol,
  BroadcastKitchenScaleProtocol: BroadcastKitchenScaleProtocol,
  FasciaGunMCUProtocol: FasciaGunMCUProtocol,
  NormalBleScaleMesProtocol: NormalBleScaleProtocol$1,
};

var QNEvent =
  /** @class */
  (function () {
    function QNEvent(_a) {
      var type = _a.type,
        name = _a.name,
        detail = _a.detail;
      this.type = type;
      this.name = name;
      this.detail = detail;
    }

    return QNEvent;
  })();

/**
 * 第一个字母大写
 * @param {string} word
 * @returns {string}
 */
// function capitalizeFirstLetter(word: string): string {
//   return word.replace(/([a-zA-Z])/, (letter) => letter.toUpperCase());
// }
// /**
//  * 驼峰式命名
//  * 将aa-bb-xx 转为aaBbXx
//  * @param {string} str
//  * @param {boolean} [ignoreHeadKebab=false] - 忽略首位。
//  * 如为true则-webkit-border-radius会转为webkitBorderRadius
//  */
// function camelCase(str: string, ignoreHeadKebab = false): string {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return str.replace(
//     /([:\-_]+(.))/g,
//     (_, separator, letter: string, offset) => (
//       offset >= Number(ignoreHeadKebab) ? letter.toUpperCase() : letter),
//   );
// }

/**
 * 帕斯卡命名
 * 将aa-bb-xx转为AaBbXx
 * @param {string} str - input
 * @returns {string}
 */
// function pascalCase(str: string): string {
//   return capitalizeFirstLetter(camelCase(str));
// }
// /**
//  * 将诸如bluetooth_enable_change转成onBluetoothEnableChange
//  * @param {T} eventName
//  */
// function camelEventName<T>(eventName: T): T {
//   return `on${pascalCase(eventName as unknown as string)}` as unknown as T;
// }
// function deprecatedEventWarn(eventName: QNBleTypings.QNEventName) {
//   // 这些方法不建议继续使用
//   const deprecatedEvents = [
//     'start_discovery_device',
//     'stop_discovery_device',
//   ];
//   if (deprecatedEvents.includes(eventName)) {
//     // eslint-disable-next-line no-console
//     console.warn(`建议不要继续使用[${eventName}]事件，因为可通过相应的实例方法调用来维持状态，放入事件中并不是一个好的选择。`);
//   }
// }

var QNEventManager =
  /** @class */
  (function () {
    function QNEventManager() {
      // eslint-disable-next-line max-len
      this.handlers = new Map();
    }
    /**
     * 获取事件类型
     * @private
     * @static
     * @param {(eventName: QNBleTypings.QNEventName} eventName - 事件名
     * @returns {QNBleTypings.QNEventType | false}
     */
    // eslint-disable-next-line max-len

    QNEventManager.getEventType = function (eventName) {
      if (eventName === 'error') {
        return 'error';
      }

      if (eventName === 'ready') {
        return 'ready';
      }

      if (QNBleEventNames.includes(eventName)) {
        return 'ble';
      }

      if (QNDeviceEventNames.includes(eventName)) {
        return 'device';
      }

      return false;
    };
    /**
     * 添加监听事件
     * @param {string} eventName - 事件名
     * @param {QNBleTypings.QNEventHandler} handler - 处理函数
     * @returns {QNEventManager}
     */

    QNEventManager.prototype.on = function (eventName, handler) {
      var targetHanders = this.handlers.get(eventName);

      if (!targetHanders) {
        targetHanders = new Array();
        this.handlers.set(eventName, targetHanders);
      }

      if (!targetHanders.includes(handler)) {
        targetHanders.push(handler);
      }

      return this;
    }; //
    // eslint-disable-next-line max-len

    QNEventManager.prototype.off = function (eventName, handler) {
      if (this.handlers.get(eventName)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        var handlerIsBoolean = isType(handler) === 'boolean';

        if (handlerIsBoolean && handler) {
          this.handlers.set(eventName, []);
        } else if (!handlerIsBoolean) {
          var targetHandlers = this.handlers.get(eventName);
          var tarIndex = targetHandlers.findIndex(function (h) {
            return h === handler;
          });

          if (tarIndex > -1) {
            targetHandlers.splice(tarIndex, 1);
          }
        }
      }

      return this;
    };
    /**
     * 触发事件监听
     * @private
     * @param {QNBleTypings.QNEventName} eventName - 事件名
     * @param {unknown} [payload] - 事件数据
     * @returns {QNEventManager}
     */

    QNEventManager.prototype.dispatch = function (eventName, payload) {
      var targetHandlers = this.handlers.get(eventName);

      if (!targetHandlers || targetHandlers.length === 0) {
        // eslint-disable-next-line no-console
        console.warn('\u672A\u76D1\u542C\u7684\u4E8B\u4EF6[' + eventName + ']');
        return this;
      }

      var e = new QNEvent({
        type: 'ble',
        name: eventName,
        detail: payload,
      });
      targetHandlers === null || targetHandlers === void 0
        ? void 0
        : targetHandlers.forEach(function (handler) {
            try {
              handler(e);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.error('事件报错', error);
            }
          });
      return this;
    };
    /**
     * 清除所有监听事件
     */

    QNEventManager.prototype.clearListeners = function () {
      this.handlers.clear();
      return this;
    };

    return QNEventManager;
  })();

/**
 * 集成事件系统
 */

var QNEventSystem =
  /** @class */
  (function () {
    function QNEventSystem() {
      this.eventManager = new QNEventManager();
    } //

    QNEventSystem.prototype.on = function (eventName, handler) {
      this.eventManager.on(eventName, handler);
      return this;
    };
    /**
     * 移除监听事件
     * @param {QNEventName} eventName - 要移除的事件名
     * @param {QNBleTypings.QNEventHandler} handler - 要移除的处理函数。如果为boolean则移除所有监听事件
     * @returns {T}
     */

    QNEventSystem.prototype.off = function (eventName, handler) {
      var handlerIsBoolean = isType(handler) === 'boolean';

      if (handlerIsBoolean && handler) {
        this.eventManager.off(eventName, handler);
      } else if (!handlerIsBoolean) {
        this.eventManager.off(eventName, handler);
      }

      return this;
    };
    /**
     * 触发事件监听
     * @private
     * @param {QNBleTypings.QNEventName} eventName - 事件名
     * @param {unknown} [payload] - 事件数据
     * @returns {T}
     */

    QNEventSystem.prototype.dispatch = function (eventName, payload) {
      this.eventManager.dispatch(eventName, payload);
      return this;
    };
    /**
     * 清除所有监听事件
     */

    QNEventSystem.prototype.clearListeners = function () {
      this.eventManager.clearListeners();
      return this;
    };

    return QNEventSystem;
  })();

var QNBleDevice =
  /** @class */
  (function () {
    function QNBleDevice(nativeDevice, protocol) {
      var _this = this;

      var _a; // 是否亮屏

      this.isScreenOn = false; // 是否支持wifi

      this.isSupportWifi = false; // 是否是双模称

      this.isWspScale = false;
      this.Protocol = protocol;
      this.nativeDevice = nativeDevice;
      var moreData = protocol.bleProfile.buildTargetDevice(nativeDevice);
      Object.assign(this, {
        type:
          (_a = moreData.type) !== null && _a !== void 0
            ? _a
            : protocol.bleProfile.type,
        transferType: protocol.bleProfile.transferType,
        manufacturer: nativeDevice.manufacturer,
        rssi: nativeDevice.rssi,
        name: nativeDevice.bluetoothName,
        deviceId: nativeDevice.deviceId,
        services: nativeDevice.services,
        mac: nativeDevice.mac,
      });
      [
        'mac',
        'sn',
        'modelId',
        'isScreenOn',
        'isSupportWifi',
        'isWspScale',
        'totalUserCount',
        'registerUserCount',
        'offlineDataCount',
        'firmwareVersion',
        'scaleVersion',
        'wifiVersion',
        'scaleInfoByte',
        'hardVersion',
        'spStandardType',
        'spDeviceType',
      ].forEach(function (prop) {
        var _a;

        if (Object.prototype.hasOwnProperty.call(moreData, prop)) {
          Object.assign(_this, ((_a = {}), (_a[prop] = moreData[prop]), _a));
        }
      });
    }

    return QNBleDevice;
  })();

var QNProtocolManager =
  /** @class */
  (function () {
    function QNProtocolManager() {
      // eslint-disable-next-line max-len
      this.records = new Map();
    }

    QNProtocolManager.prototype.hasProtocol = function (deviceId) {
      return this.records.has(deviceId);
    };

    QNProtocolManager.prototype.getProtocol = function (deviceId) {
      return this.records.get(deviceId) || null;
    };

    QNProtocolManager.prototype.setProtocol = function (protocolImp) {
      return this.records.set(protocolImp.bleDevice.deviceId, protocolImp);
    };

    QNProtocolManager.prototype.removeProtocol = function (deviceId) {
      return this.records['delete'](deviceId);
    };

    QNProtocolManager.prototype.clear = function () {
      return this.records.clear();
    };

    QNProtocolManager.prototype.values = function () {
      return this.records.values();
    };

    QNProtocolManager.prototype.keys = function () {
      return this.records.keys();
    };

    QNProtocolManager.prototype.enries = function () {
      return this.records.entries();
    };

    return QNProtocolManager;
  })();

var version$1 = '1.1.0';

/* eslint-disable max-len */
var http = {
  /**
   * js封装ajax请求
   * >>使用new XMLHttpRequest 创建请求对象,所以不考虑低端IE浏览器(IE6及以下不支持XMLHttpRequest)
   * >>使用es6语法,如果需要在正式环境使用,则可以用babel转换为es5语法 https://babeljs.cn/docs/setup/#installation
   *  @param settings 请求参数模仿jQuery ajax
   *  调用该方法,data参数需要和请求头Content-Type对应
   *  Content-Type                        data                                     描述
   *  application/x-www-form-urlencoded   'name=哈哈&age=12'或{name:'哈哈',age:12}  查询字符串,用&分割
   *  application/json                     name=哈哈&age=12'                        json字符串
   *  multipart/form-data                  new FormData()                           FormData对象,当为FormData类型,不要手动设置Content-Type
   *  注意:请求参数如果包含日期类型.是否能请求成功需要后台接口配合
   */
  ajax: function ajax(settings) {
    var e_1, _a;

    if (settings === void 0) {
      settings = {};
    } // 初始化请求参数

    var _s = __assign(
      {
        url: '',
        type: 'GET',
        responseType: 'json',
        async: true,
        data: null,
        headers: {},
        timeout: 20000,
        beforeSend: function beforeSend(_xhr) {},
        success: function success(_result, _status, _xhr) {},
        error: function error(_xhr, _status, _error) {},
        complete: function complete(_xhr, _status) {},
      },
      settings
    ); // 参数验证

    if (!_s.url || !_s.type || !_s.responseType) {
      // eslint-disable-next-line no-alert
      alert('参数有误');
      return;
    } // 创建XMLHttpRequest请求对象

    var xhr = new XMLHttpRequest(); // 请求开始回调函数

    xhr.addEventListener('loadstart', function (_e) {
      _s.beforeSend(xhr);
    }); // 请求成功回调函数

    xhr.addEventListener('load', function (e) {
      var status = xhr.status;

      if ((status >= 200 && status < 300) || status === 304) {
        var result = void 0;

        if (xhr.responseType === 'text') {
          result = xhr.responseText;
        } else if (xhr.responseType === 'document') {
          result = xhr.responseXML;
        } else {
          result = xhr.response;
        } // 注意:状态码200表示请求发送/接受成功,不表示业务处理成功

        _s.success(result, status, xhr);
      } else {
        _s.error(xhr, status, e);
      }
    }); // 请求结束

    xhr.addEventListener('loadend', function (_e) {
      _s.complete(xhr, xhr.status);
    }); // 请求出错

    xhr.addEventListener('error', function (e) {
      _s.error(xhr, xhr.status, e);
    }); // 请求超时

    xhr.addEventListener('timeout', function (e) {
      _s.error(xhr, 408, e);
    });
    var useUrlParam = false;

    var sType = _s.type.toUpperCase(); // 如果是"简单"请求,则把data参数组装在url上

    if (sType === 'GET' || sType === 'DELETE') {
      useUrlParam = true;
      _s.url += http.getUrlParam(_s.url, _s.data);
    }

    if (sType === 'POST' || sType === 'PUT') {
      _s.headers = __assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        _s.headers
      );
    } // 初始化请求

    xhr.open(_s.type, _s.url, _s.async); // 设置期望的返回数据类型

    xhr.responseType = _s.responseType;

    try {
      // 设置请求头
      // eslint-disable-next-line no-restricted-syntax
      for (
        var _b = __values(Object.keys(_s.headers)), _c = _b.next();
        !_c.done;
        _c = _b.next()
      ) {
        var key = _c.value; // @ts-ignore

        xhr.setRequestHeader(key, _s.headers[key]);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1,
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b['return'])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    } // 设置超时时间

    if (_s.async && _s.timeout) {
      xhr.timeout = _s.timeout;
    } // sysConsole({ type: 'log', label: 'http::ajax' }, _s);
    // 发送请求.如果是简单请求,请求参数应为null.否则,请求参数类型需要和请求头Content-Type对应

    xhr.send(useUrlParam ? null : http.getQueryData(_s.data));
  },
  ajaxPromise: function ajaxPromise(settings) {
    if (settings === void 0) {
      settings = {};
    }

    return new Promise(function (resolve, reject) {
      http.ajax(
        __assign(__assign({}, settings), {
          success: function success(res) {
            resolve(res);
          },
          error: function error(_xhr, _status, _error2) {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({
              xhr: _xhr,
              status: _status,
              detail: _error2,
            });
          },
        })
      );
    });
  },
  // 把参数data转为url查询参数
  getUrlParam: function getUrlParam(url, data) {
    if (!data) {
      return '';
    }

    var paramsStr = data instanceof Object ? http.getQueryString(data) : data;
    return url.indexOf('?') !== -1 ? paramsStr : '?' + paramsStr;
  },
  // 获取ajax请求参数
  getQueryData: function getQueryData(data) {
    if (!data) {
      return null;
    }

    if (typeof data === 'string') {
      return data;
    }

    if (data instanceof FormData) {
      return data;
    }

    return http.getQueryString(data);
  },
  // 把对象转为查询字符串
  getQueryString: function getQueryString(data) {
    var paramsArr = [];

    if (data instanceof Object) {
      Object.keys(data).forEach(function (key) {
        // @ts-ignore
        var val = data[key]; // todo 参数Date类型需要根据后台api酌情处理

        paramsArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
      });
    }

    return paramsArr.join('&');
  },
};

function createError(err, type) {
  if (type === void 0) {
    type = QNBleErrorType.UNKNOW_ERROR;
  }

  if (err instanceof QNBleError) {
    return err;
  }

  return new QNBleError(type, err);
}
/**
 * 记录错误的修饰器
 */

var log = function log(errorType) {
  return function logW(target, name, descriptor) { // eslint-disable-next-line @typescript-eslint/ban-types
    var oldValue = descriptor.value; // eslint-disable-next-line no-param-reassign

    descriptor.value = function f() {
      var _this = this;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      } // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

      var logHandler = this.log || function () {}; // eslint-disable-next-line max-len
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

      var errorHandler = this._onError || function () {};

      try {
        logHandler.call.apply(
          logHandler,
          __spread([this, 'Calling [' + name + '] with'], args)
        ); // eslint-disable-next-line max-len
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

        var callbackRes = oldValue.apply(this, args);

        if (isType(callbackRes) === 'promise') {
          return callbackRes['catch'](function (err) {
            var error = createError(err, errorType);
            logHandler.call(_this, 'Error occurred in [' + name + ']', err);
            errorHandler.call(_this, error);
            throw error;
          });
        }

        return callbackRes;
      } catch (err) {
        var error = createError(err, errorType);
        logHandler.call(this, 'Error occurred in [' + name + ']', err);
        errorHandler.call(this, error);
        throw error;
      }
    };

    return descriptor;
  };
};

var QNBle =
  /** @class */
  (function (_super) {
    __extends(QNBle, _super);

    function QNBle(params) {
      if (params === void 0) {
        params = {};
      }

      var _this = _super.call(this) || this;

      _this.version = version$1; // 蓝牙扫描状态，为true是正在扫描，false是未在扫描

      _this.bleScannerState = false; // 蓝牙启用状态

      _this.bleEnableState = false; // 协议实例管理，协议内部有QNBleDevice实例

      _this.protocolManager = new QNProtocolManager();
      _this.bleServer = null; // 提供原生蓝牙通信能力

      _this.bleNative = null;
      _this.config = QNBle.getStaticConfig(); // 操作配置数据

      _this.operation = QNBle.getStaticOperation();
      var bleNative = params.bleNative,
        config = params.config,
        operation = params.operation;

      _this.setBleNative(bleNative);

      _this.setConfig(config);

      _this.setOperation(operation); // 传递给QNBleNative的监听回调事件

      _this.bleNativeListener = {
        onNativeBluetoothEnableChange: function onNativeBluetoothEnableChange(
          available
        ) {
          _this.onBleEnableChange(available);
        },
        onNativeStartDiscoveryDevice: function onNativeStartDiscoveryDevice() {
          _this.onStartScan();
        },
        onNativeStopDiscoveryDevice: function onNativeStopDiscoveryDevice() {
          _this.onStopScan();
        },
        onNativeBleDeviceFound: function onNativeBleDeviceFound(nativeDevice) {
          _this.onDeviceFound(nativeDevice);
        },
        onNativeConnected: function onNativeConnected(deviceId) {
          _this.log('[QNBle]: 原生native方法 onNativeConnected', deviceId); // eslint-disable-next-line @typescript-eslint/no-floating-promises

          _this.onConnected(deviceId);
        },
        onNativeDisconnected: function onNativeDisconnected(deviceId) {
          if (_this.protocolManager.hasProtocol(deviceId)) {
            var bleDevice =
              _this.protocolManager.getProtocol(deviceId).bleDevice;

            _this.onDisconnected(bleDevice);
          } else {
            _this.onDisconnected(null);
          }
        },
        onNativeConnectOverTime: function onNativeConnectOverTime(deviceId) {
          var _a, _b; // this.dispatch('connect_overtime', deviceId);
          // 卸载协议，否则重连会有问题

          _this.unmountProtocol(deviceId);

          (_b = (_a = _this.bleEventListener).onConnectOverTime) === null ||
          _b === void 0
            ? void 0
            : _b.call(_a, {
                deviceId: deviceId,
              });
        },
        onNativeCharacteristicValueChange:
          function onNativeCharacteristicValueChange(payload) {
            _this.onCharacteristicValueChange(payload);
          },
        onError: function onError(err) {
          var error = createError(err, QNBleErrorType.BLE_NATIVE_ERROR);

          _this._onError(error);
        },
      };
      return _this;
    }

    QNBle.getStaticConfig = function () {
      return {
        appId: '',
        // 是否为第三方接口
        appType: 'xcx_third',
        algorithmUrl: 'https://open.yolanda.hk/open_api/calcs/measure',
        // 自动停止扫描，调用连接时，根据不同的设备类型，来决定是否停止扫描
        autoStopDiscovery: true,
        // 连接超时时间
        connectOverTime: 15e3,
        useSdk: false,
        sdkUrl:
          'https://third-api.yolanda.hk/open_api/third/get_business_models',
        useHerbalife: false,
        logger: console,
        // 协议
        protocols: QNBle.getProtocols(),
        // 是否可用on对同一事件添加多个处理方法
        multipleListenersEnable: false,
      };
    };

    QNBle.getStaticOperation = function () {
      return {
        // 操作类型，如设置wifi，称重
        action: QNBleAction.MEASURE_WEIGHT,
        // 用户信息
        user: null,
        // 单位
        unit: QNBleUnit.KG,
        // 其他配置
        config: {},
        // wifi账号
        wifiSsid: '',
        // wifi密码
        wifiPwd: '',
        // 数据服务地址
        dataServerUrl: undefined,
        // OTA升级地址
        otaServerUrl: undefined,
        // 加密秘钥
        encryptKey: undefined,
      };
    };
    /**
     * 获取默认协议构造函数
     * @public
     */

    QNBle.getProtocols = function () {
      return Object.values(QNBleProtocols);
    };

    QNBle.prototype.log = function () {
      var _a;

      var params = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }

      var timeString = logTimeString();

      if (this.config.logger) {
        (_a = this.config.logger).log.apply(_a, __spread([timeString], params));
      } else {
        // eslint-disable-next-line no-console
        console.log.apply(console, __spread([timeString], params));
      }
    };
    /**
     *
     */

    QNBle.prototype.setBleEventListener = function (listener) {
      this.bleEventListener = listener;

      if (this.bleNative) {
        this.bleNative.setListener(this.bleNativeListener);
      } // this.bleEventListener = {} as QNBleTypings.QNBleEventListener;
      // /**
      //  * @deprecated
      //  */
      // // eslint-disable-next-line no-restricted-syntax, guard-for-in
      // for (const method in listener) {
      //   // eslint-disable-next-line max-len
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      //   (this.bleEventListener as any)[method] = new Proxy(
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     (listener as any)[method],
      //     new QNEventHandler(method, this.eventManager),
      //   );
      // }
    }; // setBleEventListener(listener: Partial<QNBleTypings.QNBleEventListener>) {
    //   // this.bleEventListener = {} as QNBleTypings.QNBleEventListener;
    //   // for (let method in listener) {
    //   //   (this.bleEventListener as any)[method] = new Proxy(
    //   //     (listener as any)[method],
    //   //     new QNEventHandler(method, this.eventManager)
    //   //   );
    //   // }
    //   this.bleEventListener = listener as any;
    // }

    /**
     * 初始化操作
     * @param {QNBleNative} bleNative 原生蓝牙逻辑类实例
     * @param {QNBleConfig} [config={}] 其他配置
     * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
     */

    QNBle.prototype.init = function (bleNative, config) {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.setBleNative(bleNative);
              this.setConfig(config);
              this.log('开始进行初始化');
              return [
                4,
                /*yield*/
                this.bleNative.init(),
              ];

            case 1:
              res = _a.sent();
              this.bleEnableState = res.available;
              this.initReturnValue = res;
              if (!this.config.useSdk)
                return [
                  3, /*break*/
                  3,
                ]; // 使用SDK配置，请求获取SDK的配置信息

              return [
                4,
                /*yield*/
                this.fetchSdkConfig(),
              ];

            case 2:
              // 使用SDK配置，请求获取SDK的配置信息
              _a.sent();

              _a.label = 3;

            case 3:
              this._onReady(res);

              return [
                2,
                /*return*/
                this.initReturnValue,
              ];
          }
        });
      });
    };
    /**
     * 释放蓝牙相关资源，调用该方法后，再使用蓝牙时，需要重新调用init
     */

    QNBle.prototype.releaseBleSource = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.bleNative.release && this.bleNative.release();
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBle.prototype._onError = function (error) {
      // this.dispatch('error', error);
      this.onError(error);
    };
    /**
     * 可重写此方法来接收错误
     * @param {QNBleError | Error} err
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBle.prototype.onError = function (err) {
      // const error = err instanceof QNBleError
      //   ? err
      //   : new QNBleError(QNBleErrorType.UNKNOW_ERROR, err);
      // this.dispatch('error', error);
    };
    /**
     * 初始化成功后调用此方法
     */

    QNBle.prototype._onReady = function (payload) {
      // this.dispatch('ready', payload);
      this.onReady(payload);
    };
    /**
     * 可重写此方法来接收ready事件
     */
    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars

    QNBle.prototype.onReady = function (payload) {};
    /**
     * 判断蓝牙连接状态
     * @returns {Promise<boolean>}
     */

    QNBle.prototype.checkBleStatus = function () {
      // this.log('checkBleStatus', this.bleEnableState);
      if (!this.bleEnableState) {
        return Promise.reject(
          new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED)
        );
      }

      this.log('checkBleStatus成功');
      return Promise.resolve(true);
    };
    /**
     * 设置config
     * @param {QNBleConfig} config
     * @returns {void}
     */

    QNBle.prototype.setConfig = function (config) {
      if (config) {
        Object.assign(this.config, config);
      }

      if (this.bleNative) {
        this.bleNative.setConfig(this.config);
      }
    };
    /**
     * 设置原生蓝牙逻辑类
     * @param {QNBleNative} native 原生蓝牙逻辑类
     * @returns {void}
     */

    QNBle.prototype.setBleNative = function (_native) {
      this.bleNative = _native || this.bleNative;

      if (this.bleNative) {
        this.bleNative.setListener(this.bleNativeListener);
      }
    };
    /**
     * 设置操作类
     * @param {QNBleOperation} operation
     * @returns {void}
     */

    QNBle.prototype.setOperation = function (operation) {
      if (operation) {
        Object.assign(this.operation, operation);
      }

      this.operation.config = __assign(
        __assign({}, this.config),
        this.operation.config || {}
      );

      if (this.bleNative) {
        this.bleNative.setOperation(this.operation);
      }
    };
    /**
     * 获取蓝牙适配器状态
     */

    QNBle.prototype.getBluetoothAdapterState = function () {
      var _a;

      return (_a = this.bleNative) === null || _a === void 0
        ? void 0
        : _a.getBluetoothAdapterState();
    };
    /**
     * 开始扫描蓝牙设备，只返回轻牛的设备。遇到错误或蓝牙关闭则自动停止。
     * @returns {Promise<void>}
     */

    QNBle.prototype.startBleDeviceDiscovery = function (params) {
      if (params === void 0) {
        params = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleStatus(),
              ];

            case 1:
              _a.sent();

              if (!this.bleScannerState)
                return [
                  3, /*break*/
                  4,
                ]; // 已经启动了蓝牙扫描，则尝试停止扫描后，再启动扫描

              this.log('已经启动了蓝牙扫描，则尝试停止扫描后，再启动扫描');
              return [
                4,
                /*yield*/
                this.bleNative.stopScan(),
              ];

            case 2:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 3:
              _a.sent();

              _a.label = 4;

            case 4:
              return [
                4,
                /*yield*/
                this.bleNative.startScan(params),
              ];

            case 5:
              _a.sent();

              this.bleScannerState = true;
              this.onStartScan();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 停止扫描
     * @param {boolean} [force = false] - 是否强制停止
     */

    QNBle.prototype.stopBleDeviceDiscovery = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.bleScannerState)
                return [
                  3, /*break*/
                  2,
                ];
              return [
                4,
                /*yield*/
                this.bleNative.stopScan(),
              ];

            case 1:
              _a.sent();

              _a.label = 2;

            case 2:
              this.bleScannerState = false;
              this.onStopScan();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 创建蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {Partial<QNBleTypings.QNBleOperation>} [operation] - 操作参数
     * @returns {Promise<any>}
     */

    QNBle.prototype.createBleConnection = function (
      bleDevice,
      listener,
      operation
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var p, error_1, error_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleStatus(),
              ];

            case 1:
              _a.sent();

              if (!(this.config.useSdk && !this.config.sdkConfig))
                return [
                  3, /*break*/
                  3,
                ];
              return [
                4,
                /*yield*/
                this.fetchSdkConfig(),
              ];

            case 2:
              _a.sent();

              _a.label = 3;

            case 3:
              // 缓存正在连接的设备的operation
              // this.createConnectionOperationMap.set(bleDevice.deviceId, operation);
              // 判断是否已连接设备
              if (this.protocolManager.hasProtocol(bleDevice.deviceId)) {
                this.log(
                  '\u5DF2\u8FDE\u63A5(' +
                    bleDevice.deviceId +
                    ':' +
                    bleDevice.name +
                    ')\u8BBE\u5907\uFF0C\u4E0D\u518D\u8FDE\u63A5'
                ); // throw new QNBleError(QNBleErrorType.ALREADY_CONNECTED);
                // @ts-ignore

                return [
                  2,
                  /*return*/
                  Promise.resolve(
                    this.protocolManager.getProtocol(bleDevice.deviceId)
                  ),
                ];
              }

              p = this.prepareProtocol(bleDevice, operation, listener);

              if (!bleDevice.transferType) {
                throw new Error('协议缺少transferType');
              }

              if (!(bleDevice.transferType === QNBleTransferType.BLE))
                return [
                  3, /*break*/
                  9,
                ];
              if (!(this.config.autoStopDiscovery && this.bleScannerState))
                return [
                  3, /*break*/
                  6,
                ];
              this.log('连接蓝牙设备，自动停止扫描');
              return [
                4,
                /*yield*/
                this.stopBleDeviceDiscovery(),
              ];

            case 4:
              _a.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(200),
              ];

            case 5:
              _a.sent();

              _a.label = 6;

            case 6:
              _a.trys.push([6, 8, , 9]);

              return [
                4,
                /*yield*/
                this.bleNative.createBleConnection(
                  bleDevice,
                  this.config.connectOverTime
                ),
              ];

            case 7:
              _a.sent();

              this.log('[QNBle]:调用native类的createBleConnection方法成功');
              return [
                3, /*break*/
                9,
              ];

            case 8:
              error_1 = _a.sent(); // 卸载协议

              this.unmountProtocol(bleDevice.deviceId);
              throw error_1;

            case 9:
              if (!(bleDevice.transferType === QNBleTransferType.BROADCAST))
                return [
                  3, /*break*/
                  16,
                ];
              _a.label = 10;

            case 10:
              _a.trys.push([10, 13, , 14]);

              if (!!this.bleScannerState)
                return [
                  3, /*break*/
                  12,
                ];
              return [
                4,
                /*yield*/
                this.startBleDeviceDiscovery(),
              ];

            case 11:
              _a.sent();

              _a.label = 12;

            case 12:
              return [
                3, /*break*/
                14,
              ];

            case 13:
              error_2 = _a.sent(); // 卸载协议

              this.unmountProtocol(bleDevice.deviceId);
              throw error_2;

            case 14:
              // 这里就当做广播秤连接了
              return [
                4,
                /*yield*/
                this.onConnected(bleDevice.deviceId),
              ];

            case 15:
              // 这里就当做广播秤连接了
              _a.sent();

              _a.label = 16;

            case 16:
              // @ts-ignore
              return [
                2,
                /*return*/
                p,
              ];
          }
        });
      });
    };

    QNBle.prototype.prepareProtocol = function (
      bleDevice,
      operation,
      listener
    ) {
      this.log('[QNBle] prepareProtocol', bleDevice, operation); // 添加蓝牙协议实例

      var protocolImp = new bleDevice.Protocol({
        bleNative: this.bleNative,
        config: this.config,
        operation: __assign(__assign({}, this.operation), operation),
        bleDevice: bleDevice,
        listener: listener,
        eventManager: this.eventManager,
      });
      this.protocolManager.setProtocol(protocolImp);
      this.log('[QNBle] protocolManager', this.protocolManager);
      return protocolImp;
    };
    /**
     * 断开蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @returns {Promise<any>}
     */

    QNBle.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var protocolImp;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.protocolManager.hasProtocol(bleDevice.deviceId)) {
                return [
                  2,
                  /*return*/
                  bleDevice,
                ];
              }

              if (!(bleDevice.transferType === QNBleTransferType.BLE))
                return [
                  3, /*break*/
                  2,
                ]; // 在这里卸载协议吧，有时并不一定会收到 onDisconnectd 回调
              // this.unmountProtocol(bleDevice.deviceId);

              return [
                4,
                /*yield*/
                this.bleNative.closeBleConnection(bleDevice),
              ];

            case 1:
              // 在这里卸载协议吧，有时并不一定会收到 onDisconnectd 回调
              // this.unmountProtocol(bleDevice.deviceId);
              _a.sent();

              return [
                3, /*break*/
                4,
              ];

            case 2:
              if (!(bleDevice.transferType === QNBleTransferType.BROADCAST))
                return [
                  3, /*break*/
                  4,
                ];
              protocolImp = this.protocolManager.getProtocol(
                bleDevice.deviceId
              );
              return [
                4,
                /*yield*/
                protocolImp.close(),
              ];

            case 3:
              _a.sent(); // 这里直接当做断开连接

              this.onDisconnected(bleDevice);
              _a.label = 4;

            case 4:
              return [
                2,
                /*return*/
                bleDevice,
              ];
          }
        });
      });
    };
    /**
     * 停止蓝牙活动，如果正在蓝牙扫描，则停止蓝牙扫描。如果正在进行蓝牙连接，则断开连接
     * @returns {Promise<any>}
     */

    QNBle.prototype.stop = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, _b, protocolImp, e_1_1;

        var e_1, _c;

        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              this.log('在stop中停止扫描');
              return [
                4,
                /*yield*/
                this.stopBleDeviceDiscovery(),
              ];

            case 1:
              _d.sent();

              return [
                4,
                /*yield*/
                timeoutPromise(100),
              ];

            case 2:
              _d.sent();

              _d.label = 3;

            case 3:
              _d.trys.push([3, 9, 10, 11]);

              (_a = __values(this.protocolManager.values())), (_b = _a.next());
              _d.label = 4;

            case 4:
              if (!!_b.done)
                return [
                  3, /*break*/
                  8,
                ];
              protocolImp = _b.value;
              this.log(
                '\u5728stop\u4E2D\u65AD\u5F00(' +
                  protocolImp.bleDevice.deviceId +
                  '-' +
                  protocolImp.bleDevice.name +
                  ')\u8FDE\u63A5'
              ); // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                this.closeBleConnection(protocolImp.bleDevice),
              ];

            case 5:
              // eslint-disable-next-line no-await-in-loop
              _d.sent(); // eslint-disable-next-line no-await-in-loop

              return [
                4,
                /*yield*/
                timeoutPromise(100),
              ];

            case 6:
              // eslint-disable-next-line no-await-in-loop
              _d.sent();

              _d.label = 7;

            case 7:
              _b = _a.next();
              return [
                3, /*break*/
                4,
              ];

            case 8:
              return [
                3, /*break*/
                11,
              ];

            case 9:
              e_1_1 = _d.sent();
              e_1 = {
                error: e_1_1,
              };
              return [
                3, /*break*/
                11,
              ];

            case 10:
              try {
                if (_b && !_b.done && (_c = _a['return'])) _c.call(_a);
              } finally {
                if (e_1) throw e_1.error;
              }

              return [
                7,
                /*endfinally*/
              ];

            case 11:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBle.prototype.onBleEnableChange = function (available) {
      var _a, _b;

      this.log('[QNBle]: 蓝牙状态发生了变化', available); // this.createConnectionOperationMap.clear();

      this.bleEnableState = available; // this.dispatch('bluetooth_enable_change', available);

      (_b = (_a = this.bleEventListener).onBluetoothEnableChange) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a, {
            available: available,
          });
    };

    QNBle.prototype.onStartScan = function () {
      var _a, _b;

      this.log('启动了蓝牙扫描'); // this.dispatch('start_discovery_device');

      (_b = (_a = this.bleEventListener).onStartDiscoveryDevice) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a);
    };

    QNBle.prototype.onStopScan = function () {
      var _a, _b;

      this.log('停止了蓝牙扫描'); // this.dispatch('stop_discovery_device');

      (_b = (_a = this.bleEventListener).onStopDiscoveryDevice) === null ||
      _b === void 0
        ? void 0
        : _b.call(_a);
    };
    /**
     * 扫描到设备
     */

    QNBle.prototype.onDeviceFound = function (nativeDevice) {
      var _a, _b;

      this.log('QNBle:onDeviceFound', 'nativeDevice', nativeDevice);

      if (!this.bleEnableState) {
        this.log('当前已经停止扫描，还是收到了一些数据回调');
        return;
      }

      if (this.protocolManager.hasProtocol(nativeDevice.deviceId)) {
        var bleDevice = this.protocolManager.getProtocol(
          nativeDevice.deviceId
        ).bleDevice; // 如果广播秤连接了

        if (bleDevice.transferType === QNBleTransferType.BROADCAST) {
          // 将数据给广播协议解析
          this.onCharacteristicValueChange({
            deviceId: nativeDevice.deviceId,
            serviceId: '',
            characteristicId: '',
            data: nativeDevice.manufacturer,
          }); // 不再处理其他信息

          return;
        }
      }

      var ProtocolToUse = this.getWhatProtocolToApply(nativeDevice);

      if (ProtocolToUse) {
        var targetDevice = new QNBleDevice(nativeDevice, ProtocolToUse);
        this.log('QNBle:onDeviceFound', '转换过后的 QNBleDevice', targetDevice);
        (_b = (_a = this.bleEventListener).onBleDeviceFound) === null ||
        _b === void 0
          ? void 0
          : _b.call(_a, targetDevice);
      }
    };
    /**
     * 蓝牙连接成功的回调
     * @param {QNBleDevice} bleDevice
     */

    QNBle.prototype.onConnected = function (deviceId) {
      var _a, _b, _c;

      return __awaiter(this, void 0, void 0, function () {
        var protocolImp, err_1;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              // 蓝牙秤的连接处理
              this.log('设备连接成功', deviceId);
              protocolImp = this.protocolManager.getProtocol(deviceId);
              return [
                4,
                /*yield*/
                (_a = this.protocolInterceptor) === null || _a === void 0
                  ? void 0
                  : _a.call(this, {
                      bleNative: this.bleNative,
                      ctx: this,
                      protocolImp: protocolImp,
                    }),
              ];

            case 1:
              // 替换协议实例
              protocolImp = _d.sent() || protocolImp;
              _d.label = 2;

            case 2:
              _d.trys.push([2, 5, , 6]);

              if (!protocolImp)
                return [
                  3, /*break*/
                  4,
                ];
              this.protocolManager.setProtocol(protocolImp);
              (_c = (_b = this.bleEventListener).onConnected) === null ||
              _c === void 0
                ? void 0
                : _c.call(_b, {
                    deviceId: deviceId,
                  });
              return [
                4,
                /*yield*/
                protocolImp.prepare(),
              ];

            case 3:
              _d.sent();

              _d.label = 4;

            case 4:
              return [
                3, /*break*/
                6,
              ];

            case 5:
              err_1 = _d.sent();

              this._onError(new QNBleError(QNBleErrorType.UNKNOW_ERROR, err_1));

              return [
                3, /*break*/
                6,
              ];

            case 6:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 蓝牙连接断开的回调
     * @param {QNBleDevice} bleDevice
     */

    QNBle.prototype.onDisconnected = function (bleDevice) {
      var _a, _b, _c, _d;

      this.log('设备已断开', bleDevice);

      if (bleDevice) {
        // this.dispatch('disconnected', bleDevice);
        // 卸载协议
        this.unmountProtocol(bleDevice.deviceId);
        (_b = (_a = this.bleEventListener).onDisconnected) === null ||
        _b === void 0
          ? void 0
          : _b.call(_a, {
              deviceId: bleDevice.deviceId,
            });
      } else {
        (_d = (_c = this.bleEventListener).onDisconnected) === null ||
        _d === void 0
          ? void 0
          : _d.call(_c, {
              deviceId: '',
            });
      }
    };
    /**
     * 秤的特征值变化监听回调
     * @param {QNBleTypings.TypedCharacteristicValueChangePayload} payload
     */

    QNBle.prototype.onCharacteristicValueChange = function (payload) {
      if (this.protocolManager.hasProtocol(payload.deviceId)) {
        var protocolImp = this.protocolManager.getProtocol(payload.deviceId);
        protocolImp.onGetData(payload)['catch'](function (err) {
          throw err;
        });
      } else {
        this.log('收到非当前连接设备数据', payload.deviceId);
      }
    };
    /**
     * 获取设备使用的协议
     * @param {QNBleNativeDevice} nativeDevice
     * @returns {typeof QNBleBaseScaleProtocol}
     */

    QNBle.prototype.getWhatProtocolToApply = function (nativeDevice) {
      return this.config.protocols.find(function (protocol) {
        return protocol.bleProfile.isTargetDevice(nativeDevice);
      });
    };

    QNBle.prototype.sendHttpRequest = function (request) {
      var _this = this;

      this.log('[QNBle::sendHttpRequest]');
      return http
        .ajaxPromise({
          url: request.url,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: request.data,
          type: request.method || 'GET',
          responseType: request.dataType || 'json',
        })
        .then(function (res) {
          _this.log('网络请求成功', request, res, _typeof(res)); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return typeof res === 'string' ? JSON.parse(res) : res;
        })
        ['catch'](function (err) {
          _this.log('请求失败', err);

          throw err;
        });
    };
    /**
     * 获取服务器配置
     */

    QNBle.prototype.fetchSdkConfig = function () {
      return __awaiter(this, void 0, void 0, function () {
        var appId, params, request, httpRequestHandler, res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              appId = this.config.appId;
              params = {
                app_id: appId,
              };
              request = {
                data: params,
                method: 'GET',
                url: this.config.sdkUrl,
              };
              this.log('请求SDK配置', request);
              httpRequestHandler = this.bleNative.useDefaultHttpRequest
                ? this.sendHttpRequest.bind(this)
                : this.bleNative.sendHttpRequest.bind(this.bleNative);
              return [
                4,
                /*yield*/
                httpRequestHandler(request),
              ];

            case 1:
              res = _a.sent();

              if ('' + res.code !== '20000') {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw res;
              }

              this.config.sdkConfig = res.data;
              this.log('SDK配置：', res.data);
              this.setConfig();
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 调用设备所使用协议的实例方法
     * @param {string} deviceId
     * @param {string} fn 协议实例的方法名
     * @param {any[]} args 方法所需要的参数。实例方法书写约定最后一个参数应该是一个回调函数
     * @returns 返回协议调用的值
     */

    QNBle.prototype.callProtocolMethod = function (deviceId, fn, args) {
      var _a;

      if (args === void 0) {
        args = [];
      } // eslint-disable-next-line max-len

      var protocolImp = this.protocolManager.getProtocol(deviceId); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

      return (_a =
        protocolImp === null || protocolImp === void 0
          ? void 0
          : protocolImp[fn]) === null || _a === void 0
        ? void 0
        : _a.call.apply(_a, __spread([protocolImp], args));
    };
    /**
     * 异步调用设备所使用协议的实例方法
     * @param {string} deviceId
     * @param {string} fn 协议实例的方法名
     * @param {any[]} args 方法所需要的参数。实例方法书写约定最后一个参数应该是一个回调函数
     * @returns {Promise<any>}
     */

    QNBle.prototype.callProtocolMethodAsync = function (deviceId, fn, args) {
      return __awaiter(this, void 0, void 0, function () {
        var protocolImp, result, error_3;

        var _a;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              protocolImp = this.protocolManager.getProtocol(deviceId);
              if (!(protocolImp && fn in protocolImp))
                return [
                  3, /*break*/
                  4,
                ];
              _b.label = 1;

            case 1:
              _b.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                (_a = protocolImp[fn]).call.apply(
                  _a,
                  __spread([protocolImp], args)
                ),
              ];

            case 2:
              result = _b.sent();
              return [
                2,
                /*return*/
                result,
              ];

            case 3:
              error_3 = _b.sent();
              return [
                2,
                /*return*/
                Promise.reject(error_3),
              ];

            case 4:
              return [
                2,
                /*return*/
                Promise.reject(
                  new Error(
                    'protocol method ' +
                      fn +
                      ' on deviceId: ' +
                      deviceId +
                      ' not exist'
                  )
                ),
              ];
          }
        });
      });
    };
    /**
     * 卸载协议
     * @param {string} deviceId
     */

    QNBle.prototype.unmountProtocol = function (deviceId) {
      return this.protocolManager.removeProtocol(deviceId);
    };

    var _a;

    __decorate(
      [
        log(QNBleErrorType.INIT_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [QNBleNative, Object]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'init',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.START_BLEDEVICE_DISCOVERY_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [Object]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'startBleDeviceDiscovery',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.STOP_BLEDEVICE_DISCOVERY_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'stopBleDeviceDiscovery',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.CREATE_CONNECTION_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [
          QNBleDevice,
          typeof (_a = typeof T !== 'undefined' && T) === 'function'
            ? _a
            : Object,
          Object,
        ]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'createBleConnection',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.CLOSE_CONNECTION_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', [QNBleDevice]),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'closeBleConnection',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.STOP_BLE_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'stop',
      null
    );

    __decorate(
      [
        log(QNBleErrorType.FETCH_SDK_INFO_FAILED),
        __metadata('design:type', Function),
        __metadata('design:paramtypes', []),
        __metadata('design:returntype', Promise),
      ],
      QNBle.prototype,
      'fetchSdkConfig',
      null
    );

    return QNBle;
  })(QNEventSystem);

var QNBleNativeDevice =
  /** @class */
  (function () {
    function QNBleNativeDevice(payload) {
      this.deviceId = payload.deviceId;
      this.bluetoothName = payload.bluetoothName;
      this.mac = payload.mac || payload.deviceId;
      this.manufacturer = payload.manufacturer;
      this.services = payload.services;
      this.rssi = payload.rssi;
      this.device = payload.device;
    }

    return QNBleNativeDevice;
  })();

var QNBleNativeMP =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeMP, _super);

    function QNBleNativeMP(mpwx) {
      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeMP'; // 是否使用默认的http请求方法
      // 例如像小程序就必需使用小程序的接口请求api，那么就需要将此值设置为false，并实现 sendHttpRequest 方法

      _this.useDefaultHttpRequest = false; // 蓝牙状态

      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.mpwx = null; //微信小程序的wx对象，用来创建bleServer

      _this.inited = false;
      _this.mpwx = mpwx;
      return _this;
    }
    /**
     * 初始化
     * @returns {Promise<QNBleTypings.InitFuncReturnValue>}
     */

    QNBleNativeMP.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, ret, e_1;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 3, , 4]);

              wx.onBluetoothDeviceFound(this.onDeviceFound.bind(this));
              wx.onBLEConnectionStateChange(
                this.onDeviceConnectStateChange.bind(this)
              );
              wx.onBLECharacteristicValueChange(
                this.onDeviceValueChange.bind(this)
              );
              wx.onBluetoothAdapterStateChange(
                this.onBluetoothAdapterStateChange.bind(this)
              ); // 为了解决小程序中切换页面时并未及时关闭连接（因为这是异步的）
              // this.log('在[QNBleNativeMP::init]中尝试先关闭蓝牙适配器');
              // await this.closeBluetoothAdapter();

              return [
                4,
                /*yield*/
                this.openBluetoothAdapter(),
              ];

            case 1:
              // 为了解决小程序中切换页面时并未及时关闭连接（因为这是异步的）
              // this.log('在[QNBleNativeMP::init]中尝试先关闭蓝牙适配器');
              // await this.closeBluetoothAdapter();
              _b.sent(); // await this.checkBleAvailable();

              _a = this;
              return [
                4,
                /*yield*/
                this.getBluetoothAdapterState(),
              ];

            case 2:
              // await this.checkBleAvailable();
              _a.bleState = _b.sent();
              ret = __assign(
                {
                  bleEnableState: this.bleState.available,
                },
                this.bleState
              );
              this.inited = true;
              return [
                2,
                /*return*/
                ret,
              ];

            case 3:
              e_1 = _b.sent();
              this.inited = true;
              console.log('出现错误', e_1);
              return [
                3, /*break*/
                4,
              ];

            case 4:
              return [
                2,
                /*return*/
                {
                  bleEnableState: false,
                  available: false,
                  discovering: false,
                },
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.release = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          wx.offBluetoothDeviceFound(this.onDeviceFound.bind(this));
          wx.offBLEConnectionStateChange(
            this.onDeviceConnectStateChange.bind(this)
          );
          wx.offBLECharacteristicValueChange(
            this.onDeviceValueChange.bind(this)
          );
          wx.offBluetoothAdapterStateChange(
            this.onBluetoothAdapterStateChange.bind(this)
          );
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBleNativeMP.prototype.getBluetoothAdapterState = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, error_1, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('获取蓝牙适配器状态');
              return [
                4,
                /*yield*/
                wxPromise(wx.getBluetoothAdapterState)(),
              ];

            case 1:
              res = _a.sent();
              return [
                2,
                /*return*/
                res,
              ];

            case 2:
              error_1 = _a.sent();
              err = new QNBleError(
                QNBleErrorType.GET_BLE_STATE_FAILED,
                error_1
              );
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.openBluetoothAdapter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var error_2, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('开启蓝牙适配器');
              return [
                4,
                /*yield*/
                wxPromise(wx.openBluetoothAdapter)({
                  mode: 'central',
                }),
              ];

            case 1:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 2:
              error_2 = _a.sent();
              err = new QNBleError(
                QNBleErrorType.OPEN_BLE_ADAPTER_FAILED,
                error_2
              );
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMP.prototype.closeBluetoothAdapter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var error_3, err;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);

              this.log('关闭蓝牙适配器');
              return [
                4,
                /*yield*/
                wxPromise(wx.closeBluetoothAdapter)(),
              ];

            case 1:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 2:
              error_3 = _a.sent();
              err = new QNBleError(
                QNBleErrorType.CLOSE_BLE_ADAPTER_FAILED,
                error_3
              );
              throw err;

            case 3:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 判断当前蓝牙适配器是否可用
     */

    QNBleNativeMP.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, err;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this;
              return [
                4,
                /*yield*/
                this.getBluetoothAdapterState(),
              ];

            case 1:
              _a.bleState = _b.sent();

              if (!this.bleState.available) {
                err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

                return [
                  2,
                  /*return*/
                  Promise.reject(err),
                ];
              }

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    };
    /**
     * 开始扫描
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.startScan = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          if (this.bleState.discovering) {
            this.log('当前正在扫描');
            return [
              2,
              /*return*/
              Promise.resolve(this.bleState),
            ];
          }

          return [
            2,
            /*return*/
            wxPromise(wx.startBluetoothDevicesDiscovery)({
              allowDuplicatesKey: true,
            }),
          ];
        });
      });
    };
    /**
     * 停止扫描
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.stopScan = function () {
      this.log('调用停止扫描');
      return wxPromise(wx.stopBluetoothDevicesDiscovery)();
    };
    /**
     * 创建蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {number} connectOverTime - 连接超时毫秒数
     */

    QNBleNativeMP.prototype.createBleConnection = function (
      bleDevice,
      connectOverTime
    ) {
      if (connectOverTime === void 0) {
        connectOverTime = 15e3;
      }

      return __awaiter(this, void 0, void 0, function () {
        var deviceId, err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              // await this.checkBleAvailable();
              this.log('调用原生的连接方法', bleDevice);
              deviceId = bleDevice.deviceId;
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

              return [
                4,
                /*yield*/
                wxPromise(wx.createBLEConnection)({
                  deviceId: deviceId,
                  timeout: connectOverTime,
                }),
              ];

            case 2:
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              _a.sent();

              return [
                3, /*break*/
                4,
              ];

            case 3:
              err_1 = _a.sent();
              error = err_1; // 0为成功，-1为已连接

              if (
                hasOwnProperty(error, 'code') &&
                [0, -1].includes(error.code)
              );
              else if (error.code === 10012) {
                // 连接超时
                this.onConnectOverTime(deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [
                3, /*break*/
                4,
              ];

            case 4:
              return [
                2,
                /*return*/
                bleDevice,
              ];
          }
        });
      });
    };
    /**
     * 关闭蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {Promise<void>}
     */

    QNBleNativeMP.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          try {
            return [
              2,
              /*return*/
              wxPromise(wx.closeBLEConnection)({
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0为成功，10006为已断开

            if (
              hasOwnProperty(error, 'code') &&
              [0, 10006].includes(error.code)
            );
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };
    /**
     * 获取设备下的所有服务
     * @param {string} deviceId
     * @returns {Promise<any[]>}
     */

    QNBleNativeMP.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var services;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('findService', deviceId);
              return [
                4,
                /*yield*/
                wxPromise(wx.getBLEDeviceServices)({
                  deviceId: deviceId,
                }),
              ];

            case 1:
              services = _a.sent().services; // eslint-disable-next-line @typescript-eslint/no-unsafe-return

              return [
                2,
                /*return*/
                services.map(function (service) {
                  Object.assign(service, {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    uuid: service.uuid.toUpperCase(),
                  }); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

                  return service.uuid;
                }),
              ];
          }
        });
      });
    };
    /**
     * 获取指定服务器的特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.findBleDeviceCharacteristics = function (
      deviceId,
      serviceId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          this.log(
            '[findBleDeviceCharacteristics]',
            'deviceId',
            deviceId,
            'serviceId',
            serviceId
          ); // await this.checkBleAvailable();

          return [
            2,
            /*return*/
            wxPromise(wx.getBLEDeviceCharacteristics)({
              deviceId: deviceId,
              serviceId: serviceId,
            }),
          ];
        });
      });
    };
    /**
     * 使能特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.enableNotify = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          this.log('使能特征值', deviceId, serviceId, characteristicId);
          return [
            2,
            /*return*/
            wxPromise(wx.notifyBLECharacteristicValueChange)({
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
              state: true,
            }),
          ];
        });
      });
    };
    /**
     * 读取特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMP.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          this.log('读取特征值', deviceId, serviceId, characteristicId);
          return [
            2,
            /*return*/
            wxPromise(wx.readBLECharacteristicValue)({
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * 写入特征值数据
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeMP.prototype.writeData = function (
      deviceId,
      serviceId,
      characteristicId,
      cmdData
    ) {
      // this.log('写入', characteristicId.substr(4, 4), ':', formatArrayToHex(cmdData));
      var ab = new ArrayBuffer(cmdData.length);
      var dv = new DataView(ab);
      cmdData.forEach(function (value, index) {
        dv.setUint8(index, value);
      });
      return wxPromise(wx.writeBLECharacteristicValue)({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: ab,
      });
    };

    QNBleNativeMP.prototype.onBluetoothAdapterStateChange = function (
      newBleState
    ) {
      // 蓝牙状态已变化
      if (this.inited && this.bleState.available !== newBleState.available) {
        this.listener.onNativeBluetoothEnableChange(newBleState.available);
      } // NOTE 没有必要的回调，这里由startDiscovery和stopDiscovery去维护状态
      // if (this.bleState.discovering !== newBleState.discovering) {
      //   // 扫描状态变化，回调开始扫描和停止扫描
      //   if (newBleState.discovering) {
      //     this.listener.onNativeStartDiscoveryDevice();
      //   } else {
      //     this.listener.onNativeStopDiscoveryDevice();
      //   }
      // }

      this.bleState = newBleState;
    };
    /**
     * 蓝牙设备的回调
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @returns {void}
     */

    QNBleNativeMP.prototype.onDeviceFound = function (payload) {
      var _this = this;

      payload.devices.forEach(function (device) {
        var advertisData = device.advertisData;

        if (advertisData == null) {
          return;
        }

        var manufacturer = ab2Array(advertisData);
        var d = {
          deviceId: device.deviceId,
          bluetoothName: device.localName,
          manufacturer: manufacturer,
          rssi: device.RSSI,
          device: device,
          services: device.advertisServiceUUIDs,
        };

        _this.listener.onNativeBleDeviceFound(new QNBleNativeDevice(d));
      });
    }; // 蓝牙连接状态变化了

    QNBleNativeMP.prototype.onDeviceConnectStateChange = function (res) {
      if (res.connected) {
        this.listener.onNativeConnected(res.deviceId);
      } else {
        this.listener.onNativeDisconnected(res.deviceId);
      }
    }; // 连接超时

    QNBleNativeMP.prototype.onConnectOverTime = function (deviceId) {
      this.listener.onNativeConnectOverTime(deviceId);
    };

    QNBleNativeMP.prototype.onDeviceValueChange = function (device) {
      var deviceId = device.deviceId,
        value = device.value,
        serviceId = device.serviceId,
        characteristicId = device.characteristicId;
      var data = ab2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };
    /**
     * 创建蓝牙服务端，用作发射蓝牙广播
     */

    QNBleNativeMP.prototype.createBleServer = function () {
      return __awaiter(this, void 0, void 0, function () {
        var server;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('创建原生蓝牙服务端', this.mpwx != null);
              if (!(this.mpwx != null))
                return [
                  3, /*break*/
                  2,
                ];
              return [
                4,
                /*yield*/
                wxPromise(this.mpwx.createBLEPeripheralServer)(),
              ];

            case 1:
              server = _a.sent().server;
              return [
                2,
                /*return*/
                server,
              ];

            case 2:
              return [
                2,
                /*return*/
                null,
              ];
          }
        });
      });
    };
    /**
     * 发送广播，默认只在service data进行广播
     * @param {QNBleTypings.QNBleServer} server
     * @param {number[]} data
     */

    QNBleNativeMP.prototype.doAdvertising = function (server, data) {
      var uuids = [];
      var h = [];
      data.forEach(function (item) {
        h.push(number2hex(item));
      });
      var uidformat = 'XXXX-XX-XX-XX-XXXXXX';
      var uidFormatIndex = 0;
      var uid = uidformat.replace(/X/g, function () {
        var s = h[uidFormatIndex];
        uidFormatIndex += 1;
        return s;
      });
      uuids.push(uid);
      this.log('发送广播', formatArrayToHex(data), uuids);
      return server.startAdvertising({
        advertiseRequest: {
          connectable: false,
          serviceUuids: uuids,
        },
        // 制定高功率发送
        powerLevel: 'high',
      });
    };
    /**
     * 停止广播
     * @param {QNBleTypings.QNBleServer} server
     */

    QNBleNativeMP.prototype.stopAdvertising = function (server) {
      this.log('停止蓝牙广播');
      return server.stopAdvertising();
    };
    /**
     * 关闭蓝牙服务
     * @param {QNBleTypings.QNBleServer)} server
     */

    QNBleNativeMP.prototype.closeServer = function (server) {
      var _this = this;

      return server
        .stopAdvertising()
        .then(function () {
          return server.close();
        })
        .then(function () {
          _this.log('关闭蓝牙服务');
        });
    };

    QNBleNativeMP.prototype.sendHttpRequest = function (request) {
      var _this = this;

      return wxPromise(wx.request)({
        url: request.url,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: request.data,
        method: request.method,
        dataType: request.dataType || 'json',
      })
        .then(function (res) {
          _this.log('内部请求成功', request, res); // eslint-disable-next-line @typescript-eslint/no-unsafe-return

          return res.data;
        })
        ['catch'](function (err) {
          _this.log('请求失败', err);

          throw err;
        });
    };

    return QNBleNativeMP;
  })(QNBleNativeCommonExtends);

var genereteCallMethods = function genereteCallMethods(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return new Promise(function (resolve, reject) {
        var _a;

        if (jsbridge[method]) {
          console.log('\u8C03\u7528\u65B9\u6CD5: ' + method);
          (_a = jsbridge[method]) === null || _a === void 0
            ? void 0
            : _a.call(
                jsbridge,
                data,
                function (res) {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  var result = typeof res === 'string' ? JSON.parse(res) : res; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

                  if (
                    (result === null || result === void 0
                      ? void 0
                      : result.error_code) &&
                    (result === null || result === void 0
                      ? void 0
                      : result.error_code) !== 0
                  ) {
                    reject(result);
                  } else {
                    resolve(result);
                  }
                },
                function (err) {
                  reject(typeof err === 'string' ? JSON.parse(err) : err);
                }
              );
        } else {
          reject();
        }
      });
    };
  }

  return function (method, data) {
    if (data === void 0) {
      data = {};
    }

    return new Promise(function (resolve, reject) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
      jsbridge.callHandler(method, data, function (res) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        var code = res === null || res === void 0 ? void 0 : res.error_code;

        if (code !== 0) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          reject(res.error_msg);
        } else {
          resolve(res);
        }
      });
    });
  };
};

var generateRegisterListener = function generateRegisterListener(
  isAndroid,
  jsbridge
) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, fn) {
      var _a;

      console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
      (_a =
        jsbridge === null || jsbridge === void 0
          ? void 0
          : jsbridge[method]) === null || _a === void 0
        ? void 0
        : _a.call(jsbridge, {
            fn: fn,
          });
    };
  }

  return function (method, fn) {
    jsbridge.registerHandler(method, fn);
  };
};

var QNBleNativeQN =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeQN, _super);

    function QNBleNativeQN(jsbridge, _a) {
      var isAndroid = (_a === void 0 ? {} : _a).isAndroid;

      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeQN'; // 用作发现服务的缓存

      _this.characteristicResovled = new Map();
      _this.deviceServiceCached = new Map(); // 蓝牙状态

      _this.bleState = {
        available: false,
        discovering: false,
      };
      console.log(
        '\u5F53\u524D\u84DD\u7259\u5E93\u73AF\u5883\u4E3A: ' +
          (isAndroid ? '安卓' : 'ios')
      );
      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.jsbridge = jsbridge;
      _this.callMethod = genereteCallMethods(isAndroid, jsbridge);
      _this.registerListener = generateRegisterListener(isAndroid, jsbridge);
      return _this;
    }
    /**
     * 调用js原生方法
     * @param method 方法名
     * @param data 方法参数
     */

    QNBleNativeQN.prototype.callMethod = function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return Promise.resolve([method, data]);
    };

    QNBleNativeQN.prototype.getBluetoothAdapterState = function () {
      throw new Error('getBluetoothAdapterState Method not implemented.');
    };

    QNBleNativeQN.prototype.openBluetoothAdapter = function () {
      throw new Error('openBluetoothAdapterMethod not implemented.');
    };

    QNBleNativeQN.prototype.closeBluetoothAdapter = function () {
      throw new Error('closeBluetoothAdapter Method not implemented.');
    };

    QNBleNativeQN.prototype.findBleDeviceCharacteristics = function (
      deviceId,
      serviceId
    ) {
      return Promise.resolve();
    };

    QNBleNativeQN.prototype.sendHttpRequest = function (request) {
      throw new Error('sendHttpRequest Method not implemented.');
    };

    QNBleNativeQN.prototype.createBleServer = function () {
      throw new Error('createBleServer Method not implemented.');
    };

    QNBleNativeQN.prototype.doAdvertising = function (server, data) {
      throw new Error('doAdvertising Method not implemented.');
    };

    QNBleNativeQN.prototype.stopAdvertising = function (server) {
      throw new Error('stopAdvertising Method not implemented.');
    };

    QNBleNativeQN.prototype.closeServer = function (server) {
      throw new Error('closeServer Method not implemented.');
    };
    /**
     * 初始化并返回蓝牙是否正常
     */

    QNBleNativeQN.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('进行初始化');
              this.registerListener(
                'onBluetoothDeviceFound',
                this.onDeviceFound.bind(this)
              );
              this.registerListener(
                'onBLEConnectionStateChange',
                this.onDeviceConnectStateChange.bind(this)
              );
              this.registerListener(
                'onBLECharacteristicValueChange',
                this.onDeviceValueChange.bind(this)
              );
              this.registerListener(
                'onBluetoothAdapterStateChange',
                this.onBluetoothAdapterStateChange.bind(this)
              );
              this.registerListener(
                'onBLEDeviceCharacteristics',
                this.onBLEDeviceCharacteristics.bind(this)
              );
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                this.callMethod('getBluetoothAdapterState'),
              ];

            case 2:
              res = _a.sent();
              this.log('获取到蓝牙状态', res);
              return [
                2,
                /*return*/
                {
                  bleEnableState: res.available,
                  available: res.available,
                  discovering: false,
                },
              ];

            case 3:
              e_1 = _a.sent();
              return [
                2,
                /*return*/
                {
                  bleEnableState: true,
                  available: false,
                  discovering: false,
                },
              ];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 判断当前蓝牙适配器是否可用
     */

    QNBleNativeQN.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _a, err;

        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = this;
              return [
                4,
                /*yield*/
                this.callMethod('getBluetoothAdapterState'),
              ];

            case 1:
              _a.bleState = _b.sent();

              if (!this.bleState.available) {
                err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

                return [
                  2,
                  /*return*/
                  Promise.reject(err),
                ];
              }

              return [
                2,
                /*return*/
                Promise.resolve(),
              ];
          }
        });
      });
    }; // 启动蓝牙扫描

    QNBleNativeQN.prototype.startScan = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              if (this.bleState.discovering) {
                this.log('当前正在扫描');
                return [
                  2,
                  /*return*/
                ];
              }

              return [
                2,
                /*return*/
                this.callMethod('startBluetoothDevicesDiscovery'),
              ];
          }
        });
      });
    }; // 停止扫描

    QNBleNativeQN.prototype.stopScan = function () {
      this.log('调用了停止扫描');
      return this.callMethod('stopBluetoothDevicesDiscovery');
    };
    /**
     * 创建蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {number} connectOverTime - 连接超时毫秒数
     */

    QNBleNativeQN.prototype.createBleConnection = function (
      bleDevice,
      connectOverTime
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              this.log('调用原生的连接方法', bleDevice);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4, , 5]);

              return [
                4,
                /*yield*/
                this.callMethod('createBLEConnection', {
                  deviceId: bleDevice.deviceId,
                }),
              ];

            case 3:
              _a.sent();

              return [
                3, /*break*/
                5,
              ];

            case 4:
              err_1 = _a.sent();
              this.log('原生连接失败', err_1);
              error = err_1; // 0为成功，-1为已连接

              if (
                hasOwnProperty(error, 'code') &&
                [0, -1].includes(error.code)
              );
              else if (error.code === 10012) {
                // 连接超时
                this.listener.onNativeConnectOverTime(bleDevice.deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [
                3, /*break*/
                5,
              ];

            case 5:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 关闭蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {Promise<void>}
     */

    QNBleNativeQN.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          try {
            return [
              2,
              /*return*/
              this.callMethod('closeBLEConnection', {
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0为成功，10006为已断开

            if (
              hasOwnProperty(error, 'code') &&
              [0, 10006].includes(error.code)
            );
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };

    QNBleNativeQN.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          // this.log("正在发现服务")
          if (this.deviceServiceCached.get(deviceId) !== undefined) {
            return [
              2,
              /*return*/
              this.deviceServiceCached.get(deviceId),
            ];
          }

          return [
            2,
            /*return*/
            new Promise(function (resolve) {
              _this.characteristicResovled.set(deviceId, resolve);
            }),
          ];
        });
      });
    };
    /**
     * 使能特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeQN.prototype.enableNotify = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('使能特征值', deviceId, serviceId, characteristicId);
              _a.label = 1;

            case 1:
              _a.trys.push([1, 3, , 4]);

              return [
                4,
                /*yield*/
                this.callMethod('notifyBLECharacteristicValueChange', {
                  deviceId: deviceId,
                  serviceId: serviceId,
                  characteristicId: characteristicId,
                  state: true,
                }),
              ];

            case 2:
              return [
                2,
                /*return*/
                _a.sent(),
              ];

            case 3:
              e_2 = _a.sent();
              console.log('出现错误了', e_2);
              return [
                3, /*break*/
                4,
              ];

            case 4:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 读取特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeQN.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (characteristicId.length === 4) {
            this.log('读取', characteristicId);
          } else {
            this.log('读取', characteristicId.substr(4, 4));
          }

          return [
            2,
            /*return*/
            this.callMethod('readBLECharacteristicValue', {
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * 写入特征值数据
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeQN.prototype.writeData = function (
      deviceId,
      serviceId,
      characteristicId,
      cmdData
    ) {
      var arry = new Array();
      cmdData.forEach(function (it) {
        arry.push(it);
      });
      var cmdStr = array2hex(arry);
      return this.callMethod('writeBLECharacteristicValue', {
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: cmdStr,
      });
    };

    QNBleNativeQN.prototype.onBluetoothAdapterStateChange = function (
      newBleState
    ) {
      this.listener.onNativeBluetoothEnableChange(newBleState.available); // NOTE 没有必要的回调，这里由startDiscovery和stopDiscovery去维护状态
      // if (this.bleState.discovering !== newBleState.discovering) {
      //   // 扫描状态变化，回调开始扫描和停止扫描
      //   if (newBleState.discovering) {
      //     this.listener.onNativeStartDiscoveryDevice();
      //   } else {
      //     this.listener.onNativeStopDiscoveryDevice();
      //   }
      // }

      this.bleState = newBleState;
    };
    /**
     * 连接发现所有服务后
     * @param data
     */

    QNBleNativeQN.prototype.onBLEDeviceCharacteristics = function (data) {
      var deviceId = data.deviceId,
        characteristics = data.characteristics; // this.log("收到onBLEDeviceCharacteristics", data, this.characteristicResovled.get(deviceId))

      this.deviceServiceCached.set(deviceId, characteristics);

      if (this.characteristicResovled.get(deviceId) != undefined) {
        this.characteristicResovled.get(deviceId)(characteristics);
        this.characteristicResovled['delete'](deviceId);
      }
    };
    /**
     * 蓝牙设备的回调
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @returns {void}
     */

    QNBleNativeQN.prototype.onDeviceFound = function (payload) {
      var name = payload.name,
        deviceId = payload.deviceId,
        rssi = payload.rssi,
        advertisData = payload.advertisData,
        advertisServiceUUIDs = payload.advertisServiceUUIDs;

      if (!advertisData) {
        return;
      }

      var item = {
        deviceId: deviceId,
        bluetoothName: name,
        manufacturer: hex2Array(advertisData),
        rssi: rssi,
        device: payload,
        services: advertisServiceUUIDs,
      };
      this.listener.onNativeBleDeviceFound(new QNBleNativeDevice(item));
    }; // 蓝牙连接状态变化了

    QNBleNativeQN.prototype.onDeviceConnectStateChange = function (res) {
      if (res.connected) {
        this.listener.onNativeConnected(res.deviceId);
      } else {
        this.characteristicResovled['delete'](res.deviceId);
        this.deviceServiceCached['delete'](res.deviceId);
        this.listener.onNativeDisconnected(res.deviceId);
      }
    };

    QNBleNativeQN.prototype.onDeviceValueChange = function (device) {
      var deviceId = device.deviceId,
        serviceId = device.serviceId,
        characteristicId = device.characteristicId,
        value = device.value; // if (characteristicId.length == 4) {
      //   this.log("收到", characteristicId, value)
      // } else {
      //   this.log("收到", characteristicId.substr(4, 4), value)
      // }

      var data = hex2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };

    QNBleNativeQN.prototype.supportAdvertising = function () {
      return false;
    };

    return QNBleNativeQN;
  })(QNBleNativeCommonExtends);

var genereteCallMethods$1 = function genereteCallMethods(isAndroid, jsbridge) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return new Promise(function (resolve, reject) {
        var _a;

        if (jsbridge[method]) {
          console.log(
            '\u5C1D\u8BD5\u8C03\u7528\u65B9\u6CD5: ' + method,
            '参数: ',
            data
          );
          (_a = jsbridge[method]) === null || _a === void 0
            ? void 0
            : _a.call(
                jsbridge,
                data,
                function (res) {
                  console.log(
                    '\u8C03\u7528\u65B9\u6CD5: ' + method,
                    '参数: ',
                    data,
                    '返回值',
                    res
                  ); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

                  var result = typeof res === 'string' ? JSON.parse(res) : res; // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

                  if (
                    (result === null || result === void 0
                      ? void 0
                      : result.error_code) &&
                    (result === null || result === void 0
                      ? void 0
                      : result.error_code) !== 0
                  ) {
                    reject(result);
                  } else {
                    resolve(result);
                  }
                },
                function (err) {
                  console.error(
                    '\u8C03\u7528\u65B9\u6CD5: ' + method + '\u5931\u8D25',
                    '参数: ',
                    data,
                    '错误信息:' + err
                  );
                  reject(typeof err === 'string' ? JSON.parse(err) : err);
                }
              );
        } else {
          reject(new Error('not exists method ' + method));
        }
      });
    };
  }

  return function (method, data) {
    if (data === void 0) {
      data = {};
    }

    return new Promise(function (resolve, reject) {
      console.log(
        '\u5C1D\u8BD5\u8C03\u7528\u65B9\u6CD5: ' + method,
        '参数: ',
        data
      ); // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access

      jsbridge.callHandler(
        method,
        data,
        function (res) {
          console.log(
            '\u8C03\u7528\u65B9\u6CD5: ' + method,
            '参数: ',
            data,
            '返回值',
            res
          ); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access

          var code = res.error_code || 0;

          if (code !== 0) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            reject(res);
          } else {
            resolve(res);
          }
        },
        function (res) {
          console.error(
            '\u8C03\u7528\u65B9\u6CD5: ' + method + '\u5931\u8D25',
            '参数: ',
            data,
            '错误信息:' + res
          );
          reject(res);
        }
      );
    });
  };
};

var generateRegisterListener$1 = function generateRegisterListener(
  isAndroid,
  jsbridge
) {
  if (isAndroid === void 0) {
    isAndroid = false;
  }

  if (isAndroid) {
    return function (method, fn) {
      var _a;

      console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
      (_a =
        jsbridge === null || jsbridge === void 0
          ? void 0
          : jsbridge[method]) === null || _a === void 0
        ? void 0
        : _a.call(
            jsbridge,
            {
              fn: fn,
            },
            function () {
              console.log(
                '\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' +
                  method +
                  '\uFF0C\u6210\u529F'
              );
            },
            function () {
              console.log(
                '\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' +
                  method +
                  '\uFF0C\u5931\u8D25'
              );
            }
          );
    };
  }

  return function (method, fn) {
    console.log('\u76D1\u542C\u4E8B\u4EF6\u65B9\u6CD5: ' + method);
    jsbridge.registerHandler(method, fn);
  };
};

var QNBleNativeMultiPages =
  /** @class */
  (function (_super) {
    __extends(QNBleNativeMultiPages, _super);

    function QNBleNativeMultiPages(jsbridge, _a) {
      var isAndroid = (_a === void 0 ? {} : _a).isAndroid;

      var _this = _super.call(this) || this;

      _this.name = 'QNBleNativeMultiPages'; // 用作发现服务的缓存

      _this.characteristicResovled = new Map();
      _this.deviceServiceCached = new Map(); // 蓝牙状态

      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.connectingDevcies = [];
      _this.connectedDevices = {};
      console.log(
        '\u5F53\u524D\u84DD\u7259\u5E93\u73AF\u5883\u4E3A: ' +
          (isAndroid ? '安卓' : 'ios'),
        jsbridge
      );
      _this.bleState = {
        available: false,
        discovering: false,
      };
      _this.jsbridge = jsbridge;
      _this.callMethod = genereteCallMethods$1(isAndroid, jsbridge);
      _this.registerListener = generateRegisterListener$1(isAndroid, jsbridge);
      return _this;
    }

    Object.defineProperty(
      QNBleNativeMultiPages.prototype,
      'connectedDeviceIds',
      {
        get: function get() {
          return Object.keys(this.connectedDevices || {});
        },
        enumerable: false,
        configurable: true,
      }
    );
    /**
     * 调用js原生方法
     * @param method 方法名
     * @param data 方法参数
     */

    QNBleNativeMultiPages.prototype.callMethod = function (method, data) {
      if (data === void 0) {
        data = {};
      }

      return Promise.resolve([method, data]);
    };

    QNBleNativeMultiPages.prototype.getBluetoothAdapterState = function () {
      throw new Error('getBluetoothAdapterState Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.openBluetoothAdapter = function () {
      throw new Error('openBluetoothAdapterMethod not implemented.');
    };

    QNBleNativeMultiPages.prototype.closeBluetoothAdapter = function () {
      throw new Error('closeBluetoothAdapter Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.sendHttpRequest = function (request) {
      throw new Error('sendHttpRequest Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.createBleServer = function () {
      throw new Error('createBleServer Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.doAdvertising = function (server, data) {
      throw new Error('doAdvertising Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.stopAdvertising = function (server) {
      throw new Error('stopAdvertising Method not implemented.');
    };

    QNBleNativeMultiPages.prototype.closeServer = function (server) {
      throw new Error('closeServer Method not implemented.');
    };
    /**
     * 初始化并返回蓝牙是否正常
     */

    QNBleNativeMultiPages.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var res, available, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('进行初始化');
              this.registerListener(
                'onBleDeviceFound',
                this.onDeviceFoundArray.bind(this)
              );
              this.registerListener(
                'onBleCharacteristicValueChange',
                this.onDeviceValueChange.bind(this)
              );
              this.registerListener(
                'onBleAuthorityChange',
                this.onBluetoothAdapterStateChange.bind(this)
              );
              this.registerListener(
                'onBleConnectionStateChange',
                this.onBleConnectionStateChange.bind(this)
              );
              _a.label = 1;

            case 1:
              _a.trys.push([1, 5, , 6]);

              return [
                4,
                /*yield*/
                this.callMethod('fetchBleGlobalState'),
              ];

            case 2:
              res = _a.sent();
              this.log('获取到蓝牙状态', res);
              available =
                res.bleEnableState === 'poweredOn' &&
                res.locationSwitchOpened !== false;
              this.connectingDevcies = res.connectingDevcies || [];
              this.connectedDevices = res.connectedDevices || {};
              if (!(!available && res.bleEnableState === 'uninit'))
                return [
                  3, /*break*/
                  4,
                ]; // 定位及蓝牙打开后初始化蓝牙

              return [
                4,
                /*yield*/
                this.callMethod('initBleAdapter'),
              ];

            case 3:
              // 定位及蓝牙打开后初始化蓝牙
              _a.sent();

              _a.label = 4;

            case 4:
              this.bleState = {
                available: available,
                discovering: res.bleScannerState,
              };
              return [
                2,
                /*return*/
                {
                  bleEnableState: available,
                  available: available,
                  discovering: res.bleScannerState,
                },
              ];

            case 5:
              e_1 = _a.sent();
              this.log('初始化时错误');
              this.bleState = {
                available: false,
                discovering: false,
              };
              return [
                2,
                /*return*/
                {
                  bleEnableState: true,
                  available: false,
                  discovering: false,
                },
              ];

            case 6:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 判断当前蓝牙适配器是否可用
     */

    QNBleNativeMultiPages.prototype.checkBleAvailable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var err;
        return __generator(this, function (_a) {
          if (!this.bleState.available) {
            err = new QNBleError(QNBleErrorType.BLE_STATUS_DISABLED); // this.dispatch('error', err);

            return [
              2,
              /*return*/
              Promise.reject(err),
            ];
          }

          return [
            2,
            /*return*/
            Promise.resolve(),
          ];
        });
      });
    }; // 启动蓝牙扫描

    QNBleNativeMultiPages.prototype.startScan = function (params) {
      if (params === void 0) {
        params = {};
      }

      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              if (this.bleState.discovering) {
                this.log('当前正在扫描');
                return [
                  2,
                  /*return*/
                ];
              }

              return [
                2,
                /*return*/
                this.callMethod('startBleDevicesDiscovery', params),
              ];
          }
        });
      });
    }; // 停止扫描

    QNBleNativeMultiPages.prototype.stopScan = function () {
      this.log('调用了停止扫描');
      return this.callMethod('stopBleDevicesDiscovery');
    };
    /**
     * 创建蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {number} connectOverTime - 连接超时毫秒数
     */

    QNBleNativeMultiPages.prototype.createBleConnection = function (
      bleDevice,
      connectOverTime
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var err_1, error;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (this.connectedDeviceIds.includes(bleDevice.deviceId)) {
                // 有连接标识的设备直接成功
                this.listener.onNativeConnected(bleDevice.deviceId);
                this.findBleDeviceCharacteristics(bleDevice.deviceId);
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              return [
                4,
                /*yield*/
                this.checkBleAvailable(),
              ];

            case 1:
              _a.sent();

              this.log('调用原生的连接方法', bleDevice);
              _a.label = 2;

            case 2:
              _a.trys.push([2, 4, , 5]);

              return [
                4,
                /*yield*/
                this.callMethod('createBleConnection', {
                  deviceId: bleDevice.deviceId,
                }),
              ];

            case 3:
              _a.sent();

              return [
                3, /*break*/
                5,
              ];

            case 4:
              err_1 = _a.sent();
              this.log('原生连接失败', err_1);
              error = err_1; // 0为成功，-1为已连接

              if (
                hasOwnProperty(error, 'code') &&
                [0, -1].includes(error.code)
              );
              else if (error.code === 10012) {
                // 连接超时
                this.listener.onNativeConnectOverTime(bleDevice.deviceId);
              } else {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw error;
              }

              return [
                3, /*break*/
                5,
              ];

            case 5:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    /**
     * 关闭蓝牙连接
     * @param {QNBleDevice} bleDevice - 轻牛蓝牙对象
     * @param {Promise<void>}
     */

    QNBleNativeMultiPages.prototype.closeBleConnection = function (bleDevice) {
      return __awaiter(this, void 0, void 0, function () {
        var error;
        return __generator(this, function (_a) {
          try {
            return [
              2,
              /*return*/
              this.callMethod('closeBleConnection', {
                deviceId: bleDevice.deviceId,
              }),
            ];
          } catch (err) {
            error = err; // 0为成功，10006为已断开

            if (
              hasOwnProperty(error, 'code') &&
              [0, 10006].includes(error.code)
            );
            else {
              // eslint-disable-next-line @typescript-eslint/no-throw-literal
              throw error;
            }
          }

          return [
            2,
            /*return*/
            bleDevice,
          ];
        });
      });
    };

    QNBleNativeMultiPages.prototype.findService = function (deviceId) {
      return __awaiter(this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          // await this.checkBleAvailable();
          // this.log("正在发现服务")
          if (this.deviceServiceCached.get(deviceId) !== undefined) {
            return [
              2,
              /*return*/
              this.deviceServiceCached.get(deviceId),
            ];
          }

          return [
            2,
            /*return*/
            new Promise(function (resolve) {
              _this.characteristicResovled.set(deviceId, resolve);
            }),
          ];
        });
      });
    };
    /**
     * 使能特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMultiPages.prototype.enableNotify = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.log('使能特征值', deviceId, serviceId, characteristicId);
              return [
                4,
                /*yield*/
                this.callMethod('notifyBleCharacteristicValueChange', {
                  deviceId: deviceId,
                  serviceId: serviceId,
                  characteristicId: characteristicId,
                  state: true,
                }),
              ];

            case 1:
              return [
                2,
                /*return*/
                _a.sent(),
              ];
          }
        });
      });
    };
    /**
     * 读取特征值
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @returns {Promise<any>}
     */

    QNBleNativeMultiPages.prototype.readBleCharacteristicValue = function (
      deviceId,
      serviceId,
      characteristicId
    ) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (characteristicId.length === 4) {
            this.log('读取', characteristicId);
          } else {
            this.log('读取', characteristicId.substr(4, 4));
          }

          return [
            2,
            /*return*/
            this.callMethod('readBleCharacteristicValue', {
              deviceId: deviceId,
              serviceId: serviceId,
              characteristicId: characteristicId,
            }),
          ];
        });
      });
    };
    /**
     * 写入特征值数据
     * @param {string} deviceId
     * @param {string} serviceId
     * @param {string} characteristicId
     * @param {number[]} cmdData
     * @returns {Promise<any>}
     */
    // eslint-disable-next-line class-methods-use-this

    QNBleNativeMultiPages.prototype.writeData = function (
      deviceId,
      serviceId,
      characteristicId,
      cmdData
    ) {
      var arry = new Array();
      cmdData.forEach(function (it) {
        arry.push(it);
      });
      var cmdStr = array2hex(arry);
      return this.callMethod('writeBleCharacteristicValue', {
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        value: cmdStr,
      });
    };

    QNBleNativeMultiPages.prototype.onBluetoothAdapterStateChange = function (
      res
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var newBleState, available;
        return __generator(this, function (_a) {
          this.log('onBluetoothAdapterStateChange', res);
          newBleState = typeof res === 'string' ? JSON.parse(res) : res;
          available =
            newBleState.bleEnableState === 'poweredOn' &&
            newBleState.locationSwitchOpened !== false;
          this.listener.onNativeBluetoothEnableChange(available);
          this.bleState = {
            available: available,
            discovering: newBleState.bleScannerState,
          };
          return [
            2,
            /*return*/
          ];
        });
      });
    };

    QNBleNativeMultiPages.prototype.findBleDeviceCharacteristics = function (
      deviceId,
      serviceId
    ) {
      if (serviceId === void 0) {
        serviceId = '';
      }

      return __awaiter(this, void 0, void 0, function () {
        var characteristicsArray, characteristics;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.callMethod('findBleDeviceCharacteristics', {
                  deviceId: deviceId,
                  services: serviceId ? [serviceId] : [],
                }),
              ];

            case 1:
              characteristicsArray = _a.sent().characteristics;
              characteristics =
                characteristicsArray.map(function (v) {
                  return v.characteristicId;
                }) || [];
              this.deviceServiceCached.set(deviceId, characteristics);

              if (this.characteristicResovled.get(deviceId) != undefined) {
                this.characteristicResovled.get(deviceId)(characteristics);
                this.characteristicResovled['delete'](deviceId);
              }

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMultiPages.prototype.onDeviceFoundArray = function (data) {
      var _this = this;

      this.log('onDeviceFoundArray', data);
      var devices = (typeof data === 'string' ? JSON.parse(data) : data)
        .devices;
      devices === null || devices === void 0
        ? void 0
        : devices.forEach(function (device) {
            _this.onDeviceFound(device);
          });
    };
    /**
     * 蓝牙设备的回调
     * @param {WxOnBluetoothDeviceFoundRes} payload
     * @param {boolean} forCalc 仅用于计算而不触发事件
     * @returns {void}
     */

    QNBleNativeMultiPages.prototype.onDeviceFound = function (
      payload,
      forCalc
    ) {
      if (forCalc === void 0) {
        forCalc = false;
      }

      this.log('onDeviceFound', payload, forCalc);
      var _a = payload.name,
        name = _a === void 0 ? '' : _a,
        deviceId = payload.deviceId,
        rssi = payload.rssi,
        _b = payload.advertisData,
        advertisData = _b === void 0 ? '' : _b,
        advertisServiceUUIDs = payload.advertisServiceUUIDs;

      if (advertisData.length == 0) {
        return;
      }

      var item = {
        deviceId: deviceId,
        bluetoothName: name,
        manufacturer: hex2Array(advertisData),
        rssi: rssi,
        device: payload,
        services: advertisServiceUUIDs,
      };
      var qnBleNativeDevice = new QNBleNativeDevice(item);

      if (!forCalc) {
        this.listener.onNativeBleDeviceFound(qnBleNativeDevice);
      }

      return qnBleNativeDevice;
    };

    QNBleNativeMultiPages.prototype.onDeviceValueChange = function (device) {
      var _a = typeof device === 'string' ? JSON.parse(device) : device,
        deviceId = _a.deviceId,
        serviceId = _a.serviceId,
        characteristicId = _a.characteristicId,
        value = _a.value; // if (characteristicId.length == 4) {
      //   this.log("收到", characteristicId, value)
      // } else {
      //   this.log("收到", characteristicId.substr(4, 4), value)
      // }

      var data = hex2Array(value);
      this.listener.onNativeCharacteristicValueChange({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: characteristicId,
        data: data,
      });
    };

    QNBleNativeMultiPages.prototype.onBleConnectionStateChange = function (
      state
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                /*yield*/
                this.callMethod('fetchBleGlobalState'),
              ];

            case 1:
              res = _a.sent();
              data = typeof state === 'string' ? JSON.parse(state) : state;
              this.connectingDevcies = res.connectingDevcies || [];
              this.connectedDevices = res.connectedDevices || {};

              if (data.state === 'connected') {
                this.listener.onNativeConnected(data.deviceId);
                this.findBleDeviceCharacteristics(data.deviceId);
              } else if (data.state === 'disconnect') {
                this.characteristicResovled['delete'](data.deviceId);
                this.deviceServiceCached['delete'](data.deviceId);
                this.listener.onNativeDisconnected(data.deviceId);
              }

              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };

    QNBleNativeMultiPages.prototype.supportAdvertising = function () {
      return false;
    };

    return QNBleNativeMultiPages;
  })(QNBleNativeCommonExtends);

var index = {
  QNBleNativeMP: QNBleNativeMP,
  QNBleNativeQN: QNBleNativeQN,
  QNBleNativeMultiPages: QNBleNativeMultiPages,
};

var QNMPPlugin =
  /** @class */
  (function (_super) {
    __extends(QNMPPlugin, _super);

    function QNMPPlugin(config) {
      return (
        _super.call(this, {
          bleNative: new QNBleNativeMP(config.mpwx || wx),
          config: __assign(__assign({}, config), {
            protocols: [
              QNBleProtocols.NormalBleScaleProtocol,
              QNBleProtocols.OneToOneBroadcastScaleProtocol,
              QNBleProtocols.OneToMultiBroadcastScaleProtocol,
              QNBleProtocols.WspDualScaleProtocol,
              QNBleProtocols.HeightWeightScaleProtocol,
            ],
          }),
        }) || this
      );
    }

    return QNMPPlugin;
  })(QNBle);

var QNMPPlugin$1 =
  /** @class */
  (function () {
    function QNMPPlugin() {
      this._qnble = new QNBle();
    }

    QNMPPlugin.prototype.init = function (config) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return this._qnble.init(
        new QNBleNativeQN(config.jsbridge, {
          isAndroid: config.isAndroid,
        }),
        __assign(__assign({}, config), {
          protocols: [
            QNBleProtocols.NormalBleScaleMesProtocol,
            QNBleProtocols.FasciaGunMCUProtocol,
            QNBleProtocols.WspDualScaleMesProtocol,
          ],
        })
      );
    };

    Object.defineProperty(QNMPPlugin.prototype, 'bleApi', {
      get: function get() {
        return this._qnble;
      },
      enumerable: false,
      configurable: true,
    });
    return QNMPPlugin;
  })();

var QNMultiPagesPlugin =
  /** @class */
  (function () {
    function QNMultiPagesPlugin() {
      this._qnble = new QNBle();
    }

    QNMultiPagesPlugin.prototype.init = function (config) {
      return __awaiter(this, void 0, void 0, function () {
        var initValue;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              this.nativeApi = new QNBleNativeMultiPages(config.jsbridge, {
                isAndroid: config.isAndroid,
              });
              return [
                4,
                /*yield*/
                this._qnble.init(this.nativeApi, __assign({}, config)),
              ];

            case 1:
              initValue = _a.sent();
              return [
                2,
                /*return*/
                initValue,
              ];
          }
        });
      });
    };

    QNMultiPagesPlugin.prototype.buildNativeDevice = function (deviceId) {
      if (!this.connectedDeviceIds.includes(deviceId)) {
        return null;
      } // 构建一个满足QNNativeDevice结构的对象

      return this.nativeApi.onDeviceFound(
        this.nativeApi.connectedDevices[deviceId],
        true
      );
    }; // 模拟重连实际已连接设备 需要根据业务手动调用

    QNMultiPagesPlugin.prototype.mockReConnectDevice = function (
      deviceId,
      listener,
      operation
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var qnBleNativeDevice, qnBleDevice;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!this.connectedDeviceIds.includes(deviceId)) {
                return [
                  2,
                  /*return*/
                  Promise.resolve(),
                ];
              }

              qnBleNativeDevice = this.buildNativeDevice(deviceId);
              qnBleDevice = new QNBleDevice(
                qnBleNativeDevice,
                this.bleApi.getWhatProtocolToApply(qnBleNativeDevice)
              ); // 模拟蓝牙库重连

              return [
                4,
                /*yield*/
                this.bleApi.createBleConnection(
                  qnBleDevice,
                  listener,
                  operation
                ),
              ];

            case 1:
              // 模拟蓝牙库重连
              _a.sent();

              return [
                2,
                /*return*/
                qnBleDevice,
              ];
          }
        });
      });
    };

    Object.defineProperty(QNMultiPagesPlugin.prototype, 'connectedDevices', {
      get: function get() {
        return this.nativeApi.connectedDevices || {};
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'connectedDeviceIds', {
      // 已连接的设备id
      get: function get() {
        return this.nativeApi.connectedDeviceIds || [];
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'bleStateAvailable', {
      // 蓝牙当前是否可用
      get: function get() {
        return this.nativeApi.bleState.available;
      },
      enumerable: false,
      configurable: true,
    });
    Object.defineProperty(QNMultiPagesPlugin.prototype, 'bleApi', {
      get: function get() {
        return this._qnble;
      },
      enumerable: false,
      configurable: true,
    });
    return QNMultiPagesPlugin;
  })();

export default QNBle;
export {
  QNBleBaseScaleProtocol,
  QNBleCommonExtends,
  QNBleDevice,
  QNBleError,
  QNBleNative,
  QNBleNativeCommonExtends,
  QNBleNativeDevice,
  index as QNBleNatives,
  QNBleProtocol,
  QNBleProtocols,
  consts as QNConsts,
  QNEvent,
  QNEventManager,
  QNEventSystem,
  QNMPPlugin$1 as QNMESPlugin,
  QNMPPlugin,
  QNMultiPagesPlugin,
  QNProtocolManager,
  QNScaleBiz,
  utils as QNUtils,
};
