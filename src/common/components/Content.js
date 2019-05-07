import React from 'react';
import { Layout } from 'antd';
import { Route, Redirect, Switch } from 'react-router-dom';
import PersonalCenter from './personalCenter';
import Account from './account'
import DataAdmin from './dataAdmin'

const { Content } = Layout

function ContentComponent () {
  return (
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <Switch>
        <Route path='/account' component={ Account }></Route>
        <Route path='/index' component={ PersonalCenter }></Route>
        <Route path='/dataadmin' component={ DataAdmin }></Route>
        <Redirect to='/index'></Redirect>
      </Switch>
    </Content>
  )
}
export default ContentComponent
