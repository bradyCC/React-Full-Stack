/**
 * Created by brady on 2019-06-22.
 */
import React, {Component} from 'react'
import { NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile'
import Logo from '@/components/logo/Logo'


class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户名：</InputItem>
            <InputItem type="password">密码：</InputItem>
            <InputItem type="password">确认密码：</InputItem>
            <List.Item>
              <span>用户类型：</span>
              <Radio>大神</Radio>
              <Radio>老板</Radio>
            </List.Item>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button>已有账户</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register
