import { useReducer, useState, useEffect, useCallback, useRef } from "react"

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
  // const [all, setAll] = useState(false)
  const all = useRef(false)
  // const all = 1
  const reducer = (state, action) => {
    console.log('action', action, all, state)
    switch (action) {
      case 'increment': {
        setAll(!all)
        console.log('over')
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
    console.log('reducer', action, all.current, state)
    switch (action) {
      case 'increment': {
        all.current = !all.current
        return state + 1
      };
      case 'decrement': return state - 1;
      case 'reset': return 0;
      default: throw new Error('Unexpected action');
    }
  }, [])

  const [count, dispatchONE] = useReducer(memoizedReducer, 999);

  const increment = ()=> {
    console.log('increment')
    // setAll(!all)
    dispatchONE({
      type: 'increment',
    })
  }

  
  const decrement = ()=> {
    console.log('decrement')
    dispatchONE({
      type: 'decrement',
    })
  }

  const reset = ()=> {
    console.log('reset')
    dispatchONE({
      type: 'reset',
    })
  }

  return {
    count,
    all,
    reset,
    increment,
    decrement,
    dispatchONE,
  }
}
