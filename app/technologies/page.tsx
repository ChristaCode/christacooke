"use client";
import React from 'react';

const TechnologiesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
      <ul className="list-disc list-inside">
        <li>Next.js: A powerful React framework for server-side rendering and static site generation.</li>
        <li>TypeScript: Provides static typing for improved code quality and development efficiency.</li>
        <li>Tailwind CSS: A utility-first CSS framework for rapid UI development.</li>
        <li>Storybook UI: Developing and testing components in isolation.</li>
        <li>NextAuth.js: Handles authentication for seamless login and session management.</li>
        <li>Prisma ORM: Manages database connections with PostgreSQL for structured data.</li>
        <li>GraphQL: Efficient querying language for APIs.</li>
        <li>PostgreSQL: Scalable relational database used to store data for the application.</li>
        <li>Jest: Testing framework for unit tests, ensuring code quality and preventing regressions.</li>
        <li>Cypress: End-to-end testing framework for the UI.</li>
        <li>Swagger: API documentation interface.</li>
        <li>ESLint & Prettier: Code linting and formatting.</li>
        <li>LLM Integration: Chatbot and advanced language model integration.</li>
      </ul>
    </div>
  );
};

export default TechnologiesPage;
