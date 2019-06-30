/**
 * Created by brady on 2019-06-22.
 */

import React, { Component } from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile'
import Logo from '../../components/logo/Logo'
import { validata } from '../../utils/validata'

import { connect } from 'react-redux'
import { authAction } from '../../redux/actions/authAction'

// 关联
const mapStateToProps = state => ({
  userInfo: state.authReducer.userInfo
})

// 装饰器
@connect(mapStateToProps, { authAction: authAction })
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', // 用户名
      password: '', // 密码
    }
  }

  // 数据改变时执行
  handleChange = (prop, val) => {
    // 更新状态
    this.setState({
      [prop]: val
    })
  }

  // 登录
  submit = () => {
    // 验证
    let validataArr = [
      {'val': this.state.username, 'type': 'isnull', 'name': '用户名'},
      {'val': this.state.password, 'type': 'isnull', 'name': '密码'},
    ]
    if (!validata(validataArr)) return false

    this.props.authAction('LOGIN', this.state)
  }

  // 已有账户，跳转至注册页
  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar>直聘App</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入用户名" onChange={ val => this.handleChange('username', val) }>用户名</InputItem>
            <InputItem type="password" placeholder="请输入密码" onChange={ val => this.handleChange('password', val) }>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={ this.submit }>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={ this.toRegister }>注册账户</Button>
        </WingBlank>
      </div>
    );
  }

  // 清空token，用于处理权限
  componentDidMount() {
    localStorage.clear()
    // delete localStorage.id
    // delete localStorage.token
    // delete localStorage.type
    // delete localStorage.avatar
  }
}

export default Login
