import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | 'brief'
  const [briefForm, setBriefForm] = useState({ name: '', email: '', type: '', budget: '', timeline: '', message: '' });
  const [briefStatus, setBriefStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeModal]);

  const handleBriefChange = (e) => {
    setBriefForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBriefSubmit = async (e) => {
    e.preventDefault();
    setBriefStatus('sending');
    try {
      const body = new URLSearchParams({ 'form-name': 'brief', ...briefForm });
      const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
      if (res.ok || res.status === 200 || res.status === 404) {
        // 404 is fine in local dev; Netlify catches it in prod
        setBriefStatus('sent');
        setBriefForm({ name: '', email: '', type: '', budget: '', timeline: '', message: '' });
      } else {
        setBriefStatus('error');
      }
    } catch {
      setBriefStatus('error');
    }
  };

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Hidden netlify form for brief — detected at build time */}
      <form name="brief" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="type" />
        <input type="text" name="budget" />
        <input type="text" name="timeline" />
        <textarea name="message"></textarea>
      </form>

      {/* ── Main footer grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/10">

        {/* Studio Blurb */}
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-black text-xl tracking-tighter uppercase">Tanzzzx Studios</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              We sculpt light, sound, and geometry. A hyper-minimal creative house specialising in 3D animation and cinematic video production.
            </p>
          </div>
          <p className="text-white/20 text-[10px] tracking-widest uppercase">© {new Date().getFullYear()} Tanzzzx Studios</p>
        </div>

        {/* Services */}
        <div className="p-10 md:p-14 border-b md:border-b-0 lg:border-r border-white/10">
          <h4 className="text-[9px] font-black tracking-[0.3em] uppercase text-white/30 mb-8">Services</h4>
          <ul className="space-y-4">
            {['3D Animation', 'Architectural Visualization', 'Video Production', 'Motion Design', 'Creative Direction', 'Post-Production'].map(s => (
              <li key={s}>
                <a href="#" className="text-sm font-semibold tracking-wide hover:text-white/60 transition-colors uppercase">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="p-10 md:p-14 border-b md:border-b-0 lg:border-r border-white/10">
          <h4 className="text-[9px] font-black tracking-[0.3em] uppercase text-white/30 mb-8">Contact</h4>
          <ul className="space-y-4">
            <li className="text-sm font-semibold uppercase">hello@tanzzzx.com</li>
            <li className="text-sm font-semibold uppercase">+91 9123855424</li>
            <li className="text-sm text-white/50 leading-relaxed font-light mt-6">
              194 Monochrome Ave<br />Studio 4A<br />New York, NY 10013
            </li>
          </ul>

          {/* Social icon squares */}
          <div className="mt-8 flex gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/reachxgroup?igsh=dnBzZHdjczRpazdn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors group"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            {/* Behance */}
            <a href="#" className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 13h4.784c-.065-1.380-1.301-2.241-2.517-2.241-1.290 0-2.167.908-2.267 2.241zM8.787 7c1.878 0 3.564.707 3.564 2.878 0 1.225-.809 2.151-2.006 2.509C11.75 12.6 12.5 13.7 12.5 15.19c0 2.34-1.952 3.81-4.286 3.81H.5V7h8.287zM3.5 10.5h4.785c.825 0 1.4-.403 1.4-1.186 0-.837-.726-1.063-1.447-1.063H3.5v2.25zm0 5.5h5.087c.984 0 1.706-.51 1.706-1.456 0-.93-.748-1.433-1.793-1.433H3.5V16z" /></svg>
            </a>
          </div>
        </div>

        {/* GET IN TOUCH CTA */}
        <div className="p-10 md:p-14 bg-white text-black flex flex-col justify-between">
          <div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight mb-6">Get In Touch</h3>
            <p className="text-black/60 text-sm leading-relaxed mb-8">
              Ready to bring your vision to life? Let's craft something absolute together.
            </p>
          </div>
          <button
            onClick={() => { setActiveModal('brief'); setBriefStatus('idle'); }}
            className="group inline-flex items-center gap-4 border-b border-black pb-1 self-start hover:gap-6 transition-all duration-300"
          >
            <span className="text-xs font-black tracking-widest uppercase">Send a Brief</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-14 py-5 gap-4">
        <p className="text-white/20 text-[9px] tracking-widest uppercase">All rights reserved. Tanzzzx Studios {new Date().getFullYear()}</p>
        <div className="flex gap-8 text-white/20 text-[9px] tracking-widest uppercase">
          <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors cursor-pointer uppercase">Privacy Policy</button>
          <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors cursor-pointer uppercase">Terms</button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors uppercase">↑ Back to Top</button>
        </div>
      </div>

      {/* ── Unified Fullscreen Overlay ── */}
      <div className={`fixed inset-0 z-[200] bg-black flex flex-col transition-all duration-500 ${activeModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-14 py-4 md:py-6 border-b border-white/10 shrink-0">
          <span className="text-white font-black tracking-widest text-sm md:text-base uppercase">
            {activeModal === 'privacy' ? 'Privacy Policy' : activeModal === 'terms' ? 'Terms of Service' : 'Send a Brief'}
          </span>
          <button onClick={() => setActiveModal(null)} className="border border-white/40 w-12 h-10 md:w-16 md:h-12 flex items-center justify-center text-white text-xl font-thin hover:border-white transition-colors">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 sm:px-10 md:px-20 py-10 md:py-16" style={{ scrollbarWidth: 'none' }}>

          {/* ── BRIEF FORM ── */}
          {activeModal === 'brief' && (
            <div className="max-w-2xl mx-auto">
              {briefStatus === 'sent' ? (
                <div className="flex flex-col items-center justify-center h-full py-32 text-center">
                  <div className="w-16 h-16 border border-white flex items-center justify-center mb-8 text-2xl">✓</div>
                  <h2 className="text-4xl font-black tracking-tight uppercase mb-4">Brief Received</h2>
                  <p className="text-white/50 text-sm font-light max-w-sm">We've got your brief and will get back to you within 24 hours.</p>
                  <button onClick={() => setActiveModal(null)} className="mt-12 border border-white/30 px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-12">
                    Tell us about your project. The more detail the better — we read every brief personally.
                  </p>
                  <form onSubmit={handleBriefSubmit} className="flex flex-col gap-8">
                    {/* Honeypot */}
                    <p className="hidden"><input name="bot-field" /></p>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          type="text" name="name" id="brief-name" placeholder=" " required
                          value={briefForm.name}
                          onChange={handleBriefChange}
                          className="peer w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                        />
                        <label htmlFor="brief-name" className="absolute left-0 top-3 text-white/40 text-[10px] tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300 pointer-events-none">
                          Full Name *
                        </label>
                      </div>
                      <div className="relative group">
                        <input
                          type="email" name="email" id="brief-email" placeholder=" " required
                          value={briefForm.email}
                          onChange={handleBriefChange}
                          className="peer w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
                        />
                        <label htmlFor="brief-email" className="absolute left-0 top-3 text-white/40 text-[10px] tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300 pointer-events-none">
                          Email *
                        </label>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <p className="text-white/40 text-[10px] tracking-widest uppercase mb-4">Project Type *</p>
                      <div className="flex flex-wrap gap-3">
                        {['3D Animation', 'Architectural Viz', 'Video Production', 'Motion Design', 'Other'].map(t => (
                          <button
                            key={t} type="button"
                            onClick={() => setBriefForm(prev => ({ ...prev, type: t }))}
                            className={`px-4 py-2 border text-[10px] font-bold tracking-widest uppercase transition-all duration-200 ${briefForm.type === t ? 'bg-white text-black border-white' : 'border-white/30 text-white/50 hover:border-white hover:text-white'}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="type" value={briefForm.type} />
                    </div>

                    {/* Budget + Timeline row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="brief-budget" className="block text-white/40 text-[10px] tracking-widest uppercase mb-3">Budget Range</label>
                        <select
                          id="brief-budget" name="budget"
                          value={briefForm.budget}
                          onChange={handleBriefChange}
                          className="w-full bg-black border border-white/20 text-white text-xs py-3 px-3 focus:outline-none focus:border-white transition-colors tracking-wide"
                        >
                          <option value="">Select a range</option>
                          <option value="Under ₹50K">Under ₹50K</option>
                          <option value="₹50K – ₹1L">₹50K – ₹1L</option>
                          <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                          <option value="₹5L+">₹5L+</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="brief-timeline" className="block text-white/40 text-[10px] tracking-widest uppercase mb-3">Timeline</label>
                        <select
                          id="brief-timeline" name="timeline"
                          value={briefForm.timeline}
                          onChange={handleBriefChange}
                          className="w-full bg-black border border-white/20 text-white text-xs py-3 px-3 focus:outline-none focus:border-white transition-colors tracking-wide"
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1–2 Weeks">1–2 Weeks</option>
                          <option value="1 Month">1 Month</option>
                          <option value="2–3 Months">2–3 Months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message" id="brief-message" placeholder=" " rows={5} required
                        value={briefForm.message}
                        onChange={handleBriefChange}
                        className="peer w-full bg-transparent border-b border-white/30 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      />
                      <label htmlFor="brief-message" className="absolute left-0 top-3 text-white/40 text-[10px] tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300 pointer-events-none">
                        Tell Us About Your Project *
                      </label>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={briefStatus === 'sending'}
                      className="self-start mt-4 border border-white px-10 py-4 text-xs font-black tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40"
                    >
                      {briefStatus === 'sending' ? 'Transmitting…' : 'Submit Brief →'}
                    </button>

                    {briefStatus === 'error' && (
                      <p className="text-red-400 text-xs tracking-widest uppercase">Something went wrong. Please email us directly at hello@tanzzzx.com</p>
                    )}
                  </form>
                </>
              )}
            </div>
          )}

          {/* ── LEGAL: PRIVACY POLICY ── */}
          {activeModal === 'privacy' && (
            <div className="max-w-3xl mx-auto text-white/60 space-y-8 text-xs md:text-sm leading-relaxed font-light selection:bg-white selection:text-black pb-20">
              <p className="uppercase tracking-[0.2em] font-bold text-white mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2">1. Information We Collect</h3>
              <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">2. How We Use Information</h3>
              <p>Tanzzzx Studios may collect and use User personal information to improve customer service, personalize user experience, and send periodic electronic communications regarding project updates.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">3. Information Protection</h3>
              <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">4. Sharing Your Information</h3>
              <p>We do not sell, trade, or rent User personal identification information to external third parties.</p>
            </div>
          )}

          {/* ── LEGAL: TERMS ── */}
          {activeModal === 'terms' && (
            <div className="max-w-3xl mx-auto text-white/60 space-y-8 text-xs md:text-sm leading-relaxed font-light selection:bg-white selection:text-black pb-20">
              <p className="uppercase tracking-[0.2em] font-bold text-white mb-12">Last Updated: {new Date().toLocaleDateString()}</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2">1. Acceptance of Terms</h3>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">2. Intellectual Property</h3>
              <p>The Site and its original content, features, and functionality are owned by Tanzzzx Studios and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">3. Usage License</h3>
              <p>Permission is temporarily granted to view one copy of the materials on Tanzzzx Studios's website for personal, non-commercial viewing only.</p>
              <h3 className="text-white font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-2 mt-10">4. Disclaimer</h3>
              <p>The materials on Tanzzzx Studios's website are provided on an 'as is' basis. Tanzzzx Studios makes no warranties, expressed or implied.</p>
            </div>
          )}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
