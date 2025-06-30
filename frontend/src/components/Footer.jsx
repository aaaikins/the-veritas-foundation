// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Veritas</h3>
          <p className="text-sm">Empowering Scholars Worldwide.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/mentorship" className="hover:text-white">Mentorship</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link to="/initiatives" className="hover:text-white">Initiatives</Link></li>
            <li><Link to="/updates" className="hover:text-white">Updates</Link></li>
            <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white" aria-label="Facebook">
              {/* Facebook Icon Placeholder */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" />
            </a>
            <a href="#" className="hover:text-white" aria-label="Twitter">
              {/* Twitter Icon Placeholder */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" />
            </a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn">
              {/* LinkedIn Icon Placeholder */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Veritas. All rights reserved.
      </div>
    </footer>
  );
}
