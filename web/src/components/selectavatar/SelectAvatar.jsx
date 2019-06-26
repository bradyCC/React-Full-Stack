/**
 * Created by brady on 2019/6/26.
 */

import React, {Component} from 'react'
import { List, Grid } from 'antd-mobile';

class SelectAvatar extends Component {
  constructor(props) {
    super(props)
    this.avatarList = []
    this.state = {}

    for (let i = 0; i < 16; i ++) {
      this.avatarList.push({
        text: `头像${i+1}`,
        icon: require(`./avatars/avatar${i+1}.jpg`)
      })
    }
  }


  render() {
    const listHeader = '请选择头像'
    return (
      <div>
        <List renderHeader={ () => listHeader }></List>
        <Grid data={ this.avatarList } columnNum={4}></Grid>
      </div>
    )
  }

}

export default SelectAvatar
