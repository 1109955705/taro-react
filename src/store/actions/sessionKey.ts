import { SET_SESSION_KEY } from '../constants/userinfo';

export const set_session_key = (session_key: string) => {
  return {
    type: SET_SESSION_KEY,
    session_key,
  };
};
