// src/components/TestimonialCard.jsx
import React from 'react';

export default function TestimonialCard({
  name,
  quote,
  role,
  company,
  imageSrc,     // optional URL to a profile image
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
      {/* Profile image or placeholder */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover mb-4"
          loading="lazy"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
          <span className="text-xl font-semibold">{name.charAt(0)}</span>
        </div>
      )}

      {/* Quote */}
      <p className="text-gray-700 italic mb-6">“{quote}”</p>

      {/* Name */}
      <h4 className="text-lg font-semibold text-gray-900">{name}</h4>

      {/* Optional role/company */}
      {(role || company) && (
        <p className="text-gray-500 text-sm">
          {role}{role && company && ', '}{company}
        </p>
      )}
    </div>
  );
}
