import { SET_SESSION_KEY, CLEAR_SESSION_KEY } from '../constants/userinfo';

const INITIAL_SESSION_KEY = '';

export default function counter(state = INITIAL_SESSION_KEY, action) {
  switch (action.type) {
    case SET_SESSION_KEY:
      return action.sessionKey || state;
    case CLEAR_SESSION_KEY:
      return '';
    default:
      return state;
  }
}
