/**
 * Created by brady on 2019-06-28.
 */
import { MESSAGE_LIST } from "../actionTypes"

const defaultState = {
  users: {},
  chatMsgs: []
}

export const messageReducer = (state = defaultState, action) => {
  switch(action.type) {
    case MESSAGE_LIST:
      return {
        ...state,
        users: action.payload.users,
        chatMsgs: action.payload.chatMsgs
      }
    default:
      return state
  }
}
