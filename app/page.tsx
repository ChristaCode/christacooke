"use client";
import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import AboutSection from './about-section';
import ReviewsSection from './reviews-section';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">{t('welcome')}</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        {t('intro')}
      </p>
      
      {/* Navigation buttons */}
      <div className="flex space-x-6 mb-12">
        <InteractiveButton
          label={t('seeMyWork')}
          href="/portfolio"
          codeSnippet='<a href="/portfolio" className="bg-blue-600 hover:bg-blue-700 ...">See My Work</a>'
          glow={false}
        />
        <InteractiveButton
          label={t('payNow')}
          href="/pay"
          codeSnippet='<a href="/pay" className="bg-green-500 hover:bg-green-600 ...">Pay Now</a>'
          glow={false}
        />
        <InteractiveButton
          label={t('chatWithLLM')}
          href="/chat"
          codeSnippet='<a href="/chat" className="bg-indigo-500 hover:bg-indigo-600 ...">Chat with LLM</a>'
          glow={false}
        />
        <InteractiveButton
          label={t('swaggerDocs')}
          href="/api/swagger/api-docs"
          codeSnippet='<a href="/api/swagger/api-docs" className="bg-yellow-500 hover:bg-yellow-600 ...">Swagger Docs</a>'
          glow={true}
        />
      </div>

      {/* About Me Section */}
      <AboutSection />

      {/* About This Site */}
      <div className="mt-16 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('aboutThisSiteTitle')}</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          {t('aboutThisSiteDescription')}
        </p>
      </div>

      {/* Client Reviews Section */}
      <ReviewsSection />

      {/* Technologies Used Section */}
      <div className="mt-12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('technologiesUsedTitle')}</h2>
        <ul className="list-disc list-inside text-gray-700 text-center space-y-2">
          <li>{t('nextJs')}</li>
          <li>{t('typescript')}</li>
          <li>{t('tailwindCss')}</li>
          <li>{t('storybookUi')}</li>
          <li>{t('nextAuthJs')}</li>
          <li>{t('prisma')}</li>
          <li>{t('graphql')}</li>
          <li>{t('postgres')}</li>
          <li>{t('jest')}</li>
          <li>{t('cypress')}</li>
          <li>{t('swagger')}</li>
          <li>{t('eslintPrettier')}</li>
          <li>{t('llmIntegration')}</li>
        </ul>
      </div>

      {/* Language Switcher */}
      <div className="mt-8">
        <LanguageSwitcher />
      </div>
    </div>
  );
}

const InteractiveButton = ({ label, href, codeSnippet, glow }: { label: string; href: string; codeSnippet: string; glow: boolean }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={`relative inline-block mb-4 ${glow ? 'cursor-wand' : ''}`}>
      <a 
        href={href} 
        className={`py-3 px-5 rounded-lg shadow-md transition ${glow ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
        {label}
      </a>
      {glow && (
        <button
          className="absolute top-0 left-0"
          onClick={() => setShowCode(!showCode)}
        />
      )}
      {glow && showCode && (
        <div className="absolute right-0 mt-2 p-4 bg-gray-900 text-white text-xs rounded-lg transition-opacity duration-300 ease-in-out">
          <pre><code>{codeSnippet}</code></pre>
        </div>
      )}
    </div>
  );
};
