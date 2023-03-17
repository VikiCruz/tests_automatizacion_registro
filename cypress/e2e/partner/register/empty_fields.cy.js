describe('Register', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('register_url'))
  })
  
  //VALIDACION DE CAMPOS VACIOS:

  it.only("Full name empty", () => {
    cy.get('[data-cy="inputFullName"]').type('{enter}')
    cy.get('[data-cy="inputEmailRegister"]').type('v.cruz@inlaze.com')
    cy.get('[data-cy="inputSearchSelect"]').type('57').type('{enter}')
    cy.get('[data-cy="inputPhoneNumber"]').type('3134517372')
    cy.get('[data-cy="inputCreatePassword"]').type('Test@12345')
    cy.get('[data-cy="btnRegister"]').should('be.disabled')
    cy.wait(2000)
    //cy.screenshot()
  })

  it("Empty email", () => {
    cy.get('#name').type('Vl Cruz')
    cy.get('#email').type('{enter}')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    cy.screenshot()
    })

  it("Empty country code", () => {
    cy.get('#name').type('testqa1 Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    cy.screenshot()
  })

  it("Country code selected and then deleted", () => {
    cy.get('#name').type('testqa1 Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#searchSelect').clear()
    cy.get('#searchSelect').click()
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    cy.screenshot()
  })

  it("Empty Phone", () => {
    cy.get('#name').type('testqa1 Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('{enter}')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
    cy.wait(2000)
    cy.screenshot() 
  })

  it("Empty Password", () => {
    cy.get('#name').type('testqa1 Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('{enter}')
    cy.get('.btnPrimary').should('be.disabled')
    cy.screenshot() 
  })

  it("Empty form", () => {
    cy.get('#name').type('{enter}')
    cy.get('#email').type('{enter}')
    cy.get('#searchSelect').click()
    cy.get('#phone').type('{enter}')
    cy.get('#password').click()
    cy.get('.btnPrimary').should('be.disabled')
    cy.screenshot() 
  })
})