module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'next/core-web-vitals', // Next.js recommended rules
    'plugin:prettier/recommended', // Add this line
  ],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
  rules: {
    // Customize your rules here
    'react/react-in-jsx-scope': 'off', // Next.js already imports React automatically
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // Next.js uses its own link component
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
