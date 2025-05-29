import React from 'react';

export default function Stats() {
  const items = [
    { label: 'Scholars Admitted', value: '100+' },
    { label: 'Scholarship Funds', value: '$10M+' },
    { label: 'Paid Internships Secured', value: '100%' },
    { label: 'Community Growth', value: '200%' },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <p className="text-3xl font-extrabold text-secondary text-yellow-500">{item.value}</p>
          <p className="mt-2 text-gray-600 uppercase tracking-wide">{item.label}</p>
        </div>
      ))}
    </div>
  );
}