/**
 * Created by brady on 2019/6/25.
 */
import { LOGIN } from "../actionTypes"
import http from '../../utils/http'
import { createHashHistory } from 'history' // 如果是hash路由
import { Toast } from 'antd-mobile'

export let authAction = (type = LOGIN, data) => {
  return (dispatch) => {
    http.post('login', data).then(data => {
      if (data.data.code === 0) {
        dispatch({ type: type, payload: data.data })
        Toast.success('登录成功', 1, () => {
          localStorage.token = data.data.token
          createHashHistory().push('/main')
        })
      }
    })
  }
}
