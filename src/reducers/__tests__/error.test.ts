import { createErrorReducer } from '../error'
import { ErrorAction, ActionTypes } from '../../models'
import { createActionTypeFromKey } from '../../utils'

describe('createReducer/error', () => {
  it('should return state by default', () => {
    const action = {
      type: 'hello whatever',
    }
    const result = createErrorReducer('hello')(null, action)

    expect(result).toBe(null)
  })

  it('should an RequestError upon receiving an ErrorAction', () => {
    const error = {
      message: 'hello error',
    }
    const action: ErrorAction = {
      type: createActionTypeFromKey('hello', ActionTypes.ERROR),
      payload: { error },
    }
    const result = createErrorReducer('hello')(null, action)

    expect(result).toEqual(error)
  })
})
