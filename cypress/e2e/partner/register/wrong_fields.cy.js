let fullname = "QA Inlaze";
let email = "v.cruz@inlaze.com";
let searchSelect = "57";
let phone = "3134517372";
let password = "Test@12345";

describe('Register', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/') 
  })

//VALIDACION DE CAMPOS INCORRECTOS:
  it.only("Wrong email type", () => {
    cy.get('#name').type(fullname)
    cy.get('#email').type('v.cruzinlaze.com')
    cy.get('#searchSelect').type(searchSelect).type('{enter}')
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        // cy.screenshot()
})

  it("Email type number", () => {
    cy.get('#name').type(fullname)
    cy.get('#email').type('44445645464')
    cy.get('#searchSelect').type(searchSelect).type('{enter}')
    cy.get('#phone').type(phone)
    cy.get('#password').type(password)
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  }) 

    it("Email already registered", () => {
      cy.get('#name').type(fullname)
      cy.get('#email').type('v.cruz@inlaze.com')
      cy.get('#searchSelect').type(searchSelect).type('{enter}')
      cy.get('#phone').type(phone)
      cy.get('#password').type(password)
      cy.get('.btnPrimary').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that email')
            cy.wait(2000)
              cy.screenshot()
                cy.get('.swal2-confirm').click()
      })

    it("Phone already registered", () => {
      cy.get('#name').type(fullname)
      cy.get('#email').type(email)
      cy.get('#searchSelect').type(searchSelect).type('{enter}')
      cy.get('#phone').type(phone)
      cy.get('#password').type(password)
      cy.get('.btnPrimary').click({ force: true })
      cy.get('.swal2-popup').should('exist')
          .contains('There is a user in the system with that phone')
            cy.wait(2000)
              cy.screenshot()
                cy.get('.swal2-confirm').click()
    })
    
    it("phone type string", () => {
    cy.get('#name').type(fullname)
    cy.get('#email').type(email)
    cy.get('#searchSelect').type(searchSelect).type('{enter}')
    cy.get('#phone').type('hola')
    cy.get('#password').type(password)
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  }) 

  it("Wrong password", () => {
    cy.get('#name').type(fullname)
    cy.get('#email').type(email)
    cy.get('#searchSelect').type(searchSelect).type('{enter}')
    cy.get('#phone').type(phone)
    cy.get('#password').type('Test12348')
    cy.get('.btnPrimary').should('be.disabled')
      cy.wait(2000)
        cy.screenshot()
  })

})