/**
 * Created by brady on 2019-06-28.
 */
import { USER } from "../actionTypes"

const defaultState = {
  user: {}
}

export const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
