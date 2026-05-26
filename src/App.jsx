import React from 'react';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Hero from './sections/Hero';
import MenuSection from './sections/MenuSection';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Offers from './sections/Offers';
import Reservation from './sections/Reservation';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <CartSidebar />
      
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Offers />
        <Reservation />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
