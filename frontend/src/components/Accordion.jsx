// src/components/Accordion.jsx
import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = id => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {items.map(item => (
        <div key={item.id} className="border-b">
          <button
            onClick={() => toggle(item.id)}
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg font-medium text-gray-900">{item.title}</span>
            <span className="ml-4 text-gray-500">
              {openId === item.id ? '-' : '+'}
            </span>
          </button>
          {openId === item.id && (
            <div className="pb-4 text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}