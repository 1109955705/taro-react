import { SET_USERINFO, CHANGE_USERNAME } from '../constants/userinfo'

export const set_userinfo = (userinfo) => {
  return {
    type: SET_USERINFO,
    userinfo,
  }
}

export const change_userName = (username: string) => {
  return {
    type: CHANGE_USERNAME,
    username,
  }
}