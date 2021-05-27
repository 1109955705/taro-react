import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default EBWrapComponent => {
  console.log('111111111', EBWrapComponent)
  return class ErrorBoundary extends Component {
    state = {
      error: null,
    };

    static getDerivedStateFromError(error: Error) {
      console.log('getDerivedStateFromError:hoc')
      // 更新 state，下次渲染可以展示错误相关的 UI
      return { error: error };
    }

    componentDidCatch(error, info) {
      // 错误上报
      console.log('componentDidCatch:hoc')
    }
 
    render() {
      if (this.state.error) {
          // 渲染出错时的 UI
          return <View>Something broke</View>;
      }
      return <EBWrapComponent />;
    }
  }
}

