import { combineReducers } from 'redux'
import { RequestReducer } from '../models'
import { createDataReducer } from './data'
import { createErrorReducer } from './error'
import { createInProgressReducer } from './InProgress'

export const createRequestReducer = (key: string): RequestReducer => combineReducers({
  [key]: combineReducers({
    data: createDataReducer(key),
    error: createErrorReducer(key),
    isInProgress: createInProgressReducer(key),
  }),
})
