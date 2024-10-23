// cypress/e2e/home.spec.js
describe('Homepage', () => {
    it('should load successfully', () => {
      // Visit the homepage
      cy.visit('http://localhost:3000');
  
      // Check for the welcome message on the homepage
      cy.contains('Welcome to Next.js with App Router!').should('be.visible');
    });
  });
  