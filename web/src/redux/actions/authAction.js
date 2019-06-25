/**
 * Created by brady on 2019/6/25.
 */
import { LOGIN } from "../actionTypes"
import http from '../../utils/http'

export let authAction = (type = LOGIN, data) => {
  return (dispatch) => {
    http.post('login', data)
      .then(data => dispatch({
        type: type,
        payload: data
      }))
  }
}
