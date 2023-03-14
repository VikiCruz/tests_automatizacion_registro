
describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')  
  })


  it.only('Subscribe_blog', function () {
    cy.get('.homeCarousel__formEnterEmail > .form-floating > #homeEmailBeginning')
    .click().type('vlc.cruz@inlaze.com')
      cy.get('.homeCarousel__formEnterEmail > .btnPrimary').click()
  })

})