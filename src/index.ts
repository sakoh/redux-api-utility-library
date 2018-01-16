import axios, { AxiosResponse } from 'axios'
import { 
  Action, 
  SimpleAction, 
  DataAction, 
  RequestAction, 
  ErrorAction,  
} from './models'

export default () => (next: Function) => async (action: Action) => {
  next({ type: action.type } as SimpleAction)

  if(!action.payload) {
    return
  }
  
  const { payload } = action as RequestAction
  const { requestBody, actionTypes } = payload

  let response: AxiosResponse
  try {
    response = await axios(requestBody)

    if(response.status > 200) {
      next({
        type: actionTypes.failure,
        payload: {
          error: {
            message: payload.errorMessage,
          },
        },
      } as ErrorAction)
    }

    next({ 
      type: actionTypes.success,
      payload: {
        data: response.data,
      },
    } as DataAction)
  } catch (e) {
    next({
      type: actionTypes.failure,
      payload: {
        error: {
          message: e
        },
      },
    } as ErrorAction)
  }
}
