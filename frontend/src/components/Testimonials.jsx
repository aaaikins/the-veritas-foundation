// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'Veritas helped me gain admission to my dream school and boosted my confidence through every step.',
    name: 'Jane Doe',
    role: 'Harvard University',
  },
  {
    id: 2,
    quote: 'The one-on-one mentorship and resources were invaluable—I received multiple scholarship offers!',
    name: 'John Smith',
    role: 'MIT',
  },
  {
    id: 3,
    quote: 'Thanks to Veritas, I unlocked opportunities I never thought possible.',
    name: 'Alice Johnson',
    role: 'Stanford University',
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map(({ id, quote, name, role }) => (
          <div key={id} className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
            <p className="text-gray-600 italic mb-4">"{quote}"</p>
            <div>
              <p className="text-lg font-semibold text-gray-900">{name}</p>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
