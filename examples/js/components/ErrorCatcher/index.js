import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorCatcher extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    // You can also log the error to an error reporting service
    global.console.log(error, info)
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
