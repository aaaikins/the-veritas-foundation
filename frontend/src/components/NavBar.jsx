import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <img src="/veritas-logo.jpg" alt="Logo" className="h-10" />
      <ul className="visible md:flex space-x-6">
        {['Home', 'About Us', 'Mentorship Programs', 'Get Involved', 'Initiatives', 'Updates & Impacts', 'Resources'].map((item, i) => (
          <li key={i} className="hover:underline cursor-pointer">{item}</li>
        ))}
      </ul>
      <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">DONATE</button>
    </nav>
  );
}