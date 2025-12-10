import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import About from "./components/About";
import Parfume from "./components/Parfume"; // Pastikan importnya benar
import Clothes from "./components/Clothes"; 
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop"; // <--- IMPORT INI

function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-red-600 selection:text-white">
        
        <Navbar />
        
        {/* BUTTON BACK TO TOP DIPASANG DISINI AGAR GLOBAL */}
        <BackToTop />
        
        <main>
          {/* --- SECTION 1: HERO --- */}
          <section id="home">
            <Hero />
          </section>

          {/* --- SECTION 2: ABOUT --- */}
          <section id="about">
            <About />
          </section>

          {/* --- SECTION 3: PARFUME --- */}
          <section id="parfume">
            <Parfume />
          </section>

          {/* --- SECTION 4: CLOTHES --- */}
          <section id="clothes">
            <Clothes />
          </section>

          {/* --- SECTION 5: FOOTER --- */}
          <section id="footer">
            <Footer />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;