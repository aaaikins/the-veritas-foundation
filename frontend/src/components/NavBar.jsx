
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Veritas Logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Mentorship', '/mentorship'],
              ['Get Involved', '/get-involved'],
              ['Initiatives', '/initiatives'],
              ['Updates', '/updates'],
              ['Resources', '/resources'],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-600 hover:border-indigo-500 hover:text-gray-900"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="sm:hidden bg-white">
          <div className="pt-2 pb-3 space-y-1">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Mentorship', '/mentorship'],
              ['Get Involved', '/get-involved'],
              ['Initiatives', '/initiatives'],
              ['Updates', '/updates'],
              ['Resources', '/resources'],
            ].map(([label, to]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setIsOpen(false)}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-900"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>)
}

