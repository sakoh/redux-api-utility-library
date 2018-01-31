import { Action, Dispatch } from 'redux'
import axios, { AxiosResponse } from 'axios'
import { RequestAction } from '../models'
import { createErrorAction, createDataAction } from '../actions'

export const apiMiddleware = (store: Object = {}) => (next: Dispatch<Action>) => async (action: Action) => {
  const notRequestAction = !(action as RequestAction).payload || !(action as RequestAction).payload.axiosRequestConfig || !(action as RequestAction).payload.key

  if (notRequestAction) {
    return next(action)
  }

  const { type, payload } = action as RequestAction
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
