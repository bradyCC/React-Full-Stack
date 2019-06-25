/**
 * Created by brady on 2019-06-22.
 */

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

import BossInfo from '../bossInfo/BossInfo'
import UserInfo from '../userInfo/UserInfo'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: `首页`
    }
  }

  render() {
    return (
      <div>
        <NavBar>{ this.state.title }</NavBar>
        <Switch>
          <Route path="/bossinfo" component={ BossInfo }></Route>
          <Route path="/userinfo" component={ UserInfo }></Route>
        </Switch>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let pathname = nextProps.location.pathname.slice(1)
    switch (pathname) {
      case 'bossinfo':
        this.setState({
          title: 'Boss完善资料'
        })
        break
      case 'userinfo':
        this.setState({
          title: '用户完善资料'
        })
        break
      default:
        this.setState({
          title: '首页'
        })
        break
    }
  }

}

export default Main
