// src/components/HowItWorks.jsx
import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Apply Online',
    description: 'Fill out our detailed application form to help us get to know you and your goals.',
  },
  {
    id: 2,
    title: 'Interview',
    description: 'Participate in a one-on-one video interview with a member of our admissions team.',
  },
  {
    id: 3,
    title: 'Match with Mentor',
    description: 'We pair you with an experienced mentor based on your profile and needs.',
  },
  {
    id: 4,
    title: 'Start Mentorship',
    description: 'Begin scheduled sessions and access personalized resources to achieve your goals.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="space-y-8">
          {steps.map(step => (
            <div key={step.id} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                  {step.id}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="mt-1 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
