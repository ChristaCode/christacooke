const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Next.js API Documentation',
    version: '1.0.0',
    description: 'API documentation for Next.js with Swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Your development server URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./app/api/**/*.ts'], // Adjust this to point to your API folder with TypeScript files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };
