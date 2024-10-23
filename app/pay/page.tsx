// app/pay/page.tsx
import React from 'react';

export default function PayPage() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Make a Payment</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        You can pay for services directly using the secure payment gateway below.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg shadow-md transition">
        Pay Now with Stripe
      </button>
    </div>
  );
}
