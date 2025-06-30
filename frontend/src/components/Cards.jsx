// src/components/Cards.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaQuoteRight } from 'react-icons/fa';

const cardData = [
  {
    title: 'Our Mission',
    desc:
      'We empower youth, women, and marginalized communities by providing access to mentorship, transformative education and innovative opportunities.',
    icon: <FaBullseye size={32} />,
    cta: { text: 'Learn More', to: '/about-us#mission' },
  },
  {
    title: 'Our Vision',
    desc:
      'We aim to build a world where every individual, regardless of background, has the necessary tools, guidance, opportunities and community to reach their full potential.',
    icon: <FaEye size={32} />,
    cta: { text: 'Read Vision', to: '/about-us#vision' },
  },
  {
    title: 'Testimonials',
    desc: '"From doubt to a dream come true — read her journey."',
    icon: <FaQuoteRight size={32} />,
    cta: { text: 'See Stories', to: '/mentorship/success-stories' },
  },
];

export default function Cards() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {cardData.map(({ title, desc, icon, cta }) => (
          <div
            key={title}
            className="flex flex-col bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
          >
            <div className="text-indigo-600 mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 flex-grow mb-6">{desc}</p>
            <Link
              to={cta.to}
              className="mt-auto inline-block text-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition"
            >
              {cta.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
