import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-32 relative z-20 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto mb-24 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight uppercase"
          >
            We sculpt light, sound, and <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>geometry.</span>
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-12 h-1 bg-white mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl"
          >
            Tanzzzx Studios is a creative house stripped of excess. Based in New York, we focus exclusively on monochromatic, high-end visual production. We believe that true cinematic resonance is born from contrast, not color.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
