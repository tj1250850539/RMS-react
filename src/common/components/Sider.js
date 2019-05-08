import React from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;


function SiderComponent(props) {
  return (
    <Sider style={{
      overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
    }}
    >
       <Avatar size={64} icon="user" style={{ margin:'10px 0 10px 60px' }}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[props.pathName]}>
        <Menu.Item key="1">
          <Link to='/index'>
            <Icon type="edit" theme="filled" />
            <span className="nav-text">个人中心</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to='/dataadmin'>
            <Icon type="hdd" theme="filled" />
            <span className="nav-text">数据管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to='/account'>
            <Icon type="sliders" theme="filled" />
            <span className="nav-text">账号管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
export default SiderComponent;
