describe('Landing / header', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')
    
  })

it.only("type account", () => {
  cy.get('.header__containerLogo').click()
  cy.wait(6000)
  })

  it("Code type string", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(2000)
      cy.get('#code').type('codigoverificacion')
      cy.get('.enterValidationCode__form > .btn').click()
      cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
          })
      

})


