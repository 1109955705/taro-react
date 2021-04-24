// @ts-nocheck
import Taro from '@tarojs/taro'

function getTheme() {
  if (getTheme.instance) {
    return getTheme.instance
  }
  getTheme.instace = Taro.getExtConfigSync()
  return getTheme.instace
}
const theme =  getTheme()
export default theme