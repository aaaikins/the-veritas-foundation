import React from 'react';
import ProgramCard from '../components/Cards';

export default function Programs() {
  const programs = [
    { title: 'Veritas Scholars Program', description: 'Scholarships for outstanding students.' },
    { title: 'Mentorship Program', description: 'Connect with academic & professional mentors.' },
    { title: 'SAT Boot Camp', description: 'Intensive prep to maximize SAT scores.' },
    { title: 'Volunteer Opportunities', description: 'Engage directly in community initiatives.' },
  ];
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Programs</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => <ProgramCard key={p.title} {...p} />)}
      </div>
    </div>
  );
}