/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { List, Badge } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { messageAction } from '../../redux/actions/messageAction'
import QueueAnim from 'rc-queue-anim'

// 关联
const mapStateToProps = state => ({
  users: state.messageReducer.users,
  chatMsgs: state.messageReducer.chatMsgs,
  unread: state.messageReducer.unread
})

// 装饰器
@connect(mapStateToProps, { messageAction: messageAction })
class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 查看信息
  handleMessage = (id, title) => {
    localStorage.to = id
    localStorage.title = title
    this.props.history.push('/chat')
  }

  render() {
    let { users, chatMsgs } = this.props
    let id = localStorage.id
    // 分组
    let groupMsgs = {}
    chatMsgs.forEach(item => {
      groupMsgs[item.chat_id] = groupMsgs[item.chat_id] || []
      groupMsgs[item.chat_id].push(item)
    })
    // 将分组数据转换为数组，排序将最新的消息展示在上方
    let chatLists = Object.values(groupMsgs).sort((a, b) => {
      return b[b.length-1].create_time - a[a.length-1].create_time
    })
    return (
      <div className="sticky-body">
        <QueueAnim type="left" delay={100}>
          {
            chatLists.map(item => {
              // 统计每组未读信息条数
              let badge = 0
              item.map(subItem => {
                return badge += (subItem.read === false && subItem.to === id)? 1: 0
              })
              // 每组最后一条信息
              let lastItem = item[item.length-1]
              return (
                <List key={lastItem._id}>
                  <List.Item arrow="horizontal" thumb={ require(`../../assets/images/avatars/avatar${ (lastItem.from === id? users[id].header: users[lastItem.from].header).replace(/[^0-9]/ig,"") }.jpg`) } extra={<Badge text={badge} />} multipleLine onClick={() => this.handleMessage(`${lastItem.from === id? lastItem.to: lastItem.from }`, lastItem.from === id? users[lastItem.to].username: users[lastItem.from].username)} >
                    {lastItem.content} <List.Item.Brief>{ lastItem.from === id? users[id].username: users[lastItem.from].username }</List.Item.Brief>
                  </List.Item>
                </List>
              )
            })
          }
        </QueueAnim>
      </div>
    );
  }

}

export default withRouter(Message)
