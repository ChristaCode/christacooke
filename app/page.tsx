// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import ReviewsSection from './reviews-section';
import AboutSection from './about-section';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useTranslation('common');
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update the cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to handle hover start
  const handleHover = (code: string) => {
    setHoveredCode(code);
  };

  // Function to handle hover end
  const handleMouseLeave = () => {
    setHoveredCode(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      {/* Language Switcher at Top-Right */}
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-center text-gray-800 mb-8">{t('welcome')}</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t('intro')}
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <InteractiveButton 
            label={t('seeMyWork')} 
            codeSnippet='<a href="/portfolio" className="bg-blue-600 hover:bg-blue-700 ...">See My Work</a>'
            onHover={() => handleHover('<a href="/portfolio" className="bg-blue-600 hover:bg-blue-700 ...">See My Work</a>')}
            onLeave={handleMouseLeave}
          />
          <InteractiveButton 
            label={t('payNow')} 
            codeSnippet='<a href="/pay" className="bg-green-500 hover:bg-green-600 ...">Pay Now</a>'
            onHover={() => handleHover('<a href="/pay" className="bg-green-500 hover:bg-green-600 ...">Pay Now</a>')}
            onLeave={handleMouseLeave}
          />
          <a href="/chat" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full shadow-lg transition">
            {t('chatWithLLM')}
          </a>
          <a href="/api/swagger/api-docs" className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-8 rounded-full shadow-lg transition">
            {t('swaggerDocs')}
          </a>
        </div>

        {/* About Me Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-center mb-16">
          <AboutSection />
        </div>

        {/* About This Site Section */}
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About this Site</h2>
          <p className="text-lg text-gray-700 mb-6">
            This site showcases a modern, scalable, and secure web application built with a variety of technologies. Here’s a breakdown of the key tools used in the development of this site:
          </p>
          <ul className="list-disc text-left ml-8 text-lg text-gray-700">
            <li><strong>Next.js</strong>: A powerful React framework for server-side rendering, static site generation, and API routes.</li>
            <li><strong>TypeScript</strong>: Provides static typing to ensure code safety and improve development efficiency.</li>
            <li><strong>Tailwind CSS</strong>: A utility-first CSS framework that allows rapid styling without writing custom CSS.</li>
            <li><strong>Storybook UI</strong>: A tool to develop and test UI components in isolation, ensuring reusable and maintainable components.</li>
            <li><strong>NextAuth.js</strong>: Handles authentication, allowing for seamless login and session management for the site.</li>
            <li><strong>Prisma</strong>: An ORM used to manage and interact with the site's PostgreSQL database efficiently.</li>
            <li><strong>GraphQL</strong>: A query language used to interact with APIs, providing flexible and efficient data querying for the site.</li>
            <li><strong>Postgres</strong>: A reliable and scalable relational database used to store data for the application.</li>
            <li><strong>Jest</strong>: A testing framework for unit tests, ensuring code quality and preventing regressions.</li>
            <li><strong>Cypress</strong>: Used for end-to-end testing, ensuring that all parts of the site function as expected for users.</li>
            <li><strong>Swagger</strong>: Provides API documentation, enabling developers to interact with and test API endpoints directly from the browser.</li>
            <li><strong>ESLint & Prettier</strong>: Tools for linting and formatting the codebase to maintain a clean and consistent code style.</li>
            <li><strong>LLM Integration</strong>: Allows for integrating advanced AI-powered language models, providing intelligent features such as chatbots or text generation.</li>
          </ul>
        </div>

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Hover Modal */}
        {hoveredCode && (
          <div
            className="fixed bg-gray-900 text-white p-4 rounded-lg shadow-xl text-xs"
            style={{
              top: Math.min(cursorPosition.y + 15, window.innerHeight - 100), // Avoid going off screen
              left: Math.min(cursorPosition.x + 15, window.innerWidth - 300),  // Avoid going off screen
              zIndex: 1000,
              transition: 'top 0.1s, left 0.1s',
            }}
          >
            <pre><code>{hoveredCode}</code></pre>
          </div>
        )}
      </div>
    </div>
  );
}

// InteractiveButton Component
const InteractiveButton = ({ label, codeSnippet, onHover, onLeave }: { label: string; codeSnippet: string; onHover: () => void; onLeave: () => void }) => {
  return (
    <div
      className="relative mb-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <a 
        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-all"
      >
        {label}
      </a>
    </div>
  );
};
