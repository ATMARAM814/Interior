import React, { useState } from 'react';
import { Check, SlidersHorizontal, Sparkles, RefreshCw } from 'lucide-react';

export const DYNAMIC_MATERIALS = [
  {
    id: 'm1',
    name: "Calacatta Gold Italian Marble",
    category: "Natural Stone",
    finish: "Polished High-Gloss",
    previewColor: "linear-gradient(135deg, #EAE6DF 0%, #D4AF37 50%, #C4BBAF 100%)",
    textureImage: "/images/contemporary_minimalist_kitchen_1785357714785.png",
    description: "Rare Carrara-quarried white marble with dramatic honey and warm champagne gold veining.",
    specs: { lrv: "68%", nrc: "0.05", origin: "Carrara, Italy", durability: "Class I Commercial" }
  },
  {
    id: 'm2',
    name: "Brushed Champagne Brass Trim",
    category: "Architectural Metal",
    finish: "Brushed Satin",
    previewColor: "linear-gradient(135deg, #D4AF37 0%, #F5E5AD 40%, #AA771C 100%)",
    textureImage: "/images/finished_luxury_villa_1785357748931.png",
    description: "Satin-brushed solid architectural metal providing warm golden reflections without high-gloss glare.",
    specs: { lrv: "42%", nrc: "0.02", origin: "Milan, Italy", durability: "Tarnish Resistant" }
  },
  {
    id: 'm3',
    name: "Smoked Quartersawn Espresso Oak",
    category: "Architectural Wood",
    finish: "Honed Matt",
    previewColor: "linear-gradient(135deg, #2A211B 0%, #1A1410 60%, #0F0B08 100%)",
    textureImage: "/images/luxury_penthouse_living_room_1785357702933.png",
    description: "Deep, rich quartersawn European oak millwork with natural tactile grain and matte oil seal.",
    specs: { lrv: "12%", nrc: "0.35", origin: "Black Forest, Germany", durability: "Solid Hardwood" }
  },
  {
    id: 'm4',
    name: "Travertine & Cashmere Velvet",
    category: "Soft Furnishings",
    finish: "Tactile Carved",
    previewColor: "linear-gradient(135deg, #D9D2C9 0%, #B8AD9E 60%, #8C8072 100%)",
    textureImage: "/images/luxury_master_suite_1785357725159.png",
    description: "Tactile acoustic wall panelling paired with unpolished ivory travertine stone and silk drapery.",
    specs: { lrv: "52%", nrc: "0.75", origin: "Tuscany, Italy", durability: "Acoustic Grade" }
  },
  {
    id: 'm5',
    name: "Nero Marquina Bookmatched Slate",
    category: "Natural Stone",
    finish: "Honed Matt",
    previewColor: "linear-gradient(135deg, #16181D 0%, #2A2D35 50%, #0B0C0E 100%)",
    textureImage: "/images/contemporary_minimalist_kitchen_1785357714785.png",
    description: "Deep Basque black limestone with striking high-contrast white calcite vein patterns.",
    specs: { lrv: "08%", nrc: "0.05", origin: "Markina, Spain", durability: "Class I Architectural" }
  }
];

export default function MaterialBoard() {
  const [selectedMaterial, setSelectedMaterial] = useState(DYNAMIC_MATERIALS[0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightingMode, setLightingMode] = useState('Warm Ambient');

  const categories = ['All', 'Natural Stone', 'Architectural Metal', 'Architectural Wood', 'Soft Furnishings'];

  const filteredMaterials = DYNAMIC_MATERIALS.filter(m => {
    const matchCat = activeCategory === 'All' || m.category === activeCategory;
    return matchCat;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#F5F3EF] relative overflow-hidden border-t border-b border-[#E6E2DA] w-full font-sans">
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Material Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18181B] tracking-tight">
              Dynamic Material Board & <br className="hidden sm:inline"/>
              <span className="text-[#C5A059] font-light">Tactile Specimen Customizer</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#52525B] max-w-xl font-normal leading-relaxed">
            Filter, inspect, and customize live material pairings. Toggle surface finishes, light scenarios, and technical specs in real time.
          </p>
        </div>

        {/* Dynamic Controls Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E2DA] mb-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider mr-2 shrink-0 font-semibold">Material:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    const matched = DYNAMIC_MATERIALS.filter(m => cat === 'All' || m.category === cat);
                    if (matched.length > 0) setSelectedMaterial(matched[0]);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#18181B] text-[#FAF8F5] shadow-sm'
                      : 'bg-[#FAF8F5] text-[#52525B] hover:text-[#18181B] border border-[#E6E2DA]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Lighting Mode Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider font-semibold">Lighting:</span>
              <button
                onClick={() => setLightingMode(lightingMode === 'Warm Ambient' ? 'Daylight 5000K' : 'Warm Ambient')}
                className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#C5A059] text-xs font-mono text-[#C5A059] font-semibold flex items-center gap-2 hover:bg-[#C5A059]/10 transition-colors shadow-sm cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{lightingMode}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Clean Natural Layout (Top Aligned, No Giant Blank Whitespace) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Swatch List — Top Aligned Natural List */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-3">
            {filteredMaterials.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#E6E2DA] text-xs text-[#71717A]">
                No materials matching the selected filter.
              </div>
            ) : (
              filteredMaterials.map((mat) => {
                const isSelected = selectedMaterial.id === mat.id;
                return (
                  <div
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                      isSelected
                        ? 'bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                        : 'bg-white border-[#E6E2DA] hover:border-[#D4CEC3]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-xl shadow-inner border border-[#E6E2DA] shrink-0"
                        style={{ background: mat.previewColor }}
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] uppercase tracking-wider text-[#71717A] font-mono">
                            {mat.category}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-[#FAF8F5] text-[#C5A059] font-mono border border-[#E6E2DA]">
                            {mat.finish}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#18181B]">
                          {mat.name}
                        </h4>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-[#C5A059] flex items-center justify-center text-white shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Right Preview Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E6E2DA] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              
              <div>
                <div className="relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#E6E2DA] mb-6 group">
                  <img 
                    src={selectedMaterial.textureImage} 
                    alt={selectedMaterial.name} 
                    className="w-full h-full object-cover transition-all duration-700 brightness-95 group-hover:scale-105"
                    style={{
                      filter: lightingMode === 'Daylight 5000K' ? 'contrast(1.05) brightness(1.08)' : 'sepia(0.1) brightness(0.95)'
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-85" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18181B]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                    <SlidersHorizontal className="w-3 h-3" />
                    <span>Mode: {lightingMode}</span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-mono text-[#C5A059] font-semibold block">
                        Live Material Curation
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {selectedMaterial.name}
                      </h3>
                    </div>

                    <div 
                      className="w-14 h-14 rounded-xl border-2 border-white/20 shadow-2xl shrink-0 hidden sm:block"
                      style={{ background: selectedMaterial.previewColor }}
                    />
                  </div>
                </div>

                <p className="text-base text-[#52525B] font-normal leading-relaxed mb-6">
                  {selectedMaterial.description}
                </p>
              </div>

              {/* Symmetrical Specs Grid */}
              <div className="pt-6 border-t border-[#E6E2DA] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA]">
                  <span className="text-[10px] text-[#71717A] font-mono uppercase tracking-wider block mb-1">
                    Light Reflectance
                  </span>
                  <span className="text-sm font-bold text-[#18181B] font-mono">
                    {selectedMaterial.specs.lrv} (LRV)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA]">
                  <span className="text-[10px] text-[#71717A] font-mono uppercase tracking-wider block mb-1">
                    Acoustic Rating
                  </span>
                  <span className="text-sm font-bold text-[#18181B] font-mono">
                    {selectedMaterial.specs.nrc} (NRC)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA]">
                  <span className="text-[10px] text-[#71717A] font-mono uppercase tracking-wider block mb-1">
                    Origin Region
                  </span>
                  <span className="text-xs font-semibold text-[#C5A059] truncate block">
                    {selectedMaterial.specs.origin}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA]">
                  <span className="text-[10px] text-[#71717A] font-mono uppercase tracking-wider block mb-1">
                    Durability Class
                  </span>
                  <span className="text-xs font-semibold text-[#18181B] truncate block">
                    {selectedMaterial.specs.durability}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
