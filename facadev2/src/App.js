import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import SubApp from './SubApp';
import logo from './logo.svg';
import './App.css';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="App">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="home"><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></Menu.Item>
            <Menu.Item key="product"><Link to="/product">Products</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">About US</Link></Menu.Item>
            <Menu.Item key="admin-app"><Link to="/admin">Admin</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">Welcome, Hello, Microapp!</Route>
            <Route path="/:subapp">
              <SubApp/>
            </Route>
          </Switch>
          <div id="subapp-viewport"></div>
        </Content>
      </Layout>
    </Router>
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
