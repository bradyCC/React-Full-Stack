/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { WingBlank, WhiteSpace, Modal, Result, List, Button } from 'antd-mobile'
import './personal.less'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { userAction } from "../../redux/actions/userAction";

// 关联
const mapStateToProps = state => ({
  user: state.userReducer.user,
})

// 装饰器
@connect(mapStateToProps, { userAction: userAction })
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
    let { header, username, company, post, info } = this.props.user
    header? header = `avatar${header.replace(/[^0-9]/ig,"")}`: header = `avatar1`
    return (
      <div className="personal sticky-body">
        <Result img={ <img src={ require(`../../assets/images/avatars/${header}.jpg`) } alt="头像" />} title={ username} message={ company } ></Result>
        <List renderHeader={() => '相关信息'}>
          <List.Item multipleLine>
            <List.Item.Brief>职位：{ post }</List.Item.Brief>
            <List.Item.Brief>简介：{ info }</List.Item.Brief>
          </List.Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
          <Button type="warning" onClick={ () => this.Logout() }>退出</Button>
        </WingBlank>
      </div>
    );
  }

  componentDidMount() {
    this.props.userAction()
    // this.$http.get('rest/users').then(res => {
    //   this.setState({
    //     info: res.data.data
    //   })
    // })
  }
}

export default withRouter(Personal)
