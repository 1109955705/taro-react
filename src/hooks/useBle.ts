import { useEffect, useReducer } from 'react';
import { QNMPPlugin, QNConsts } from '@/libs/qnble';
import { BleStateEnum } from '@/static/biz/typings';

console.log('==================useBle=================');

// 日志记录
const log = (...params) => {
  // console.log('蓝牙库日志', ...params);
};

// 初始化需要的参数，没有真正初始化
const qnble = new QNMPPlugin({
  appId: 'wxb0989a4bbce13d87',
  logger: { log },
});

// init之后会的回调
qnble.onReady = ({
  bleEnableState, // 表示当前蓝牙是否为开启状态
}) => {
  console.log('当前蓝牙状态', bleEnableState);
  if (bleEnableState) {
    // 开始扫描
    qnble.startBleDeviceDiscovery();
  } else {
    console.log('蓝牙状态为关闭');
  }
};

function onError(err) {
  console.log('onError', err);
}
qnble.onError = onError;

// 设置重量
const SET_WEIGHT = 'SET_WEIGHT';

// 设置身高
const SET_HEIGHT = 'SET_HEIGHT';

// 设置蓝牙状态
const SET_BLE_STATE = 'SET_BLE_STATE';

// 设置测量结果
const SET_MEASURE_RESULT = 'SET_MEASURE_RESULT';

const initialState = {
  bleState: BleStateEnum.NOOP,
  data: {
    weight: 0,
    height: 0,
    measureResult: undefined,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_BLE_STATE:
      return {
        ...state,
        bleState: action.payload.bleState,
        data: {
          ...state.data,
        },
      };
    case SET_WEIGHT:
      return {
        ...state,
        bleState: action.payload.bleState,
        data: {
          ...state.data,
          weight: action.payload.weight,
        },
      };
    case SET_HEIGHT:
      return {
        ...state,
        data: {
          ...state.data,
          height: action.payload.height,
        },
      };
    case SET_MEASURE_RESULT:
      return {
        ...state,
        bleState: BleStateEnum.OPERATE_FINISHED,
        data: {
          ...state.data,
          measureResult: action.payload.measureResult,
        },
      };
    default:
      throw new Error('Unexpected action');
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * 触发useReducer
   */
  const setBleState = (bleState: BleStateEnum) => {
    console.log('setBleState');
    dispatch({
      type: SET_BLE_STATE,
      payload: {
        bleState,
      },
    });
  };

  const setWeight = (weight: number, bleState: BleStateEnum) => {
    console.log('setWeight');
    dispatch({
      type: SET_WEIGHT,
      payload: {
        bleState,
        weight,
      },
    });
  };

  const setOperatingFinish = (measureResult) => {
    console.log('setOperatingFinish');
    dispatch({
      type: SET_MEASURE_RESULT,
      payload: {
        measureResult,
      },
    });
  };

  const setHeight = (height: number, isSteady = false) => {
    console.log('setWeight');
  };

  /**
   * 设备回调事件
   */
  //
  const deviceEventListener = {
    onGetDeviceInfo(device) {
      console.log('设备信息', device);
    },
    // 体脂秤测量完成
    onGetScaleData({ measure }) {
      console.log('测量完成', measure);
      setOperatingFinish(measure);
    },
    onGetUnsteadyWeight(data) {
      console.log('不稳定数据', data);
      const { weight } = data;
      setWeight(weight, BleStateEnum.OPERATING);
    },
  };

  // 创建连接
  const createBleConnection = (bleDevice) => {
    const operation = {} as Record<string, any>;
    operation.action = QNConsts.QNBleAction.MEASURE_WEIGHT;
    operation.user = {
      gender: 0,
      birthday: 955610511,
      height: 170,
      age: 22,
    };
    setBleState(BleStateEnum.CONNECTING);
    console.log('createBleConnection', bleDevice);
    qnble.createBleConnection(bleDevice, deviceEventListener, operation);
  };

  /**
   * 蓝牙回调事件
   */
  //
  const bleEventListener = {
    onBluetoothEnableChange({ available }) {
      console.log('onBluetoothEnableChange', available);
      if (available) {
        qnble.startBleDeviceDiscovery();
      } else {
        setBleState(BleStateEnum.NOOP);
      }
    },
    onConnected() {
      console.log('onConnected');
    },
    onConnectOverTime() {
      console.log('onConnectOverTime');
    },
    onDisconnected() {
      console.log('onDisconnected');
    },
    onStartDiscoveryDevice() {
      console.log('onStartDiscoveryDevice');
    },
    onBleDeviceFound(bleDevice) {
      if (state.bleState !== BleStateEnum.CONNECTING) {
        createBleConnection(bleDevice);
      }
    },
  };

  // 初始化
  useEffect(() => {
    qnble.init();
    qnble.setBleEventListener(bleEventListener);
    return () => {
      console.log('unmount');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   *  操作蓝牙方法
   */

  // 开始扫描
  const doScan = () => {
    console.log('doScan');
    qnble.startBleDeviceDiscovery();
  };

  // 停止扫描
  const doStopScan = () => {
    console.log('doStopScan');
    qnble.stopBleDeviceDiscovery();
  };

  return {
    data: state,
    func: {
      doScan,
      doStopScan,
    },
  };
};
