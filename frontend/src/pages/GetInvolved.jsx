// src/pages/GetInvolved.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function GetInvolved() {
  return (
    <>
      <NavBar />
      <main>
        {/* Donate */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
          <p className="mb-8">Your donation helps us empower the next generation of leaders.</p>
          <button className="btn-primary">Donate Now</button>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
            {/* TODO: List volunteer opportunities */}
          </div>
        </section>

        {/* Partner With Us */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Partner With Us</h2>
            <p className="mb-8">Interested in collaborating? <a href="/contact" className="underline">Get in touch</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


