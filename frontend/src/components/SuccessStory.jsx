// src/components/SuccessStory.jsx
import React from 'react';

export default function SuccessStory({ photo, quote, name, outcome }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
      {photo && <img src={photo} alt={name} className="h-24 w-24 rounded-full mb-4 object-cover" />}
      <p className="text-gray-600 italic mb-4">“{quote}”</p>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-indigo-600 mt-1">{outcome}</p>
    </div>
  );
}


