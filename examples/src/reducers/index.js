import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { createRequestReducer } from 'redux-api-utility-library/dist/reducers'

const users = createRequestReducer('users')
const posts = createRequestReducer('posts')

export default combineReducers({
  posts,
  router,
  users,
})
