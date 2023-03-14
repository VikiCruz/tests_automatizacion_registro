describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://partner.inlazetest.com/en/login')
    
  })


//FORGOT YOUR PASSWORD?

it("Password - SMS", () => {
  cy.get('.login__forgotPassword').click()
  // cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(1)').click()
  cy.wait(2000)
  cy.get('#email').type('v.cruz@inlaze.com')
    cy.get('.enterEmail__form > .btnPrimary').click()
      cy.wait(6000)
        cy.task("connectDB", "SELECT * FROM api_partner_validationcode ORDER BY created_at DESC")
          .then((response)=>{
            cy.log(response)
            cy.log(`codigo phone: ${response[0].code}`)
            cy.get('#code').type(response[0].code)
            cy.get('.enterValidationCode__form > .btn').click()
            cy.wait(2000)
          })
  cy.get('#password').type('Test@123.')
    cy.get('.passwordRecovery__contentPassword > .btn').click()
      cy.wait(2000)             
        cy.get('.passwordRecovery > .btnPrimary').click()
          cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
            cy.wait(6000)
  })


it.only("Password - WhatsApp", () => {
  cy.get('.login__forgotPassword').click()
    cy.get('.selectCodeMethod__contentBtnSelect > :nth-child(2) > span').click()
      cy.wait(2000)
        cy.get('#email').type('v.cruz@inlaze.com')
          cy.get('.enterEmail__form > .btnPrimary').click()
            cy.wait(6000)
              cy.task("connectDB", "SELECT * FROM api_partner_validationcode ORDER BY created_at DESC")
                .then((response)=>{
                  cy.log(response)
                  cy.log(`codigo phone: ${response[0].code}`)
                  cy.get('#code').type(response[0].code)
                  cy.get('.enterValidationCode__form > .btn').click()
                  cy.wait(2000)
                })
  cy.get('#password').type('Test@123.')
    cy.get('.passwordRecovery__contentPassword > .btn').click()
      cy.wait(2000)             
        cy.get('.passwordRecovery > .btnPrimary').click()
          cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
            cy.wait(6000)
  })


  it("Password - Email", () => {
    cy.get('.login__forgotPassword').click()
    // cy.get('.selectCodeMethod__contentBtnSelect > .ng-star-inserted').click()
        cy.wait(2000)
          cy.get('#email').type('v.cruz@inlaze.com')
            cy.get('.enterEmail__form > .btnPrimary').click()
              cy.wait(6000)
                cy.task("connectDB", "SELECT * FROM api_partner_validationcode ORDER BY created_at DESC")
                  .then((response)=>{
                    cy.log(response)
                    cy.log(`codigo phone: ${response[0].code}`)
                    cy.get('#code').type(response[0].code)
                    cy.get('.enterValidationCode__form > .btn').click()
                    cy.wait(2000)
                  })
    cy.get('#password').type('Test@123.')
      cy.get('.passwordRecovery__contentPassword > .btn').click()
        cy.wait(2000)             
          cy.get('.passwordRecovery > .btnPrimary').click()
            cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
    })

    it("Password - back", () => {
      cy.get('.login__forgotPassword').click()
        cy.wait(2000)  
          cy.get('.selectCodeMethod__closeModal').click()
            cy.url().should('eq', 'https://partner.inlazetest.com/en/login')
              })
})