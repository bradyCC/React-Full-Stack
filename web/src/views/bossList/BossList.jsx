/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'

class BossList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }

  render() {
    return (
      <div>Boss列表</div>
    );
  }

  componentDidMount() {
    this.$http.get('rest/users/2').then(res => {
      this.setState({
        userList: res.data.data
      })
    })
  }
}

export default BossList
