import { SET_SESSION_KEY, SET_USERINFO } from '../constants/userinfo'

export const set_session_key = (session_key) => {
  return {
    type: SET_SESSION_KEY,
    session_key,
  }
}

export const set_userinfo = (userinfo) => {
  return {
    type: SET_USERINFO,
    userinfo,
  }
}