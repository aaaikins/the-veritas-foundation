import React from 'react';

export default function Hero() {
  return (
    <div className="relative text-white text-center">
      <img src="/hero-image.jpeg" alt="Hero" className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <p className="text-sm">EMPOWERING IDEAS · TRANSFORMING LIVES</p>
        <h1 className="text-3xl md:text-5xl font-bold">The Veritas Foundation Inc.</h1>
        <p className="max-w-2xl mt-2 text-sm md:text-lg">
          Join us on our mission to promote inclusivity and empower the next generation through education, social justice initiatives, and youth & women empowerment programs.
        </p>
        <div className="mt-4 space-x-4">
          <button className="bg-indigo-900 text-white px-4 py-2 rounded-md">Apply for mentorship</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Become a volunteer</button>
        </div>
      </div>
    </div>
  );
}