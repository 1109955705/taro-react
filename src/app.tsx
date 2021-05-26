import React from 'react'
import { useDidShow } from "@tarojs/taro";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { init } from '@/static/biz/init'
import '@/i18n/index'
// import theme from '@/static/biz/theme'
import configStore from './store'
import './app.scss'

const { store, persistor} = configStore()

const App = (props) => {

  useDidShow(() => {
    init()
  })

  return (
    <Provider store={store}>
      <PersistGate loading={props.children} persistor={persistor}>
        {props.children}
      </PersistGate> 
    </Provider>
  )
}

export default App
