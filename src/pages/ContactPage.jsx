import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building2, Map } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Pune',
    propertyType: '3BHK / 4BHK Luxury Apartment',
    budget: '₹35 Lakhs – ₹75 Lakhs',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-0 bg-[#FAF8F5] text-[#18181B] min-h-screen w-full font-sans">
      
      {/* Container for Top Form & Office Info */}
      <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 pb-16">
        
        {/* Page Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E6E2DA] text-[11px] font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Consultation Inquiries • India Ateliers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#18181B] tracking-tight mb-6 leading-tight">
            Contact Our Studio & <span className="text-[#C5A059] font-light">Book Design Consultation</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#52525B] font-normal leading-relaxed">
            We welcome inquiries for luxury 3BHK/4BHK apartments, duplex penthouses, and independent villas across Pune, Mumbai, and pan-India.
          </p>
        </div>

        {/* ORGANIZED EQUAL-HEIGHT 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Left Form (lg:col-span-7) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="py-16 text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-[#C5A059] mx-auto flex items-center justify-center text-white">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#18181B]">Consultation Request Received</h3>
                <p className="text-sm text-[#52525B] max-w-md mx-auto leading-relaxed font-normal">
                  Namaste <strong className="text-[#18181B]">{formData.name}</strong>. Our lead architectural consultant will contact you on <strong className="text-[#18181B]">{formData.phone || formData.email}</strong> within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-[#18181B] mb-2">Project Brief & Consultation Form</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Rajesh & Priya Kulkarni"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Email Address *</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. rajesh@kulkarni.in"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Mobile Number (India) *</label>
                    <input 
                      type="tel"
                      required
                      placeholder="+91 98230 45678"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Project City</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    >
                      <option value="Pune">Pune (Baner / Koregaon Park / Wakad)</option>
                      <option value="Mumbai">Mumbai (South Mumbai / BKC / Bandra)</option>
                      <option value="Bengaluru">Bengaluru (Indiranagar / Whitefield)</option>
                      <option value="Delhi NCR">Delhi NCR (Gurugram / Noida)</option>
                      <option value="Other">Other City in India</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Property Type</label>
                    <select 
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    >
                      <option value="3BHK / 4BHK Luxury Apartment">3BHK / 4BHK Luxury Apartment</option>
                      <option value="Duplex Penthouse">Duplex Penthouse</option>
                      <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                      <option value="Commercial Flagship Office">Commercial Flagship Office</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Target Investment Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none"
                    >
                      <option value="₹25 Lakhs – ₹45 Lakhs">₹25 Lakhs – ₹45 Lakhs</option>
                      <option value="₹45 Lakhs – ₹85 Lakhs">₹45 Lakhs – ₹85 Lakhs</option>
                      <option value="₹85 Lakhs – ₹1.5 Crores">₹85 Lakhs – ₹1.5 Crores</option>
                      <option value="₹1.5 Crores+">₹1.5 Crores+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-mono text-[#71717A] block mb-1.5 font-semibold">Project Requirements & Timeline</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide details regarding society name, carpet area, key timeline, and design expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6E2DA] text-xs text-[#18181B] focus:border-[#C5A059] outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#18181B] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#18181B] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Consultation Brief</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Unified Cohesive Studio & Location Details (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Upper Info Box */}
            <div className="p-8 rounded-2xl bg-white border border-[#E6E2DA] shadow-sm flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#18181B] mb-6 pb-3 border-b border-[#E6E2DA]">
                  Pune Head Office & Studio
                </h3>
                
                <div className="space-y-5 text-xs text-[#52525B]">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#18181B] text-sm block mb-0.5">Atelier V Studio (Indeco Equinox)</strong>
                      <span className="leading-relaxed">3rd Floor, Indeco Equinox, Baner Road, Baner, Pune, Maharashtra - 411045</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#18181B] text-sm block mb-0.5">Studio Helpline & WhatsApp</strong>
                      <span>+91 98230 45678 / +91 (020) 2729 4500</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#18181B] text-sm block mb-0.5">Client Desk</strong>
                      <a href="mailto:info@ateliervstudio.in" className="hover:text-[#C5A059] transition-colors">
                        info@ateliervstudio.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#E6E2DA] flex items-center justify-center text-[#C5A059] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-[#18181B] text-sm block mb-0.5">Studio Hours</strong>
                      <span>Mon – Sat: 10:00 AM – 7:00 PM IST (Prior Appointment)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrated Presence Bar inside same column */}
              <div className="p-5 rounded-xl bg-[#18181B] text-[#FAF8F5] shadow-sm flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono text-[#C5A059] font-semibold block mb-0.5">Pan-India Studio Presence</span>
                  <h4 className="text-sm font-bold">Pune • Mumbai • Bengaluru • Delhi NCR</h4>
                </div>
                <Building2 className="w-6 h-6 text-[#C5A059]" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* FULL BLEED GOOGLE MAP (EDGE-TO-EDGE, NO CARD WRAPPER, NO BORDERS, NO ROUNDED CORNERS) */}
      <div className="w-full border-t border-b border-[#E6E2DA]">
        
        {/* Full Width Section Header */}
        <div className="max-w-[1450px] mx-auto px-5 sm:px-8 md:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-[#C5A059]" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181B]">
              Visit Our Studio in Baner, Pune
            </h2>
          </div>
          <span className="text-xs font-mono text-[#71717A]">
            3rd Floor, Indeco Equinox, Baner Road, Baner, Pune, Maharashtra 411045
          </span>
        </div>

        {/* 100% Full-Bleed Map (No borders, No rounded corners, Fits width perfectly) */}
        <div className="w-full h-[500px] sm:h-[580px] border-0 border-none p-0 m-0">
          <iframe 
            title="Atelier V Studio Baner Pune Office Map"
            src="https://maps.google.com/maps?q=Indeco%20Equinox%20Baner%20Road%20Pune%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, outline: 'none' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

    </div>
  );
}
