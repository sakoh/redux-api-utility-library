import React, { Component } from 'react'
import Header from '../Header'

class Home extends Component {
  render () {
    return (
      <div>
        <Header>List of Users</Header>
        <p className='App-intro'>
          Return <a href='/'>Home</a>
        </p>
      </div>
    )
  }
}

export default Home
