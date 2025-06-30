// src/pages/Updates.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import NewsList from '../components/NewsList';
// import Accordion from '../components/Accordion';
import Footer from '../components/Footer';

export default function Updates() {
  return (
    <>
      <NavBar />
      <main>
        {/* Full News Listing */}
        <section className="py-16">
          <NewsList showAll />
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


