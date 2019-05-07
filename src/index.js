import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './common/components/Login'
import store from './store'
import HoldLogin from './common/components/holdLogin'

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <Switch>
        <Route path='/login' component = { Login }></Route>
        <HoldLogin path='/' component= { App }></HoldLogin>
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('root')
);
