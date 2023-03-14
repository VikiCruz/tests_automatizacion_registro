describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/') 
  })

//VALIDACION DE CAMPOS INCORRECTOS:
  it("Wrong email type", () => {
    cy.get('#name').type('Viki Cruz')
    cy.get('#email').type('v.cruzinlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
})

  it("Email type number", () => {
    cy.get('#name').type('Viki Cruz')
    cy.get('#email').type('44445645464')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  }) 

    it("Email already registered", () => {
      cy.get('#name').type('Viki Cruz')
      cy.get('#email').type('v.cruz@inlaze.com')
      cy.get('#searchSelect').type('57').type('{enter}')
      cy.get('#phone').type('3134517372')
      cy.get('#password').type('Test@12345')
      cy.get('.btnPrimary').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that email')
            cy.wait(2000)
              cy.screenshot()
                cy.get('.swal2-confirm').click()
      })

    it("Phone already registered", () => {
      cy.get('#name').type('VikiCruz')
      cy.get('#email').type('v.cruz@inlaze.com')
      cy.get('#searchSelect').type('57').type('{enter}')
      cy.get('#phone').type('3134517372')
      cy.get('#password').type('Test@12345')
      cy.get('.btnPrimary').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that phone')
            cy.wait(2000)
              cy.screenshot()
                cy.get('.swal2-confirm').click()
    })
    
    it("phone type string", () => {
    cy.get('#name').type('Viki Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('hola')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  }) 

  it("Wrong password", () => {
    cy.get('#name').type('testqa1 Cruz')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test12348')
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  })

})