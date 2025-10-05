'use client';

import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      {/* Contact Popup Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-500 ease-out">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 ease-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#002366]">Contact Us</h3>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-500 ease-out hover:scale-110"
                >
                  {/* @ts-ignore */}
                  <FaTimes size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#facc15]/20 transition-colors duration-500 ease-out">
                    {/* @ts-ignore */}
                    <FaEnvelope className="text-[#002366] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002366] mb-1">Email</h4>
                    <a href="mailto:info@veritasfoundation.org" className="text-gray-600 hover:text-[#facc15] transition-colors duration-500 ease-out">
                      info@veritasfoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#facc15]/20 transition-colors duration-500 ease-out">
                    {/* @ts-ignore */}
                    <FaPhone className="text-[#002366] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002366] mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-[#facc15] transition-colors duration-500 ease-out">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#facc15]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#facc15]/20 transition-colors duration-500 ease-out">
                    {/* @ts-ignore */}
                    <FaMapMarkerAlt className="text-[#002366] text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002366] mb-1">Address</h4>
                    <p className="text-gray-600">
                      123 Education Way<br />
                      Suite 100<br />
                      Academic City, AC 12345
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-[#002366] mb-3">Office Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsContactOpen(false)}
                className="w-full mt-6 bg-[#002366] text-white py-3 rounded-xl hover:bg-[#002366]/90 transition-all duration-500 ease-out hover:scale-105 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gradient-to-br from-[#2C2A6C] to-[#1a1a4a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

      {/* Top bar with social links */}
      <div className="bg-[#8A88D2]/80 backdrop-blur-sm py-6 px-6 md:px-8 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Get connected with us on socials</h3>
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/veritas_foundu/" className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl">
              {/* @ts-ignore */}
              <FaInstagram size={20} />
            </a>
            <a href="https://whatsapp.com/channel/0029VaQWs2XI1rcc5ln5tT3u" className="bg-green-500 p-3 rounded-xl hover:bg-green-600 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl">
              {/* @ts-ignore */}
              <FaWhatsapp size={20} />
            </a>
            <a href="https://x.com/Veritas_foundU" className="bg-black p-3 rounded-xl hover:bg-gray-800 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl">
              {/* @ts-ignore */}
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/company/the-veritas-foundation-inc/posts/?feedView=all" className="bg-blue-700 p-3 rounded-xl hover:bg-blue-800 transition-all duration-500 ease-out hover:scale-110 shadow-lg hover:shadow-xl">
              {/* @ts-ignore */}
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto py-16 px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Column 1: Company Info */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">The Veritas Foundation Inc.</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Empowering individuals and communities through education, mentorship, and social justice initiatives.
            Together, we create lasting positive change and build a more equitable future for all.
          </p>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="w-3 h-3 bg-[#facc15] rounded-full animate-pulse"></div>
            <span className="font-medium">Registered 501(c)(3) Non-Profit</span>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Quick Links</h3>
          <ul className="space-y-4 text-gray-300">
            <li><a href="#mission" className="hover:text-[#facc15] transition-colors duration-500 ease-out hover:translate-x-1 inline-block">Our Mission</a></li>
            <li><a href="#achievements" className="hover:text-[#facc15] transition-colors duration-500 ease-out hover:translate-x-1 inline-block">Impact & Results</a></li>
            <li><a href="#gallery" className="hover:text-[#facc15] transition-colors duration-500 ease-out hover:translate-x-1 inline-block">Success Stories</a></li>
            <li><a href="#donate" className="hover:text-[#facc15] transition-colors duration-500 ease-out hover:translate-x-1 inline-block">Support Us</a></li>
            <li><button onClick={() => setIsContactOpen(true)} className="hover:text-[#facc15] transition-colors duration-500 ease-out hover:translate-x-1 inline-block">Contact</button></li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Stay Connected</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Subscribe to our newsletter for updates on our programs, success stories, and ways to get involved.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all duration-500 ease-out"
            />
            <button
              type="submit"
              className="w-full bg-[#facc15] text-[#002366] p-4 rounded-xl hover:bg-[#facc15]/90 transition-all duration-500 ease-out hover:scale-105 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2 group"
            >
              {/* @ts-ignore */}
              <FiSend size={20} className="group-hover:translate-x-1 transition-transform duration-500 ease-out" />
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>

      {/* Bottom bar with copyright */}
      <div className="border-t border-white/10 py-8 bg-black/20 backdrop-blur-sm">
        <p className="text-center text-gray-400 font-medium">
          © 2025 Veritas Foundation Inc. All rights reserved
        </p>
      </div>
    </footer>
    </>
  );
}

export default Footer