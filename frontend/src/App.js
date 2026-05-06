import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import IntroSection from './components/IntroSection';
import VillaGallery from './components/VillaGallery';
import LocationSection from './components/LocationSection';
import ImageGallery from './components/ImageGallery';
import ExperiencesSection from './components/ExperiencesSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import StickyBookingBar from './components/StickyBookingBar';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <StatsBar />
        <IntroSection />
        <VillaGallery />
        <LocationSection />
        <ImageGallery />
        <ExperiencesSection />
        <Testimonials />
        <ContactSection />
        <StickyBookingBar />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
