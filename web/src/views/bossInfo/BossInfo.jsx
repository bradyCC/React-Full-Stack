/**
 * Created by brady on 2019-06-25.
 */

import React, { Component } from 'react'
import { WhiteSpace, InputItem, TextareaItem, Button, Toast } from 'antd-mobile'
import SelectAvatar from '../../components/selectavatar/SelectAvatar'
import { validata } from "../../utils/validata";

class BossInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '', // 头像
      post: '', // 招聘职位
      company: '', // 公司名称
      salary: '', // 职位薪资
      info: '', // 职位要求
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
      {'val': this.state.post, 'type': 'isnull', 'name': '招聘职位'},
      {'val': this.state.company, 'type': 'isnull', 'name': '公司名称'},
      {'val': this.state.salary, 'type': 'isnull', 'name': '职位薪资'},
      {'val': this.state.info, 'type': 'isnull', 'name': '职位要求'},
    ]
    if (!validata(validataArr)) return false

    this.$http.put('rest/users', this.state)
      .then(res => {
        Toast.success(res.data.message, 2, () => {
          this.props.history.push('/bosslist')
        })
    })
  }

  render() {
    return (
      <div>
        <SelectAvatar selectAvatar={ this.selectAvatar }></SelectAvatar>
        <InputItem placeholder="请输入招聘职位" onChange={ val => this.handleChange('post', val) }>招聘职位</InputItem>
        <InputItem placeholder="请输入公司名称" onChange={ val => this.handleChange('company', val) }>公司名称</InputItem>
        <InputItem placeholder="请输入职位薪资" onChange={ val => this.handleChange('salary', val) }>职位薪资</InputItem>
        <TextareaItem placeholder="请输入职位要求" title="职位要求" rows={3} onChange={ val => this.handleChange('info', val) }></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary" onClick={ this.submit }>保存</Button>
      </div>
    );
  }
}

export default BossInfo
