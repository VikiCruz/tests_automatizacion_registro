describe('Register', () => {
  beforeEach(() => {
    // cy.wait(5000)
    cy.visit('https://partner.inlazetest.com/en/')
    
  })

//COD CORRECTO:
it.only("correct code", () => {
  cy.get('[data-cy="inputFullName"]').type('nombre1 nombre2')
  cy.get('[data-cy="inputEmailRegister"]').type('v.cruz@inlaze.com')
  cy.get('[data-cy="inputSearchSelect"]').type('57').type('{enter}')
  cy.get('[data-cy="inputPhoneNumber"]').type('3134517372')
  cy.get('[data-cy="inputCreatePassword"]').type('Test@12345')
  cy.get('[data-cy="btnRegister"]').click()
  cy.wait(6000)
   cy.task("connectDB", "SELECT * FROM api_partner_validationcoderegister ORDER BY created_at DESC").then((response)=>{
    cy.log(response)
    cy.log(`codigo phone: ${response[0].code}`)
    cy.get('.codeValidationModal__form > .form-control').type(response[0].code)
    cy.get('.codeValidationModal__form > .btn').click()
    cy.wait(2000)
    cy.get('.typeAccount__webMaster > a').click()
    cy.screenshot()
  })
  })

    //COD INCORRECTO:
it("invalid code", () => {
  cy.get('[data-cy="inputFullName"]').type('nombre1 nombre2')
  cy.get('[data-cy="inputEmailRegister"]').type('v.cruz@inlaze.com')
  cy.get('[data-cy="inputSearchSelect"]').type('57').type('{enter}')
  cy.get('[data-cy="inputPhoneNumber"]').type('3134517372')
  cy.get('[data-cy="inputCreatePassword"]').type('Test@12345')
  cy.get('[data-cy="btnRegister"]').click()
  cy.wait(6000)
   cy.task("connectDB", "SELECT * FROM api_partner_validationcoderegister ORDER BY created_at DESC").then((response)=>{
    cy.log(response)
    cy.log(`codigo phone: ${response[0].code}`)
    cy.get('.codeValidationModal__form > .form-control').type(response[0].code)
    cy.get('.codeValidationModal__form > .btn').click()
    cy.get('.swal2-popup').should('exist')
        .contains('Invalid code') 
    cy.screenshot()
  })
})

  //COD INCORRECTO:
it("invalid code", () => {
  cy.get('#name').type('nombre1 nombre2')
  cy.get('#email').type('v.cruz@inlaze.com')
  cy.get('#searchSelect').type('57').type('{enter}')
  cy.get('#phone').type('3134517372')
  cy.get('#password').type('Test@12345')
  cy.get('.btnPrimary').click()
  cy.wait(6000)
   cy.task("connectDB", "SELECT * FROM api_partner_validationcoderegister ORDER BY created_at DESC").then((response)=>{
    cy.log(response)
    cy.log(`codigo phone: ${response[3].code}`)
    cy.get('.codeValidationModal__form > .form-control').type(response[3].code)
    cy.get('.codeValidationModal__form > .btn').click()
    cy.get(':nth-child(2) > .toast').should('exist')
        .contains('Invalid code') 
    // cy.screenshot()
  })
})

  // COD MENOR LONGITUD PERMITIDA:
  it("minor code length", () => {
    cy.get('#name').type('nombre1 nombre2')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').click()
      cy.get('.codeValidationModal__form > .form-control').type('57')
      cy.get('.codeValidationModal__form > .btn').should('be.disabled')
      cy.wait(2000)
      cy.screenshot()
    })

     //COD TIPO STRING:
  it("string type code", () => {
    cy.get('#name').type('nombre1 nombre2')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('{enter}')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.get('.btnPrimary').click()
      cy.get('.codeValidationModal__form > .form-control').type('codigoverificacion')
      cy.get('.codeValidationModal__form > .btn').click()
      cy.get(':nth-child(2) > .toast').should('exist')
            .contains('Invalid code')    
      cy.wait(2000)
      cy.screenshot()
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
      
        cy.wait(2000)
        // cy.screenshot()
      })
  })

 //  cy.intercept('https://bk.inlazetest.com/api_partner/pre_log_up*', (res) => {
  //    console.log('###Daniel---->', res)
