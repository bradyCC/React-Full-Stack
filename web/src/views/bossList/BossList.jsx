/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import DataList from '../../components/datalist/DataList'

class BossList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userList: []
    }
  }

  render() {
    return (
      <div className="sticky-body">
        <DataList dataList={ this.state.userList }></DataList>
      </div>
    );
  }

  componentDidMount() {
    this.$http.get('rest/userList/1').then(res => {
      this.setState({
        userList: res.data.data
      })
    })
  }
}

export default BossList
