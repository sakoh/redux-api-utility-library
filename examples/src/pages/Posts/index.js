import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRequestAction } from 'redux-api-utility-library/dist/actions'
import Header from '../../components/Header'

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

const mapStateToProps = ({ users }) => users
const mapDispatchToProps = dispatch => dispatch(
  createRequestAction('posts', {
    method: 'GET',
    url: '/posts',
    baseURL: 'https://jsonplaceholder.typicode.com',
  })
)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
