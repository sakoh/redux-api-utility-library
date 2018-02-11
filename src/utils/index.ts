import { ActionTypes } from '../models'

/**
 * A function creates an action type namespaced by the `key` param to avoid collisions with other action types.
 * @param key A string value used to namespace the action type.
 * @return A string value that is to used for action types.
 */
export const createActionTypeFromKey = (key: string, type: string) => `REDUX_API_UTILITY_LIBRARY_${key.toUpperCase()}_${ActionTypes[type]}`
