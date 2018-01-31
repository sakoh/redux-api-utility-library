import React from 'react'
import Header from '../../components/Header'

const Home = () => (
  <div>
    <Header>Welcome to RAUL Examples</Header>
    <p className='App-intro'>
      visit <a href='/users'>Users</a>
    </p>
    <p className='App-intro'>
      visit <a href='/posts'>Posts</a>
    </p>
  </div>
)

export default Home
