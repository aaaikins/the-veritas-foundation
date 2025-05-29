import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Veritas Foundation. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Twitter</a>
          <a href="#" className="hover:text-accent">Facebook</a>
          <a href="#" className="hover:text-accent">YouTube</a>
        </div>
      </div>
    </footer>
  );
}