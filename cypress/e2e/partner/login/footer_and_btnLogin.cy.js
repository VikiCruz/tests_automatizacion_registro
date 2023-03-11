describe('footer and btn login form register', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')
  })

//LOGO:
    it("logo", () => {
      cy.get('.header__containerLogo').click()
      cy.wait(6000)
      })

//BTN LOGIN:

    it("btn register", () => {
      cy.get('.btnBlackBorder').click()
      cy.url().should('eq', 'https://partner.inlazetest.com/en/')
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
