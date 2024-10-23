// app/portfolio/page.tsx
import React from 'react';

const projects = [
  { id: 1, title: 'Project One', description: 'Description of project one' },
  { id: 2, title: 'Project Two', description: 'Description of project two' },
  { id: 3, title: 'Project Three', description: 'Description of project three' },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
