import React from 'react';
import { useDidShow } from '@tarojs/taro';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { init } from '@/static/biz/init';
import '@/i18n/index';
import configStore from './store';
import './app.scss';

const { store, persistor } = configStore();

interface AppTypes {
  children: React.ReactNode;
}

const App = ({ children }: AppTypes) => {
  useDidShow(() => {
    init();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={children} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default App;
