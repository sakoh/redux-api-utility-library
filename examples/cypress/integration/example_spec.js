describe('HomePage', () => {
  it('should have content on the front page', () => {
    cy.visit('/')
      .get('h1.App-title').should('contain', 'Welcome to RAUL Examples')
  })
})

describe('UsersPage', () => {
  it('should have content on the front page', () => {
    cy.visit('/users')
      .get('h1.App-title').should('contain', 'List of Users')
  })
})

describe('PostsPage', () => {
  it('should have content on the front page', () => {
    cy.visit('/posts')
      .get('h1.App-title').should('contain', 'List of Posts')
  })
})
