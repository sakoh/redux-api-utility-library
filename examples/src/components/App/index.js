import React, { Component } from 'react'
import Proptypes from 'prop-types'
import './index.css'

class App extends Component {
  static propTypes = {
    children: Proptypes.element,
  }
  render () {
    return (
      <div className='App'>
        {this.props.children}
      </div>
    )
  }
}

export default App
