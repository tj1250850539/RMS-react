import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function SiderComponent() {
  return (
    <Sider style={{
      overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
    }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="edit" theme="filled" />
          <span className="nav-text">个人中心</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="hdd" theme="filled" />
          <span className="nav-text">数据管理</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="sliders" theme="filled" />
          <span className="nav-text">账号管理</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
export default SiderComponent;
