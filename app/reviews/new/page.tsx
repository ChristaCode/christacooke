// app/reviews/new/page.tsx
import React, { useState } from 'react';

export default function NewReviewPage() {
  const [formData, setFormData] = useState({ name: '', review: '', rating: 5 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would submit the review data to your backend
    alert('Review submitted!');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Review</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Review</label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Rating</label>
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded mt-2"
            type="number"
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Submit Review
        </button>
      </form>
    </div>
  );
}
