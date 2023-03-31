Cypress.Commands.add('login', (user) => {
  cy.request('POST', 'http://localhost:3001/api/login', {
    username: user.username,
    password: user.password
  }).then((response) => {
    localStorage.setItem('loggedNoteAppUser', JSON.stringify(response.body))
    cy.visit('http://localhost:3000')
  })
})
