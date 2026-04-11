import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allItems = [
  { id: 10, type: 'local_video', category: '3D Animation', title: 'Asset 3D-v3', url: '/video/3d animation/3.mp4', tall: true },
  { id: 2, type: 'video', category: 'Video Production', title: 'Fluid State v2', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 6, type: 'photo', category: '3D Animation', title: 'Project Delta', url: '/image/3d animation/4.jpg', tall: false },
  { id: 13, type: 'video', category: 'Video Production', title: 'Glass Horizon', url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: true },
  { id: 3, type: 'photo', category: '3D Animation', title: 'Project Beta', url: '/image/3d animation/2.jpg', tall: false },
  { id: 19, type: 'local_video', category: '3D Animation', title: 'Internal 3D Render', url: '/video/3d animation/1.mp4', tall: true },
  { id: 8, type: 'video', category: 'Video Production', title: 'Parallax Cut', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 14, type: 'photo', category: '3D Animation', title: 'Holographic Core', url: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 1, type: 'photo', category: '3D Animation', title: 'Project Alpha', url: '/image/3d animation/1.jpg', tall: true },
  { id: 11, type: 'video', category: 'Video Production', title: 'Neon Abyss', url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 9, type: 'local_video', category: '3D Animation', title: 'Asset 3D-v2', url: '/video/3d animation/2.mp4', tall: false },
  { id: 4, type: 'video', category: 'Video Production', title: 'Monochrome Echo', url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: true },
  { id: 18, type: 'photo', category: '3D Animation', title: 'Zenith Scale', url: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 5, type: 'photo', category: '3D Animation', title: 'Project Gamma', url: '/image/3d animation/3.jpg', tall: false },
  { id: 16, type: 'photo', category: '3D Animation', title: 'Apex Construct', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: true },
  { id: 12, type: 'local_video', category: '3D Animation', title: 'Asset 3D-v4', url: '/video/3d animation/4.mp4', tall: false },
  { id: 15, type: 'video', category: 'Video Production', title: 'Shadow Frame', url: 'https://images.unsplash.com/photo-1533422902779-dac239824f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false },
  { id: 7, type: 'video', category: 'Video Production', title: 'Still Gravity', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: true },
  { id: 17, type: 'video', category: 'Video Production', title: 'Velocity Render', url: 'https://images.unsplash.com/photo-1535016120720-40c746a51d28?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80', tall: false }
];

const filters = ['ALL', '3D Animation', 'Video Production'];

const Gallery = () => {
  const [active, setActive] = useState('ALL');

  const filtered = active === 'ALL' ? allItems : allItems.filter(i => i.category === active);

  return (
    <section id="gallery" className="bg-black text-white">
      {/* Filter bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 md:px-14 sticky top-0 z-30 bg-black/95 backdrop-blur-md">
        <div className="flex overflow-x-auto hide-sm-md-scrollbar">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex-shrink-0 px-6 py-5 text-[10px] font-black tracking-[0.3em] uppercase border-r border-white/10 transition-all ${
                active === f ? 'text-white border-b-2 border-b-white bg-white/5' : 'text-white/30 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="text-white/20 text-[10px] tracking-widest uppercase pr-2 hidden md:block">{filtered.length} Works</span>
      </div>

      {/* Masonry Grid — zero gutter */}
      <motion.div
        layout
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
      >
        <AnimatePresence>
          {filtered.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`group relative overflow-hidden bg-white/5 cursor-pointer ${item.tall ? 'row-span-2' : ''}`}
              style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
            >
              {item.type === 'iframe' ? (
                <iframe
                  src={item.embedSrc}
                  className="w-full h-full border-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              ) : item.type === 'local_video' ? (
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-bold mb-2">{item.category}</span>
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase">{item.title}</h3>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-white fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Gallery;
