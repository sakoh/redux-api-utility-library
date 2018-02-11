import { ActionTypes, DataAction } from '../models'
import { createActionTypeFromKey } from '../utils'

/**
 * A higher order reducer creates a reducer that handles actions that dispatched by the `apiMiddleware` after successful server calls.
 * @param key A string value that is used to namespace the action type.
 * @return A reducer that handles actions that dispatched by the `apiMiddleware` after successful server calls.
 */
export const createDataReducer = (key: string) => (state: object = {}, action: DataAction): object => {
  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.DATA):
      return action.payload.data
    default:
      return state
  }
}
