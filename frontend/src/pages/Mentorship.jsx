// src/pages/Mentorship.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import HowItWorks from '../components/HowItWorks';
import ApplyForm from '../components/ApplyForm';
import SuccessStory from '../components/SuccessStory';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

export default function Mentorship() {
  return (
    <>
      <NavBar />
      <main>
        {/* How It Works */}
        <section className="py-16">
          <HowItWorks />
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <ApplyForm />
        </section>

        {/* Success Story */}
        <section className="py-16">
          <SuccessStory />
        </section>

        {/* Annual Reports */}
        {/* <section className="py-16 bg-gray-50">
          <Accordion />
        </section> */}
      </main>
      <Footer />
    </>
  );
}


