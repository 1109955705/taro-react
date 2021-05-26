import { useReducer, useCallback, useRef } from "react"



export type OnCheckedChange<T> = (item: T, checked: boolean) => any

/**
 * 提供勾选、全选、反选等功能
 * 提供筛选勾选中的数据的函数
 * 在数据更新的时候自动剔除陈旧项
 */
export const useChecked = () => {

  const all = useRef(false)

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
