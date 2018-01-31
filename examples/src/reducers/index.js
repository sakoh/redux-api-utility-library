import { createRequestReducer } from 'redux-api-utility-library/dist/reducers'

export const users = createRequestReducer('users')
export const posts = createRequestReducer('posts')
