/**
 * Created by brady on 2019/6/25.
 */

import React, {Component} from 'react'
import { WingBlank, WhiteSpace, Toast, Button } from 'antd-mobile'

import { connect } from 'react-redux'
import { demoAction } from '../redux/actions/demoAction'

const mapStateToProps = state => ({
  count: state.demoReducer.count
})

@connect(mapStateToProps, { demoAction: demoAction })
class ReduxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  plusCount = () => {
    Toast.loading('操作中！')
    this.props.demoAction('PLUS_COUNT')
  }

  minusCount = () => {
    Toast.loading('操作中！')
    this.props.demoAction('MINUS_COUNT')
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(this.props)
    // console.log(nextProps)
    setTimeout(() => {
      Toast.hide()
    }, 2000)
  }

  render() {
    return (
      <div>
        <p>{ this.props.count }</p>
        <WingBlank>
          <Button type="primary" onClick={ () => this.plusCount() } style={{ touchAction: 'none' }}>PLUS</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="danger" onClick={ () => this.minusCount() } style={{ touchAction: 'none' }}>MINUS</Button>
        </WingBlank>
      </div>
    )
  }

  componentDidMount() {
    this.props.demoAction()
  }
}

// export default connect(mapStateToProps, { demoAction: demoAction })(ReduxDemo)
export default ReduxDemo
