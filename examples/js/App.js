import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Posts from './posts/components'
import Users from './users/components'

// import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  // combineReducers({
  //   ...reducers,
  //   routing: routerReducer
  // })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default () => (
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path='/' exact component={Home} /> 
      <Route path='users' component={Users}/>
      <Route path='posts' component={Posts}/>
    </Router>
  </Provider>
)
