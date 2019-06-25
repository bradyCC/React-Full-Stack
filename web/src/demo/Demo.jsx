/**
 * Created by brady on 2019/6/25.
 */

import React, {Component} from 'react'
import SubDemo from './SubDemo'

class Demo extends Component {
  constructor(props) {
    super(props)
    // 初始化state
    this.state = {
      name: 'SubDemo', // 子组件参数
      list: [
        {id: '1', text: 'SubContent1'},
        {id: '2', text: 'SubContent2'},
        {id: '3', text: 'SubContent3'},
      ],
      value: props.initValue,
    }
  }

  /**
   * 生命周期
   * componentWillMount() - 组件挂载前
   * componentDidMount() - 组件挂载完毕
   * componentWillReceiveProps(nextProps) - 组件接收父组件传值
   * shouldComponentUpdate() - 判断组件是否要更新
   * componentWillUpdate() - 组件更新前
   * componentDidUpdate() - 嘴贱更新完毕
   * componentWillUnmount() - 组件卸载
   * */

  // 组件挂载前
  componentWillMount() {
  }

  // 组件卸载
  componentWillUnmount() {
  }

  // 双向数据绑定
  handleInput = (e) => {
    this.setState({
      value: e.target.value
    }, () => {

    })
  }

  // 添加数据
  changeList = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          id: `${Number(this.state.list.slice(-1)[0].id) + 1}`,
          text: this.state.value
        }
      ]
    })

  }

  render() {
    return (
      // 注释内容
      <div>
        {/*注释内容*/}
        <h1>Hello, Demo</h1>

        {/*双向数据绑定*/}
        <input type="text" value={ this.state.value } onChange={ (e) => this.handleInput(e) } />
        {/*添加数据*/}
        <button onClick={ () => this.changeList() }>添加</button>

        {/*父子组件传参*/}
        <SubDemo name={ this.state.name } list={ this.state.list }></SubDemo>
      </div>
    )
  }

  // 组件挂载完毕
  componentDidMount() {
  }

}

// 初始化props - 通过静态属性defaultProps
Demo.defaultProps = {
  initValue: 'default'
}

export default Demo
