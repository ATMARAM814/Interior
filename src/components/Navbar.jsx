import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-[#FAF8F5]/98 backdrop-blur-md py-4 border-b border-[#E2DDD5] shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
    >
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg border border-[#D4CEC3] flex items-center justify-center bg-white group-hover:border-[#C5A059] transition-all shadow-sm">
            <span className="text-sm font-bold tracking-tight text-[#18181B] group-hover:text-[#C5A059]">AV</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#18181B]">
              ATELIER V
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] font-mono">
              Interior Architecture
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.18em] font-semibold text-[#3F3F46]">
          
          {/* 1. HOME */}
          <button
            onClick={() => handleNavClick('home')}
            className={`py-2 relative transition-colors cursor-pointer ${
              currentPage === 'home' ? 'text-[#18181B] font-bold' : 'hover:text-[#18181B]'
            }`}
          >
            <span>HOME</span>
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full"></span>
            )}
          </button>

          {/* 2. ABOUT US */}
          <button
            onClick={() => handleNavClick('about')}
            className={`py-2 relative transition-colors cursor-pointer ${
              currentPage === 'about' ? 'text-[#18181B] font-bold' : 'hover:text-[#18181B]'
            }`}
          >
            <span>ABOUT US</span>
            {currentPage === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full"></span>
            )}
          </button>

          {/* 3. OUR SERVICES ▾ (Redesigned Premium Dropdown) */}
          <div 
            className="relative py-2 cursor-pointer"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('services')}
              className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                currentPage === 'services' ? 'text-[#18181B] font-bold' : 'hover:text-[#18181B]'
              }`}
            >
              <span>OUR SERVICES</span>
              <ChevronDown className={`w-4 h-4 text-[#71717A] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#18181B]' : ''}`} />
            </button>
            
            {currentPage === 'services' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full"></span>
            )}

            {/* Redesigned Premium Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 pt-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="p-4 rounded-2xl bg-white border border-[#E2DDD5] shadow-[0_12px_40px_rgba(0,0,0,0.12)] space-y-1.5">
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full p-3 rounded-xl text-left bg-[#FAF8F5] border border-[#E6E2DA] hover:border-[#C5A059] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] shadow-sm">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#18181B] uppercase tracking-wider block">
                          All Services Overview
                        </span>
                        <span className="text-[10px] text-[#71717A] normal-case font-normal block">
                          Explore our full architectural scope
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="pt-2 pb-1 px-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-semibold block mb-2">
                      Specialized Offerings
                    </span>
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs font-semibold text-[#18181B] flex items-center justify-between cursor-pointer"
                      >
                        <span>Full Home Interiors</span>
                        <span className="text-[10px] font-mono text-[#71717A]">Turnkey</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs font-semibold text-[#18181B] flex items-center justify-between cursor-pointer"
                      >
                        <span>Modular Interiors</span>
                        <span className="text-[10px] font-mono text-[#71717A]">Kitchen & Wardrobe</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs font-semibold text-[#18181B] flex items-center justify-between cursor-pointer"
                      >
                        <span>Custom Interiors</span>
                        <span className="text-[10px] font-mono text-[#71717A]">Millwork & Stone</span>
                      </button>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-[#FAF8F5] hover:text-[#C5A059] transition-colors text-xs font-semibold text-[#18181B] flex items-center justify-between cursor-pointer"
                      >
                        <span>Movable Furniture</span>
                        <span className="text-[10px] font-mono text-[#71717A]">Artisan Curation</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* 4. HOW IT WORKS */}
          <button
            onClick={() => handleNavClick('how-it-works')}
            className={`py-2 relative transition-colors cursor-pointer ${
              currentPage === 'how-it-works' ? 'text-[#18181B] font-bold' : 'hover:text-[#18181B]'
            }`}
          >
            <span>HOW IT WORKS</span>
            {currentPage === 'how-it-works' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full"></span>
            )}
          </button>

          {/* 5. CONTACT US */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`py-2 relative transition-colors cursor-pointer ${
              currentPage === 'contact' ? 'text-[#18181B] font-bold' : 'hover:text-[#18181B]'
            }`}
          >
            <span>CONTACT US</span>
            {currentPage === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#18181B] rounded-full"></span>
            )}
          </button>

        </nav>

        {/* Action CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenContact}
            className="champagne-button px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2 group shadow-sm cursor-pointer"
          >
            <span>CONSULT STUDIO</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#18181B] p-2 hover:text-[#C5A059] transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E2DDD5] px-6 py-6 flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-[#18181B] shadow-xl">
          <button onClick={() => handleNavClick('home')} className={`text-left py-2 border-b border-[#E2DDD5] cursor-pointer ${currentPage === 'home' ? 'text-[#C5A059] font-bold' : ''}`}>HOME</button>
          <button onClick={() => handleNavClick('about')} className={`text-left py-2 border-b border-[#E2DDD5] cursor-pointer ${currentPage === 'about' ? 'text-[#C5A059] font-bold' : ''}`}>ABOUT US</button>
          <button onClick={() => handleNavClick('services')} className={`text-left py-2 border-b border-[#E2DDD5] cursor-pointer ${currentPage === 'services' ? 'text-[#C5A059] font-bold' : ''}`}>OUR SERVICES</button>
          <button onClick={() => handleNavClick('how-it-works')} className={`text-left py-2 border-b border-[#E2DDD5] cursor-pointer ${currentPage === 'how-it-works' ? 'text-[#C5A059] font-bold' : ''}`}>HOW IT WORKS</button>
          <button onClick={() => handleNavClick('contact')} className={`text-left py-2 border-b border-[#E2DDD5] cursor-pointer ${currentPage === 'contact' ? 'text-[#C5A059] font-bold' : ''}`}>CONTACT US</button>
          
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] flex items-center justify-center gap-2 mt-2 cursor-pointer"
          >
            <span>Book Private Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
