import { SET_SESSION_KEY, CLEAR_SESSION_KEY} from '../constants/userinfo'

const INITIAL_USERINFO: string= ''

export default function counter (state = INITIAL_USERINFO, action) {
  switch (action.type) {
    case SET_SESSION_KEY:
      return action.session_key
    case CLEAR_SESSION_KEY:
      return ''
    default:
       return state
  }
}
