describe('Note App', () => {
  const user = {
    name: 'user testing',
    username: 'username testing',
    password: 'testpass'
  }
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    cy.request('POST', 'http://localhost:3001/api/users', user)
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })

  it('should fail if credentials are wrong', () => {
    cy.contains('Show Login').click()
    cy.get('[name="Username"]').type('username')
    cy.get('[name="Password"]').type('aaslkf')
    cy.get('#form-login-button').click()
    cy.get('.error').contains('Wrong credentials')
  })

  it('user can login', () => {
    cy.contains('Show Login').click()
    cy.get('[name="Username"]').type(user.username)
    cy.get('[name="Password"]').type(user.password)
    cy.get('#form-login-button').click()
    cy.contains('Create a new note')
    cy.get('#togglable-button').click()
    cy.get('[data-cy="note-form"]')
  })

  describe('after login', () => {
    beforeEach(() => {
      cy.request('POST', 'http://localhost:3001/api/login', {
        username: user.username,
        password: user.password
      }).then((response) => {
        localStorage.setItem('loggedNoteAppUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
    })
    it('can create a new note after login', () => {
      const noteContent = 'New note for testing'

      cy.contains('Create a new note')
      cy.get('#togglable-button').click()
      cy.get('[data-cy="note-form"] input[name="Add note"] ').type(noteContent)
      cy.get('[type="submit"]').click()
      cy.get('[data-cy="note-list-item"').last().contains(noteContent)
    })
  })
})
