// cypress/e2e/404.spec.js
describe('404 Page', () => {
    it('should show 404 page for non-existent routes', () => {
      // Visit a non-existent page
      cy.visit('http://localhost:3000/non-existent-page', { failOnStatusCode: false });
  
      // Check for the 404 error message
      cy.contains('404 - Page Not Found').should('be.visible');
    });
  });
  