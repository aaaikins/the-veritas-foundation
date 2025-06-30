// src/components/ApplyForm.jsx
import React, { useState } from 'react';

export default function ApplyForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    school: '',
    major: '',
    essay: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: submit form data to API
    console.log('Submitting application', form);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white shadow rounded-lg p-8 space-y-6">
      <h2 className="text-2xl font-extrabold text-gray-900">Apply for Mentorship</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Current School</label>
          <input
            type="text"
            name="school"
            value={form.school}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Intended Major</label>
          <input
            type="text"
            name="major"
            value={form.major}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Personal Statement</label>
        <textarea
          name="essay"
          value={form.essay}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
}



