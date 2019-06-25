/**
 * Created by brady on 2019-06-25.
 */

import React, {Component} from 'react'
import { WhiteSpace, InputItem, TextareaItem, Button } from 'antd-mobile'

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: '', // 求职岗位
      info: '', // 个人介绍
    }
  }

  render() {
    return (
      <div>
        <p>UserInfo</p>
        <InputItem placeholder="请输入求职岗位" onChange={ val => this.handleChange('post', val) }>求职岗位</InputItem>
        <TextareaItem placeholder="请输入个人介绍" title="个人介绍" rows={3} onChange={ val => this.handleChange('info', val) }></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary">保存</Button>
      </div>
    );
  }
}

export default UserInfo
