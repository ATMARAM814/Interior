import React from 'react';
import { Compass, Armchair, SunMedium, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Services({ onOpenContact }) {
  const services = [
    {
      num: "01",
      icon: Compass,
      title: "Spatial Architecture & Master Planning",
      description: "Structural layout re-zoning, sightline optimization, and volumetric proportioning for penthouse residences and private estates."
    },
    {
      num: "02",
      icon: Armchair,
      title: "Bespoke Millwork & Custom Furniture",
      description: "Tailor-made Italian marble coffee tables, channel-upholstered velvet headboards, and smoked oak wall paneling crafted in private ateliers."
    },
    {
      num: "03",
      icon: SunMedium,
      title: "Architectural Lighting & Acoustics",
      description: "Circadian illumination systems, concealed LED cove accent lighting, and acoustic treatments for acoustic living soundscapes."
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Turnkey Executive Site Supervision",
      description: "End-to-end management from structural teardown to final white-glove staging, ensuring precision down to the millimeter."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative overflow-hidden w-full">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-2">
              Studio Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Full-Spectrum Architectural <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">& Interior Craftsmanship</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-xl font-normal leading-relaxed">
            From preliminary spatial concept drawings to turnkey white-glove staging, we curate every element with uncompromising standards.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] group-hover:border-[#C5A059] transition-colors">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-2xl font-mono font-extrabold text-[#D4CEC3] group-hover:text-[#C5A059] transition-colors">
                    {s.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#18181B] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm sm:text-base text-[#52525B] font-normal leading-relaxed mb-6">
                  {s.description}
                </p>

                <div 
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A059] cursor-pointer group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire For Service</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
