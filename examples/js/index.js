import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

global.console.log('App Component', App)
ReactDOM.render(<App />, document.getElementById('root'))
