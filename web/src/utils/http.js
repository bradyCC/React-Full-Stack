/**
 * Created by brady on 2019-06-23.
 */
import { createHashHistory } from 'history' // 如果是hash路由
import axios from 'axios'
import { Toast } from 'antd-mobile'

const http = axios.create({
  baseURL: `${window.Domain.IpAddress}/web/api`
})

// axios 请求头
http.interceptors.request.use(config => {
  let content = config.method === 'get'? '查询中': '提交中'
  Toast.loading(content)
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, err => {
  return Promise.reject(err)
})

// axios 拦截器
http.interceptors.response.use(res => {
  Toast.hide()
  console.log(res.data)
  if (res.status === 200 && res.data.code === 11000) {
    Toast.fail('用户名已存在')
    return Promise.reject(res.data.message)
  }
  return res
},err => {
  if (err.response) {
    if (err.response.status === 401 || err.response.status === 422 || err.response.data.code === 3600) {
      createHashHistory().push('/login')
    }
    Toast.fail(err.response.data.message)
  } else {
    // alert(JSON.stringify(err))
  }
  return Promise.reject(err)
})

export default http
