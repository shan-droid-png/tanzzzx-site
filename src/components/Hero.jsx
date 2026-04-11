import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const slides = [
  {
    url: '/video/hero0.webm',
    category: 'Video Production',
    title: 'Showreel Showcase',
  },
  {
    url: '/video/hero1.webm',
    category: 'Video Production',
    title: 'Brand Shoot',
  },
  {
    url: '/video/hero2.webm',
    category: '3D Animation',
    title: 'Architectural Visualization',
  },
  {
    url: '/video/hero3.webm',
    category: 'Video Production',
    title: 'Cinematography Array',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = useCallback(() => setCurrent(prev => (prev + 1) % slides.length), []);
  const prevSlide = useCallback(() => setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1)), []);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  const slide = slides[current];

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {/* ── Background Image Slider ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <video
            src={slide.url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Left & Right Navigation Arrows ── */}
      <div className="absolute inset-y-0 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between z-20 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 pointer-events-auto transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 pointer-events-auto transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* ── Bottom-Left: Jump to Gallery ── */}
      <div className="absolute bottom-10 left-8 md:left-14 z-10 flex flex-col items-start gap-4">

        <Link
          to="gallery"
          smooth
          duration={900}
          className="group mt-4 flex items-center gap-4 cursor-pointer"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">View All Works</span>
          <span className="block w-8 h-[1px] bg-white/40 group-hover:w-14 group-hover:bg-white transition-all duration-300" />
        </Link>
      </div>

      {/* ── Bottom-Right: Slide counter + dots ── */}
      <div className="absolute bottom-10 right-8 md:right-14 z-10 flex flex-col items-end gap-4">
        <div className="flex items-baseline gap-1 text-white">
          <span className="text-3xl font-black leading-none">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-white/30 text-sm font-light">/ {String(slides.length).padStart(2, '0')}</span>
        </div>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`block h-[2px] transition-all duration-500 ${i === current ? 'bg-white w-8' : 'bg-white/30 w-3 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>


    </section>
  );
};

export default Hero;
