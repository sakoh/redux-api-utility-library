import { ActionTypes } from '../../types'
import { createActionTypeFromKey } from '..'

describe('utils', () => {
  describe('createActionTypeFromKey', () => {
    it('should return a certain string value', () => {
      const actionType = createActionTypeFromKey('FOO', ActionTypes.REQUEST)

      expect(actionType).toBe(`REDUX_API_UTILITY_LIBRARY_FOO_REQUEST`)
    })
  })
})
