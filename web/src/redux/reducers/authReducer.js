/**
 * Created by brady on 2019/6/25.
 */
import { LOGIN, LOGOUT } from "../actionTypes"

const defaultState = {
  isAuth: false,
  info: []
}

export const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        info: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        info: []
      }
    default:
      return state
  }
}

