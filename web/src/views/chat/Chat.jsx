/**
 * Created by brady on 2019/6/28.
 */

import React, {Component} from 'react'
import { List, InputItem } from 'antd-mobile'
import './chat.less'
import { validata } from '../../utils/validata'

import initIO from '../../utils/initIO'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ``,
      from: ``,
      to: ``
    }
  }

  // 数据改变时执行
  handleChange = (prop, val) => {
    // 更新状态
    this.setState({
      [prop]: val.trim()
    })
  }

  handleSend = () => {
    // 验证
    let validataArr = [
      {'val': this.state.content, 'type': 'isnull', 'name': '消息'},
    ]
    if (!validata(validataArr)) return false

    initIO(this.state)
    // 发送成功，清空内容
    this.setState({ content: `` })
  }

  render() {
    return (
      <div id="chat-page">
        <List>
          <List.Item thumb={ require('../../assets/images/avatars/avatar1.jpg') }>你好1</List.Item>
          <List.Item thumb={ require('../../assets/images/avatars/avatar1.jpg') }>你好2</List.Item>
          <List.Item className="chat-me" extra={ <img src={ require('../../assets/images/avatars/avatar2.jpg') } alt="" /> }>你好3</List.Item>
          <List.Item className="chat-me" extra={ <img src={ require('../../assets/images/avatars/avatar2.jpg') } alt="" /> }>你好4</List.Item>
        </List>

        <div className="send-message">
          <InputItem value={ this.state.content } placeholder="请输入" extra={ <span onClick={() => this.handleSend() }>发送</span> } onChange={ val => this.handleChange('content', val) }></InputItem>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      from: localStorage.id,
      to: localStorage.to
    })
  }

  // 离开时，删除localStorage
  componentWillUnmount() {
    delete localStorage.to
    delete localStorage.title
  }
}

export default Chat
