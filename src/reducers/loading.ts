import { Action } from 'redux'
import { ActionTypes } from '../models'
import { createActionTypeFromKey } from '../utils'

/**
 * A higher order reducer that creates a reducer that handles the actions related to loading state of the application.
 * @param key A string value that is used to namespace an action type.
 * @return A reducer that handles actions related to the loading state of the application.
 */
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
