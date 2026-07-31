import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/projects';
import { MapPin, Maximize2, X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PortfolioGrid({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential Architecture', 'Bespoke Culinary Space', 'Luxury Bedroom', 'Grand Villa Fitout'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAF8F5] relative overflow-hidden w-full">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-2">
              Curated Commissions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Selected Architectural & <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">Interior Projects</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#52525B] max-w-xl font-normal leading-relaxed">
            A showcase of luxury penthouse residences, custom culinary spaces, and private villa estates built with immaculate spatial discipline.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#E6E2DA]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#18181B] text-[#FAF8F5] shadow-md font-semibold'
                  : 'bg-white text-[#52525B] hover:text-[#18181B] border border-[#E6E2DA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E6E2DA] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end"
            >
              {/* Image Container */}
              <div className="relative h-[340px] sm:h-[400px] overflow-hidden w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                
                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#18181B]/80 backdrop-blur-md border border-white/15 text-[10px] uppercase tracking-wider text-[#FAF8F5] font-mono">
                  <MapPin className="w-3 h-3 text-[#C5A059]" />
                  <span>{project.location}</span>
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#18181B]/80 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-[#C5A059]" />
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <span className="text-[11px] uppercase tracking-[0.15em] font-mono text-[#C5A059] font-medium mb-1">
                    {project.category} • {project.area}
                  </span>
                  <h3 className="text-xl sm:text-2xl text-[#FAF8F5] font-bold tracking-tight mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4D4D8] line-clamp-2 font-normal leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] group-hover:translate-x-1 transition-transform">
                    <span>Inspect Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/60 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E6E2DA] shadow-2xl p-5 sm:p-8 text-[#18181B]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-20 p-2 rounded-full bg-[#FAF8F5] border border-[#D4CEC3] text-[#71717A] hover:text-[#18181B] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-2">
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-[#E6E2DA] shadow-md">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-[260px] sm:h-[380px] object-cover"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#18181B] mt-1 mb-3">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-[#71717A] pb-3 mb-4 border-b border-[#E6E2DA] font-mono">
                    <div><strong className="text-[#18181B]">Location:</strong> {selectedProject.location}</div>
                    <div><strong className="text-[#18181B]">Area:</strong> {selectedProject.area}</div>
                  </div>

                  <p className="text-sm text-[#52525B] leading-relaxed mb-5 font-normal">
                    {selectedProject.description}
                  </p>

                  <h4 className="text-xs uppercase tracking-wider text-[#18181B] font-semibold mb-2">
                    Key Features & Materials:
                  </h4>
                  <ul className="space-y-1.5 mb-6">
                    {selectedProject.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#52525B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    setSelectedProject(null);
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
