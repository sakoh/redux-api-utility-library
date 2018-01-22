import { ActionTypes } from '../models'

export const createActionTypeFromKey = (key: string, type: string) => `REDUX_API_UTILITY_LIBRARY_${key.toUpperCase()}_${ActionTypes[type]}`
