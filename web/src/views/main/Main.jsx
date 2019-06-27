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

import Footer from '../../components/footer/Footer'

class Main extends Component {
  constructor(props) {
    super(props)
    this.footerList = [
      { path: '/bosslist', component: BossList, icon: 'boss', text: 'Boss', state: localStorage.type === '2'? true: false },
      { path: '/userlist', component: UserList, icon: 'user', text: '用户', state: localStorage.type === '1'? true: false },
      { path: '/message', component: Message, icon: 'message', text: '消息' },
      { path: '/personal', component: Personal, icon: 'personal', text: '个人中心' },
    ]
    this.state = {
      title: ``,
    }
  }

  // 动态设置title
  setTitle = (props) => {
    let pathname = props.location.pathname.slice(1)
    switch (pathname) {
      case 'bossinfo':
        this.setState({ title: 'Boss完善资料' })
        break
      case 'userinfo':
        this.setState({ title: '用户完善资料' })
        break
      case 'bosslist':
        this.setState({ title: 'Boss列表' })
        break
      case 'userlist':
        this.setState({ title: '用户列表' })
        break
      case 'message':
        this.setState({ title: '消息' })
        break
      case 'personal':
        this.setState({ title: '个人中心' })
        break
      default:
        this.setState({ title: '首页' })
        break
    }

  }

  // 返回
  goBack = () => {
    this.props.history.go(-1)
  }

  // 验证权限
  checkData = (props) => {
    let pathname = props.location.pathname
    if (pathname.includes('bossinfo') || pathname.includes('userinfo')) {
      if (!localStorage.token) props.history.push('/login')
    } else {
      if (!localStorage.type) props.history.push('/login')
    }

  }

  componentWillMount() {
    this.checkData(this.props)
    this.setTitle(this.props)
  }

  render() {
    return (
      <div>
        <NavBar icon={ this.state.title.includes('完善资料')? <Icon type="left" />: '' } onLeftClick={ () => this.goBack() } style={{ position: 'sticky', top: 0, zIndex: '2' }}>{ this.state.title }</NavBar>
        <Switch>
          <Route path="/bossinfo" component={ BossInfo }></Route>
          <Route path="/userinfo" component={ UserInfo }></Route>
          <Route path="/bosslist" component={ BossList }></Route>
          <Route path="/userlist" component={ UserList }></Route>
          <Route path="/message" component={ Message }></Route>
          <Route path="/personal" component={ Personal }></Route>
        </Switch>
        { this.state.title.includes('完善资料')? '': <Footer footerList={ this.footerList }></Footer>}
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.checkData(nextProps)
    this.setTitle(nextProps)
  }

}

export default Main
