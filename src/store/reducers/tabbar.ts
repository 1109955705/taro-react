import { SET_TABBAR_INDEX } from '../constants/tabbar'

const INITIAL_INDEX = {
  index: 999
}

export default function counter (state = INITIAL_INDEX, action) {
  switch (action.type) {
    case SET_TABBAR_INDEX:
      return {
        ...state,
        index: action.index
      }
     default:
       return state
  }
}
