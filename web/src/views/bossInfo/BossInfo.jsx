/**
 * Created by brady on 2019-06-25.
 */

import React, {Component} from 'react'
import { WhiteSpace, InputItem, TextareaItem, Button } from 'antd-mobile'

class BossInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '', // 头像
      post: '', // 招聘职位
      info: '', // 职位要求
      company: '', // 公司名称
      salary: '' // 职位薪资
    }
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
        <p>bossinfo</p>
        <InputItem placeholder="请输入招聘职位" onChange={ val => this.handleChange('post', val) }>招聘职位</InputItem>
        <InputItem placeholder="请输入公司名称" onChange={ val => this.handleChange('company', val) }>公司名称</InputItem>
        <InputItem placeholder="请输入职位薪资" onChange={ val => this.handleChange('salary', val) }>职位薪资</InputItem>
        <TextareaItem placeholder="请输入职位要求" title="职位要求" rows={3} onChange={ val => this.handleChange('info', val) }></TextareaItem>
        <WhiteSpace></WhiteSpace>
        <Button type="primary">保存</Button>
      </div>
    );
  }
}

export default BossInfo
