describe('Landing / Subscribe_blog', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')
    
  })

it("Subscribe_blog", () => {
  cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
    .click().type('vlp.cruz@inlazz.com')
      cy.get('#buttonBeginSuscribe').click()
      cy.wait(2000)
        cy.get('.swal2-popup').should('exist')
        cy.get('.swal2-confirm').click()
  })


  it("Email already registered ", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click().type('vlp.cruz@inlazz.com')
          cy.get('#buttonBeginSuscribe').click()
            cy.wait(2000)
              cy.get(':nth-child(1) > :nth-child(1) > p').contains('Email is already registered')
            })  

it("Email type number", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click().type(55416554)
          cy.get('#buttonBeginSuscribe').should('be.disabled')
            })

it("Wrong email type", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click().type('v.cruzinlaze.com')
          cy.get('#buttonBeginSuscribe').should('be.disabled')
            })

it("Wrong email type 1", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click().type('v.cruz@inlaze.c')
          cy.get('#buttonBeginSuscribe').should('be.disabled')
            })


it("Code type special characters", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .click().type('!"·$%&/()=?¡*¨^çÇ[]{};:_,.-<>@#~|')
          cy.get('#buttonBeginSuscribe').should('be.disabled')
            })

it.only("Empty email", () => {
    cy.get(':nth-child(1) > :nth-child(1) > form.ng-untouched > .form-floating > #homeEmailBeginning')
      .type('{enter}')
          cy.get('#buttonBeginSuscribe').should('be.visible')
            cy.url().should('eq', 'https://inlazetest.com/en/')
              })
})

