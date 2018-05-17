import { AxiosRequestConfig } from 'axios';
import { Reducer, Action } from 'redux';

/**
 * `An enum contains the three values that are related to three standard types of actions
 * that a Redux application typically handles during a network request. These actions (`REQUEST`, `DATA`,
 * and `ERROR`) relate respectively to the loading stage, the success call of an API endpoint, and an unsuccessful
 * call of an API endpoint.
 */


/**
 * This enum contains values, which are simply the standard methods types are used to making network requests in web development
 * languages and platforms.
 */


/**
 * An error that received by the Redux Store as a result of an unsuccessful network request.
 */


/**
 * a union type between `RequestError` and `null`.
 */


/**
 * An action that changes a value in the Redux Store based on a payload of data received from
 * a successful network request.
 */


/**
 * An action that pushes an error message to the Redux store after an unsuccessful network request.
 */


/**
 * An action that is received by the `apiMiddleware` to make network request to an API server,
 * while at the same time is dispatched to the reducers to set the Redux application in a loading state.
 */


/**
 * A type of reducer that handles all the standard types of actions that dispatched by the `apiMiddleware`.
 */