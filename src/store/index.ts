import { createStore, applyMiddleware, compose } from 'redux'
import storage from '@/static/sys/storage'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { SET_SESSION_KEY } from './constants/userinfo'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveAuthToken = () => next => action => {
  if(action.type === SET_SESSION_KEY) {
    // 数据更改时通知其它ts文件
    let setToken = require('../api/http').setToken
    setToken(action.session_key);
  }

  // continue processing this action
  return next(action);
}
const middlewares = [
  thunkMiddleware,
  saveAuthToken,
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const persistConfig = {
  key: 'xcx',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export type RootState = ReturnType<typeof persistedReducer>
export default function configStore () {
  const store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)
  return { store, persistor }
}
