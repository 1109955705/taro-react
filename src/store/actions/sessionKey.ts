import { SET_SESSION_KEY } from '../constants/userinfo';

export const setSessionKey = (session_key: string) => {
  return {
    type: SET_SESSION_KEY,
    session_key,
  };
};

export default {};
