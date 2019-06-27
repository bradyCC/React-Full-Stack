/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bossList: []
    }
  }

  render() {
    return (
      <div>用户列表</div>
    );
  }

  componentDidMount() {
    this.$http.get('rest/users/1').then(res => {
      this.setState({
        bossList: res.data.data
      })
    })
  }
}

export default UserList
