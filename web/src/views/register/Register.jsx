/**
 * Created by brady on 2019-06-22.
 */
import React, {Component} from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button, Toast } from 'antd-mobile'
import Logo from '@/components/logo/Logo'


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', // 用户名
      password: '', // 密码
      repassword: '', // 确认密码
      type: '1', // 用户类型
    }
  }

  // 数据改变时执行
  handleChange = (prop, val) => {
    // 更新状态
    this.setState({
      [prop]: val
    })
  }

  // 注册提交
  submit = () => {
    Toast.loading('注册中', 0)

    console.log(this.state)

    setTimeout(() => {
      Toast.hide()
    }, 5000)
  }

  // 已有账户，跳转至登录页
  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem onChange={ val => this.handleChange('username', val) }>用户名：</InputItem>
            <InputItem type="password" onChange={ val => this.handleChange('password', val) }>密码：</InputItem>
            <InputItem type="password" onChange={ val => this.handleChange('repassword', val) }>确认密码：</InputItem>
            <List.Item>
              <span>用户类型：</span>
              <Radio checked={ type === '1' } onChange={ () => this.handleChange('type', '1') }>大神</Radio>
              <Radio checked={ type === '2' } onChange={ () => this.handleChange('type', '2') } style={{'marginLeft': '15px'}}>老板</Radio>
            </List.Item>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.submit}>注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.toLogin}>已有账户</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register
