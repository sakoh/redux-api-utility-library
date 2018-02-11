import { AxiosRequestConfig } from 'axios'
import { Reducer, Action } from 'redux'

/**
 * `An enum contains the three values that are related to three standard types of actions
 * that a Redux application typically handles during a network request. These actions (`REQUEST`, `DATA`,
 * and `ERROR`) relate respectively to the loading stage, the success call of an API endpoint, and an unsuccessful
 * call of an API endpoint.
 */
export enum ActionTypes {
  /**
   * the standard action type that is dispatched to the Redux store to set the application in a loading state
   * when network request that is in process.
   */
  REQUEST = 'REQUEST',

  /**
   * the standard action type that is dispatched to the reducers to set to an object in the Redux
   * store to a payload received as a result of a successful network request.
   */
  DATA = 'DATA',

  /**
   * the standard action type that is dispatched to the reducers to set to an object in the Redux
   * store to an error message received as a result of a failed network request.
   */
  ERROR = 'ERROR',
}

/**
 * This enum contains values, which are simply the standard methods types are used to making network requests in web development
 * languages and platforms.
 */
export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * An error that received by the Redux Store as a result of an unsuccessful network request.
 */
export interface RequestError {
  readonly message: string
}

/**
 * a union type between `RequestError` and `null`.
 */
export type RequestErrorOrNull = RequestError | null

/**
 * An action that changes a value in the Redux Store based on a payload of data received from
 * a successful network request.
 */
export interface DataAction extends Action {
  readonly payload: {
    readonly data: object,
  }
}

/**
 * An action that pushes an error message to the Redux store after an unsuccessful network request.
 */
export interface ErrorAction extends Action {
  readonly payload: {
    readonly error: RequestErrorOrNull,
  }
}

/**
 * An action that is received by the `apiMiddleware` to make network request to an API server,
 * while at the same time is dispatched to the reducers to set the Redux application in a loading state.
 */
export interface RequestAction extends Action {
  readonly payload: {
    readonly axiosRequestConfig: AxiosRequestConfig,
    readonly key: string,
    readonly errorMessage: string,
  }
}

/**
 * A type of reducer that handles all the standard types of actions that dispatched by the `apiMiddleware`.
 */
export type RequestReducer = Reducer<{
  readonly data: Reducer<{}>
  readonly error: Reducer<RequestErrorOrNull>
  readonly loading: Reducer<Boolean>,
}>
