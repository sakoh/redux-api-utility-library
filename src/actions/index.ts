import { AxiosRequestConfig } from 'axios'
import { RequestAction, ActionTypes, DataAction, RequestError, ErrorAction } from '../models'
import { createActionTypeFromKey } from '../utils'

export const createRequestAction = (key: string, axiosRequestConfig: AxiosRequestConfig): RequestAction => ({
  type: createActionTypeFromKey(key, ActionTypes.REQUEST),
  payload: {
    axiosRequestConfig,
    errorMessage: 'There has been a server request error',
    key,
  },
})

export const createDataAction = (key: string, data: object): DataAction => ({
  type: createActionTypeFromKey(key, ActionTypes.DATA),
  payload: {
    data,
  },
})

export const createErrorAction = (key: string, error: RequestError): ErrorAction => ({
  type: createActionTypeFromKey(key, ActionTypes.ERROR),
  payload: {
    error,
  },
})
