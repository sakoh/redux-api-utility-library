import { ActionTypes, RequestErrorOrNull, ErrorAction } from '../types';
import { createActionTypeFromKey } from '../utils';

/**
 * A higher order reducer that creates a reducer that handles the error type actions returned by the `apiMiddleware`.
 * @param key A string value that is used to namespace an action type.
 * @return A reducer that handles the error actions dispatched by the `apiMiddleware`.
 */
export const createErrorReducer = key => (state = null, action) => {

  switch (action.type) {
    case createActionTypeFromKey(key, ActionTypes.ERROR):
      return action.payload.error;
    default:
      return state;
  }
};