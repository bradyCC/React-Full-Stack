/**
 * Created by brady on 2019-06-28.
 */
import { MESSAGE_LIST } from "../actionTypes"

const defaultState = {
  users: {},
  chatMsgs: [],
  unread: 0
}

export const messageReducer = (state = defaultState, action) => {
  switch(action.type) {
    case MESSAGE_LIST:
      return {
        ...state,
        users: action.payload.users,
        chatMsgs: action.payload.chatMsgs,
        unread: action.payload.chatMsgs.filter(item => item.from!== localStorage.id && !item.read).length
      }
    default:
      return state
  }
}
