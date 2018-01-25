import React, { Component } from 'react'
import Header from '../Header'

class Posts extends Component {
  render () {
    return (
      <div>
        <Header>List of Posts</Header>
        <p className='App-intro'>
          Return <a href='/'>Home</a>
        </p>
      </div>
    )
  }
}

export default Posts
