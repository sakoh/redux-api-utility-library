# Redux API Utility Library (RAUL)

[![Build Status](https://travis-ci.org/sakoh/redux-api-utility-library.svg?branch=master)](https://travis-ci.org/sakoh/redux-api-utility-library)
[![codecov](https://codecov.io/gh/sakoh/redux-api-utility-library/branch/master/graph/badge.svg)](https://codecov.io/gh/sakoh/redux-api-utility-library)

Redux API Utility Library (RAUL) is a library of higher order reducers, an API middleware, TypeScript data types,
and other utility functions to make building a Redux Application involving asynchronous calls to RESTful APIs
more simple.

## Install

```
npm i --save redux-api-utility-library`
```

## Higher Order Reducers

```js
import { createRequestReducer } from 'redux-api-utility-library/dist/reducers'

const users = createRequestReducer('users')
```

Now there is a reducer created fully equipped to deal with all the standard actions dispatched by the `apiMiddleware`.

## Middleware

```js
import { apiMiddleware } from 'redux-api-utility-library/dist/middleware'

const store = createStore(
  users: createRequestReducer('users'),
  {},
  applyMiddleware(apiMiddleware),
)
```

## Action creators

```js
import { createRequestAction } from 'redux-api-utility-library/dist/actions'

const action = createRequestAction('users', {
  method: 'GET',
  url: '/users',
  baseURL: 'https://jsonplaceholder.typicode.com',
})
```

this action when dispatched get handled by the `apiMiddleware` makes the network requests equivalent to the keys passed in as the second argument.
