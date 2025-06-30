// src/components/HeroSection.jsx
import React from 'react';
import HeroBg from '../assets/images/hero-bg.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Empowering Scholars Worldwide
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8 max-w-2xl">
          At Veritas, we mentor high-achieving students to reach top universities and unlock their full potential.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
          Apply Now
        </button>
      </div>
    </section>
  );
}
