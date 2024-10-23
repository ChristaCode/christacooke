// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Set the base URL for your Next.js app
    supportFile: false, // You can change this if you plan to add custom support files
  },
});
