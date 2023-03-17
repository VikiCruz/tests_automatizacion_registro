describe('Landing / Subscribe_blog', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
  })

it("Subscribe_blog", () => {
  // cy.get('[data-cy="susbcriberBlog"]').click().type(Cypress.env('email'))
  
  cy.get('[data-cy="btnSusbcriberBlog"]').click()
  cy.wait(2000)
    cy.get('.swal2-popup').should('exist')
    cy.get('.swal2-confirm').click()
  })


  it("Email already registered ", () => {
    cy.get('[data-cy="susbcriberBlog"]').click().type(Cypress.env('email'))
    cy.get('[data-cy="btnSusbcriberBlog"]').click()
      cy.wait(2000)
      cy.get(':nth-child(1) > :nth-child(1) > p').contains('Email is already registered')
})  

  it("Email type number", () => {
      cy.get('[data-cy="susbcriberBlog"]').click().type(55416554)
      cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled')
  })

  it("Wrong email type", () => {
      cy.get('[data-cy="susbcriberBlog"]').click().type('v.cruzinlaze.com')
      cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled')
  })

  it("Wrong email type 1", () => {
      cy.get('[data-cy="susbcriberBlog"]').click().type('v.cruz@inlaze.c')
      cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled')
  })


  it("Code type special characters", () => {
    cy.get('[data-cy="susbcriberBlog"]').click().type('!"·$%&/()=?¡*¨^çÇ[]{};:_,.-<>@#~|')
    cy.get('[data-cy="btnSusbcriberBlog"]').should('be.disabled')
  })

  it.only("Empty email", () => {
      cy.get('[data-cy="susbcriberBlog"]').type('{enter}')
      cy.get('[data-cy="btnSusbcriberBlog"]').should('be.visible')
      cy.url().should('eq', 'https://inlazetest.com/en/')
  })
})

