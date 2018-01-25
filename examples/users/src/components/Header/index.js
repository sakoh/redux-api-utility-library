import React, { Component } from 'react'
import Proptypes from 'prop-types'
import logo from './logo.svg'

class Header extends Component {
  static propTypes = {
    children: Proptypes.element,
  }

  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>{this.props.children}</h1>
      </header>
    )
  }
}

export default Header
