// app/page.tsx
"use client";

import React, { useState } from 'react'; // Don't forget to import useState
import ReviewsSection from './reviews-section';
import AboutSection from './about-section';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Christa Cooke's Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I build powerful, scalable web applications, and I can also provide advanced integrations such as **LLM (Language Model)** powered features. Feel free to explore the site, view my work, or reach out to hire me for your next project!
      </p>
      
      <div className="flex flex-col items-center mb-12 space-y-4">
        <InteractiveButton 
          label="See My Work" 
          href="/portfolio" 
          codeSnippet='<a href="/portfolio" className="bg-blue-600 hover:bg-blue-700 ...">See My Work</a>'
        />
        <InteractiveButton 
          label="Pay Now" 
          href="/pay" 
          codeSnippet='<a href="/pay" className="bg-green-500 hover:bg-green-600 ...">Pay Now</a>'
        />
        <a href="/chat" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-lg shadow-md transition">
          Chat with LLM
        </a>
        <a href="/api/swagger/api-docs" className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-5 rounded-lg shadow-md transition">
          API Documentation (Swagger)
        </a>
      </div>

      {/* About Me Section */}
      <AboutSection />

      {/* Reviews Section */}
      <ReviewsSection />

      <div className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Technologies Used in This Site</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          This portfolio showcases my expertise in modern web development, featuring the following technologies:
        </p>
        <ul className="list-disc list-inside text-left text-lg text-gray-700">
          <li><strong>Next.js</strong>: A React framework for server-side rendering and static site generation.</li>
          <li><strong>TypeScript</strong>: For static typing and enhancing code quality.</li>
          <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI design.</li>
          <li><strong>Storybook UI</strong>: A tool for developing and testing UI components in isolation.</li>
          <li><strong>NextAuth.js</strong>: Authentication for Next.js apps.</li>
          <li><strong>Prisma</strong>: A next-generation ORM for working with Postgres databases.</li>
          <li><strong>GraphQL</strong>: A query language for APIs to handle flexible queries and mutations.</li>
          <li><strong>Postgres</strong>: A robust and scalable open-source relational database.</li>
          <li><strong>Jest</strong>: A testing framework for unit and integration tests.</li>
          <li><strong>Cypress</strong>: An end-to-end testing framework for UI reliability.</li>
          <li><strong>Swagger</strong>: For API documentation and interactive exploration.</li>
          <li><strong>ESLint</strong> & <strong>Prettier</strong>: Linting and formatting tools to ensure code consistency.</li>
          <li><strong>LLM Integration</strong>: I can integrate **Language Models** to provide advanced AI-powered features like chatbots and text generation.</li>
        </ul>
      </div>
    </div>
  );
}

const InteractiveButton = ({ label, href, codeSnippet }: { label: string; href: string; codeSnippet: string }) => {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className="mb-4">
      <a 
        href={href} 
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-5 rounded-lg shadow-md transition">
        {label}
      </a>
      <button 
        className="ml-2 text-blue-500 underline text-sm hover:text-blue-600"
        onClick={() => setShowCode(!showCode)}>
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      {showCode && (
        <div className="mt-2 p-4 bg-gray-900 text-white text-xs rounded-lg transition-opacity duration-300 ease-in-out">
          <pre><code>{codeSnippet}</code></pre>
        </div>
      )}
    </div>
  );
}
