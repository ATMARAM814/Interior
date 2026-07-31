import React, { useState, useRef } from 'react';
import { ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPosition(pos);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="py-16 sm:py-24 bg-[#F5F3EF] relative overflow-hidden border-t border-b border-[#E6E2DA] w-full">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spatial Metamorphosis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Raw Structural Shell to <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">Finished Spatial Sanctuary</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-xl font-normal leading-relaxed">
            Drag the transformation divider below to reveal how our studio transforms unfinished architectural concrete shells into turnkey luxury residences.
          </p>
        </div>

        {/* Interactive Before / After Slider Container */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[420px] sm:h-[540px] md:h-[640px] rounded-2xl overflow-hidden bg-white border border-[#E6E2DA] shadow-xl cursor-ew-resize select-none touch-none"
        >
          {/* AFTER LAYER (z-index: 10) */}
          <div className="absolute inset-0 z-10">
            <img 
              src="/images/finished_luxury_villa_1785357748931.png" 
              alt="Finished Luxury Interior Design" 
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 rounded-lg bg-[#18181B]/90 backdrop-blur-md border border-white/15 whitespace-nowrap overflow-hidden min-w-max pointer-events-none">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-mono font-semibold">
                After: Completed Atelier Fitout
              </span>
            </div>
          </div>

          {/* BEFORE LAYER (z-index: 20) */}
          <div 
            className="absolute inset-0 z-20 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="/images/raw_interior_construction_1785357737411.png" 
              alt="Raw Construction State" 
              className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
            />
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-lg bg-[#18181B]/90 backdrop-blur-md border border-white/15 whitespace-nowrap overflow-hidden min-w-max pointer-events-none">
              <span className="text-xs uppercase tracking-[0.2em] text-[#F4F4F5] font-mono font-semibold">
                Before: Structural Site Shell
              </span>
            </div>
          </div>

          {/* Vertical Slider Handle Line (z-index: 30) */}
          <div 
            className="absolute top-0 bottom-0 z-30 w-1 bg-[#C5A059] pointer-events-none shadow-[0_0_15px_rgba(197,160,89,0.6)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#C5A059] p-0.5 shadow-xl flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
              <ArrowLeftRight className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>

        </div>

        {/* Phase Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E2DA] flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 min-h-[240px] group shadow-sm cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono font-bold text-[#C5A059]">01. PHASE ONE</span>
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold text-[#18181B] mb-3 group-hover:text-[#C5A059] transition-colors">
                Spatial Re-Engineering
              </h4>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-normal">
                Structural wall demolition, ceiling height optimization, sightline alignment, and natural daylight orientation for volumetric grandeur.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#71717A] font-mono uppercase tracking-wider">
              <span>Demolition & Framing</span>
              <span className="text-[#C5A059]">Weeks 1 – 4</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E2DA] flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 min-h-[240px] group shadow-sm cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono font-bold text-[#C5A059]">02. PHASE TWO</span>
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold text-[#18181B] mb-3 group-hover:text-[#C5A059] transition-colors">
                Bespoke Material Fitout
              </h4>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-normal">
                Sourcing rare Calacatta marble, hand-carved travertine wall panels, quartersawn smoked oak millwork, and custom brushed brass trims.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#71717A] font-mono uppercase tracking-wider">
              <span>Artisan Millwork</span>
              <span className="text-[#C5A059]">Weeks 5 – 10</span>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E2DA] flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 min-h-[240px] group shadow-sm cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono font-bold text-[#C5A059]">03. PHASE THREE</span>
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold text-[#18181B] mb-3 group-hover:text-[#C5A059] transition-colors">
                Turnkey White-Glove Staging
              </h4>
              <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-normal">
                Custom furniture installation, integrated circadian lighting programming, acoustic balance tuning, and final white-glove handover.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6E2DA] flex items-center justify-between text-xs text-[#71717A] font-mono uppercase tracking-wider">
              <span>Final Handover</span>
              <span className="text-[#C5A059]">Weeks 11 – 14</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
