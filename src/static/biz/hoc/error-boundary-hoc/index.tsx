import React, { Component, Fragment } from 'react'
import { View, PageMeta, NavigationBar } from '@tarojs/components'
import { logError } from "@/utils/error";

export default EBWrapComponent => {
  return class ErrorBoundary extends Component {
    // eslint-disable-next-line react/sort-comp
    state = {
      error: null,
    };

    static getDerivedStateFromError(error: Error) {
      console.log('getDerivedStateFromError:hoc')
      // 更新 state，下次渲染可以展示错误相关的 UI
      return { error: error };
    }

    componentDidMount () {
    }

    componentDidCatch(error, info) {
      logError('run', error, info.componentStack)
    }

    render() {
      if (this.state.error) {
          // 渲染出错时的 UI
          return <View>Something broke</View>;
      }
      return (
        <Fragment>
          <PageMeta>
            <NavigationBar backgroundColor='#ffb600'></NavigationBar>
          </PageMeta>
          <EBWrapComponent />
        </Fragment>
      )
    }
  }
}

