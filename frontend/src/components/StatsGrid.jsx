import React from 'react';

const stats = [
  { label: 'Graduations', value: '100+' },
  { label: 'Scholarships', value: '100+' },
  { label: 'Colleges', value: '100+' },
  { label: 'Scholars', value: '100+' },
];

export default function StatsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ label, value }) => (
          <div key={label} className="text-center">
            <p className="text-4xl font-bold text-indigo-600">{value}</p>
            <p className="mt-2 text-lg font-medium text-gray-600 uppercase">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
