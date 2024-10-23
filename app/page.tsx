// app/page.tsx
import React from 'react';

export default function HomePage() {
  const tools = [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Storybook UI',
    'NextAuth.js',
    'Prisma',
    'GraphQL',
    'Postgres',
    'Jest',
    'Cypress',
    'Swagger',
    'ESLint',
    'Prettier',
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Christa Cooke's Dev Site</h1>

      {/* Explanation about hosting from a Node.js server */}
      <p className="text-lg mb-6 text-center max-w-2xl">
        This site is powered by <strong>Next.js</strong> and is being served from a custom{' '}
        <strong>Node.js</strong> backend, giving us the flexibility to manage API routes, server-side
        logic, and custom middleware.
      </p>

      <h2 className="text-2xl mb-4">Tools Utilized in This Project:</h2>
      <ul className="list-disc text-left">
        {tools.map((tool, index) => (
          <li key={index} className="text-lg mb-2">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
