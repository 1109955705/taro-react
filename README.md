# taro-react

使用 taro 的测试

自动更新 测试服
taro build --type weapp --watch

自动更新并压缩 正式服 热更新有问题而且比较慢
NODE_ENV=production taro build --type weapp --watch

ahook
https://ahooks.js.org/zh-CN/hooks/async

vscode 插件 CSS Modules 有提示

使用 css module 不使用 module.scss 的话，对于单个页面，样式是全局的，会影响组件的样式，不会影响其它页面
使用配置的全局 css 变量的话，会在每个页面都注入
taro 生命周期 https://taro-docs.jd.com/taro/docs/react#onload-options
taro hook https://taro-docs.jd.com/taro/docs/hooks
react hook https://zh-hans.reactjs.org/docs/hooks-intro.html

useState useEffect useCallback useMemo memo useReducer useRefs

useEffect 关注点分离
React 首次渲染和之后的每次渲染都会调用一遍 useEffect 函数
componentDidMonut
componentDidUpdate
return 执行当前 effect 之前对上一个 effect 进行清除
componentWillUnmount

useCallback 缓存方法
useMemo 缓存结果

useReducer 事件分发

useRefs ref useRef 来跨越渲染周期存储数据，而且对它修改也不会引起组件渲染, 比如 ref 对象的 current 属性来存储定时器的 ID，这样便可以在多次渲染之后依旧保存定时器 ID，从而能正常清除定时器。


