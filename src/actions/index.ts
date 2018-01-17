import { AxiosRequestConfig } from 'axios'
import { RequestAction, ActionTypes } from '../models'
import { createActionTypeFromKey } from '../utils'

export const sendRequest = (key: string, axiosRequestConfig: AxiosRequestConfig): RequestAction => ({
  type: createActionTypeFromKey(key, ActionTypes.REQUEST),
  payload: {
    axiosRequestConfig,
    actionTypes: {
      success: createActionTypeFromKey(key, ActionTypes.DATA),
      failure: createActionTypeFromKey(key, ActionTypes.ERROR),
    },
    errorMessage: 'There has been a server request error',
  },
})
