describe('Change Password', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should change password successfully', () => {
    cy.fixture('userData').then((data) => {

      cy.visit('https://automationteststore.com/index.php?rt=account/password')

      cy.get('#PasswordFrm_current_password')
        .type(data.user.password)

      cy.get('#PasswordFrm_password')
        .type(data.user.password)

      cy.get('#PasswordFrm_confirm')
        .type(data.user.password)

      cy.get('button[title="Continue"]').click()

      cy.contains('Success: Your password has been successfully updated.')
        .should('be.visible')
    })
  })
})
