import { AxiosRequestConfig } from 'axios'
import {
  createRequestAction,
  createDataAction,
  createErrorAction,
} from '..'
import {
  RequestAction,
  Methods,
  DataAction,
  ErrorAction,
 } from '../../models'

describe('actions', () => {
  describe('createRequestAction', () => {
    it('should create a RequestAction', () => {
      const key = 'hello'
      const axiosRequestConfig: AxiosRequestConfig = {
        method: Methods.GET,
        baseURL: 'www.example.com',
        url: '/hello',
      }
      const expectedResult: RequestAction = {
        type: `REDUX_API_UTILITY_LIBRARY_${key.toUpperCase()}_REQUEST`,
        payload: {
          axiosRequestConfig,
          errorMessage: 'There has been a server request error',
          key: 'hello',
        },
      }
      const result = createRequestAction(key, axiosRequestConfig)

      expect(result).toEqual(expectedResult)
    })
  })

  describe('createDataAction', () => {
    it('should return a DataAction', () => {
      const key = 'hello'
      const expectedResult: DataAction = {
        type: `REDUX_API_UTILITY_LIBRARY_HELLO_DATA`,
        payload: {
          data: {
            foo: 'bar',
          },
        },
      }
      const result = createDataAction(key, { foo: 'bar' })

      expect(result).toEqual(expectedResult)
    })
  })

  describe('createErrorAction', () => {
    it('should return an ErrorAction', () => {
      const key = 'hello'
      const error = { message: 'You messed up bad' }
      const expectedResult: ErrorAction = {
        type: `REDUX_API_UTILITY_LIBRARY_HELLO_ERROR`,
        payload: { error },
      }
      const result = createErrorAction(key, error)

      expect(result).toEqual(expectedResult)
    })
  })
})
