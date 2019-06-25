/**
 * Created by brady on 2019-06-22.
 */
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Demo from '../demo/Demo'

import Main from '../views/main/Main'
import Login from '../views/login/Login'
import Register from '../views/register/Register'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

const AppRouter = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={ Login }></Route>
        <Route path="/register" component={ Register }></Route>
        <Route path="/main" component={ Main }></Route>
        <Route exact component={ Demo }></Route>
      </Switch>
    </HashRouter>
  </Provider>
)

export default AppRouter
