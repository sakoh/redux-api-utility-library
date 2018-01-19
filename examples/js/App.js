import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import { apiMiddleware } from '../../'

import Home from './Home'
import Posts from './posts/components'
import Users from './users/components'

// import usersReducer from './users/reducers'
// import postsReducer from './posts/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // users: usersReducer,
    // posts: postsReducer,
    routing: routerReducer,
  }),
  // applyMiddleware([
  //   apiMiddleware,
  // ]),
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default () => (
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' exact component={Home} />
      <Route path='/users' exact component={Users} />
      <Route path='/posts' exact component={Posts} />
    </Router>
  </Provider>
)
