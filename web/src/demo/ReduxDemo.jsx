/**
 * Created by brady on 2019/6/25.
 */

import React, {Component} from 'react'

import { connect } from 'react-redux'
import { demoAction } from '../redux/actions/demoAction'

class ReduxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>{ this.props.count }</div>
    )
  }

  componentDidMount() {
    this.props.demoAction()
  }

}

const mapStateToProps = state => ({
  count: state.demoReducer.count
})

export default connect(mapStateToProps, { demoAction: demoAction })(ReduxDemo)
