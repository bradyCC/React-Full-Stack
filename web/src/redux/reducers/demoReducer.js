/**
 * Created by brady on 2019/6/25.
 */
import { PLUS_COUNT, MINUS_COUNT } from "../actionTypes"

const defaultState = {
  count: 0
}

export const demoReducer = (state = defaultState, action) => {
  switch(action.type) {
    case PLUS_COUNT:
      return {
        count: state.count + 1
      }
    case MINUS_COUNT:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}
