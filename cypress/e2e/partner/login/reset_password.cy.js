describe('Login_reset password', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')
    
  })

  it("Empty email", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('{enter}')
    cy.get('.enterEmail__form > .btnPrimary').should('be.disabled')
    })

  it("wrong email", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('vikiliseth@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
    cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
    })

  it("Email type number", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type(665161)
    cy.get('.enterEmail__form > .btnPrimary').should('be.disabled')
    })

  it("Invalid email type", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruzinlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').should('be.disabled')
    })

  it("Invalid email type", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruzinlaze.')
    cy.get('.enterEmail__form > .btnPrimary').should('be.disabled')
    })

  it("Faqs", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('.footerGenerateCode__textFaqs').click().should('be.visible')
  })

  it("Back button", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('.enterEmail > .btn').click()
    cy.get('.selectCodeMethod').should('exist')
  })

  
})