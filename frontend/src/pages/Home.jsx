import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import Stats from '../components/Stats';

export default function Home() {
  const programs = [
    { title: 'Veritas Scholars Program', description: 'Scholarships for outstanding students.' },
    { title: 'Mentorship Program', description: 'Connect with academic & professional mentors.' },
    { title: 'SAT Boot Camp', description: 'Intensive prep to maximize SAT scores.' },
    { title: 'Volunteer Opportunities', description: 'Engage directly in community initiatives.' },
  ];
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Empowering the Next Generation</h1>
          <p className="mb-8 text-xl">Education. Social Justice. Women & Children’s Empowerment.</p>
          <Link to="/programs" className="bg-yellow-500 text-primary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition">Explore Programs</Link>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center"></div>
      </section>

      {/* Programs Preview */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Core Programs</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Stats />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-white">
        <p className="text-2xl mb-6">Ready to join or support?</p>
        <div className="space-x-6">
          <Link to="/apply" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transition">Apply Now</Link>
          <Link to="/donate" className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition">Donate</Link>
        </div>
      </section>
    </div>
  );
}