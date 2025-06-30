// src/components/TeamCard.jsx
import React from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

const socialIconMap = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
  github: FaGithub,
};

export default function TeamCard({
  name,
  role,
  imageSrc,
  bio,
  socials = [], // e.g. [{ type: 'linkedin', url: 'https://…' }, …]
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6 hover:shadow-xl transition">
      {/* Profile image or placeholder */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={`${name} profile`}
          className="w-24 h-24 rounded-full object-cover mb-4"
          loading="lazy"
        />
      ) : (
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400">
          <span className="text-2xl">{name.charAt(0)}</span>
        </div>
      )}

      {/* Name & role */}
      <h4 className="font-semibold text-xl text-gray-800">{name}</h4>
      <p className="text-gray-600 text-sm mb-4">{role}</p>

      {/* Optional bio/description */}
      {bio && <p className="text-gray-500 text-sm text-center mb-4">{bio}</p>}

      {/* Social links */}
      {socials.length > 0 && (
        <div className="flex space-x-4">
          {socials.map(({ type, url }) => {
            const Icon = socialIconMap[type.toLowerCase()];
            return (
              Icon && (
                <a
                  key={type}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={type}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <Icon size={18} />
                </a>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}
