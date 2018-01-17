import { ActionTypes, RequestErrorOrNull, ErrorAction } from '../models'
import { createActionTypeFromKey } from '../utils'

export const createErrorReducer = (key: string) => (state: RequestErrorOrNull = null, action: ErrorAction): RequestErrorOrNull => {

  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.ERROR):
      return action.payload.error
    default:
      return state
  }
}
