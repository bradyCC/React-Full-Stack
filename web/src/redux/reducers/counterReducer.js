/**
 * Created by brady on 2019-06-22.
 */

import { FETCH_COUNTER } from "../actionTypes"

const defaultState = {
  test: []
}

export const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_COUNTER:
      return {
        ...state,
        test: action.payload
      }
    default:
      return state
  }
}
