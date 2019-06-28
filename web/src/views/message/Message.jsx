/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>聊天信息</div>
    );
  }

  componentDidMount() {
    this.$http.get('rest/messageList').then(res => {

    })
  }
}

export default Message
