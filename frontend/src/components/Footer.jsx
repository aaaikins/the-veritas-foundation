import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-black py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Veritas Foundation. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/the-veritas-foundation-inc/" className="hover:text-accent hover:underline cursor-pointer">LinkedIn</a>
          <a href="https://www.instagram.com/veritas_foundu/" className="hover:text-accent hover:underline cursor-pointer">Instagram</a>
          <a href="#" className="hover:text-accent hover:underline cursor-pointer">Twitter</a>
          <a href="#" className="hover:text-accent hover:underline cursor-pointer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}