import { 
  Link,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import SubApp from './SubApp';
import Login from './Login';
import logo from './logo.svg';
import './App.css';

const { Header, Content } = Layout;
/*
 * TODOLIST:
 * 用户信息同步到子应用
 * 父子应用同样引入ant-design，定制部分是否会互相覆盖
 */
function App() {
  const location = useLocation();

  return (
    <Layout className="App">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/"><Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link></Menu.Item>
          <Menu.Item key="/product"><Link to="/product">Products</Link></Menu.Item>
          <Menu.Item key="/about"><Link to="/about">About US</Link></Menu.Item>
          <Menu.Item key="/admin"><Link to="/admin">Admin</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">Welcome, Hello, Microapp!</Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/:subapp">
            <SubApp/>
          </Route>
        </Switch>
        <div id="subapp-viewport"></div>
      </Content>
    </Layout>
  );
}

export default App;
