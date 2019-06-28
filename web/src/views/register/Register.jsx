/**
 * Created by brady on 2019-06-22.
 */
import React, { Component } from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button, Toast } from 'antd-mobile'
import Logo from '../../components/logo/Logo'
import { validata } from '../../utils/validata'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', // 用户名
      password: '', // 密码
      repassword: '', // 确认密码
      type: '', // 用户类型
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
    // 验证
    let validataArr = [
      {'val': this.state.username, 'type': 'isnull', 'name': '用户名'},
      {'val': this.state.password, 'type': 'isnull', 'name': '密码'},
      {'val': this.state.repassword, 'type': 'isnull', 'name': '确认密码'},
      {'val': this.state.type, 'type': 'isnull', 'name': '用户类型'},
    ]
    if (!validata(validataArr)) return false
    if (this.state.password !== this.state.repassword) {
      Toast.fail('两次密码输入不一致，请重新输入')
      return false
    }

    // 提交数据
    this.$http.post('register', this.state).then(res => {
      Toast.success('注册成功', 1, () => {
        this.props.history.push('/login')
      })
    })
  }

  // 已有账户，跳转至登录页
  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
    return (
      <div>
        <NavBar>直聘App</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem placeholder="请输入用户名" onChange={ val => this.handleChange('username', val) }>用户名</InputItem>
            <InputItem type="password" placeholder="请输入密码" onChange={ val => this.handleChange('password', val) }>密码</InputItem>
            <InputItem type="password" placeholder="请输入确认密码" onChange={ val => this.handleChange('repassword', val) }>确认密码</InputItem>
            {/*<List.Item>*/}
            {/*  <span>用户类型：</span>*/}
            {/*  <Radio checked={ type === '1' } onChange={ () => this.handleChange('type', '1') } style={{'marginLeft': '15px'}}>Boss</Radio>*/}
            {/*  <Radio checked={ type === '2' } onChange={ () => this.handleChange('type', '2') }>用户</Radio>*/}
            {/*</List.Item>*/}
            <Radio.RadioItem checked={ type === '1'} onChange={ () => this.handleChange('type', '1') }>Boss</Radio.RadioItem>
            <Radio.RadioItem checked={ type === '2'} onChange={ () => this.handleChange('type', '2') }>用户</Radio.RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={ this.submit }>注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button onClick={ this.toLogin }>已有账户</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register
