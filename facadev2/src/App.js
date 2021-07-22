import { Layout, Menu } from 'antd';
import logo from './logo.svg';
import './App.css';

const { Header, Content } = Layout;

function App() {
  // eslint-disable-next-line no-restricted-globals
  const push = app => history.pushState(null, app, app);

  return (
    <Layout className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="about" onClick={() => push('/about')}>About US</Menu.Item>
          <Menu.Item key="admin-app" onClick={() => push('/admin')}>Admin</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div id="subapp-viewport"></div>
      </Content>
    </Layout>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
