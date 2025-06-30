// src/pages/AboutUs.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import SuccessStory from '../components/SuccessStory';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <main>
        {/* Mission / Vision / Goals */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="mb-8">[Insert mission statement here]</p>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="mb-8">[Insert vision statement here]</p>
            <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
            <p>[Insert goals here]</p>
          </div>
        </section>

        {/* Success Story Highlight */}
        <section className="py-16 bg-gray-50">
          <SuccessStory />
        </section>

        {/* Leadership & Team Profiles */}
        <section className="py-16">
          {/* TODO: Create LeadershipAndTeams component */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile cards go here */}
          </div>
        </section>

        {/* Partners Logos */}
        <section className="py-16 bg-gray-50">
          <Partners />
        </section>
      </main>
      <Footer />
    </>
  );
}
