/**
 * Created by brady on 2019/6/28.
 */

import React, {Component} from 'react'
import { WhiteSpace, List, InputItem } from 'antd-mobile'
import './chat.less'
import { validata } from '../../utils/validata'
import initIO from '../../utils/initIO'

import { connect } from 'react-redux'
import { messageAction } from '../../redux/actions/messageAction'

// 关联
const mapStateToProps = state => ({
  users: state.messageReducer.users,
  chatMsgs: state.messageReducer.chatMsgs
})

// 装饰器
@connect(mapStateToProps, { messageAction: messageAction })

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: localStorage.id,
      to: localStorage.to,
      content: ``,
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
    let { users, chatMsgs } = this.props
    let fromHeader, toHeader
    for (let i in users) {
      if (i === this.state.from) fromHeader = `avatar${users[i].header.replace(/[^0-9]/ig,"")}`
      if (i === this.state.to) toHeader = `avatar${users[i].header.replace(/[^0-9]/ig,"")}`
    }
    return (
      <div id="chat-page">
        <List>
          {
            chatMsgs.map(item => {
              let content
              if (item.from === this.state.from && item.to === this.state.to) {
                content = (
                  <List.Item key={ item._id } thumb={ require(`../../assets/images/avatars/${fromHeader}.jpg`) }  wrap="true">{ item.content }</List.Item>
                )
              } else if (item.from === this.state.to && item.to === this.state.from) {
                content = (
                  <List.Item className="chat-me" key={ item._id } extra={ <img src={ require(`../../assets/images/avatars/${toHeader}.jpg`) } alt="" wrap="true" /> }>{ item.content }</List.Item>
                  )
              }
              return (
                content
              )
            })
          }
        </List>
        <WhiteSpace></WhiteSpace>
        <div className="send-message">
          <InputItem value={ this.state.content } placeholder="请输入" extra={ <span onClick={() => this.handleSend() }>发送</span> } onChange={ val => this.handleChange('content', val) }></InputItem>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.messageAction()
  }

  // 离开时，删除localStorage
  componentWillUnmount() {
    delete localStorage.to
    delete localStorage.title
  }
}

export default Chat
