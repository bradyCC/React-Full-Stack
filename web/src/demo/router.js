/**
 * Created by brady on 2019/6/25.
 */
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Demo from '../demo/Demo'
import Main from '../views/main/Main'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

const AppRouter = () => {
  <Provider store={store}>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Demo</Link>
        </li>
        <li>
          <Link to="/main">Main</Link>
        </li>
      </ul>
      <Route path="/main" component={ Main }></Route>
      <Route component={ Demo }></Route>>
    </BrowserRouter>
  </Provider>
}

export default AppRouter
