import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { NeuralNetworkBackground } from './components/NeuralNetworkBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResearchTimeline } from './components/ResearchTimeline';
import { Publications } from './components/Publications';
import { ResearchBlog } from './components/ResearchBlog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingScreen } from './components/LoadingScreen';
import './styles/globals.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Neural Network Background Animation */}
      <NeuralNetworkBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <ResearchTimeline />
        <Publications />
        <ResearchBlog />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
