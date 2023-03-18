describe('footer', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
  })

//LINKS FOOTER:
    it("footer_Inlazepay", () => {
    cy.get('[data-cy="routerInlazepay"]')
      .invoke('removeAttr', 'target').click({force: true})
        cy.wait(6000)
    })

    it("footer_Blog", () => {
      cy.get('[data-cy="redirectBlogFooter"]').click()
      cy.wait(6000)
    })
    
    it("footer_Terms", () => {
      cy.get('[data-cy="redirectTerms"]')
        .invoke('removeAttr', 'target').click({force: true})
          cy.wait(6000)
    })

    it("footer_Faqs", () => {
      cy.get('[data-cy="routerFaqs"]').click()
      cy.wait(6000)
    })

    it("footer_redirectPrivacy", () => {
      cy.get('[data-cy="redirectPrivacy"]')
        .invoke('removeAttr', 'target').click({force: true})
          cy.wait(6000)
    })

    it.only("footer_WorkWithUs", () => {
      cy.get('[data-cy="redirectWorkWithUs"]')
        .invoke('removeAttr', 'target').click({force: true})
          cy.wait(6000)
      })

    it("footer_Socials", () => {
      cy.get('[data-cy="redirectSocials"]')
        .invoke('removeAttr', 'target').click({force: true})
          cy.wait(6000)
    })

    it("footer_wsp", () => {
      cy.get('.page__supportSection > :nth-child(1)')
      })

    it("footer_telegram", () => {
      cy.get('.page__supportSection > :nth-child(2)')
    })
})