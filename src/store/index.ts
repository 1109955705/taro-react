/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from '@/static/sys/storage';
import rootReducer from './reducers';
import { SET_SESSION_KEY, RE_SET_PERSIST } from './constants/userinfo';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveAuthToken = () => (next) => (action) => {
  // 数据更改时通知其它ts文件
  // 登陆时设置session_key
  console.log('RE_SET_PERSIST', action);
  if (action.type === SET_SESSION_KEY) {
    const { setToken } = require('../static/sys/http');
    setToken(action.sessionKey);
  }
  // 刷新时设置session_key
  if (action.type === RE_SET_PERSIST) {
    if (action.payload?.sessionKey) {
      const { setToken } = require('../static/sys/http');
      setToken(action.payload.sessionKey);
    }
  }

  // continue processing this action
  return next(action);
};
const middlewares = [thunkMiddleware, saveAuthToken];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const persistConfig = {
  key: 'xcx',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof persistedReducer>;
export default function configStore() {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}
