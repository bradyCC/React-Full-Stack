/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { WhiteSpace, Toast, Result, List, Button } from 'antd-mobile'
import './personal.less'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
  }

  Logout = () => {
    Toast.success('已退出')
    this.props.history.push('/login')
  }

  render() {
    let header = `avatar${localStorage.avatar.slice(-1)}`
    return (
      <div className="personal">
        <Result img={ <img src={ require(`../../assets/images/avatars/${header}.jpg`) } alt="头像" />} title={ this.state.info.username} message={ this.state.info.company } ></Result>
        <List renderHeader={() => '相关信息'}>
          <List.Item multipleLine>
            <List.Item.Brief>职位：{ this.state.info.post }</List.Item.Brief>
            <List.Item.Brief>简介：{ this.state.info.info }</List.Item.Brief>
            <List.Item.Brief>薪资：{ this.state.info.salary }</List.Item.Brief>
          </List.Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <Button type="warning" onClick={ () => this.Logout() }>退出</Button>
        </List>
      </div>
    );
  }

  componentDidMount() {
    this.$http.get('/rest/users').then(res => {
      this.setState({
        info: res.data.data
      })
    })
  }
}

export default Personal
