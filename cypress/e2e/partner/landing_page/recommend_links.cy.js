
describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('https://inlazetest.com/en/')
  })

  it("suscripcion exitosa", () => {
    cy.get('[data-cy="homeEmailBeginning"]').type('test1@gmail.com')
    cy.get('[data-cy="btnGetStarted"]').click()
    

  })
})