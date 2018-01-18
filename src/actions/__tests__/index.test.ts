import { AxiosRequestConfig } from 'axios'
import { sendRequest } from '..'
import { RequestAction, Methods } from '../../models'

describe('actions', () => {
  describe('sendRequest', () => {
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
          actionTypes: {
            success: `REDUX_API_UTILITY_LIBRARY_${key.toUpperCase()}_DATA`,
            failure: `REDUX_API_UTILITY_LIBRARY_${key.toUpperCase()}_ERROR`,
          },
          errorMessage: 'There has been a server request error',
        },
      }
      const result = sendRequest(key, axiosRequestConfig)

      expect(result).toEqual(expectedResult)
    })
  })
})
