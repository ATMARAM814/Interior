import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Atelier V turned our 5,000 sq.ft penthouse into a sanctuary of dark oak, satin brass, and Italian marble. Their attention to spatial acoustics and lighting micro-details is unparalleled.",
      author: "Victoria Sterling",
      title: "Penthouse Owner • Upper East Side",
      rating: 5
    },
    {
      quote: "A masterclass in spatial restraint and architectural luxury. They created a kitchen and dining hall that feels straight out of an international architecture biennial.",
      author: "Marcus & Elena Vance",
      title: "Private Villa Estate • Bel Air",
      rating: 5
    },
    {
      quote: "Among international interior architecture studios, Atelier V stands out for their seamless blend of raw structural symmetry and contemporary elegance.",
      author: "Architectural Digest Review",
      title: "Annual Design Edition",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden w-full">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-2">
              Accolades & Praise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Client Commendations & <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">Architectural Press</span>
            </h2>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E2DA] flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 mb-5 text-[#C5A059]">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                  ))}
                </div>

                <Quote className="w-6 h-6 text-[#C5A059] mb-3 opacity-60" />
                <p className="text-sm sm:text-base text-[#52525B] font-normal leading-relaxed mb-6">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E2DA]">
                <h4 className="text-sm font-bold text-[#18181B]">
                  {r.author}
                </h4>
                <span className="text-[10px] uppercase tracking-wider font-mono text-[#C5A059]">
                  {r.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
