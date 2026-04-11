import React from 'react';
import { motion } from 'framer-motion';
import { Box, Film } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: '3D Animation',
    desc: 'Hyper-realistic product and architectural visualizations crafted with surgical precision.',
    items: [
      '3D Walk Through',
      '3D Visualization',
      '3D Interior and Exterior',
      '3D Image Rendering',
      '3D Product Visualization',
      '360 Degree Virtual Tour'
    ]
  },
  {
    icon: Film,
    title: 'Video Production',
    desc: 'Cinematic commercials and brand films driven by minimalist, emotionally resonant direction.',
    items: [
      'Brand Shoot',
      'Marketing Ad Shoot',
      'Structure Image Ads',
      'AI Video Ads',
      'Cinematography'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center uppercase">Core Services</h2>
          <div className="w-12 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative border border-white/20 p-16 overflow-hidden hover:border-white transition-colors duration-500 bg-white/[0.01]"
            >
              {/* Background hover reveal */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-white group-hover:h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>

              <div className="relative z-10 flex flex-col items-start">
                <div className="mb-12 p-6 border border-white/20 rounded-full group-hover:border-black transition-colors duration-500">
                  <service.icon className="w-12 h-12 text-white group-hover:text-black transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-bold mb-6 group-hover:text-black transition-colors duration-500 uppercase tracking-tight">{service.title}</h3>
                <p className="text-xl text-white/50 group-hover:text-black/70 font-light leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>

                {/* ── Sub-services List ── */}
                <div className="mt-10 w-full flex flex-col">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-white/10 group-hover:border-black/10 transition-colors duration-500 w-full group/item">
                      <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-black/20 group-hover/item:scale-150 transition-all duration-300"></span>
                      <span className="text-white/60 group-hover:text-black/80 font-bold uppercase tracking-widest text-[10px] md:text-xs transition-colors duration-500 group-hover/item:text-white group-hover:group-hover/item:text-black">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex items-center gap-4 text-sm font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 group-hover:text-black transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Discover {idx === 0 ? 'Animation' : 'Production'} 
                  <span className="w-8 h-px bg-black block mt-px"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
