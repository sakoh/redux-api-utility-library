import { ActionTypes } from '../models'

export const createActionTypeFromKey = (key: string, type: string) => (
  `REDUX_API_MIDDLEWARE_${key.toUpperCase()}_${ActionTypes[type]}`
)
