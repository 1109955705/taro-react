import { useReducer, useState, useEffect, useCallback } from "react"

interface Option {
  /** 用来在map中记录勾选状态的key 一般取id */
  key?: string
}

type CheckedMap = {
  [key: string]: boolean
}

const CHECKED_CHANGE = "CHECKED_CHANGE"

const CHECKED_ALL_CHANGE = "CHECKED_ALL_CHANGE"

const SET_CHECKED_MAP = "SET_CHECKED_MAP"

type CheckedChange<T> = {
  type: typeof CHECKED_CHANGE
  payload: {
    dataItem: T
    checked: boolean
  }
}

type CheckedAllChange = {
  type: typeof CHECKED_ALL_CHANGE
}

type SetCheckedMap = {
  type: typeof SET_CHECKED_MAP
  payload: CheckedMap
}

type Action<T> = CheckedChange<T> | CheckedAllChange | SetCheckedMap
export type OnCheckedChange<T> = (item: T, checked: boolean) => any

/**
 * 提供勾选、全选、反选等功能
 * 提供筛选勾选中的数据的函数
 * 在数据更新的时候自动剔除陈旧项
 */
export const useChecked = () => {
  const [all, setAll] = useState(false)
  console.log('setAll', all)
  const reducer = (state, action) => {
    console.log('reducer', action, all)
    switch (action.type) {
      case 'increment': {
        setAll(!all)
        return state + 1
      };
      case 'decrement': return state - 1;
      case 'reset': return 0;
      default: throw new Error('Unexpected action');
    }
  };
  function init(initialCount) {
    return initialCount;
  }
  const initialState = 999;
  const memoizedReducer = useCallback((state, action) => {
    console.log('reducer', action, all)
    switch (action.type) {
      case 'increment': {
        setAll(true)
        return state + 1
      };
      case 'decrement': return state - 1;
      case 'reset': return 0;
      default: throw new Error('Unexpected action');
    }
  }, [])
  const [count, dispatch] = useReducer(memoizedReducer, initialState, init);


  const increment = ()=> {
    console.log('increment')
    dispatch({
      type: 'increment',
    })
  }

  
  const decrement = ()=> {
    console.log('decrement')
    dispatch({
      type: 'decrement',
    })
  }

  const reset = ()=> {
    console.log('reset')
    dispatch({
      type: 'reset',
    })
  }


  return {
    count,
    reset,
    increment,
    decrement,
  }
}
