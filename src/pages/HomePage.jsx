import React from 'react';
import Hero3DGallery from '../components/Hero3DGallery';
import BeforeAfter from '../components/BeforeAfter';
import PortfolioGrid from '../components/PortfolioGrid';
import MaterialBoard from '../components/MaterialBoard';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function HomePage({ onOpenContact }) {
  return (
    <div className="w-full">
      {/* 3D Hero Showcase */}
      <Hero3DGallery onOpenContact={onOpenContact} />

      {/* Spatial Metamorphosis Before/After Slider */}
      <BeforeAfter />

      {/* Selected Architectural Portfolio */}
      <PortfolioGrid onOpenContact={onOpenContact} />

      {/* Interactive Material Specimen Customizer */}
      <MaterialBoard />

      {/* Studio Pillars & Services Overview */}
      <Services onOpenContact={onOpenContact} />

      {/* Client Reviews & Press */}
      <Testimonials />
    </div>
  );
}
