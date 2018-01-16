import { AxiosRequestConfig, AxiosPromise } from 'axios'
import { ActionCreator } from 'redux'

export interface SimpleAction {
  readonly type: String 
}

export interface DataAction extends SimpleAction {
  readonly payload: {
    readonly data: object 
  }
}

export interface ErrorAction extends SimpleAction {
  readonly payload: {
    readonly error: {
      readonly message: string
    }
  }
}

export interface RequestAction extends SimpleAction {
  readonly payload: {
    readonly requestBody: AxiosRequestConfig,
    readonly actionTypes: {
      success: string
      failure: string
    }
    readonly errorMessage: string
  }
}

export type Action = SimpleAction | DataAction | RequestAction | ErrorAction
