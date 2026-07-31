import React from 'react';
import { Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react';

export default function Footer({ onOpenContact, setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageName) => {
    if (setCurrentPage) {
      setCurrentPage(pageName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#F5F3EF] text-[#18181B] pt-16 pb-12 relative overflow-hidden w-full font-sans border-t border-[#E6E2DA]">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        
        {/* 4 Column Layout — Off-White Indian Studio Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-5 tracking-tight">
              About Us
            </h3>
            <p className="text-base sm:text-lg text-[#3F3F46] leading-relaxed mb-6 max-w-sm font-medium">
              At Atelier V Studio, we believe that interiors should be as unique as the people who live and work in them.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-3.5">
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-white border border-[#E6E2DA] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF8F5] hover:border-[#18181B] transition-all shadow-sm cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-current stroke-none" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-white border border-[#E6E2DA] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF8F5] hover:border-[#18181B] transition-all shadow-sm cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full bg-white border border-[#E6E2DA] flex items-center justify-center text-[#18181B] hover:bg-[#18181B] hover:text-[#FAF8F5] hover:border-[#18181B] transition-all shadow-sm cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Navigate */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-5 tracking-tight">
              Our Navigate
            </h3>
            <ul className="space-y-3.5 text-base sm:text-lg text-[#3F3F46] font-medium">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('how-it-works')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-5 tracking-tight">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-base sm:text-lg text-[#3F3F46] font-medium">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Full Home Interiors
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Modular Interiors
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Custom Interiors
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Movable Furniture
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                  Home Decor Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] mb-5 tracking-tight">
              Get In Touch
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-[#3F3F46] font-medium leading-relaxed">
              <p>
                Atelier V Studio Pvt. Ltd. 3rd Floor, Indeco Equinox, Baner Road, Baner, Pune, Maharashtra - 411045
              </p>
              <p>
                <a href="mailto:info@ateliervstudio.in" className="hover:text-[#C5A059] transition-colors cursor-pointer block">
                  info@ateliervstudio.in
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Centered Copyright & Scroll to Top Square Button */}
        <div className="relative pt-6 border-t border-[#E6E2DA] flex items-center justify-center text-center">
          <p className="text-sm sm:text-base text-[#71717A] font-semibold">
            Copyright {new Date().getFullYear()} Atelier V Studio All Rights Reserved.
          </p>

          {/* Scroll To Top Square Button */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 bottom-0 w-11 h-11 bg-[#18181B] text-[#FAF8F5] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#18181B] transition-colors rounded-sm shadow-md cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
