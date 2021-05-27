import React, { FC, Fragment } from 'react'
import { View } from '@tarojs/components'
import MyErrorBoundary from '@/components/biz/error-boundary'
import MyErrorBoundaryHoc from '@/components/biz/error-boundary-hoc'
import useMain from './service/useMain'
import BodyIndex from './components/body-index'
import Features from './components/features'
import HealthTool from './components/health-tool'
import Userinfo from './components/userinfo'
import style from './index.module.scss'


const Test: FC = () => {

  const { isLogin, lastMeasure } = useMain()
  console.log('index刷新了', isLogin)
  throw new Error("调试用途xxx");
  return (
    <MyErrorBoundary>
      <View className={style.main}>
        <Userinfo lastMeasure={lastMeasure}></Userinfo>
        <View>233333</View>
        {
          isLogin 
            ? <Fragment>
                <Features showDeepReport={lastMeasure?.depth_report_flag}></Features>
                <BodyIndex lastMeasure={lastMeasure}></BodyIndex>
                <HealthTool></HealthTool>
              </Fragment> 
            : <View>未登录</View> 
        }
      </View>
    </MyErrorBoundary>
   
  )
}

export default MyErrorBoundaryHoc(Test)
