import React, { Component } from 'react'
import Header from '../Header'

class Home extends Component {
  render () {
    return (
      <div>
        <Header>Welcome to RAUL Examples</Header>
        <p className='App-intro'>
          visit <a href='/users'>Users</a>
        </p>
      </div>
    )
  }
}

export default Home
