describe('Landing / btns joinCommunity and Increase', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
  })
  
it("joinCommunity", () => {
  cy.get('[data-cy="joinCommunity"]').invoke('removeAttr', 'target').click()
  cy.url().should('eq', 'https://t.me/inlaze')
  cy.get('.tgme_page').should('exist')
  })

  it.only("Increase", () => {
    cy.get('[data-cy="btnIWantStart"]').click()
    cy.url().should('eq', 'https://partner.inlazetest.com/en/')
    cy.get('.register').should('exist')
    })
})

