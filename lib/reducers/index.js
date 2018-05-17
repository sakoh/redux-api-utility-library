import { combineReducers } from 'redux';
import { RequestReducer } from '../types';
import { createDataReducer } from './data';
import { createErrorReducer } from './error';
import { createLoadingReducer } from './loading';

/**
 * A higher order reducer that creates a `RequestReducer`, the type of reducer used
 * to handle the different types of actions that are processed and dispatched by the `apiMiddleware`.
 * @param key A string value used to set a given namespace for the reducer for clean separation of concerns.
 * @return A `RequestReducer` that handles all standard API-related actions in `RAUL`.
 */
export const createRequestReducer = key => combineReducers({
  data: createDataReducer(key),
  error: createErrorReducer(key),
  loading: createLoadingReducer(key)
});