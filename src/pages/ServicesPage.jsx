import React from 'react';
import Services from '../components/Services';
import MaterialBoard from '../components/MaterialBoard';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const detailedServices = [
    {
      id: "spatial",
      title: "Spatial Architecture & Master Planning",
      tagline: "Volumetric Layout Optimization",
      desc: "Complete architectural re-zoning of floor plates, wall removal engineering, sightline alignment, and custom ceiling height elevations.",
      deliverables: ["Demolition & Framing Plans", "3D Volumetric Spatial Renderings", "Structural Sightline Audits", "HVAC & Electrical Ducting Maps"]
    },
    {
      id: "millwork",
      title: "Bespoke Millwork & Custom Furniture",
      tagline: "Artisan Atelier Procurement",
      desc: "Custom Italian marble kitchen islands, channel-upholstered velvet headboards, smoked oak library shelving, and satin brass trim details.",
      deliverables: ["1:1 Scale Millwork Drawings", "Material Sample Boards", "Custom Leather & Velvet Upholstery", "White-Glove Delivery & Assembly"]
    },
    {
      id: "lighting",
      title: "Architectural Lighting & Acoustics",
      tagline: "Circadian Illumination & Soundscapes",
      desc: "Concealed LED cove lighting, warm dimming drivers, smart home scene programming, and soundproofing wall panelling.",
      deliverables: ["Lux Level Illumination Layouts", "Acoustic Insulation Ratings", "Custom Brass Light Fixture Sourcing", "Lutron/Control4 Scene Programming"]
    },
    {
      id: "supervision",
      title: "Turnkey Executive Site Supervision",
      tagline: "End-to-End Construction Oversight",
      desc: "Dedicated principal oversight on-site to ensure contractors maintain sub-millimeter tolerances, budget discipline, and timeline targets.",
      deliverables: ["Weekly Site Audit Reports", "Contractor Compliance Oversight", "Punch-List Inspection Handover", "Final Deep Cleaning & Art Staging"]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] text-[#18181B] min-h-screen w-full">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Full-Spectrum Architectural Offerings</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#18181B] tracking-tight mb-6 leading-tight">
            Our Architectural Services & <span className="text-[#C5A059] font-light">Custom Fitout Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#52525B] font-normal leading-relaxed">
            From initial spatial concept drawings to white-glove site staging, our studio executes end-to-end interior architecture for penthouses, grand villas, and commercial flagships.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {detailedServices.map((service) => (
            <div key={service.id} className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm flex flex-col justify-between hover:border-[#C5A059] transition-all">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-semibold block mb-2">
                  {service.tagline}
                </span>
                <h3 className="text-2xl font-bold text-[#18181B] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>

                <h4 className="text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-3">Included Deliverables:</h4>
                <ul className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#52525B]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#18181B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Commission This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Integrated Material Customizer */}
        <div className="mb-20">
          <MaterialBoard />
        </div>

      </div>
    </div>
  );
}
