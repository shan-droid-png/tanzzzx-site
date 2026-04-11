import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Walkthrough from './components/Walkthrough';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      <Hero />
      <Gallery />
      <Walkthrough />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
