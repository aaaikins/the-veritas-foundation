import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}