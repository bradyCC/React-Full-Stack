/**
 * Created by brady on 2019-06-22.
 */

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { WhiteSpace, NavBar, Icon } from 'antd-mobile'

import BossInfo from '../bossInfo/BossInfo'
import UserInfo from '../userInfo/UserInfo'
import BossList from '../bossList/BossList'
import UserList from '../userList/UserList'
import Message from '../message/Message'
import Personal from '../personal/Personal'
import Chat from '../chat/Chat'

import Footer from '../../components/footer/Footer'

import { connect } from 'react-redux'
import { messageAction } from '../../redux/actions/messageAction'

import io from 'socket.io-client'
const socket = io('http://localhost:3000')

// 关联
const mapStateToProps = state => ({
  unread: state.messageReducer.unread,
})

// 装饰器
@connect(mapStateToProps, { messageAction: messageAction })
class Main extends Component {
  constructor(props) {
    super(props)
    // 底部导航栏基础数据
    this.footerList = [
      { path: '/bosslist', component: BossList, icon: 'boss', text: 'Boss' },
      { path: '/userlist', component: UserList, icon: 'user', text: '用户' },
      { path: '/message', component: Message, icon: 'message', text: '消息' },
      { path: '/personal', component: Personal, icon: 'personal', text: '个人中心' },
    ]
    this.state = {
      title: ``, // 标题
      flag: false, // 控制goBack、Footer显示
    }
  }

  // 动态设置title
  setTitle = (props) => {
    let pathname = props.location.pathname.slice(1)
    switch (pathname) {
      case 'bossinfo':
        this.setState({ title: 'Boss完善资料', flag: true })
        break
      case 'userinfo':
        this.setState({ title: '用户完善资料', flag: true })
        break
      case 'bosslist':
        this.setState({ title: 'Boss列表', flag: false })
        break
      case 'userlist':
        this.setState({ title: '用户列表', flag: false })
        break
      case 'message':
        this.setState({ title: '消息', flag: false })
        break
      case 'personal':
        this.setState({ title: '个人中心', flag: false })
        break
      case 'chat':
        this.setState({ title: localStorage.title, flag: true })
        break
      default:
        this.setState({ title: '首页', flag: false })
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

    // 动态设置footer
    localStorage.type === '1'? this.footerList[0].state = false: this.footerList[1].state = false
  }

  componentWillMount() {
    this.checkData(this.props)
    this.setTitle(this.props)
    this.props.messageAction()
    socket._callbacks.$receiveMsg = []
    socket.on('receiveMsg', data => {
      this.props.messageAction()
    })
  }

  render() {
    let { unread } = this.props
    this.footerList[2].badge = unread
    return (
      <div>
        <NavBar icon={ this.state.flag? <Icon type="left" />: '' } onLeftClick={ () => this.goBack() } style={{ position: 'fixed', width: '100%', top: 0, zIndex: '2' }}>{ this.state.title }</NavBar>
        <Switch>
          <Route path="/bossinfo" component={ BossInfo }></Route>
          <Route path="/userinfo" component={ UserInfo }></Route>
          <Route path="/bosslist" component={ BossList }></Route>
          <Route path="/userlist" component={ UserList }></Route>
          <Route path="/message" component={ Message }></Route>
          <Route path="/personal" component={ Personal }></Route>
          <Route path="/chat" component={ Chat }></Route>
        </Switch>
        <WhiteSpace></WhiteSpace>
        { this.state.flag? '': <Footer footerList={ this.footerList }></Footer>}
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.checkData(nextProps)
    this.setTitle(nextProps)
  }
}

export default Main
