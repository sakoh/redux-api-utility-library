import axios from 'axios'
import { apiMiddleware } from '..'
import { createRequestAction } from '../../actions'
import { createActionTypeFromKey } from '../../utils'
import { ActionTypes } from '../../models'

describe('apiMiddleware', () => {
  it('should dispatch simple request action', async () => {
    const next = jest.fn()
    await apiMiddleware()(next)({ type: 'sadas' })

    expect(next).toHaveBeenCalledWith({ type: 'sadas' })
  })

  it('should dispatch a data action upon successful network request', async () => {
    const next = jest.fn()
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

    await apiMiddleware()(next)(
      createRequestAction('users', {
        method: 'GET',
        url: '/users',
        baseURL: 'https://jsonplaceholder.typicode.com',
      }),
    )

    expect(next).toHaveBeenLastCalledWith({
      type: createActionTypeFromKey('users', ActionTypes.DATA),
      payload: {
        data,
      },
    })
  })

  it('should dispatch an error action when network request fails', async () => {
    const next = jest.fn()

    await apiMiddleware()(next)(
      createRequestAction('users', {
        method: 'GET',
        url: '/users',
        baseURL: 'https://doesntexistbs.com',
      }),
    )

    expect(next).toHaveBeenLastCalledWith({
      type: createActionTypeFromKey('users', ActionTypes.ERROR),
      payload: {
        error: {
          message: 'There has been a server request error',
        },
      },
    })
  })
})
