import axios from 'axios'

describe('HomePage', () => {
  it('should have content in the header', () => {
    cy.visit('/')
      .get('h1.App-title').should('contain', 'Welcome to RAUL Examples')
  })
})

describe('UsersPage', () => {
  it('should have content in the header', () => {
    cy.visit('/users')
      .get('h1.App-title').should('contain', 'List of Users')
  })
})

describe('PostsPage', () => {
  it('should have content in the header', () => {
    cy.visit('/posts')
      .get('h1.App-title').should('contain', 'List of Posts')
  })
})
