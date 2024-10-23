// cypress/e2e/form.spec.js
describe('Form submission', () => {
    it('should submit the form successfully', () => {
      // Visit the page with the form
      cy.visit('http://localhost:3000/contact');
  
      // Fill out the form fields
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('textarea[name="message"]').type('Hello, this is a test message.');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check for success message or redirection
      cy.contains('Thank you for your message!').should('be.visible');
    });
  });
  