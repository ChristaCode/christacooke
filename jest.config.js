// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1', // If you're using path aliases
    },
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  };
  