import { Action } from 'redux'
import { ActionTypes } from '../models'
import { createActionTypeFromKey } from '../utils'

export const createLoadingReducer = (key: string) => (state: Boolean = false, action: Action) => {
  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.REQUEST):
      return true
    case createActionTypeFromKey(key, ActionTypes.DATA):
    case createActionTypeFromKey(key, ActionTypes.ERROR):
      return false
    default:
      return state
  }
}
