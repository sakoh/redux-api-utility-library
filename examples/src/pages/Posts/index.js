import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createRequestAction } from 'redux-api-utility-library/dist/actions'
import Header from '../../components/Header'

class Posts extends Component {
  static propTypes = {
    getPosts: PropTypes.func,
    posts: PropTypes.object,
  }

  async componentWillMount () {
    await this.props.getPosts()
  }

  render () {
    return (
      <div>
        <Header>List of Posts</Header>
        <ul>{this.props.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        <p className='App-intro'>
          Return <a href='/'>Home</a>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ posts: state.posts.data })
const mapDispatchToProps = dispatch => ({
  getPosts () {
    dispatch(
      createRequestAction('posts', {
        method: 'GET',
        url: '/posts',
        baseURL: 'https://jsonplaceholder.typicode.com',
      })
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
