// @ts-nocheck
import Taro from '@tarojs/taro';

function getTheme() {
  if (getTheme.instance) {
    return getTheme.instance;
  }
  getTheme.instance = Taro.getExtConfigSync();
  return getTheme.instance;
}
const theme = getTheme();
export default theme;
