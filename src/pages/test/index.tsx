import React, { FC, useState, useRef, useEffect, ReactNode } from 'react'
import { View, Button } from '@tarojs/components'
import useMain from './service/useMain'
import './index.scss'

interface TestTypes {
  title: string,
}


const TopLogin: FC<{isLogin: boolean}> = (isLogin) => {
  return (
    <View>{isLogin}</View>
  )
}

const BodyIndex: FC<{lastMeasure: any}>= (measure: any = {}) => {
  useEffect(()=> {
    // 处理测量数据
  }, [])
  return (
    <View>{measure}</View>
  )
}

const Features: FC<{lastMeasure: any}>= (lastMeasure) => {
  useEffect(()=> {
    // 处理测量数据
  }, [])
  return (
    <View>{lastMeasure}</View>
  )
}

const HealthTool: FC = () => {
  useEffect(()=>{
    // 请求
  }, [])
  return (
    <View>healthTool</View>
  )
}

const TopMeasuer: FC<{lastMeasure: any}> = () => {
  useEffect(()=>{
    // 请求
  }, [])
  return (
    <View>TopMeasuer</View>
  )
}

const Test: FC<TestTypes> = () => {
  const { isLogin, lastMeasure } = useMain()
  useEffect(() => {
    // 判断是否登陆
    // 请求最新的一条数据
  }, [])
  return (
    <View className='Test'>
      <View className=''>
        <TopLogin isLogin={isLogin}></TopLogin>
        <TopMeasuer lastMeasure={lastMeasure}></TopMeasuer>
      </View>
      <Features lastMeasure={lastMeasure}></Features>
      <BodyIndex lastMeasure={lastMeasure}>身体指标</BodyIndex>
      <HealthTool>健康工具</HealthTool>
    </View>
  )
}

Test.defaultProps = {
  title: 'Test'
} 

export default Test
