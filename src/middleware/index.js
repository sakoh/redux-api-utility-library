// @flow
import { Action, Dispatch } from 'redux'
import axios, { AxiosResponse } from 'axios'
import { RequestAction } from '../types'
import { createErrorAction, createDataAction } from '../actions'

/**
 * A middleware that handles server requests, processing and changing actions according to the keys in its
 * payload and sending them to the reducers. If the action has a payload with the keys of `key` or
 * `axiosRequestConfig`, it will be proccessed as a `RequestAction`, where it calls a RESTful API and returns
 * either a `DataAction` if it successfully resolves the network request, or a `ErrorAction` if the network
 * request fails.
 * @param store the Redux Store that hooks into the middleware.
 */
export const apiMiddleware = (store: Object = {}) => (next: Dispatch<Action>) => async (action: Action) => {
  const notRequestAction = !action.payload || !action.payload.axiosRequestConfig || !action.payload.key

  if (notRequestAction) {
    return next(action)
  }

  const { type, payload } = action
  const { axiosRequestConfig, key, errorMessage } = payload

  next({ type })

  try {
    const response: AxiosResponse = await axios(axiosRequestConfig)

    if (response.status > 200) {
      return next(createErrorAction(key, {
        message: errorMessage,
      }))
    }

    return next(createDataAction(key, response.data))
  } catch (e) {
    return next(createErrorAction(key, {
      message: errorMessage,
    }))
  }
}
