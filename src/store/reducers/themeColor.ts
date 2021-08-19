import { SET_THEME_COLOR } from '../constants/themeColor';

const INITIAL_INDEX = '#01ca9e';

export default function counter(state = INITIAL_INDEX, action) {
  switch (action.type) {
    case SET_THEME_COLOR:
      return action.themeColor;
    default:
      return state;
  }
}
