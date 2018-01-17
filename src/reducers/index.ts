import { combineReducers } from 'redux'
import { RequestReducer } from '../models'
import { createDataReducer } from './data'
import { createErrorReducer } from './error'
import { createIsInProgressReducer } from './isInProgress'

export const createReducer = (key: string): RequestReducer => combineReducers({
  [key]: combineReducers({
    data: createDataReducer(key),
    error: createErrorReducer(key),
    isInProgress: createIsInProgressReducer(key),
  }),
})
