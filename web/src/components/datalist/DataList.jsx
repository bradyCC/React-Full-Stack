/**
 * Created by brady on 2019-06-27.
 */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'

class DataList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let dataList = this.props.dataList.map(item => {
      item.header = `avatar${item.header.replace(/[^0-9]/ig,"")}`
      return item
    })
    return (
      <div style={{ marginBottom: '50px' }}>
        {
          dataList.map(item => {
            let content
            if (item.type === '1') {
              content = (
                <Card.Body>
                  <div>招聘岗位：{ item.post }</div>
                  <div>公司名称：{ item.company }</div>
                  <div>薪资：{ item.salary }</div>
                  <div>职位要求：{ item.info }</div>
                </Card.Body>
              )
            } else if (item.type === '2') {
              content = (
                <Card.Body>
                  <div>应聘岗位：{ item.post }</div>
                  <div>个人简介：{ item.info }</div>
                </Card.Body>
              )
            }
            return (
              <WingBlank key={item._id}>
                <div>
                  <WhiteSpace></WhiteSpace>
                  <Card>
                    <Card.Header thumb={ require(`../../assets/images/avatars/${item.header}.jpg`) } thumbStyle={{ width: '60px', height: '60px' }} extra={ item.username }/>
                    { content }
                  </Card>
                </div>
              </WingBlank>
            )
          })
        }
      </div>
    );
  }

}

DataList.propTypes = {
  dataList: PropTypes.array.isRequired,
}

export default DataList
