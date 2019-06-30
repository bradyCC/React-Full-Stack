/**
 * Created by brady on 2019/6/25.
 */
import { LOGIN } from "../actionTypes"

const defaultState = {
  userInfo: [],
}

export const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        userInfo: action.payload,
      }
    default:
      return state
  }
}

