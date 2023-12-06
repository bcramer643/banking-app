import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import  './store';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import Bankreducer from './BankReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const reducerstore=createStore(Bankreducer)
root.render(
  <Provider store={reducerstore}>

  <React.StrictMode>
    <App />
  </React.StrictMode>

  </Provider>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  