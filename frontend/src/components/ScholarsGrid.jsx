// src/components/ScholarsGrid.jsx
import React from 'react';

// Import scholar logos (ensure these files exist in src/assets/images/scholar-logos)
import HarvardLogo from '../assets/images/Harvard.png';
import CornellLogo from '../assets/images/Cornell.png';
import StanfordLogo from '../assets/images/Stanford.png';
import MITLogo from '../assets/images/MIT.png';
// ...add more as needed

const scholars = [
  { name: 'Harvard University', logo: HarvardLogo },
  { name: 'Cornell University', logo: CornellLogo },
  { name: 'Stanford University', logo: StanfordLogo },
  { name: 'Massachusetts Institute of Technology', logo: MITLogo },
  // add more entries here
];

export default function ScholarsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Where Our Scholars Study</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
        {scholars.map(({ name, logo }) => (
          <div key={name} className="flex items-center justify-center p-4 bg-white shadow rounded-lg">
            <img src={logo} alt={`${name} logo`} className="max-h-12" />
          </div>
        ))}
      </div>
    </div>
  );
}
