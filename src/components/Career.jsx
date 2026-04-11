import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const roles = [
  { id: 1, title: 'Senior 3D Generalist', location: 'New York / Remote', type: 'Full-time' },
  { id: 2, title: 'Lighting Technical Director', location: 'New York', type: 'Full-time' },
  { id: 3, title: 'Motion Designer', location: 'Remote', type: 'Contract' },
];

const Career = () => {
  return (
    <section id="career" className="py-32 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
        
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Careers</h2>
            <div className="w-12 h-1 bg-white mb-8"></div>
            <p className="text-white/60 font-light text-lg">
              We are always looking for exceptional talent who share our vision for absolute, monochromatic minimalism.
            </p>
          </motion.div>
        </div>

        <div className="md:w-2/3 w-full">
          {roles.map((role, i) => (
             <motion.div 
              key={role.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 border-b border-white/20 hover:border-white transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:pl-4 transition-all duration-300 uppercase">{role.title}</h3>
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                  <span>{role.location}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  <span>{role.type}</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300 shrink-0">
                <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
