import React from 'react';
import NavBar from '../components/NavBar.jsx';
import HeroSection from '../components/HeroSection';
import StatsGrid from '../components/StatsGrid';
import ScholarsGrid from '../components/ScholarsGrid';
import NewsList from '../components/NewsList';
import Testimonials from '../components/Testimonials';
import TeamCarousel from '../components/TeamCarousel';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section: tagline and mission */}
        <HeroSection />

        {/* Our Numbers */}
        <section className="py-16 bg-gray-50">
          <StatsGrid />
        </section>

        {/* Where Our Scholars Study */}
        <section className="py-16">
          <ScholarsGrid />
        </section>

        {/* Latest News */}
        <section className="py-16 bg-gray-50">
          <NewsList />
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <Testimonials />
        </section>

        {/* Our Team Carousel */}
        <section className="py-16 bg-gray-50">
          <TeamCarousel />
        </section>

        {/* Partners */}
        <section className="py-16">
          <Partners />
        </section>
      </main>
      <Footer />
    </>
  );
}
