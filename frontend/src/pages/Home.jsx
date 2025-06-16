import React from "react";
// import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

// import { button } from "@/components/ui/button";

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Cards />
    </div>
  );
}


export default Home;