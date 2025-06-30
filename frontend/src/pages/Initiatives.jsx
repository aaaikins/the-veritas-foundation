// src/pages/Initiatives.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Initiatives() {
  return (
    <>
      <NavBar />
      <main>
        {/* Program Details */}
        <section className="py-16">
          <div className="container mx-auto grid gap-12">
            {/* Academic Empowerment */}
            <div>
              <h3 className="text-xl font-bold mb-2">Academic Empowerment</h3>
              <p>[Description here]</p>
            </div>
            {/* Women & Girls Empowerment */}
            <div>
              <h3 className="text-xl font-bold mb-2">Women & Girls Empowerment</h3>
              <p>[Description here]</p>
            </div>
            {/* Health & Wellness Initiatives */}
            <div>
              <h3 className="text-xl font-bold mb-2">Health & Wellness</h3>
              <p>[Description here]</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



