/**
 * Created by brady on 2019/6/25.
 */
import http from '../../utils/http'
import { createHashHistory } from 'history' // 如果是hash路由
import { Toast } from 'antd-mobile'

export let authAction = (type, data) => {
  return async (dispatch) => {
    let res = await http.post('login', data)
    dispatch({ type: type, payload: res.data.user })
    Toast.success(res.data.message, 2, () => {
      localStorage.token = res.data.token
      // 首次登陆，跳转到完善资料
      if (!res.data.user.header) {
        switch (res.data.user.type) {
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
        localStorage.id = res.data.user._id
        localStorage.type = res.data.user.type
        switch (res.data.user.type) {
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
  }
}
