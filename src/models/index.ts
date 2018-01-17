import { AxiosRequestConfig } from 'axios'
import { Reducer } from 'redux'

export enum ActionTypes {
  REQUEST = 'REQUEST',
  DATA = 'DATA',
  ERROR = 'ERROR',
}

export interface RequestError {
  readonly message: string
}

export type RequestErrorOrNull = RequestError | null

export interface SimpleAction {
  readonly type: string,
}

export interface DataAction extends SimpleAction {
  readonly payload: {
    readonly data: object,
  }
}

export interface ErrorAction extends SimpleAction {
  readonly payload: {
    readonly error: RequestError,
  }
}

export interface RequestAction extends SimpleAction {
  readonly payload: {
    readonly axiosRequestConfig: AxiosRequestConfig,
    readonly actionTypes: {
      success: string
      failure: string,
    }
    readonly errorMessage: string,
  }
}

export type RequestReducer = Reducer<{
  readonly data: Reducer<{}>
  readonly error: Reducer<RequestErrorOrNull>
  readonly isInProgress: Reducer<Boolean>,
}>
