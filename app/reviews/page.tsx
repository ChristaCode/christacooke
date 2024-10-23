"use client";
import React from 'react';

const ReviewsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Client Reviews</h2>
      <div className="space-y-4">
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-bold">Alice Johnson</h3>
          <p>"Christa is an excellent developer! She delivered our project on time and exceeded expectations. Highly recommend!"</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-bold">John Smith</h3>
          <p>"Christa's work was top-notch. Very professional and a pleasure to work with. Will definitely hire again!"</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-bold">Emily Davis</h3>
          <p>"Amazing work! Christa went above and beyond to make sure everything was perfect. Very happy with the result."</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
