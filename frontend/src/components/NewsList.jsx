import React from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit',
    time: '3 hrs ago',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
    link: '/updates/1',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit',
    time: '3 hrs ago',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
    link: '/updates/2',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit',
    time: '3 hrs ago',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
    link: '/updates/3',
  },
];

export default function NewsList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Latest News</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{item.time}</p>
              <p className="text-gray-600">{item.snippet}</p>
            </div>
            <div className="mt-4">
              <Link to={item.link} className="text-indigo-600 hover:text-indigo-800 font-medium">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/updates" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg">
          All News
        </Link>
      </div>
    </div>
  );
}
