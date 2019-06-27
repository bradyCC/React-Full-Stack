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
    return (
      <div style={{  position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar>
          {
            this.props.footerList.map((item, index) => {
              return (
                <TabBar.Item title={item.text} key={index}
                             icon={{ uri: require(`./images/${item.icon}.png`)}}
                             selectedIcon={{ uri: require(`./images/${item.icon}-selected.png`)}}
                             selected={ this.props.location.pathname === item.path}
                             onPress={() => this.props.history.push(item.path)}></TabBar.Item>
                )
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
