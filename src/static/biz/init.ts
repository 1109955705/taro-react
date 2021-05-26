import Taro from '@tarojs/taro'

export const init = () => {
  // 找不到页面时，回到首页
  Taro.onPageNotFound(() => {
    Taro.reLaunch({url: '/pages/measure/index'})
  })

  // 监听小程序切前台事件
  Taro.onAppShow((result) => {
    console.log('onAppShow:', result)
  })

  // 监听小程序切前台事件
  Taro.onAppHide((result) => {
    console.log('onAppHide:', result)
  })

  // 错误监听
  Taro.onError((error) => {
    console.error('onError:', error)
  })

}
