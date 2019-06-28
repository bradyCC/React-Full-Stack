/**
 * Created by brady on 2019-06-22.
 */
import { combineReducers } from 'redux'

import { demoReducer } from './demoReducer'
import { counterReducer } from './counterReducer'

import { authReducer } from './authReducer'
import { messageReducer } from './messageReducer'

export default combineReducers({
  demoReducer,
  counterReducer,
  authReducer,
  messageReducer
})
