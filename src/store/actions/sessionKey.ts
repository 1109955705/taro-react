import { SET_SESSION_KEY, CLEAR_SESSION_KEY } from '../constants/userinfo';

export const setSessionKey = (sessionKey: string) => {
  return {
    type: SET_SESSION_KEY,
    sessionKey,
  };
};

export const clearSessionKey = () => {
  return {
    type: CLEAR_SESSION_KEY,
  };
};

export default {};
