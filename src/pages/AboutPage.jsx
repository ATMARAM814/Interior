import React from 'react';
import { Award, Compass, ShieldCheck, Sparkles, ArrowRight, Building2, Users, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutPage({ onOpenContact }) {
  const stats = [
    { label: "Completed Commissions", value: "140+" },
    { label: "Square Feet Transformed", value: "450k sq.ft" },
    { label: "International Design Awards", value: "18" },
    { label: "Years of Practice", value: "15 Years" }
  ];

  const leadership = [
    {
      name: "Akruti V. Sharma",
      role: "Founder & Lead Architectural Director",
      bio: "Trained in Milan and London, Akruti brings 15+ years of experience in high-end spatial planning, luxury penthouse fitouts, and sculptural material curation.",
      image: "/images/luxury_master_suite_1785357725159.png"
    },
    {
      name: "David H. Vance",
      role: "Principal Architectural Engineer",
      bio: "Specializing in complex structural re-engineering, acoustic design, and white-glove site execution for private estates across New York, Bel Air, and Zurich.",
      image: "/images/finished_luxury_villa_1785357748931.png"
    }
  ];

  const milestones = [
    { year: "2010", title: "Studio Establishment", desc: "Founded in New York with a focus on bespoke residential spatial architecture." },
    { year: "2015", title: "International Expansion", desc: "Opened private consulting ateliers in London (Mayfair) and Zurich." },
    { year: "2020", title: "AD 100 Excellence Recognition", desc: "Awarded top penthouse spatial design firm by international architectural press." },
    { year: "2025", title: "Next-Gen 3D VR Customization", desc: "Pioneered real-time photorealistic material boards for ultra-luxury clients." }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] text-[#18181B] min-h-screen w-full">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-12">
        
        {/* Page Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Studio Philosophy & Legacy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#18181B] tracking-tight mb-6 leading-tight">
            Crafting Timeless Spatial Luxury Through <span className="text-[#C5A059] font-light">Architectural Discipline</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#52525B] font-normal leading-relaxed">
            ATELIER V (Akruti Creation Studio) is an award-winning interior architecture firm dedicated to creating residences that feel like private sanctuaries. We harmonize raw volumetric space, rare natural stone, and bespoke artisan millwork.
          </p>
        </div>

        {/* Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#18181B] font-mono block mb-1">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-[#71717A]">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Studio Ethos & 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#18181B] mb-3">1. Volumetric Harmony</h3>
            <p className="text-sm text-[#52525B] leading-relaxed font-normal">
              We begin every commission by evaluating spatial volumes, sightlines, and natural illumination before introducing surface finishes.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#18181B] mb-3">2. Rare Material Sourcing</h3>
            <p className="text-sm text-[#52525B] leading-relaxed font-normal">
              From Carrara marble quarries to Black Forest timber mills, we hand-select every slab, veneer, and brass alloy specimen.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#18181B] mb-3">3. White-Glove Execution</h3>
            <p className="text-sm text-[#52525B] leading-relaxed font-normal">
              Our site supervision team oversees structural framing, acoustic isolation, and custom furniture fitting down to the millimeter.
            </p>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-1">
              Leadership & Design Principals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B]">
              The Architects Behind the Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-48 h-56 rounded-xl overflow-hidden shrink-0 border border-[#E6E2DA]">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#18181B] mb-1">{person.name}</h3>
                  <span className="text-xs uppercase tracking-wider font-mono text-[#C5A059] block mb-3">{person.role}</span>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-normal">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="mb-20">
          <div className="mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-1">
              Studio Chronology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B]">
              Milestones & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm">
                <span className="text-2xl font-extrabold font-mono text-[#C5A059] block mb-2">{m.year}</span>
                <h4 className="text-base font-bold text-[#18181B] mb-2">{m.title}</h4>
                <p className="text-xs text-[#52525B] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#18181B] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Ready to Transform Your Space?</h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">Schedule a confidential consultation with our lead architectural team.</p>
          </div>
          <button 
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A059] text-[#18181B] hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Inquire For Private Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
