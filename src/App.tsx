import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, DatePicker, Flex, Layout, Menu, MenuProps, } from 'antd';

import { ConfigProvider } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory
} from "react-router-dom";
import PageNotFound from './pages/PageNotFound';
import { Login } from './pages/login';
import { Member } from './pages/member';
import { Dashboard } from './pages/dashboard';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';
import Router01 from './routerdemo/Router01';
import RouteRedirect from './routerdemo/RouteRedirect';
import UserAuthProvider, { useUserAuthContext } from './pages/usercontext';
import Interview from './interview/Interview';
import Navbar from './bestpractices/DRY-with-array-mapping/Navbar';
import ImageT from './imageTest/ImageT';
import AuthForm from './bestpractices/separation-of-concerns/AuthForm';
import UserList from './bestpractices/separation-of-concerns/UserList';
import ProfileApp from './bestpractices/hoc/ProfileApp';
import DataFetchApp from './bestpractices/hoc/DataFetchApp';
import RenderApp from './bestpractices/render-props/RenderApp';
import AccordionApp from './bestpractices/compound-components/AccordionApp';
import TabApp from './bestpractices/compound-components/TabApp';
import MemoApp from './bestpractices/memo/MemoApp';
import LazyApp from './bestpractices/lazy/LazyApp';
import ThemeApp from './bestpractices/context/ThemeApp';
import TodoApp from './bestpractices/reducer/TodoApp';
import LifeCyleApp from './lifecycle/LifeCyleApp';
import LayoutApp from './layout/LayoutApp';
import CssApp from './w3schoolcss/CssApp';
import AccessibilityApp from './accessibility/AccessibilityApp';

const { Header, Footer, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  // color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  // textAlign: 'center',
  // lineHeight: '120px',
  // color: '#fff',
  // backgroundColor: '#1677ff',
  backgroundColor: 'rgba(0,0,0,0)'
};

const footerStyle: React.CSSProperties = {
  // textAlign: 'center',
  // color: '#fff',
  // backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100% )',
  maxWidth: 'calc(100%)',
  height: '100vh'
};


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Navigation One', 'sub1', <MailOutlined />,
    [
      getItem('Dashboard', '/myapp/dashboard',),
      getItem('Member', '/myapp/member',),
    ]),
];



const App: React.FC = () => {
  return (
    <div>
      {/* <Interview /> */}
      {/* <Navbar /> */}
      {/* <ImageT /> */}
      {/* <AuthForm/> */}
      {/* <UserList/> */}
      {/* <ProfileApp/> */}
      {/* <DataFetchApp/> */}
      {/* <RenderApp/> */}
      {/* <AccordionApp/> */}
      {/* <TabApp /> */}
      {/* <MemoApp /> */}
      {/* <LazyApp /> */}
      {/* <ThemeApp /> */}
      {/* <TodoApp /> */}
      {/* <LifeCyleApp /> */}
      {/* <LayoutApp /> */}
      {/* <CssApp/> */}
      <AccessibilityApp/>
    </div>
  )
}


// const App: React.FC = () => (
//   <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
//     {/* <RouteRedirect/> */}
//     {/* <Router01/> */}
//     <Router>
//       <UserAuthProvider>
//         <Switch>
//           <Route path='/myapp' component={MyApp} />
//           <Route path='/login' component={Login} />
//           <Route path='/404' component={PageNotFound} />
//           <Redirect path="/" to="/myapp" />
//         </Switch>
//       </UserAuthProvider>
//     </Router>
//   </ConfigProvider>
// );


function MyApp(props: any) {

  // const [isLogin, setIsLogin] = useState(false)

  const { logined } = useUserAuthContext()!;

  const history = useHistory();

  console.log("props", props)

  const handleMenuItem = (e: MenuInfo) => {
    console.log("------menuInfo---", e)
    // window.location.href=e.key
    history.push(e.key)
  }

  if (logined) {
    return (

      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Layout>
            <Sider style={siderStyle}>
              <Menu
                onClick={(e) => {
                  console.log("e", e)
                  handleMenuItem(e)
                }}
                // style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
              />
            </Sider>
            <Content style={contentStyle}>

              <Switch>
                <Route path='/myapp/dashboard' key="/myapp/dashboard" render={routeProps => (<Dashboard {...routeProps} key={Math.random()} />)} />
                <Route path='/myapp/member' key='/myapp/member' render={routeProps => (<Member {...routeProps} key={Math.random()} />)} />
                <Redirect from='/myapp' to={'/myapp/dashboard'} />
              </Switch>

            </Content>
          </Layout>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Flex>


    )
  } else {
    return <Redirect to="/login" />
  }
}

export default App;
