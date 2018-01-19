import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import { Route } from 'react-router-dom'
import { Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, ConnectedRouter } from 'react-router-redux'
// import { apiMiddleware } from '../../'

import { ErrorCatcher } from '../ErrorCatcher'
import { Home } from '../Home'
import { Posts } from '../Posts'
import { Users } from '../Users'

// import usersReducer from './users/reducers'
// import postsReducer from './posts/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // users: usersReducer,
    // posts: postsReducer,
    routing: routerReducer,
  })
  // applyMiddleware([
  //   apiMiddleware,
  // ]),
)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

export class App extends Component {
  render () {
    return (
      <ErrorCatcher>
        <Provider store={store}>
          <ConnectedRouter history={createHistory()}>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
            <Route path='/posts' exact component={Posts} />
          </ConnectedRouter>
        </Provider>
      </ErrorCatcher>
    )
  }
}
