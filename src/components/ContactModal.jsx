import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    propertyType: 'Penthouse',
    budget: '$100k - $250k',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#18181B]/60 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-white border border-[#E6E2DA] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#18181B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] border border-[#D4CEC3] text-[#71717A] hover:text-[#18181B] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#C5A059] mx-auto flex items-center justify-center text-white">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#18181B]">
              Consultation Brief Received
            </h3>
            <p className="text-xs text-[#52525B] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#18181B]">{formData.name}</strong>. Our senior architectural principal will review your project requirements and connect within 24 hours.
            </p>
            <button 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5]"
            >
              Back to Studio Website
            </button>
          </div>
        ) : (
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#C5A059] font-medium block mb-1">
              Private Consultation Brief
            </span>
            <h3 className="text-2xl font-extrabold text-[#18181B] mb-2">
              Commission Our Atelier
            </h3>
            <p className="text-xs text-[#52525B] mb-6 font-normal leading-relaxed">
              Schedule a confidential project briefing to discuss spatial layouts, custom millwork, and architectural scope.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider font-mono text-[#71717A] block mb-1">Full Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="Victoria Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider font-mono text-[#71717A] block mb-1">Email Address</label>
                  <input 
                    type="email"
                    required
                    placeholder="victoria@estate.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[10px] uppercase tracking-wider font-mono text-[#71717A] block mb-1">Property Type</label>
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                  >
                    <option value="Penthouse">Penthouse Residence</option>
                    <option value="Villa">Estate Villa</option>
                    <option value="Kitchen">Bespoke Culinary Space</option>
                    <option value="Commercial">Luxury Commercial</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider font-mono text-[#71717A] block mb-1">Estimated Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                  >
                    <option value="$100k - $250k">$100,000 – $250,000</option>
                    <option value="$250k - $500k">$250,000 – $500,000</option>
                    <option value="$500k+">$500,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider font-mono text-[#71717A] block mb-1">Project Brief / Vision</label>
                <textarea 
                  rows={3}
                  placeholder="Describe property location, square footage, and desired spatial timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#18181B] transition-colors flex items-center justify-center gap-2 mt-2 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Brief</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
