import { Action } from 'redux'
import axios, { AxiosResponse, AxiosInstance } from 'axios'
import {
  SimpleAction,
  RequestAction,
} from '../models'
import { createErrorAction, createDataAction } from '../actions'

const notRequestAction = (action: RequestAction) =>
  !action.payload
  || action.payload === undefined
  || action.payload === null
  || !action.payload.axiosRequestConfig
  || action.payload.axiosRequestConfig === undefined
  || action.payload.axiosRequestConfig === null
  || !action.payload.key
  || !action.payload.key === undefined
  || !action.payload.key === null
  || !action.payload.errorMessage
  || action.payload.errorMessage === undefined
  || action.payload.errorMessage === null

export const apiMiddleware = (axiosInstance: AxiosInstance = axios) => (next: Function) => async (action: Action) => {

  if (notRequestAction(action as RequestAction)) {
    return next(action)
  }

  const { type, payload } = action as RequestAction
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
