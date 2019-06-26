/**
 * Created by brady on 2019-06-25.
 */

import React, {Component} from 'react'
import { WhiteSpace, InputItem, TextareaItem, Button } from 'antd-mobile'
import SelectAvatar from '../../components/selectavatar/SelectAvatar'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '', // 头像
      post: '', // 求职岗位
      info: '', // 个人介绍
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

  render() {
    return (
      <div>
        <SelectAvatar selectAvatar={ this.selectAvatar }></SelectAvatar>
        <InputItem placeholder="请输入求职岗位" onChange={ val => this.handleChange('post', val) }>求职岗位</InputItem>
        <TextareaItem placeholder="请输入个人介绍" title="个人介绍" rows={3} onChange={ val => this.handleChange('info', val) }></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary">保存</Button>
      </div>
    );
  }
}

export default UserInfo
