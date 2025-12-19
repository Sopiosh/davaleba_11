describe('Manage Address', () => {
  beforeEach(() => {
    cy.login()
  })

  it('should add a new address successfully', () => {
    cy.fixture('userData').then((data) => {

      cy.visit('https://automationteststore.com/index.php?rt=account/address')

      cy.contains('New Address').click()

      cy.get('#AddressFrm_firstname').type(data.address.firstName)
      cy.get('#AddressFrm_lastname').type(data.address.lastName)
      cy.get('#AddressFrm_address_1').type(data.address.address1)
      cy.get('#AddressFrm_city').type(data.address.city)
      cy.get('#AddressFrm_postcode').type(data.address.postcode)

      cy.get('#AddressFrm_country_id').select('United Kingdom')
      cy.get('#AddressFrm_zone_id').select('Greater London')

      cy.get('button[title="Continue"]').click()

      cy.contains('Your address has been successfully inserted')
        .should('be.visible')
    })
  })
})
