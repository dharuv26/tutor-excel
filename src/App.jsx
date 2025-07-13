// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import WhyTrust from './components/WhyTrust';
import HowItWorks from './components/HowItWorks';
import LearningStyles from './components/LearningStyles';
import QualityBanner from './components/QualityBanner';     // 1. Import the new component
import ProgressSection from './components/ProgressSection'; // 2. Import the new component
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoSection />
        <WhyTrust />
        <HowItWorks />
        <LearningStyles />
        <QualityBanner />     {/* 3. Add it here */}
        <ProgressSection />   {/* 4. Add it here */}
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;