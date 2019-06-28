/**
 * Created by brady on 2019-06-26.
 */

import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // 过滤footer渲染数据
    const footerList = this.props.footerList.filter(item => item.state !== false)
    return (
      <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
        <TabBar>
          {
            footerList.map((item, index) => {
              return <TabBar.Item title={item.text} key={index} icon={{uri: require(`./images/${item.icon}.png`)}} badge={item.badge}
                                  selectedIcon={{uri: require(`./images/${item.icon}-selected.png`)}}
                                  selected={this.props.location.pathname === item.path}
                                  onPress={() => this.props.history.push(item.path)}></TabBar.Item>
            })
          }
        </TabBar>
      </div>
    );
  }
}

Footer.propTypes = {
  footerList: PropTypes.array.isRequired,
}

export default withRouter(Footer)
