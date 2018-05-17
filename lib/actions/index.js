import { AxiosRequestConfig } from 'axios';
import { RequestAction, ActionTypes, DataAction, RequestError, ErrorAction } from '../types';
import { createActionTypeFromKey } from '../utils';

/**
 * A function that return a `RequestAction`, which interacts with the API asynchronously.
 * @param key A string value that namespaces the action type.
 * @param axiosRequestConfig a body object, is based off of `AxiosRequestConfig` from `axios`, which is for configuring network requests.
 * @return A `RequestAction` which interacts with the API server via `apiMiddleware`.
 */
export const createRequestAction = (key, axiosRequestConfig) => ({
  type: createActionTypeFromKey(key, ActionTypes.REQUEST),
  payload: {
    axiosRequestConfig,
    errorMessage: 'There has been a server request error',
    key
  }
});

/**
 * A function returns a `DataAction`, based off of successful API calls made by the `apiMiddleware`.
 * @param key A string value that namespaces the action type.
 * @param data The data of a response returned by a successful network request made by the `apiMiddleware`.
 * @return A `DataAction` which changes the state of the Redux Store based off of a successful network request.
 */
export const createDataAction = (key, data) => ({
  type: createActionTypeFromKey(key, ActionTypes.DATA),
  payload: {
    data
  }
});

/**
 * A function returns a `ErrorAction`, based off of failed API calls made by the `apiMiddleware`.
 * @param key A string value that namespaces the action type.
 * @param error An error message returned by a failed network request made by the `apiMiddleware`.
 * @return An `ErrorAction` which changes the state of the Redux Store based off of a failed network request.
 */
export const createErrorAction = (key, error) => ({
  type: createActionTypeFromKey(key, ActionTypes.ERROR),
  payload: {
    error
  }
});