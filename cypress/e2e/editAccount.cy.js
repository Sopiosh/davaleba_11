describe('Edit Account Details', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should update account details successfully', () => {
    cy.fixture('userData').then((data) => {

      cy.visit('https://automationteststore.com/index.php?rt=account/edit')

      cy.get('#AccountFrm_firstname')
        .clear()
        .type(data.accountDetails.firstName)

      cy.get('#AccountFrm_lastname')
        .clear()
        .type(data.accountDetails.lastName)

      cy.get('#AccountFrm_telephone')
        .clear()
        .type(data.accountDetails.telephone)

      cy.get('button[title="Continue"]').click()

      cy.contains('Success: Your account has been successfully updated.')
        .should('be.visible')
    })
  })
})
