describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/')
    
  })
       //COD VACIO:
        it("empty code", () => {
          cy.get('#name').type('nombre1 nombre2')
        cy.get('#email').type('v.cruz@inlaze.com')
        cy.get('#searchSelect').type('57').type('{enter}')
        cy.get('#phone').type('3134517372')
        cy.get('#password').type('Test@12345')
        cy.get('.btnPrimary').click()
        cy.get('.codeValidationModal__form > .form-control').type('{enter}')
        cy.get('.codeValidationModal__form > .btn').should('be.disabled')
        cy.get('.codeValidationModal__newCodeBtn').click()
          cy.screenshot()
        })

        //COD INCORRECTO:
        it("wrong code", () => {
        cy.get('#name').type('nombre1 nombre2')
        cy.get('#email').type('v.cruz@inlaze.com')
        cy.get('#searchSelect').type('57').type('{enter}')
        cy.get('#phone').type('3134517372')
        cy.get('#password').type('Test@12345')
        cy.get('.btnPrimary').click()
        cy.get('.codeValidationModal__form > .form-control').type('79897987997')
        cy.get('.codeValidationModal__form > .btn').click()
        cy.get(':nth-child(2) > .toast').should('exist')
          .contains('Invalid code')  
        cy.wait(3000)
        cy.get('.codeValidationModal__newCodeBtn').click()
            cy.screenshot()
        })
})