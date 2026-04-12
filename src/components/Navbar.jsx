import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Walkthrough', to: 'walkthrough' },
  { name: 'Services', to: 'services' },
  { name: 'About Us', to: 'about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactPinnedOpen, setContactPinnedOpen] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    const shareData = { title: 'Tanzzzx Studios', url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Header ── */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-14">
          {/* Logo */}
          <Link to="home" smooth duration={800} className="flex items-center gap-3 cursor-pointer select-none">
            <span className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase">Tanzzzx Studios</span>
          </Link>

          {/* Phone + Hamburger */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+919123855424" className="hidden sm:block text-white/60 hover:text-white font-bold tracking-widest text-[10px] md:text-xs uppercase transition-colors border-r border-white/20 pr-4 md:pr-8">
              For more info contact: <span className="text-white">+91 9123855424</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="border border-white/40 w-12 h-10 md:w-16 md:h-12 flex flex-col items-center justify-center gap-[4px] md:gap-[5px] hover:border-white transition-colors"
            >
              <span className="block w-5 md:w-7 h-[1.5px] bg-white" />
              <span className="block w-5 md:w-7 h-[1.5px] bg-white" />
              <span className="block w-3 md:w-5 h-[1.5px] bg-white self-start ml-3 md:ml-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Pinned Left Rail ── */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-0 hidden md:flex">
        <a href="#" onClick={handleShare} className="bg-black/60 backdrop-blur-sm border-r border-t border-b border-white/20 text-white/60 hover:text-white hover:bg-black transition-all text-[9px] font-bold tracking-[0.2em] uppercase py-5 px-3 cursor-pointer" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Share
        </a>
        <Link to="gallery" smooth duration={1000} className="bg-black/60 backdrop-blur-sm border-r border-b border-white/20 text-white/60 hover:text-white hover:bg-black transition-all text-[9px] font-bold tracking-[0.2em] uppercase py-5 px-3 cursor-pointer" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Latest Showreel
        </Link>
      </div>

      {/* ── Pinned Right Rail (Contact Expandable) ── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center">
        {/* Expandable Panel */}
        <div 
          className={`flex flex-col bg-black/95 backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right ${
            contactPinnedOpen ? 'w-64 p-6 opacity-100 translate-x-0' : 'w-0 p-0 opacity-0 translate-x-10 pointer-events-none border-none'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white font-black tracking-widest uppercase text-xs">Reach Out</h4>
            <button onClick={() => setContactPinnedOpen(false)} className="text-white/40 hover:text-white transition-colors text-lg leadin-none">✕</button>
          </div>
          
          <div className="flex flex-col gap-4 mb-8">
            <a href="mailto:hello@tanzzzx.com" className="text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] break-all border-b border-white/10 pb-2">hello@tanzzzx.com</a>
            <a href="tel:+919123855424" className="text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2">+91 9123855424</a>
          </div>

          <div className="bg-white p-2 w-32 h-32 self-center rounded shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/919123855424" 
              alt="WhatsApp QR Code"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-white/30 text-[8px] uppercase tracking-[0.3em] font-bold text-center mt-4">Scan for direct chat</span>
        </div>

        {/* The Toggle Button */}
        <button 
          onClick={() => setContactPinnedOpen(!contactPinnedOpen)} 
          className={`group flex items-center justify-center transition-all duration-500 transform origin-right cursor-pointer text-[10px] font-black uppercase py-6 px-[10px] ${
            contactPinnedOpen 
              ? 'bg-white text-black translate-x-0 tracking-[0.2em]' 
              : 'bg-white text-black shadow-[-5px_0_20px_rgba(255,255,255,0.15)] hover:scale-x-105 tracking-[0.2em] hover:tracking-[0.4em]'
          }`}
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="flex items-center gap-2">
            Contact Us
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          </span>
        </button>
      </div>

      {/* ── Mobile Floating Contact Action Button ── */}
      <a 
        href="https://wa.me/919123855424" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-transform"
        aria-label="Direct WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.885-.788-1.482-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── Fullscreen Overlay Menu ── */}
      <div className={`fixed inset-0 z-[100] bg-black flex flex-col transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 md:px-14 py-4 border-b border-white/10 shrink-0">
          <span className="text-white font-black tracking-tighter text-base md:text-xl uppercase">Tanzzzx Studios</span>
          <button onClick={() => setMenuOpen(false)} className="border border-white/40 w-10 h-9 md:w-12 md:h-10 flex items-center justify-center text-white text-lg font-thin hover:border-white transition-colors">
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-20 gap-0 overflow-hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={800}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-4 py-3 sm:py-4 border-b border-white/5 last:border-0 cursor-pointer"
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
            >
              <span className="text-[9px] font-bold tracking-widest text-white/25 group-hover:text-white/50 transition-colors w-6 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white/30 group-hover:text-white transition-colors duration-300 uppercase leading-none">
                {link.name}
              </span>
              <span className="ml-auto text-white/0 group-hover:text-white/40 transition-colors duration-300 text-sm">→</span>
            </Link>
          ))}
        </nav>

        {/* Footer of overlay */}
        <div className="px-6 sm:px-10 md:px-20 py-5 border-t border-white/10 shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <a href="mailto:hello@tanzzzx.com" className="text-white/30 hover:text-white/60 transition-colors text-[9px] tracking-widest uppercase">hello@tanzzzx.com</a>
          <a href="tel:+919123855424" className="text-white/30 hover:text-white/60 transition-colors text-[9px] tracking-widest uppercase">+91 9123855424</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
