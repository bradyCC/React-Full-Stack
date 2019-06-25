/**
 * Created by brady on 2019-06-22.
 */
import { FETCH_COUNTER } from "../actionTypes"

export let counterAction = () => {
  console.log('actions')
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_COUNTER,
        payload: data
      }))
  }
}
