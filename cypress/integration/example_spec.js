describe('HomePage', () => {
  it('should have content on the front page', () => {
    cy.visit('/')
      .get('p').should('contain', `Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. Check the render method of \`App\`. [object Object]`)
  })
})
