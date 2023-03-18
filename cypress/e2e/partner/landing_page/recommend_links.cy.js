
describe('Landing page', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('landing_base_url'))   
  })


  it.only('Subscribe_blog', function () {
    cy.get('.homeCarousel__formEnterEmail > .form-floating > #homeEmailBeginning')
    .click().type('vlc.cruz@inlaze.com')
      cy.get('.homeCarousel__formEnterEmail > .btnPrimary').invoke('removeAttr', 'target').click({ force: true })
  })

})