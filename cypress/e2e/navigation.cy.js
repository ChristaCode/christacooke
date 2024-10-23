// cypress/e2e/navigation.spec.js
describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Visit the homepage
      cy.visit('http://localhost:3000');
  
      // Find and click the "About" link
      cy.get('a[href*="about"]').click();
  
      // Check if the URL changed and if the About page loaded
      cy.url().should('include', '/about');
      cy.contains('About Us').should('be.visible');
    });
  });
  