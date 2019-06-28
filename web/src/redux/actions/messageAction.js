/**
 * Created by brady on 2019/6/25.
 */
import { MESSAGE_LIST } from "../actionTypes"
import http from '../../utils/http'

export let messageAction = () => {
  return (dispatch) => {
    http.get('rest/messageList')
      .then(data => {
      dispatch({ type: MESSAGE_LIST, payload: data.data.data })
    })
  }
}
