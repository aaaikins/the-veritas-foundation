'use client';

import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-[#2C2A6C] text-white">
      {/* Top bar with social links */}
      <div className="bg-[#8A88D2] py-4 px-4 md:px-12">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Get connected with us on socials</h3>
          <div className="flex items-center space-x-3">
            <a href="#" className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="bg-green-500 p-2 rounded-md hover:bg-green-600 transition-colors">
              <FaWhatsapp size={20} />
            </a>
            <a href="#" className="bg-black p-2 rounded-md hover:bg-gray-800 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="bg-blue-700 p-2 rounded-md hover:bg-blue-800 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto py-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Veritas Foundation Inc.</h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Useful links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Mentorship</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Initiatives</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Enter your email and we'll send you more information
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="E-mail Address"
              className="w-full bg-[#8A88D2] text-white placeholder-gray-200 px-4 py-3 rounded-l-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#4A47A3] p-4 rounded-r-full hover:bg-[#3b388a] transition-colors"
            >
              <FiSend size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar with copyright */}
      <div className="border-t border-gray-700 py-6">
        <p className="text-center text-gray-400">
          © 2025 Veritas Foundation Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer