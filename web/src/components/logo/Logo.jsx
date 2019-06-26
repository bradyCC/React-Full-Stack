/**
 * Created by brady on 2019-06-22.
 */

import React, { Component } from 'react'
import logo from './logo.png'
import './logo.less'

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
    )
  }
}

export default Logo
