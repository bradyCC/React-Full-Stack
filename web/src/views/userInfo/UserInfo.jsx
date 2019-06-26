/**
 * Created by brady on 2019-06-25.
 */

import React, { Component } from 'react'
import { WhiteSpace, InputItem, TextareaItem, Button, Toast } from 'antd-mobile'
import SelectAvatar from '../../components/selectavatar/SelectAvatar'
import { validata } from "../../utils/validata";

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '', // 头像
      post: '', // 求职岗位
      info: '', // 个人简介
    }
  }

  // 设置头像
  selectAvatar = (header) => {
    this.setState({
      header
    })
  }

  // 数据改变时执行
  handleChange = (prop, val) => {
    // 更新状态
    this.setState({
      [prop]: val
    })
  }

  // 保存
  submit = () => {
    // 验证
    let validataArr = [
      {'val': this.state.header, 'type': 'isnull', 'name': '头像'},
      {'val': this.state.post, 'type': 'isnull', 'name': '求职岗位'},
      {'val': this.state.info, 'type': 'isnull', 'name': '个人简介'},
    ]
    if (!validata(validataArr)) return false

    this.$http.put('rest/users', this.state)
      .then(res => {
        Toast.success(res.data.message, 2, () => {
          this.props.history.push('/main')
        })
    })
  }

  render() {
    return (
      <div>
        <SelectAvatar selectAvatar={ this.selectAvatar }></SelectAvatar>
        <InputItem placeholder="请输入求职岗位" onChange={ val => this.handleChange('post', val) }>求职岗位</InputItem>
        <TextareaItem placeholder="请输入个人简介" title="个人简介" rows={3} onChange={ val => this.handleChange('info', val) }></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={ this.submit }>保存</Button>
      </div>
    );
  }
}

export default UserInfo
