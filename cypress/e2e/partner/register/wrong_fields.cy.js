describe('Register', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('register_url'))
  })

//VALIDACION DE CAMPOS INCORRECTOS:
  it("Wrong email type", () => {
    cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
    cy.get('[data-cy="inputEmailRegister"]').type('v.cruzinlaze.com')
    cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
    cy.get('[data-cy="inputPhoneNumber"]').type(Cypress.env('phone'))
    cy.get('[data-cy="inputCreatePassword"]').type(Cypress.env('password'))
    cy.get('[data-cy="btnRegister"]').should('be.disabled')
      cy.wait(2000)
        // cy.screenshot()
})

  it("Email type number", () => {
    cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
    cy.get('[data-cy="inputEmailRegister"]').type('44445645464')
    cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
    cy.get('[data-cy="inputPhoneNumber"]').type(Cypress.env('phone'))
    cy.get('[data-cy="inputCreatePassword"]').type(Cypress.env('password'))
    cy.get('[data-cy="btnRegister"]').should('be.disabled')
      cy.wait(2000)
        // cy.screenshot()
  }) 

    it("Email already registered", () => {
      cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
      cy.get('[data-cy="inputEmailRegister"]').type(Cypress.env('email'))
      cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
      cy.get('[data-cy="inputPhoneNumber"]').type(Cypress.env('phone'))
      cy.get('[data-cy="inputCreatePassword"]').type(Cypress.env('password'))
      cy.get('[data-cy="btnRegister"]').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that email')
            cy.wait(2000)
              // cy.screenshot()
                cy.get('.swal2-confirm').click()
      })

    it("Phone already registered", () => {
      cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
      cy.get('[data-cy="inputEmailRegister"]').type(Cypress.env('email'))
      cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
      cy.get('[data-cy="inputPhoneNumber"]').type(Cypress.env('phone'))
      cy.get('[data-cy="inputCreatePassword"]').type(Cypress.env('password'))
      cy.get('[data-cy="btnRegister"]').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that phone')
            cy.wait(2000)
              // cy.screenshot()
                cy.get('.swal2-confirm').click()
    })
    
    it("phone type string", () => {
    cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
    cy.get('[data-cy="inputEmailRegister"]').type(Cypress.env('email'))
    cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
    cy.get('[data-cy="inputPhoneNumber"]').type('hola')
    cy.get('[data-cy="inputCreatePassword"]').type(Cypress.env('password'))
    cy.get('[data-cy="btnRegister"]').should('be.disabled')
      cy.wait(2000)
        // cy.screenshot()
  }) 

  it("Wrong password", () => {
    cy.get('[data-cy="inputFullName"]').type(Cypress.env('fullname'))
    cy.get('[data-cy="inputEmailRegister"]').type(Cypress.env('email'))
    cy.get('[data-cy="inputSearchSelect"]').type(Cypress.env('searchSelect')).type('{enter}')
    cy.get('[data-cy="inputPhoneNumber"]').type(Cypress.env('phone'))
    cy.get('#password').type('Test12348')
    cy.get('[data-cy="btnRegister"]').should('be.disabled')
      cy.wait(2000)
        // cy.screenshot()
  })
})