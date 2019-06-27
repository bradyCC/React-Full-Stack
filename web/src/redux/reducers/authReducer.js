/**
 * Created by brady on 2019/6/25.
 */
import { LOGIN, LOGOUT } from "../actionTypes"

const defaultState = {
  info: []
}

export const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        info: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        info: []
      }
    default:
      return state
  }
}

