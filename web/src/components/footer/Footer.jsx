/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <TabBar>
          <TabBar.Item></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer
