Cypress.Commands.add('login', () => {
  cy.fixture('userData').then((data) => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')

    cy.get('#loginFrm_loginname')
      .clear()
      .type(data.user.loginName)

    cy.get('#loginFrm_password')
      .clear()
      .type(data.user.password)

    cy.get('button[title="Login"]').click()

    cy.url().should('include', 'account')
  })
})
