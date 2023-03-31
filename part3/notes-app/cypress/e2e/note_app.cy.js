/* eslint-disable no-undef */
describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })

  it('login form can be opened', () => {
    cy.contains('Show Login').click()
  })
})
