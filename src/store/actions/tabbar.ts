import {
  SET_TABBAR_INDEX,
} from '../constants/tabbar'

export const set_tabbar_index = (index) => {
  return {
    type: SET_TABBAR_INDEX,
    index: index,
  }
}