/**
 * Created by brady on 2019/6/25.
 */
import { MESSAGE_LIST } from "../actionTypes"
import http from '../../utils/http'

export let messageAction = (type = MESSAGE_LIST) => {
  return async (dispatch) => {
    let res = await http.get('rest/messageList')
    dispatch({ type: type, payload: res.data.data })
  }
}
