/**
 * Created by brady on 2019/6/28.
 */

import React, {Component} from 'react'
import { WhiteSpace, List, InputItem, Grid } from 'antd-mobile'
import './chat.less'
import { validata } from '../../utils/validata'
import { connect } from 'react-redux'
import { messageAction } from '../../redux/actions/messageAction'
import QueueAnim from 'rc-queue-anim'

import io from 'socket.io-client'
const socket = io(`${window.Domain.IpAddress}`)

// 关联
const mapStateToProps = state => ({
  users: state.messageReducer.users,
  chatMsgs: state.messageReducer.chatMsgs,
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
      showEmoji: false,
    }
  }

  // 数据改变时执行
  handleChange = (prop, val) => {
    // 更新状态
    this.setState({
      [prop]: val.trim()
    })
  }

  // 发送消息
  handleSend = () => {
    // 验证
    let validataArr = [
      {'val': this.state.content, 'type': 'isnull', 'name': '消息'},
    ]
    if (!validata(validataArr)) return false

    let { from, to, content } = this.state
    socket.emit('sendMsg', { from, to, content })
    this.setState({
      content: ``,
      showEmoji: false,
    })
  }

  // 切换显示表情
  handleToggle = () => {
    this.setState({
      showEmoji: !this.state.showEmoji
    })
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  render() {
    let { users, chatMsgs } = this.props
    let fromHeader, toHeader
    for (let i in users) {
      if (i === this.state.from) fromHeader = `avatar${users[i].header.replace(/[^0-9]/ig,"")}`
      if (i === this.state.to) toHeader = `avatar${users[i].header.replace(/[^0-9]/ig,"")}`
    }
    let emoji = '😀 😃 😅 🤣 😂 😍 🤩 😘 😋 😛 😜 🤪 😝 😔 😪 😴 😷 🤒 🤧 😵 🥵 😎 ☹ 😳 🥺 😱 😓 👻 👌 👍 👏 🤝 🙏 💪 👣 ☂ 🌂 🧳 👓 🕶 👕 👖 🧤 🎒 👠 👑 🎓 🧢 💄 💍 💼'.split(' ').map(item => ({text: item}))
    return (
      <div id="chat-page" className="sticky-body">
        <List>
          <QueueAnim type="alpha" delay={200} onEnd={ () => window.scrollTo(0, document.body.scrollHeight)}>
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
          </QueueAnim>
        </List>
        <WhiteSpace></WhiteSpace>
        <div className="send-message">
          <InputItem value={ this.state.content } placeholder="请输入" extra={ <div><span role="img" aria-label="表情" style={{ marginRight: '10px'}} onClick={ () => this.handleToggle() }>😜</span><span onClick={() => this.handleSend() }>发送</span></div> } onChange={ val => this.handleChange('content', val) } onFocus={ () => this.setState({ showEmoji: false })}></InputItem>
          {this.state.showEmoji? <Grid data={ emoji } columnNum={9} carouselMaxRow={4} isCarousel={true} onClick={(item) => this.setState({ content: this.state.content + item.text })}></Grid>: ''}
        </div>
      </div>
    )
  }

  async componentDidMount() {
    this.props.messageAction()
    // socket._callbacks.$receiveMsg = []
    // socket.on('receiveMsg', data => {
    //   console.log('222')
    // })
    this.$http.put('rest/readmsg', {from: this.state.to})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 更新显示列表
    // window.scrollTo(0, document.body.scrollHeight)
  }

  componentWillUnmount() {
    delete localStorage.title
    delete localStorage.to
  }

}

export default Chat
