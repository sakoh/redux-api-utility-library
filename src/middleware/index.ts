import { Action } from 'redux'
import axios, { AxiosResponse, AxiosInstance } from 'axios'
import {
  SimpleAction,
  RequestAction,
} from '../models'
import { createErrorAction, createDataAction } from '../actions'

export const apiMiddleware = (axiosInstance: AxiosInstance = axios) => (next: Function) => async (action: Action) => {
  const requestAction = action as RequestAction
  const notRequestAction =
    !requestAction.payload ||
    !requestAction.payload.axiosRequestConfig ||
    !requestAction.payload.key ||
    !requestAction.payload.errorMessage

  if (notRequestAction) {
    return next(action)
  }

  const { type, payload } = requestAction
  const { axiosRequestConfig, key, errorMessage } = payload

  next({ type } as SimpleAction)

  try {
    const response: AxiosResponse = await axiosInstance.request(axiosRequestConfig)

    if (response.status > 200) {
      next(createErrorAction(key, {
        message: errorMessage,
      }))
    }

    next(createDataAction(key, response.data))
  } catch (e) {
    next(createErrorAction(key, {
      message: errorMessage,
    }))
  }
}
