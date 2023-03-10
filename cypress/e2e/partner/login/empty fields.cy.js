describe('login', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')  
  })
  
  //VALIDACION DE CAMPOS VACIOS:

  it("Empty email", () => {
    cy.get('#emailLogin').type('{enter}')
    cy.get('#passwordLogin').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    // cy.screenshot()
    })


  it("Empty Password", () => {
    cy.get('#emailLogin').type('v.cruz@inlaze.com')
    cy.get('#passwordLogin').type('{enter}')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    // cy.screenshot() 
  })

  it("Empty form", () => {
    cy.get('#emailLogin').type('{enter}')
    cy.get('#passwordLogin').click()
    cy.get('.btnPrimary').should('be.disabled')
    // cy.screenshot() 
  })
})