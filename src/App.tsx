import React from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Analytics />
      <main>
        <Slideshow />
        <ProductsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;