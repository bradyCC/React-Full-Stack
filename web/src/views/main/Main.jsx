/**
 * Created by brady on 2019-06-22.
 */

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'

import BossInfo from '../bossInfo/BossInfo'
import UserInfo from '../userInfo/UserInfo'
import BossList from '../bossList/BossList'
import UserList from '../userList/UserList'
import Message from '../message/Message'
import Personal from '../personal/Personal'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ``
    }
  }

  // 动态设置title
  setTitle = (props) => {
    let pathname = props.location.pathname.slice(1)
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

  // 返回
  goBack = () => {
    this.props.history.go(-1)
  }

  componentWillMount() {
    this.setTitle(this.props)
  }

  render() {
    return (
      <div>
        <NavBar
          icon={ this.state.title !== '首页'? <Icon type="left" />: ''}
          onLeftClick={ () => this.goBack() }>{ this.state.title }</NavBar>
        <Switch>
          <Route path="/bossinfo" component={ BossInfo }></Route>
          <Route path="/userinfo" component={ UserInfo }></Route>
          <Route path="/bosslist" component={ BossList }></Route>
          <Route path="/userlist" component={ UserList }></Route>
          <Route path="/message" component={ Message }></Route>
          <Route path="/personal" component={ Personal }></Route>
        </Switch>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setTitle(nextProps)
  }

}

export default Main
