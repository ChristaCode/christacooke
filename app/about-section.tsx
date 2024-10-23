// app/about-section.tsx
"use client";

import React from 'react';

export default function AboutSection() {
  return (
    <div className="py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <img
            src="/profile.jpg" // Replace with your profile image path
            alt="Christa Cooke"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div className="text-lg text-center lg:text-left max-w-xl">
            <p>
              Hi! I'm <span className="font-semibold">Christa Cooke</span>, a passionate software engineer with years of experience building scalable web applications and software solutions. I specialize in modern web technologies, including React, Next.js, Node.js, and more.
            </p>
            <p className="mt-4">
              My goal is to build efficient, maintainable, and powerful systems for my clients while delivering a seamless user experience. Whether you're looking for a complete software solution, a dynamic website, or consulting services, I'm here to help!
            </p>
            <p className="mt-4">
              Feel free to explore my work and contact me for any inquiries. I'm excited to work together on your next project!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
