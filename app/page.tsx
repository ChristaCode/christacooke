"use client";
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      
      {/* Navigation buttons and Language Switcher */}
      <div className="flex justify-between items-center mb-4 mt-4">
        <div className="flex space-x-6">
          <Link href="/about" className="py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
            {t('aboutMe')}
          </Link>
          <Link href="/reviews" className="py-3 px-5 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md transition">
            {t('clientReviews')}
          </Link>
          <Link href="/technologies" className="py-3 px-5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition">
            {t('technologiesUsed')}
          </Link>
          <Link href="/chat" className="py-3 px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow-md transition">
            {t('chatWithLLM')}
          </Link>
          <Link href="/api/swagger/api-docs" className="py-3 px-5 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-md transition">
            {t('swaggerDocs')}
          </Link>
        </div>

        {/* Language Switcher aligned with the buttons */}
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Introduction paragraph */}
      <h2 className="text-3xl font-bold text-center mb-6 mt-4 italic tracking-wider text-purple-700">
        This is no ordinary site!
      </h2>

      {/* Description of the site */}
      <p className="text-lg text-center mb-6">
        This site serves as a demonstration of multiple powerful web development frameworks, showcasing how they can be used together to create a seamless and interactive experience. The following frameworks are utilized:
      </p>

      {/* List of frameworks used */}
      <ul className="list-disc list-inside text-lg text-gray-700 text-center space-y-2">
        <li><strong>Next.js</strong>: A powerful React framework for server-side rendering and static site generation.</li>
        <li><strong>TypeScript</strong>: Provides static typing for improved code quality and development efficiency.</li>
        <li><strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI development.</li>
        <li><strong>NextAuth.js</strong>: Authentication for Next.js applications, providing seamless login and session management.</li>
        <li><strong>Prisma</strong>: An ORM that simplifies database management and interactions.</li>
        <li><strong>GraphQL</strong>: A flexible query language for APIs that allows for efficient data fetching.</li>
        <li><strong>PostgreSQL</strong>: A robust relational database management system used to store application data.</li>
        <li><strong>Jest</strong>: A testing framework for ensuring code reliability and performance.</li>
        <li><strong>Cypress</strong>: An end-to-end testing framework for validating user interactions.</li>
        <li><strong>Swagger</strong>: For API documentation and testing.</li>
        <li><strong>ESLint & Prettier</strong>: Tools for maintaining code quality and consistency.</li>
        <li><strong>LLM Integration</strong>: Integrating language models for enhanced interactivity.</li>
      </ul>
    </div>
  );
}
