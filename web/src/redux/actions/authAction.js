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
      dispatch({ type: type, payload: data.data })
      Toast.success(data.data.message, 2, () => {
        localStorage.token = data.data.token
        // 首次登陆，跳转到完善资料
        if (!data.data.header) {
          switch (data.data.type) {
            case '1':
              createHashHistory().push('/bossinfo')
              break
            case '2':
              createHashHistory().push('/userinfo')
              break
            default:
              break
          }
        // 完善资料后，再次登陆，跳转到对应列表页
        } else {
          localStorage.type = data.data.type
          switch (data.data.type) {
            case '1':
              createHashHistory().push('/userlist')
              break
            case '2':
              createHashHistory().push('/bosslist')
              break
            default:
              break
          }
        }
      })
    })
  }
}
