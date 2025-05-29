import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">Veritas Foundation</Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul className={`${open ? 'block' : 'hidden'} md:flex space-x-8 font-medium uppercase`}>        
          <li><Link to="/" className="hover:text-accent">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent">About</Link></li>
          <li><Link to="/programs" className="hover:text-accent">Programs</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}