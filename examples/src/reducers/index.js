import { combineReducers } from 'redux'
import { createRequestReducer } from 'redux-api-utility-library/dist/reducers'

const users = createRequestReducer('users')
const posts = createRequestReducer('posts')

export default combineReducers({ users, posts })
