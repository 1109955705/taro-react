import { useReducer, useCallback, useEffect } from "react"

const init = (initDate) => {
  return {
    title: initDate,
  };
}
export const useMain = () => {

  const title = 'title';

  const memoizedReducer = useCallback((state, action) => {
    switch (action) {
      case 'change': {
        return {
          
        }
      };
    }
  }, [])

  const [reactiveModel, dispatch] = useReducer(memoizedReducer, title, init);

  const change = ()=> {
    dispatch({
      type: 'change',
    })
  }


  return {
    reactiveModel,
    // 计算属性
    computed: {},
    // 暴露出去的操作方法
    methods: {

    },
  }
}
