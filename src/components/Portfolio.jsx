import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Void Architecture', category: '3D Render', img: '/abstract_3d_render_bw.png' },
  { id: 2, title: 'Monochrome Echo', category: 'Video Production', img: '/cinematic_bw_studio_1.png' },
  { id: 3, title: 'Obsidian Structure', category: 'Motion Design', img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 4, title: 'The Architect', category: 'Creative Direction', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black text-white py-32 border-t border-white/10">
       <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">SELECTED WORKS</h2>
            <div className="w-12 h-1 bg-white"></div>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 w-max mb-2 hover:text-white/70 hover:border-white/70 transition-colors">
            View All Projects
          </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative h-[70vh] w-full overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/60 transition-colors duration-700 mix-blend-overlay"></div>
            <img 
              src={p.img} 
              alt={p.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            
            <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{p.category}</span>
              <div className="flex justify-between items-end">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">{p.title}</h3>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 -translate-x-4 group-hover:translate-x-0 bg-white/5 backdrop-blur-sm">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
