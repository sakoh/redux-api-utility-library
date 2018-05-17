import { AxiosRequestConfig } from 'axios'
import { Reducer, Action } from 'redux'

/**
 * `An enum contains the three values that are related to three standard types of actions
 * that a Redux application typically handles during a network request. These actions (`REQUEST`, `DATA`,
 * and `ERROR`) relate respectively to the loading stage, the success call of an API endpoint, and an unsuccessful
 * call of an API endpoint.
 */
export type ActionTypes = 
  | 'Request' 
  | 'Success' 
  | 'Error'

/**
 * This enum contains values, which are simply the standard methods types are used to making network requests in web development
 * languages and platforms.
 */
export type Methods = 
  | 'GET' 
  | 'POST' 
  | 'PUT' 
  | 'DELETE'

/**
 * An error that received by the Redux Store as a result of an unsuccessful network request.
 */
export type RequestError = {
  +message: string
}

/**
 * a union type between `RequestError` and `null`.
 */
export type RequestErrorOrNull = RequestError | null

/**
 * An action that changes a value in the Redux Store based on a payload of data received from
 * a successful network request.
 */
export type DataAction = Action & {
  +payload: {
    +data: object,
  }
}

/**
 * An action that pushes an error message to the Redux store after an unsuccessful network request.
 */
export type ErrorAction = Action & {
  +payload: {
    +error: RequestErrorOrNull,
  }
}

/**
 * An action that is received by the `apiMiddleware` to make network request to an API server,
 * while at the same time is dispatched to the reducers to set the Redux application in a loading state.
 */
export type RequestAction = Action & {
  +payload: {
    +axiosRequestConfig: AxiosRequestConfig,
    +key: string,
    +errorMessage: string,
  }
}

/**
 * A type of reducer that handles all the standard types of actions that dispatched by the `apiMiddleware`.
 */
export type RequestReducer = Reducer<{
  +data: Reducer<{}>,
  +error: Reducer<RequestErrorOrNull>,
  +loading: Reducer<Boolean>,
}>
