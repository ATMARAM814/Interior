import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [contactOpen, setContactOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onOpenContact={() => setContactOpen(true)} />;
      case 'services':
        return <ServicesPage onOpenContact={() => setContactOpen(true)} />;
      case 'how-it-works':
        return <HowItWorksPage onOpenContact={() => setContactOpen(true)} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onOpenContact={() => setContactOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] selection:bg-[#C5A059]/20 selection:text-[#18181B]">
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenContact={() => setContactOpen(true)} 
      />

      {/* Multi-Page Route Render */}
      <main className="w-full">
        {renderCurrentPage()}
      </main>

      {/* Studio Footer — Exact Replica of User Screenshot */}
      <Footer 
        onOpenContact={() => setContactOpen(true)} 
        setCurrentPage={setCurrentPage}
      />

      {/* Consultation Booking Modal */}
      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />
    </div>
  );
}
