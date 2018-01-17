import { createDataReducer } from '../data'
import { createActionTypeFromKey } from '../../utils'
import { DataAction, ActionTypes } from '../../models/'

describe('createReducer/data', () => {
  it('should return state by default', () => {
    const result = createDataReducer('hello')({}, { type: 'whatever' })

    expect(result).toEqual({})
  })

  it('should return the value of the action.payload.data', () => {
    const data = {
      name: 'hello',
    }
    const action: DataAction = {
      type: createActionTypeFromKey('hello', ActionTypes.DATA),
      payload: { data },
    }
    const result = createDataReducer('hello')({}, action)

    expect(result).toBe(data)
  })
})
