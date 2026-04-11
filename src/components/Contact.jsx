import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
        
        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">Initiate.</h2>
            <p className="text-xl text-white/60 font-light mb-16 max-w-sm">Submit your inquiry to begin the dialogue.</p>
            
            <div className="space-y-10 text-sm font-semibold tracking-widest uppercase">
              <div>
                <span className="text-white/40 block mb-3">Location</span>
                <p className="border-l-2 border-white/20 pl-4">194 Monochrome Ave, Studio 4A<br />New York, NY 10013</p>
              </div>
              <div>
                <span className="text-white/40 block mb-3">Direct</span>
                <p className="border-l-2 border-white/20 pl-4">hello@tanzzzx.com<br />+1 (555) 019-8432</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/2 bg-white/5 p-8 md:p-12 xl:p-16 border border-white/10 relative"
        >
          {/* Subtle absolute decorative elements */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white"></div>

          <form className="flex flex-col gap-10">
            <div className="relative group">
              <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors" required />
              <label htmlFor="name" className="absolute left-0 top-3 text-white/50 text-xs tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300">Name</label>
            </div>
            <div className="relative group">
              <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors" required />
              <label htmlFor="email" className="absolute left-0 top-3 text-white/50 text-xs tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300">Email</label>
            </div>
            <div className="relative group">
              <textarea id="message" rows="4" placeholder=" " className="peer w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none" required></textarea>
              <label htmlFor="message" className="absolute left-0 top-3 text-white/50 text-xs tracking-widest uppercase origin-left transform -translate-y-6 peer-placeholder-shown:translate-y-0 transition-all duration-300">Message</label>
            </div>
            <button type="submit" className="w-full py-5 mt-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-black hover:text-white border border-white transition-colors duration-300">
              Send Transmission
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
