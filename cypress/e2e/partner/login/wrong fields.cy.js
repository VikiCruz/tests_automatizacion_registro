describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login') 
  })

//VALIDACION DE CAMPOS INCORRECTOS:
  it("Wrong email type", () => {
    cy.get('#emailLogin').type('v.cruzinlaze.com')
    cy.get('#passwordLogin').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    // cy.screenshot()
})

  it("Email type number", () => {
    cy.get('#emailLogin').type('44445645464')
    cy.get('#passwordLogin').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    // cy.screenshot()              
  }) 

  
  it.only("unregistered Email", () => {
    cy.get('#emailLogin').type('v@inlaze.com')
    cy.get('#passwordLogin').type('Test@12345')
    cy.get('.btnPrimary').click()
    cy.get(':nth-child(2) > .toast').should('exist').contains('Email does not exist')
    cy.wait(2000)
    // cy.screenshot()              
  }) 

  it("Wrong password", () => {
    cy.get('#emailLogin').type('v.cruz@inlaze.com')
    cy.get('#passwordLogin').type('Test12348')
    cy.get('.btnPrimary').click()
    cy.get(':nth-child(2) > .toast').should('exist').contains('Invalid password')
    cy.wait(2000)
    // cy.screenshot()
  })

})