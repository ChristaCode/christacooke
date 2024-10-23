// app/chat.tsx
"use client";

import React, { useState } from 'react';
import axios from 'axios';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');

    try {
      // Send the input to Hugging Face's API
      const res = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: input },
        {
          headers: {
            Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY`, // Replace with your API key
          },
        }
      );
      
      setResponse(res.data[0]?.generated_text || 'Sorry, no response available.');
    } catch (error) {
      console.error('Error fetching the response:', error);
      setResponse('Failed to fetch a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Chat with an LLM</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm"
          placeholder="Type your message..."
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition">
          {loading ? 'Generating...' : 'Send'}
        </button>
      </form>
      {response && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}
