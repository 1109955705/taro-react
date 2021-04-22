import { combineReducers } from 'redux'
import tabbar from './tabbar'
import userinfo from './userinfo'
import sessionKey from './sessionKey'

export default combineReducers({
  tabbar,
  userinfo,
  sessionKey,
})
