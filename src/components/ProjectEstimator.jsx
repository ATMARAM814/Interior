import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function ProjectEstimator({ onOpenContact }) {
  const [spaceType, setSpaceType] = useState('Penthouse Residence');
  const [sqft, setSqft] = useState(2500);
  const [styleTheme, setStyleTheme] = useState('Italian Modern Luxury');

  const spaceTypes = [
    { name: 'Penthouse Residence', baseRate: 120 },
    { name: 'Bespoke Culinary Kitchen', baseRate: 180 },
    { name: 'Master Suite & Spa', baseRate: 140 },
    { name: 'Full Grand Villa', baseRate: 160 }
  ];

  const styleThemes = [
    { name: 'Italian Modern Luxury', multiplier: 1.2, tag: 'Nero Marble & Satin Brass' },
    { name: 'Japandi Minimalist', multiplier: 1.0, tag: 'Travertine & Smoked Oak' },
    { name: 'Neo-Classical Elegance', multiplier: 1.35, tag: 'Mouldings & Tailored Velvet' },
    { name: 'Bespoke Contemporary Art', multiplier: 1.15, tag: 'Custom Sculptural Fitout' }
  ];

  const currentSpace = spaceTypes.find(s => s.name === spaceType) || spaceTypes[0];
  const currentStyle = styleThemes.find(st => st.name === styleTheme) || styleThemes[0];

  const estimatedLow = Math.round(sqft * currentSpace.baseRate * currentStyle.multiplier * 0.9);
  const estimatedHigh = Math.round(sqft * currentSpace.baseRate * currentStyle.multiplier * 1.15);
  const estimatedWeeks = Math.round((sqft / 500) + 6);

  return (
    <section id="estimator" className="py-20 bg-[#F5F3EF] relative overflow-hidden border-t border-b border-[#E6E2DA] w-full">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-2">
              Interactive Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Bespoke Investment & <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">Scope Calculator</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-xl font-normal leading-relaxed">
            Select your property parameters to generate an instant estimate of investment scope and project timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Input Selection Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6E2DA] p-6 sm:p-8 space-y-6 shadow-sm">
            
            {/* Step 1: Space Type */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#18181B] font-semibold block mb-3">
                1. Property / Space Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {spaceTypes.map((st) => (
                  <button
                    key={st.name}
                    onClick={() => setSpaceType(st.name)}
                    className={`p-3.5 rounded-xl text-left text-xs transition-all duration-200 border ${
                      spaceType === st.name
                        ? 'bg-[#18181B] text-[#FAF8F5] font-semibold shadow-sm'
                        : 'bg-[#FAF8F5] border-[#E6E2DA] text-[#52525B] hover:border-[#18181B]'
                    }`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Square Footage Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider text-[#18181B] font-semibold">
                  2. Approximate Area (Square Feet)
                </label>
                <span className="text-lg font-mono font-bold text-[#C5A059]">
                  {sqft.toLocaleString()} sq.ft
                </span>
              </div>
              <input 
                type="range"
                min="800"
                max="10000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-[#E6E2DA] rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[10px] text-[#71717A] font-mono mt-2">
                <span>800 sq.ft (Boutique Suite)</span>
                <span>10,000+ sq.ft (Estate Villa)</span>
              </div>
            </div>

            {/* Step 3: Aesthetic Style Theme */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#18181B] font-semibold block mb-3">
                3. Design Aesthetic & Material Finish
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {styleThemes.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setStyleTheme(theme.name)}
                    className={`p-3.5 rounded-xl text-left transition-all duration-200 border ${
                      styleTheme === theme.name
                        ? 'bg-[#18181B] text-[#FAF8F5] border-[#18181B]'
                        : 'bg-[#FAF8F5] border-[#E6E2DA] text-[#52525B] hover:border-[#18181B]'
                    }`}
                  >
                    <div className={`text-xs font-semibold ${styleTheme === theme.name ? 'text-[#FAF8F5]' : 'text-[#18181B]'}`}>
                      {theme.name}
                    </div>
                    <div className="text-[10px] text-[#71717A] font-mono mt-0.5">
                      {theme.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Investment Summary Box */}
          <div className="lg:col-span-5 rounded-2xl bg-[#18181B] border border-[#18181B] text-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-mono text-[#C5A059] font-semibold mb-6">
                <Calculator className="w-4 h-4" />
                <span>Calculated Scope</span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-[#A1A1AA] uppercase tracking-wider block mb-1">
                  Estimated Investment Range:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ${estimatedLow.toLocaleString()} – ${estimatedHigh.toLocaleString()}
                </div>
                <span className="text-[10px] text-[#A1A1AA] font-mono mt-1 block">
                  *Includes spatial design, full material sourcing & turnkey supervision.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A1A1AA]">Estimated Timeline:</span>
                  <span className="text-white font-semibold font-mono">{estimatedWeeks} – {estimatedWeeks + 4} Weeks</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A1A1AA]">Lead Architectural Principal:</span>
                  <span className="text-[#C5A059] font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A1A1AA]">3D Photorealistic Renderings:</span>
                  <span className="text-white font-semibold">360° VR Suite</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onOpenContact}
              className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#18181B] hover:bg-[#C5A059] hover:text-[#18181B] transition-colors flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Request Detailed Proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
