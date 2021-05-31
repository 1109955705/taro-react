import React, { useEffect } from 'react'
import { useDidShow } from "@tarojs/taro";
import { Provider } from 'react-redux'
import { set_theme_color } from '@/store/actions/themeColor'
import { PersistGate } from 'redux-persist/lib/integration/react';
import theme from '@/static/biz/themeMock';
import { init } from '@/static/biz/init'
import '@/i18n/index'
import configStore from './store'
import './app.scss'

const { store, persistor } = configStore()

const App = (props) => {

  useDidShow(() => {
    init()
  })

  useEffect(()=>{
    console.log('app:onlaunch', store)
    setTimeout(()=>{
      console.log('app:setTimeout')
      store.dispatch(set_theme_color('#ffb600'))
    }, 5000)
    // store.dispatch(set_theme_color(theme.themeColor))
  },[])

  return (
    <Provider store={store}>
      <PersistGate loading={props.children} persistor={persistor}>
        {props.children}
      </PersistGate> 
    </Provider>
  )
}

export default App
