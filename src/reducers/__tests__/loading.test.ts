import { createLoadingReducer } from '../loading'
import { ActionTypes,
  DataAction,
  ErrorAction,
} from '../../types'
import { createActionTypeFromKey } from '../../utils'

describe('createReducer/loading', () => {
  it('should return state by default', () => {
    const action = {
      type: 'hello whatever',
    }
    const result = createLoadingReducer('hello')(false, action)

    expect(result).toBe(false)
  })

  it('should return true upon receiving a Request action type', () => {
    const action = {
      type: createActionTypeFromKey('hello', ActionTypes.REQUEST),
    }
    const result = createLoadingReducer('hello')(null, action)

    expect(result).toBe(true)
  })

  it('should return false upon receiving a DataAction', () => {
    const data = {
      name: 'hello',
    }
    const action: DataAction = {
      type: createActionTypeFromKey('hello', ActionTypes.DATA),
      payload: {
        data,
      },
    }
    const result = createLoadingReducer('hello')(null, action)

    expect(result).toEqual(false)
  })

  it('should return false upon receiving an ErrorAction', () => {
    const error = {
      message: 'hello error',
    }
    const action: ErrorAction = {
      type: createActionTypeFromKey('hello', ActionTypes.ERROR),
      payload: {
        error,
      },
    }
    const result = createLoadingReducer('hello')(null, action)

    expect(result).toEqual(false)
  })
})
