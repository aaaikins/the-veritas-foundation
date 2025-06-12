import React from 'react';

const cardData = [
  {
    title: 'OUR MISSION',
    desc: 'We empower youth, women, and marginalized communities by providing access to mentorship, transformative education and innovative opportunities.'
  },
  {
    title: 'OUR VISION',
    desc: 'We aim to build a world where every individual, regardless of background, has the necessary tools, guidance, opportunities and community to reach their full potential.'
  },
  {
    title: 'TESTIMONIALS',
    desc: '"From doubt to a dream come true — read her journey."'
  }
];

export default function Cards() {
  return (
    <div className="p-8 grid md:grid-cols-3 gap-6">
      {cardData.map((card, i) => (
        <div key={i} className="shadow-md rounded-md p-6 bg-white">
          <h2 className="font-bold text-xl mb-2">{card.title}</h2>
          <p className="text-sm mb-4">{card.desc}</p>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">Get started</button>
        </div>
      ))}
    </div>
  );
}