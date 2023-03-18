describe('footer and cookies', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
  })

    it("footer_AcceptCookies", () => {
      cy.get('[data-cy="btnCookiesAccept"]').click()
        cy.get('.cookies').should('not.exist').wait(6000)
    })

    it.only("Cookies_privacy policy", () => {
      cy.get('[data-cy="btnCookiesModal"]').click().wait(2000)
          cy.get('.cookieSettings__header__redirect')
            .invoke('removeAttr', 'target').click({force: true})
              cy.get('.terms__content').should('exist')
    })
})