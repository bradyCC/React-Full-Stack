/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import DataList from '../../components/datalist/DataList'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bossList: []
    }
  }

  render() {
    return (
      <div className="sticky-body">
        <DataList dataList={ this.state.bossList }></DataList>
      </div>
    );
  }

  componentDidMount() {
    this.$http.get('rest/userList/2').then(res => {
      this.setState({
        bossList: res.data.data
      })
    })
  }
}

export default UserList
