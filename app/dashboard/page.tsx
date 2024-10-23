// app/dashboard/page.tsx
import React from 'react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Accounting Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Income Overview</h2>
        <p>Here you could display income data, payment tracking, and more.</p>
      </div>
    </div>
  );
}
