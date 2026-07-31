import React from 'react';
import { Compass, Sparkles, Hammer, CheckCircle2, ArrowRight, Clock, ShieldCheck, FileCheck } from 'lucide-react';

export default function HowItWorksPage({ onOpenContact }) {
  const steps = [
    {
      step: "01",
      title: "Spatial Discovery & Site Audit",
      timeline: "Week 1",
      tagline: "Volumetric Analysis",
      desc: "We perform a thorough 3D laser scan of your property shell, evaluating structural load walls, window orientation for daylighting, and spatial sightlines.",
      deliverables: ["3D Laser Point Cloud Scan", "Structural Feasibility Audit", "Initial Budget & Timeline Scope"]
    },
    {
      step: "02",
      title: "3D VR Renders & Material Board",
      timeline: "Weeks 2 – 3",
      tagline: "Interactive Visualization",
      desc: "Experience your future residence in photorealistic 3D virtual reality. Select real-time material swatches (Calacatta marble, smoked oak, brushed brass).",
      deliverables: ["360° Photorealistic Renders", "Physical Material Specimen Tray", "Lighting & Acoustic Blueprint"]
    },
    {
      step: "03",
      title: "Artisan Millwork Procurement",
      timeline: "Weeks 4 – 7",
      tagline: "Custom Atelier Fabrication",
      desc: "Direct procurement from Italian marble quarries and European timber mills. Custom furniture and cabinet pieces are built in private artisan workshops.",
      deliverables: ["Sourcing Certification", "Custom Furniture Mockups", "Sub-Millimeter Shop Drawings"]
    },
    {
      step: "04",
      title: "On-Site Structural Fitout",
      timeline: "Weeks 8 – 12",
      tagline: "Executive Supervision",
      desc: "Our senior principal oversees site contractors daily, ensuring framing, electrical wiring, tile bookmatching, and cove lighting match the exact blueprints.",
      deliverables: ["Weekly On-Site Video Reports", "Quality Compliance Checks", "Milestone Progress Handover"]
    },
    {
      step: "05",
      title: "White-Glove Staging & Handover",
      timeline: "Week 13+",
      tagline: "Turnkey Key Handover",
      desc: "Final acoustic tuning, smart lighting scene programming, deep white-glove cleaning, and luxury staging before handing you the keys.",
      deliverables: ["Smart Home Scene Presets", "Maintenance Care Guide", "Turnkey Move-In Handover"]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] text-[#18181B] min-h-screen w-full">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-12">
        
        {/* Page Hero Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>The 5-Stage Atelier Workflow</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#18181B] tracking-tight mb-6 leading-tight">
            How It Works: Our Seamless <span className="text-[#C5A059] font-light">Architectural Process</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#52525B] font-normal leading-relaxed">
            From initial site measurement to final white-glove key handover, explore how our studio manages design, material sourcing, and executive site supervision.
          </p>
        </div>

        {/* 5 Process Steps Timeline */}
        <div className="space-y-8 mb-20">
          {steps.map((s, idx) => (
            <div 
              key={s.step} 
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm hover:border-[#C5A059] transition-all flex flex-col md:flex-row gap-8 items-start justify-between"
            >
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center shrink-0">
                  <span className="text-2xl font-extrabold font-mono text-[#C5A059]">{s.step}</span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs uppercase tracking-wider font-mono text-[#C5A059] font-semibold">{s.tagline}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E6E2DA] text-[#71717A] font-mono">{s.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#18181B] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#52525B] max-w-2xl leading-relaxed font-normal">{s.desc}</p>
                </div>
              </div>

              <div className="w-full md:w-80 p-5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] shrink-0">
                <h4 className="text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-3 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Key Deliverables</span>
                </h4>
                <ul className="space-y-2">
                  {s.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-[#52525B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#18181B] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">Ready to Start Stage 01?</h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA]">Book a complimentary 60-minute spatial discovery session with our principals.</p>
          </div>
          <button 
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C5A059] text-[#18181B] hover:bg-white transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Book Stage 01 Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
