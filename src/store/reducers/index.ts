import { combineReducers } from 'redux';
import tabbar from './tabbar';
import userinfo from './userinfo';
import sessionKey from './sessionKey';
import themeColor from './themeColor';

export default combineReducers({
  tabbar,
  userinfo,
  sessionKey,
  themeColor,
});
