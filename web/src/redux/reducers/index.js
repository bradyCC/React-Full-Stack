/**
 * Created by brady on 2019-06-22.
 */
import { combineReducers } from 'redux'

import { demoReducer } from './demoReducer'
import { counterReducer } from './counterReducer'

export default combineReducers({
  demoReducer,
  counterReducer,
})
