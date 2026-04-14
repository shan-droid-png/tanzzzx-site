import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home', label: 'Start' },
  { name: 'Gallery', to: 'gallery', label: 'Our Work' },
  { name: 'Walkthrough', to: 'walkthrough', label: 'The Process' },
  { name: 'Services', to: 'services', label: 'What We Do' },
  { name: 'About Us', to: 'about', label: 'The Studio' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactPinnedOpen, setContactPinnedOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    const shareData = { title: 'Tanzzzx Studios', url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) { }
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

  // Lock body scroll when menu or showreel is open
  useEffect(() => {
    document.body.style.overflow = (menuOpen || showreelOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, showreelOpen]);

  const slideVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const itemVariants = {
    hidden: { x: 40, opacity: 0 },
    visible: (i) => ({ x: 0, opacity: 1, transition: { delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
  };

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

            {/* Animated Hamburger Button */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="relative border border-white/40 w-12 h-10 md:w-14 md:h-11 flex flex-col items-center justify-center gap-[5px] hover:border-white transition-colors duration-300 group"
            >
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 md:w-7 rotate-45 translate-y-[6.5px]' : 'w-5 md:w-6'}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5 md:w-6'}`} />
              <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 md:w-7 -rotate-45 -translate-y-[6.5px]' : 'w-3 md:w-4 self-start ml-3 md:ml-3'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Pinned Left Rail ── */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-0 hidden md:flex">
        <a href="#" onClick={handleShare} className="bg-black/60 backdrop-blur-sm border-r border-t border-b border-white/20 text-white/60 hover:text-white hover:bg-black transition-all text-[9px] font-bold tracking-[0.2em] uppercase py-5 px-3 cursor-pointer" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Share
        </a>
        <button
          onClick={() => setShowreelOpen(true)}
          className="bg-black/60 backdrop-blur-sm border-r border-b border-white/20 text-white/60 hover:text-white hover:bg-black transition-all text-[9px] font-bold tracking-[0.2em] uppercase py-5 px-3 cursor-pointer"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Latest Showreel
        </button>
      </div>

      {/* ── Pinned Right Rail ── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center">
        <div className={`flex flex-col bg-black/95 backdrop-blur-md border border-white/20 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-right ${contactPinnedOpen ? 'w-64 p-6 opacity-100 translate-x-0' : 'w-0 p-0 opacity-0 translate-x-10 pointer-events-none border-none'}`}>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white font-black tracking-widest uppercase text-xs">Reach Out</h4>
            <button onClick={() => setContactPinnedOpen(false)} className="text-white/40 hover:text-white transition-colors text-lg">✕</button>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            <a href="mailto:hello@tanzzzx.com" className="text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] break-all border-b border-white/10 pb-2">hello@tanzzzx.com</a>
            <a href="tel:+919123855424" className="text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/10 pb-2">+91 9123855424</a>
          </div>
          <div className="bg-white p-2 w-32 h-32 self-center rounded shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-300">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/919123855424" alt="WhatsApp QR Code" className="w-full h-full object-contain mix-blend-multiply" />
          </div>
          <span className="text-white/30 text-[8px] uppercase tracking-[0.3em] font-bold text-center mt-4">Scan for direct chat</span>
        </div>
        <button
          onClick={() => setContactPinnedOpen(!contactPinnedOpen)}
          className="group flex items-center justify-center transition-all duration-500 cursor-pointer text-[10px] font-black uppercase py-6 px-[10px] bg-white text-black shadow-[-5px_0_20px_rgba(255,255,255,0.15)] hover:scale-x-105 tracking-[0.2em] hover:tracking-[0.4em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="flex items-center gap-2">
            Contact Us
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
          </span>
        </button>
      </div>

      {/* ── Mobile Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/919123855424"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden w-13 h-13 w-[52px] h-[52px] bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-transform"
        aria-label="Direct WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.885-.788-1.482-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Showreel YouTube Lightbox ── */}
      <AnimatePresence>
        {showreelOpen && (
          <>
            <motion.div
              key="showreel-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowreelOpen(false)}
              className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-md"
            />
            <motion.div
              key="showreel-modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[151] flex flex-col items-center justify-center px-4"
            >
              {/* Header */}
              <div className="w-full max-w-5xl flex items-center justify-between mb-4 px-1">
                <div>
                  <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-bold">Tanzzzx Studios</p>
                  <h2 className="text-white font-black tracking-tight text-lg uppercase">Latest Showreel</h2>
                </div>
                <button
                  onClick={() => setShowreelOpen(false)}
                  className="border border-white/30 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-colors text-base"
                >
                  ✕
                </button>
              </div>

              {/* Video */}
              <div className="w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3Y5Ve2kNMjI?si=D5BJ5anJbYH7qN9_&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <p className="text-white/20 text-[9px] tracking-widest uppercase mt-4">Click outside to close</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* ── Slide-In Menu Panel ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full z-[100] w-full sm:w-[420px] bg-black border-l border-white/10 flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 shrink-0">
              <span className="text-white font-black tracking-tighter text-base uppercase">Tanzzzx Studios</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors text-base"
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 sm:px-8 overflow-hidden">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} custom={i} variants={itemVariants} initial="hidden" animate="visible">
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-5 py-4 sm:py-5 border-b border-white/8 last:border-0 cursor-pointer"
                  >
                    {/* Index number */}
                    <span className="text-[9px] font-black tracking-widest text-white/20 group-hover:text-white/40 transition-colors duration-300 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Text block */}
                    <div className="flex-1 min-w-0">
                      <span className="text-2xl sm:text-3xl font-black tracking-tight text-white/40 group-hover:text-white transition-colors duration-300 uppercase leading-tight truncate block">
                        {link.name}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span className="text-white/0 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-300 text-xl shrink-0">
                      →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="px-6 sm:px-8 py-6 border-t border-white/10 shrink-0">
              {/* Contact info row */}
              <div className="flex flex-col gap-2 mb-5">
                <a href="mailto:tanzxstudio@gmail.com" className="text-white/30 hover:text-white transition-colors text-[9px] tracking-widest uppercase font-bold">
                  tanzxstudio@gmail.com
                </a>
                <a href="tel:+919123855424" className="text-white/30 hover:text-white transition-colors text-[9px] tracking-widest uppercase font-bold">
                  +91 9123855424
                </a>
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                {/* Instagram */}
                <a href="https://www.instagram.com/tanzzzx_studio?igsh=Y24zbXB1ZGEzMGRs" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white/50 hover:text-black transition-all duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/919123855424" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white/50 transition-all duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.885-.788-1.482-1.761-1.655-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/share/19ygz9jFbc/" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white/50 transition-all duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@TanzzzXStudio" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black text-white/50 transition-all duration-200">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
