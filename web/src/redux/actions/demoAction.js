/**
 * Created by brady on 2019-06-22.
 */
import { PLUS_COUNT } from "../actionTypes"

export let demoAction = (type) => {
  return (dispatch) => {
    dispatch({
      type: type? type: PLUS_COUNT
    })
  }
}
