import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorCatcher extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  constructor (props) {
    super(props)
    this.state = {
      hasError: false,
      errorMessage: '',
    }
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({
      hasError: true,
      errorMessage: `${error} ${info}`,
    })
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <p>{this.state.errorMessage}</p>
      )
    }
    return (
      <div>{this.props.children}</div>
    )
  }
}
