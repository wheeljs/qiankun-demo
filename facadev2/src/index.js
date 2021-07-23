import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './index.css';
import { GlobalStateProvider } from './globalState';
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
]);

const actions = initGlobalState({
  user: null
});

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <Router>
        <GlobalStateProvider.Provider value={actions}>
          <App />
        </GlobalStateProvider.Provider>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

start();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
