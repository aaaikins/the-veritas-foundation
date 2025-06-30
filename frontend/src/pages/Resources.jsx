import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <>
      <NavBar />
      <main>
        {/* Application Resources */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-4">Application Resources</h2>
          {/* TODO: List guides and links */}
        </section>

        {/* Scholarship Database */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">Scholarship Database</h2>
          {/* TODO: Database links or download */}
        </section>

        {/* File Upload (Admin) */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-4">Add a Resource</h2>
          {/* TODO: Create upload form */}
        </section>
      </main>
      <Footer />
    </>
  );
}

// Reminder: Update AppRouter.jsx to include these routes:
// <Route path="/about" element={<AboutUs />} />
// <Route path="/mentorship" element={<Mentorship />} />
// <Route path="/get-involved" element={<GetInvolved />} />
// <Route path="/initiatives" element={<Initiatives />} />
// <Route path="/updates" element={<Updates />} />
// <Route path="/resources" element={<Resources />} />