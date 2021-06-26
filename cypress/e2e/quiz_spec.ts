
describe('Quiz App Tests', () => {
    it('Loads the app', () => {
      cy.visit('/')
    })
    it('Loads the quiz page', () => {
      cy.get('.begin--button').click()
      cy.url().should('include', '/questions/1')
    });
    it('Goes through the quiz', () => {
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/2')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/3')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/4')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/5')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/6')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/7')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/8')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/9')
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/questions/10')
      
    });
    it('Shows the results page', () => {
      cy.get('button').contains(/true/i).click()
      cy.url().should('include', '/results')
      cy.get('a').contains(/play again/i)
    });
    it('Restarts the game', () => {
      cy.get('a').contains(/play again/i).click()
      cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
    
  })