import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './ui/Section';

const steps = [
  { num: '01', title: 'Initiate', desc: 'Join the Discord. Open a ticket. Direct line to the design team.' },
  { num: '02', title: 'Upload', desc: 'Drop your concept, title, and raw assets. We handle the composition.' },
  { num: '03', title: 'Construct', desc: 'We build the thumbnail using advanced manipulation and lighting.' },
  { num: '04', title: 'Deploy', desc: 'Review the asset. Unlimited revisions until your vision is real.' },
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <Section id="process" className="relative perspective-1000">
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4"
          >
            <span className="text-prime-blue text-xs font-bold uppercase tracking-widest">Workflow</span>
          </motion.div>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
            The Pipeline
          </h2>
        </div>

        <div className="relative">
          {/* Central Beam */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="absolute inset-0 bg-gradient-to-b from-prime-blue via-prime-gold to-prime-blue shadow-[0_0_20px_#2563EB]" 
            />
          </div>

          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[20px] md:left-1/2 w-4 h-4 md:-translate-x-1/2 rounded-full bg-black border-2 border-white/20 z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, rotateY: isEven ? 15 : -15, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                      viewport={{ margin: "-100px" }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="group relative bg-white/5 border border-white/5 hover:border-prime-blue/30 p-8 rounded-2xl backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] hover:-translate-y-2"
                    >
                      <div className={`text-6xl font-display font-bold text-white/5 absolute -top-8 ${isEven ? 'right-8' : 'left-8'} group-hover:text-white/10 transition-colors`}>
                        {step.num}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed relative z-10">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};