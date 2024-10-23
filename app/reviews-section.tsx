// app/reviews-section.tsx
"use client";

import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Alice Johnson',
    review: 'Christa is an excellent developer! She delivered our project on time and exceeded expectations. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'John Smith',
    review: 'Christa’s work was top-notch. Very professional and a pleasure to work with. Will definitely hire again!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Davis',
    review: 'Amazing work! Christa went above and beyond to make sure everything was perfect. Very happy with the result.',
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Client Reviews</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-800 font-semibold text-lg">{review.name}</p>
            <p className="text-gray-600 mt-2">"{review.review}"</p>
            <div className="mt-4 text-yellow-500">
              {'⭐'.repeat(review.rating)} {/* Simple stars to represent the rating */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
