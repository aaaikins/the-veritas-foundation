import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-6">
        <input type="text" placeholder="Name" className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
        <input type="email" placeholder="Email" className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary" />
        <textarea placeholder="Message" className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-primary focus:border-primary" />
        <button type="submit" className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-accent transition">Send Message</button>
      </form>
      <div className="mt-12 text-center text-gray-600 space-y-2">
        <p>U.S. HQ: 1 University Drive, Aliso Viejo, CA 92656 · +1 (949) 685-8126</p>
        <p>Ghana Office: Money Tee St., Spintex Rd., Accra · +233 (0) 53 158 9809</p>
      </div>
    </div>
  );
}