import React from 'react';
import ReactDOM from 'react-dom/client';
//IMPORTANT Provider其實是一個component
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';

//IMPORTANT to passdown store into all components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
