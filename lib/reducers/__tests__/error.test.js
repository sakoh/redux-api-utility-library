import { createErrorReducer } from '../error';
import { ErrorAction, ActionType } from '../../types';
import { createActionTypeFromKey } from '../../utils';

describe('createReducer/error', () => {
  it('should return state by default', () => {
    const action = {
      type: 'hello whatever'
    };
    const result = createErrorReducer('hello')(null, action);

    expect(result).toBe(null);
  });

  it('should an RequestError upon receiving an ErrorAction', () => {
    const error = {
      message: 'hello error'
    };
    const action = {
      type: createActionTypeFromKey('hello', 'ERROR'),
      payload: { error }
    };
    const result = createErrorReducer('hello')(null, action);

    expect(result).toEqual(error);
  });
});