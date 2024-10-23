// app/login/page.tsx
import React, { useState } from 'react';

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Logged in successfully!');
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2"
            type="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2"
            type="password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Login
        </button>
      </form>
    </div>
  );
}
