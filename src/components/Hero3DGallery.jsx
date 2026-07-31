import React, { useState, useRef, useEffect } from 'react';
import { HERO_SHOWCASE_CARDS } from '../data/projects';
import { ArrowRight, Eye, ChevronLeft, ChevronRight, X, CheckCircle2 } from 'lucide-react';

export default function Hero3DGallery({ onOpenContact }) {
  const [mousePos, setMousePos] = useState({ x: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [selectedCard, setSelectedCard] = useState(null);

  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Triple duplicated array for continuous horizontal scrolling
  const infiniteCards = [...HERO_SHOWCASE_CARDS, ...HERO_SHOWCASE_CARDS, ...HERO_SHOWCASE_CARDS];

  // Set initial scroll position to middle set on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      const singleSetWidth = scrollContainerRef.current.scrollWidth / 3;
      scrollContainerRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  // Track horizontal mouse movement for subtle wall rotation
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    setMousePos({ x });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0 });
    setHoveredCard(null);
  };

  // Infinite seamless horizontal loop
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const singleSetWidth = container.scrollWidth / 3;
    
    if (container.scrollLeft <= 20) {
      container.scrollLeft = singleSetWidth + container.scrollLeft;
    } else if (container.scrollLeft >= singleSetWidth * 2 - 20) {
      container.scrollLeft = container.scrollLeft - singleSetWidth;
    }
  };

  // Smooth Chevron Arrow Buttons
  const scrollLeftBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  // Card Level Subtle 3D Tilt calculation on Hover
  const handleCardMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ x, y });
    setHoveredCard(cardId);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
    setCardTilt({ x: 0, y: 0 });
  };

  // Strictly horizontal rotation angle (No vertical up/down movement)
  const wallRotateY = mousePos.x * 12;

  return (
    <section 
      id="showcase" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#FAF8F5] select-none w-full border-b border-[#E6E2DA]"
    >
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation Arrow Controls (Clean Top Right Placement without Tech Badges) */}
      <div className="w-full max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 flex items-center justify-end z-20 mb-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={scrollLeftBtn}
            className="w-10 h-10 rounded-full bg-white border border-[#D4CEC3] flex items-center justify-center text-[#18181B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-sm active:scale-95 cursor-pointer"
            aria-label="Scroll Showcase Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollRightBtn}
            className="w-10 h-10 rounded-full bg-white border border-[#D4CEC3] flex items-center justify-center text-[#18181B] hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-sm active:scale-95 cursor-pointer"
            aria-label="Scroll Showcase Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SMOOTH FREE HORIZONTAL SCROLLING CONTAINER */}
      <div className="w-full max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 perspective-container relative z-10 my-2">
        
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-none py-6 overflow-y-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div 
            className="hero-3d-wall preserve-3d flex items-center gap-6 min-w-max transition-transform duration-300 ease-out px-4"
            style={{
              transform: `rotateX(0deg) rotateY(${wallRotateY}deg) scale(0.97)`
            }}
          >
            {infiniteCards.map((card, idx) => {
              const uniqueKey = `${card.id}-${idx}`;
              const isHovered = hoveredCard === uniqueKey;
              
              // Base perspective tilt
              const baseTiltY = idx % 2 === 0 ? -5 : 5;

              // Subtle 3D tilt calculation on hover
              const tiltX = isHovered ? cardTilt.y * -10 : 0;
              const tiltY = isHovered ? baseTiltY + cardTilt.x * 12 : baseTiltY;
              const scale = isHovered ? 1.03 : 1;
              const zIndex = isHovered ? 40 : 10;

              return (
                <div
                  key={uniqueKey}
                  onMouseMove={(e) => handleCardMouseMove(e, uniqueKey)}
                  onMouseLeave={handleCardMouseLeave}
                  onClick={() => setSelectedCard(card)}
                  className="hero-card-3d relative group cursor-pointer rounded-xl overflow-hidden bg-white border border-[#E6E2DA] shadow-md hover:shadow-2xl transition-all duration-300 shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[380px]"
                  style={{
                    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
                    zIndex: zIndex,
                    borderColor: isHovered ? '#C5A059' : 'rgba(230,226,218,1)'
                  }}
                >
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100 pointer-events-none"
                  />

                  {/* Dark Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity pointer-events-none" />

                  {/* Gold Border Highlight on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C5A059] rounded-xl transition-all duration-300 pointer-events-none" />

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium mb-1">
                      {card.tagline}
                    </span>
                    <h3 className="text-xl text-[#F4F4F5] font-bold tracking-tight group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-[#A1A1AA] group-hover:text-[#F4F4F5] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Click to View Full Specs</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Center Headline */}
      <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6 mt-4 md:mt-6 pointer-events-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#18181B] leading-[1.08] tracking-tight mb-4">
          Bespoke Spatial Luxury & <br className="hidden sm:inline"/>
          <span className="text-[#C5A059] font-light">Architectural Precision</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Crafting luxury penthouses, private estates, and signature culinary spaces with raw spatial balance, tailored millwork, and refined structural geometry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button 
            onClick={onOpenContact}
            className="w-full sm:w-auto champagne-button px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 group shadow-sm cursor-pointer"
          >
            <span>Commission Studio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a 
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#18181B] bg-white border border-[#D4CEC3] hover:border-[#18181B] transition-all flex items-center justify-center gap-2.5 shadow-sm cursor-pointer"
          >
            <span>Explore Portfolio</span>
          </a>
        </div>
      </div>

      {/* CLICKABLE CARD LIGHTBOX MODAL */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/60 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E6E2DA] shadow-2xl p-5 sm:p-8 text-[#18181B]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#FAF8F5] border border-[#D4CEC3] text-[#71717A] hover:text-[#18181B] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-2">
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E6E2DA] shadow-md">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title} 
                  className="w-full h-[260px] sm:h-[380px] object-cover"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block">
                    {selectedCard.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#18181B] mt-1 mb-3">
                    {selectedCard.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-[#71717A] pb-3 mb-4 border-b border-[#E6E2DA] font-mono">
                    <div><strong className="text-[#18181B]">Location:</strong> {selectedCard.location}</div>
                    <div><strong className="text-[#18181B]">Area:</strong> {selectedCard.area}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed mb-5 font-normal">
                    {selectedCard.description}
                  </p>

                  <h4 className="text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-2">
                    Key Features & Materials:
                  </h4>
                  <ul className="space-y-1.5 mb-6">
                    {selectedCard.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#52525B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    setSelectedCard(null);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#18181B] transition-colors shadow-sm cursor-pointer"
                >
                  Inquire For Similar Residence
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
