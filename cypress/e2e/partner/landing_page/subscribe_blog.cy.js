describe('Landing / header', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')
    
  })

it("Subscribe_blog", () => {
  cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
    .click()
    .type('vlp.cruz@inlazz.com')
  cy.get('#buttonBeginSuscribe').click()
  cy.wait(2000)
  cy.get('.swal2-popup').should('exist')
  cy.get('.swal2-confirm').click()
  })


  it.only("Subscribe_blog1", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click()
      .type('vlp.cruz@inlazz.com')
    cy.get('#buttonBeginSuscribe').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(1) > p').contains('Email is already registered')
  
    })
  
})


