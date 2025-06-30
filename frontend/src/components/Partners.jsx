// src/components/Partners.jsx
import React from 'react';

// Import partner logos (ensure these files exist in src/assets/images/partners)
import Partner1Logo from '../assets/images/Partner1.png';
import Partner2Logo from '../assets/images/Partner2.png';
import Partner3Logo from '../assets/images/Partner3.png';
import Partner4Logo from '../assets/images/Partner4.png';
// ...add more as needed

const partners = [
  { name: 'Partner 1', logo: Partner1Logo },
  { name: 'Partner 2', logo: Partner2Logo },
  { name: 'Partner 3', logo: Partner3Logo },
  { name: 'Partner 4', logo: Partner4Logo },
  // add more entries here
];

export default function Partners() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map(({ name, logo }) => (
          <div key={name} className="p-4 bg-white rounded-lg shadow">
            <img src={logo} alt={`${name} logo`} className="max-h-12 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
