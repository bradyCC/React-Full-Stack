/**
 * Created by brady on 2019-06-22.
 */
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Main from '@/views/Main'
import Login from '@/views/Login'
import Register from '@/views/Register'

const AppRouter = () => (
  <HashRouter>
    <Route path="/" component={ Main }></Route>
    <Route path="/login" component={ Login }></Route>
    <Route path="/register" component={ Register }></Route>
  </HashRouter>
)

export default AppRouter
