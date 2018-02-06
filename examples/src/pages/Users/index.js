import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createRequestAction } from 'redux-api-utility-library/dist/actions'
import Header from '../../components/Header'

class Users extends Component {
  static propTypes = {
    getUsers: PropTypes.func,
    users: PropTypes.object,
  }

  componentWillMount () {
    this.props.getUsers()
  }

  render = () => {
    const { loading, data } = this.props.users

    if (loading) return <div>...loading</div>

    return (
      <div>
        <Header>List of Users</Header>
        <ul>
          {data.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
        <p className='App-intro'>
          Return <a href='/'>Home</a>
        </p>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })
const mapDispatchToProps = dispatch => ({
  getUsers () {
    dispatch(
      createRequestAction('users', {
        method: 'GET',
        url: '/users',
        baseURL: 'https://jsonplaceholder.typicode.com',
      })
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
