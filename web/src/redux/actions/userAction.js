/**
 * Created by brady on 2019/6/25.
 */
import { USER } from "../actionTypes"
import http from '../../utils/http'

export let userAction = (type = USER) => {
  return async (dispatch) => {
    let res = await http.get('rest/users')
    dispatch({ type: type, payload: res.data.data })
  }
}
