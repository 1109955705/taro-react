import { SET_THEME_COLOR } from '../constants/themeColor';

export const set_theme_color = (themeColor: string) => ({
  type: SET_THEME_COLOR,
  themeColor,
});
