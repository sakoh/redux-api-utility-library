import { ActionTypes, DataAction } from '../types';
import { createActionTypeFromKey } from '../utils';

/**
 * A higher order reducer creates a reducer that handles actions that dispatched by the `apiMiddleware` after successful server calls.
 * @param key A string value that is used to namespace the action type.
 * @return A reducer that handles actions that dispatched by the `apiMiddleware` after successful server calls.
 */

export const createDataReducer = key => (state = {}, action) => {
  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.DATA):
      return action.payload.data;
    default:
      return state;
  }
};