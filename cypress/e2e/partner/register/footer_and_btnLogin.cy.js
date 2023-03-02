describe('footer and btn login form register', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/')
  })
//BTN LOGIN:
    it("completed fields_btn login", () => {
    cy.get('#name').type('nombre1 nombre2')
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('#searchSelect').type('57').type('3134517372')
    cy.get('#phone').type('3134517372')
    cy.get('#password').type('Test@12345')
    cy.wait(2000)
    cy.get('.register__redirectLogin > a').click()
    cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
    // cy.screenshot() 
    })

  it("empty fields_btn login", () => {
    cy.wait(2000)
    cy.get('.register__redirectLogin > a').click()
    cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
    // cy.screenshot() 
    })

//LINKS FOOTER:
    it("footer", () => {
    cy.wait(2000)
    cy.get('.footer__desktop > :nth-child(2) > a').click()
    cy.wait(6000)
    cy.get('.footer__desktop > :nth-child(3) > a').click()
    cy.wait(6000)
    cy.get('.footer__desktop > :nth-child(4) > a').click()
    cy.wait(6000)
    cy.get(':nth-child(5) > a').click()
    cy.wait(6000)
    cy.get(':nth-child(6) > a').click()
    cy.wait(6000)
      cy.get('.authentication__supportSection > .btn').click()
    })
})