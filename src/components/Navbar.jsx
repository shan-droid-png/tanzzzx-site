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
            <span className="w-7 h-7 bg-white rounded-full flex-shrink-0" />
            <span className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase">Tanzzzx Studios</span>
          </Link>

          {/* Phone + Hamburger */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+15550198432" className="hidden sm:block text-white/60 hover:text-white font-bold tracking-widest text-[10px] md:text-xs uppercase transition-colors border-r border-white/20 pr-4 md:pr-8">
              For more info contact: <span className="text-white">+1 (555) 019-8432</span>
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

      {/* ── Pinned Right Rail Removed ── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex">
      </div>

      {/* ── Fullscreen Overlay Menu ── */}
      <div className={`fixed inset-0 z-[100] bg-black flex flex-col transition-all duration-700 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Close */}
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-14 py-4 md:py-6 border-b border-white/10">
          <span className="text-white font-black tracking-tighter text-xl md:text-2xl uppercase">Tanzzzx Studios</span>
          <button onClick={() => setMenuOpen(false)} className="border border-white/40 w-12 h-10 md:w-16 md:h-12 flex items-center justify-center text-white text-xl md:text-2xl font-thin hover:border-white transition-colors">
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-10 md:px-20 gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={800}
              onClick={() => setMenuOpen(false)}
              className="group text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white/20 hover:text-white transition-colors duration-300 leading-tight cursor-pointer flex items-center gap-6"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              <span className="text-xs font-normal tracking-widest text-white/30 group-hover:text-white/60 transition-colors w-8">{String(i + 1).padStart(2, '0')}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Footer of overlay */}
        <div className="px-6 sm:px-10 md:px-20 py-6 md:py-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase">hello@tanzzzx.com</p>
          <p className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase">+1 (555) 019-8432</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
