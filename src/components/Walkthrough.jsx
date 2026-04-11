import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: '01', title: 'Ideation', desc: 'Distilling complex vision into absolute, minimalist concepts.' },
  { num: '02', title: 'Modeling', desc: 'Crafting geometry with pristine mathematical precision.' },
  { num: '03', title: 'Lighting', desc: 'Sculpting purely with light to reveal form and shadow.' },
  { num: '04', title: 'Rendering', desc: 'The final cinematic synthesis of light, texture, and motion.' },
];

const Walkthrough = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="walkthrough" ref={targetRef} className="relative h-[400vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex flex-col items-start justify-center overflow-hidden">
        
        <div className="w-full container mx-auto px-6 md:px-12 mb-12 absolute top-32 left-0 right-0 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg">THE PROCESS</h2>
          <div className="w-12 h-1 bg-white mt-4 drop-shadow-lg"></div>
        </div>

        <motion.div style={{ x }} className="flex w-[400vw] h-full items-center pl-[10vw]">
          {steps.map((step, index) => (
            <div key={index} className="w-[100vw] flex justify-center px-12 md:px-24">
              <div className="w-full max-w-4xl border-t border-white/20 pt-12 relative flex flex-col md:flex-row gap-8 md:gap-24">
                <div className="absolute top-0 left-0 -translate-y-1/2 w-4 h-4 bg-white"></div>
                
                <h3 className="text-7xl md:text-[12rem] font-black text-transparent tracking-tighter leading-none shrink-0" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>
                  {step.num}
                </h3>
                
                <div className="flex flex-col justify-center">
                  <h4 className="text-4xl md:text-6xl font-bold mb-6">{step.title}</h4>
                  <p className="text-lg md:text-2xl text-white/60 font-light max-w-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Walkthrough;
