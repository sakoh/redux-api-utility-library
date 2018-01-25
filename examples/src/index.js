import React from 'react'
import ReactDOM from 'react-dom'

import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-utility-library/dist/middleware'

import reducers from './reducers' // Or wherever you keep your reducers
import App from './components/App'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeEnhancers(
    applyMiddleware(
      historyMiddleware,
      apiMiddleware,
    )
  )
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <App>
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/posts' component={Posts} />
        </div>
      </ConnectedRouter>
    </Provider>
  </App>,
  document.getElementById('root')
)
