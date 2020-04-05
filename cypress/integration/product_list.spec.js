/// <reference types="cypress" />

context('Product List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  // Although local storage is automatically cleared
  // in between tests to maintain a clean state
  // sometimes we need to clear the local storage manually

  it('product list', () => {
    // https://on.cypress.io/clearlocalstorage
    expect(cy.get('.ProductCard')).to.exist;
  })
})
