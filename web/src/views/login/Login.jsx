/**
 * Created by brady on 2019-06-22.
 */

import React, {Component} from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Button, Toast } from 'antd-mobile'
import Logo from '@/components/logo/Logo'

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
    Toast.loading('登录中', 0)

    console.log(this.state)

    setTimeout(() => {
      Toast.hide()
    }, 5000)
  }

  // 已有账户，跳转至注册页
  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入用户名" onChange={ val => this.handleChange('username', val) }>用户名：</InputItem>
            <InputItem type="password" placeholder="请输入密码" onChange={ val => this.handleChange('password', val) }>密码：</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.submit}>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.toRegister}>注册账户</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login
