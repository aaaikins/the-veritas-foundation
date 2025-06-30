import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Mentorship from './pages/Mentorship';
import GetInvolved from './pages/GetInvolved';
import Initiatives from './pages/Initiatives';
import Updates from './pages/Updates';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="mentorship" element={<Mentorship />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="initiatives" element={<Initiatives />} />
        <Route path="updates" element={<Updates />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}