import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import FulfillmentSection from './components/FulfillmentSection';
import GrowthSection from './components/GrowthSection';
import CtaSection from './components/CtaSection';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light font-sans text-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <FulfillmentSection />
        <GrowthSection />
        <CtaSection />
      </main>
       <footer className="text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} HypeChart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
