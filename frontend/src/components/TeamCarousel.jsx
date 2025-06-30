// src/components/TeamCarousel.jsx
import React from 'react';

// Import team member photos
import AmoahJohnsonPhoto from '../assets/images/AmoahJohnson.jpg';
import MentorJanePhoto from '../assets/images/JaneDoe.jpg';
import MentorJohnPhoto from '../assets/images/JohnSmith.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Amoah Johnson',
    role: 'Lead Mentor',
    photo: AmoahJohnsonPhoto,
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Admissions Specialist',
    photo: MentorJanePhoto,
  },
  {
    id: 3,
    name: 'John Smith',
    role: 'Scholarship Advisor',
    photo: MentorJohnPhoto,
  },
  // add more mentors as needed
];

export default function TeamCarousel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Meet Our Team</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {teamMembers.map(({ id, name, role, photo }) => (
          <div
            key={id}
            className="min-w-[200px] bg-white shadow rounded-lg p-4 flex-shrink-0 text-center"
          >
            <img
              src={photo}
              alt={`${name}`}
              className="mx-auto h-32 w-32 rounded-full object-cover mb-4"
            />
            <p className="text-lg font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
