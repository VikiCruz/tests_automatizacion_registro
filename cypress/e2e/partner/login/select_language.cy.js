describe('Login_languaje', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')
    
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
          it("Logo", () => {
            cy.wait(2000)
            cy.get('.header__containerLogo').click()
            })
})