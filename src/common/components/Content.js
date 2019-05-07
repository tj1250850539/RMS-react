import React from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom';
import PersonalCenter from './personalCenter';
import Account from './account'
import DataAdmin from './dataAdmin'
import HoldLogin from './holdLogin'

const { Content } = Layout

function ContentComponent (props) {
  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <Switch>
        <HoldLogin path='/account' component={ Account }></HoldLogin>
        <HoldLogin path='/index' component={ PersonalCenter }></HoldLogin>
        <HoldLogin path='/dataadmin' component={ DataAdmin }></HoldLogin>
        <Redirect to='/index'></Redirect>
      </Switch>
    </Content>
  )
}
export default ContentComponent
