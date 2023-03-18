describe('Landing / languaje', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
    
  })
       //ES:
        it("ES", () => {
          cy.get('.modalLanguage ').click()
          cy.get('.dropdown-menu.show').should('exist')
          cy.get('.dropdown-menu.show > :nth-child(1)').click()
          cy.wait(3000)
          })

        //PT:
        it(" PT", () => {  
          cy.get('.modalLanguage ').click()
          cy.get('.dropdown-menu.show').should('exist')
          cy.get('.dropdown-menu.show > :nth-child(2)').click()
          cy.wait(3000)
          })

        //EN:
        it("EN", () => {
          cy.wait(2000)
          cy.get('.modalLanguage ').click()
          cy.get('.dropdown-menu.show').should('exist')
          cy.get('.dropdown-menu.show > :nth-child(1)').click()
          cy.wait(1000)
          cy.get('.modalLanguage ').click()
          cy.get('.dropdown-menu.show').should('exist')
          cy.get('.dropdown-menu.show > :nth-child(1)').click()
          })


        //Logo:
          it.only("Logo", () => {
            cy.wait(2000)
            cy.get('.navigation > [data-cy="headerLogo"]').click()
            cy.url().should('eq', 'https://inlazetest.com/en/')
            })
})