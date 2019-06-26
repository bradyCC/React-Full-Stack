/**
 * Created by brady on 2019/6/25.
 */

import React, { Component } from 'react'

class SubDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // 组件接收父组件传值
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(this.props) // 更新前
    // console.log(nextProps)  // 更新后
  }

  // 判断组件是否要执行更新
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps);
    // console.log(nextState);
    return true
  }

  // 组件更新前
  componentWillUpdate(nextProps, nextState, nextContext) {
  }

  render() {
    return (
      <div>
        <h2>Hello, {this.props.name}</h2>
        <ul>
          {
            this.props.list.map(item => {
              return <li key={ item.id }>{ item.text }</li>
            })
          }
        </ul>
      </div>
    )
  }

  // 组件更新完毕
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps)
    // console.log(prevState)
  }
}

export default SubDemo
