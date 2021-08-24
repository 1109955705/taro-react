import { SET_USERINFO, CHANGE_USERNAME } from '../constants/userinfo';

export const setUserinfo = (userinfo) => ({
  type: SET_USERINFO,
  userinfo,
});

export const changeUserName = (username: string) => ({
  type: CHANGE_USERNAME,
  username,
});
