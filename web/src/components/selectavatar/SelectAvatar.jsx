/**
 * Created by brady on 2019/6/26.
 */

import React, { Component } from 'react'
import { List, Grid } from 'antd-mobile';
import PropTypes from 'prop-types'
import './selectavatar.less'

class SelectAvatar extends Component {
  constructor(props) {
    super(props)
    this.avatarList = []
    this.state = {
      header: '' // 头像
    }

    // 生成头像列表
    for (let i = 0; i < 16; i ++) {
      this.avatarList.push({
        text: `头像${i+1}`,
        icon: require(`./avatars/avatar${i+1}.jpg`)
      })
    }
  }

  // 选择头像
  selectAvatar = (el) => {
    this.setState({
      header: el.icon
    }, () => {
      this.props.selectAvatar(el.text)
      // this.props.selectAvatar(this.state.header)
    })
  }

  render() {
    return (
      <div>
        <List renderHeader={ () => !this.state.header? '请选择头像': (
          <div className="avatar-div">
            <span>您选择的头像是：</span>
            <img src={ this.state.header } alt="" className="select-avatar" />
          </div>
        ) }></List>
        <Grid data={ this.avatarList } columnNum={4} onClick={ (el) => this.selectAvatar(el)}></Grid>
      </div>
    )
  }

}

SelectAvatar.propTypes = {
  selectAvatar: PropTypes.func.isRequired,
}

export default SelectAvatar
