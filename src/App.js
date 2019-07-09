import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';

const {store, persistor} = configureStore();

store.subscribe(() => {
  console.log(store.getState())
})

function App() {
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
