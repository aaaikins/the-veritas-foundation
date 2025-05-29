import React from 'react';

export default function ProgramCard({ title, description }) {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 duration-300 bg-white">
      <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}