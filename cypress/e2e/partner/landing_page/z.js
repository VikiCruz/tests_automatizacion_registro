
describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')
  })

  it("suscripcion exitosa", () => {
    cy.get('[data-cy="susbcriberBlog"]').type('test1@gmail.com')
    cy.get('[data-cy="btnSusbcriberBlog"]').click()
    

  })
//   it("email invalido", () => {
//     cy.getByData("email-input").type("tom")
//     cy.getByData("submit-button").click()
//     cy.getByData("success-message").should("not.exist")
//   })

//   it("email ya registrado", () => {
//     cy.getByData("email-input").type("john@example.com")
//     cy.getByData("submit-button").click()
//     cy.getByData("server-error-message")
//       .should("exist")
//       .contains("already exists. Please use a different email address.")
//   })

// ---------------------------------------------------------------

//   it('email correcto', () => {
    
//     cy.get('[data-cy="susbcriberBlog"]').should('have.value', 'test@gmail.com')
  
//   })

//   it('tipo de email invalido', () => {
//     cy.get('[data-cy="susbcriberBlog"]').type('testgmail.com')
//     cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled')  
//   })

//   it('email tipo numerico', () => {
//     cy.get('[data-cy="susbcriberBlog"]').type(654654)
//     cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled') 
//   })

//   it('email vacio', () => {
//     cy.get('[data-cy="susbcriberBlog"]').should('have.value', '')
//     cy.get('[data-cy="btnSusbcriberBlog"]').click()
//     })
  })

  // it('email vacio', () => {
  //   cy.get('form').then(form$ => {
  //     form$.on('submit', e => {
  //       e.preventDefault()
  //    })
  //   
