describe('HomePage', () => {
  it('should have content on the front page', () => {
    cy.visit('/')
      .get('h1').should('contain', 'Welcome to React')
  })
})
