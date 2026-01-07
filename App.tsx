import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ParallaxBackground } from './components/ui/ParallaxBackground';

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-prime-gold selection:text-black overflow-x-hidden">
      <ParallaxBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main className="perspective-container">
          <Hero />
          <Features />
          <Pricing />
          <Process />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;