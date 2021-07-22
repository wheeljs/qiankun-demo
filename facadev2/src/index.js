import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun';
import { Spin } from 'antd';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const loader = loading => <Spin spinning={loading} />;

registerMicroApps([
  {
    name: 'admin-app',
    entry: '//localhost:8080',
    container: '#subapp-viewport',
    loader,
    activeRule: '/admin'
  },
  {
    name: 'purehtml',
    entry: '//localhost:8081/about.html',
    container: '#subapp-viewport',
    loader,
    activeRule: '/about'
  }
])

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

setDefaultMountApp('/about');

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
