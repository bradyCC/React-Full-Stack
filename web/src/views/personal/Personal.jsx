/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { WhiteSpace, Modal, Result, List, Button } from 'antd-mobile'
import './personal.less'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {}
    }
  }

  Logout = () => {
    Modal.alert('', '您确认退出吗？', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => this.props.history.push('/login')}
    ])
  }

  render() {
    let header
    localStorage.avatar? header = `avatar${localStorage.avatar.replace(/[^0-9]/ig,"")}`: header = `avatar1`
    return (
      <div className="personal">
        <Result img={ <img src={ require(`../../assets/images/avatars/${header}.jpg`) } alt="头像" />} title={ this.state.info.username} message={ this.state.info.company } ></Result>
        <List renderHeader={() => '相关信息'}>
          <List.Item multipleLine>
            <List.Item.Brief>职位：{ this.state.info.post }</List.Item.Brief>
            <List.Item.Brief>简介：{ this.state.info.info }</List.Item.Brief>
          </List.Item>
        </List>
        <WhiteSpace></WhiteSpace>
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
