import React from 'react';
import { Layout, Menu, Icon,Button  } from 'antd';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import PersonalCenter from './common/components/personalCenter';
import Account from './common/components/account'

const {
  Header, Content, Footer, Sider,
} = Layout;

function App() {
  return (
    <Layout>
    <Sider style={{
      overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
    }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Link to='/index'>
            <Icon type="user" />
            <span className="nav-text">个人中心</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/account'>
            <Icon type="user" />
            <span className="nav-text">账号管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} >头部....</Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <Switch>
          <Route path='/account' component={ Account }></Route>
          <Route path='/index' component={ PersonalCenter }></Route>
          <Redirect to='/index'></Redirect>
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  );
}

export default App;
