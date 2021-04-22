import { SET_USERINFO, CHANGE_USERNAME } from '../constants/userinfo'

interface UserInfo {
  [x: string]: any
}
const INITIAL_USERINFO: UserInfo = {}

export default function counter (state = INITIAL_USERINFO, action) {
  switch (action.type) {
    case SET_USERINFO:
      return {
       ...action.userinfo
      }
    case CHANGE_USERNAME:
      return {
        ...state,
        account_name: action.username
      }
    default:
       return state
  }
}
