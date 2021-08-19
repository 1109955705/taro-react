import { SET_USERINFO, CHANGE_USERNAME } from '../constants/userinfo';

export const set_userinfo = (userinfo) => ({
    type: SET_USERINFO,
    userinfo,
  });

export const change_userName = (username: string) => ({
    type: CHANGE_USERNAME,
    username,
  });
