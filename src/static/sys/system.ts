import Taro from "@tarojs/taro";

const getSystemInfo = () => {//接口监控统计参数
  let systemInfo = Taro.getSystemInfoSync()
  console.log('systemInfo', systemInfo)
  const { model, system, version } = systemInfo
  return {
    platform: 'xcx_third',
    cellphone_type: `${model}-${system}`,
    app_id: 'wx5a0ab9c88eab843e',
    app_revision: '1.0.0',
    system_type: version
  }
}
export const systemInfo = getSystemInfo();