import { ActionTypes, DataAction } from '../models'
import { createActionTypeFromKey } from '../utils'

export const createDataReducer = (key: string) => (state: object = {}, action: DataAction): object => {
  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.DATA):
      return action.payload.data
    default:
      return state
  }
}
