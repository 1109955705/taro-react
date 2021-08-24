import { SET_THEME_COLOR } from '../constants/themeColor';

export const setThemeColor = (themeColor: string) => ({
  type: SET_THEME_COLOR,
  themeColor,
});

export default {};
