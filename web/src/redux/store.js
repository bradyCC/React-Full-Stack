/**
 * Created by brady on 2019-06-22.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const defaultState = {}
const middleware = [thunk]

export const store = createStore(reducers, defaultState, composeWithDevTools(applyMiddleware(...middleware)))
