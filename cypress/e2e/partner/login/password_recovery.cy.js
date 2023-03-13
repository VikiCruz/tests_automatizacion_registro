describe('Login / password_recovery / WhatsApp', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')
    
  })

  it("Invalid code ", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
    cy.wait(6000)
      cy.task("connectDB", "SELECT * FROM api_partner_validationcode ORDER BY created_at DESC")
        .then((response)=>{
            cy.log(response)
            cy.log(`codigo phone: ${response[3].code}`)
            cy.get('#code').type(response[3].code)
            cy.get('.enterValidationCode__form > .btn').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
          })
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
      
  it("Code type number", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(2000)
      cy.get('#code').type(-6564654)
      cy.get('.enterValidationCode__form > .btn').click()
      cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
          })


  it("Code type special characters", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(2000)
      cy.get('#code').type('!"·$%&/()=?¡*¨^çÇ[]{};:_,.-<>@#~|')
      cy.get('.enterValidationCode__form > .btn').click()
      cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
          })

  it("Code type string", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(2000)
      cy.get('#code').type('ddkjfkdhfkjhjhuhguyg')
      cy.get('.enterValidationCode__form > .btn').click()
      cy.get(':nth-child(2) > .toast > .toast-body').should('exist')
          })

it.only("empty code", () => {
    cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
    cy.wait(2000)
    cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(2000)
      cy.get('#code').type('{enter}')
      cy.get('.enterValidationCode__form > .btn').should('be.disabled')
          })
})


