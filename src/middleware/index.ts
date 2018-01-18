import { Action } from 'redux'
import axios, { AxiosResponse, AxiosInstance } from 'axios'
import {
  SimpleAction,
  DataAction,
  RequestAction,
  ErrorAction
} from '../models'

export const apiMiddleware = (axiosInstance: AxiosInstance = axios) => (next: Function) => async (action: Action) => {
  const requestAction = action as RequestAction
  const notRequestAction =
    !requestAction.payload ||
    !requestAction.payload.axiosRequestConfig ||
    !requestAction.payload.actionTypes ||
    !requestAction.payload.errorMessage

  if (notRequestAction) {
    return next(action)
  }

  const { type, payload } = requestAction
  const { axiosRequestConfig, actionTypes, errorMessage } = payload

  next({ type } as SimpleAction)

  try {
    const response: AxiosResponse = await axiosInstance.request(axiosRequestConfig)

    if (response.status > 200) {
      next({
        type: actionTypes.failure,
        payload: {
          error: {
            message: errorMessage,
          },
        },
      } as ErrorAction)
    }

    next({
      type: actionTypes.success,
      payload: {
        data: response.data,
      },
    } as DataAction)
  } catch (e) {
    next({
      type: actionTypes.failure,
      payload: {
        error: {
          message: errorMessage,
        },
      },
    } as ErrorAction)
  }
}
