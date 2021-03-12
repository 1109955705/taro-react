import { SET_SESSION_KEY, SET_USERINFO } from '../constants/userinfo'

const INITIAL_USERINFO = {
  session_key: '',
  detail: {},
}

export default function counter (state = INITIAL_USERINFO, action) {
  switch (action.type) {
    case SET_SESSION_KEY:
      return {
        ...state,
        session_key: action.session_key
      }
    case SET_USERINFO:
      return {
        ...state,
        detail: action.userinfo
      }
    default:
       return state
  }
}
