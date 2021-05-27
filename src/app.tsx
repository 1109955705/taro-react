import React from 'react'
import { useDidShow } from "@tarojs/taro";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { init } from '@/static/biz/init'
import MyErrorBoundary from '@/components/biz/error-boundary'
import '@/i18n/index'
import configStore from './store'
import './app.scss'

const { store, persistor} = configStore()

const App = (props) => {

  useDidShow(() => {
    init()
  })
  console.log('xxxx', props)

  return (
    <Provider store={store}>
      <PersistGate loading={props.children} persistor={persistor}>
        <MyErrorBoundary>
          {props.children}
        </MyErrorBoundary>

      </PersistGate> 
    </Provider>
  )
}

export default App
