import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const textY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Floating elements parallax
  const card1Y = useTransform(scrollY, [0, 500], [0, -150]);
  const card2Y = useTransform(scrollY, [0, 500], [0, -250]);
  const card3Y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-2000">
      <div className="container mx-auto px-6 relative z-10 text-center transform-style-3d">
        
        {/* Floating 3D Abstract Thumbnails */}
        <div className="absolute inset-0 pointer-events-none transform-style-3d">
          <motion.div 
            style={{ y: card1Y, rotateX: 10, rotateY: -10, rotateZ: 5 }}
            className="absolute top-[20%] left-[10%] w-48 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_0_30px_rgba(37,99,235,0.2)] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-prime-blue/20 to-transparent" />
          </motion.div>
          
          <motion.div 
            style={{ y: card2Y, rotateX: -10, rotateY: 20, rotateZ: -5 }}
            className="absolute top-[30%] right-[10%] w-64 h-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-[0_0_30px_rgba(255,215,0,0.2)] hidden lg:block"
          >
             <div className="absolute inset-0 bg-gradient-to-bl from-prime-gold/20 to-transparent" />
          </motion.div>

          <motion.div 
            style={{ y: card3Y, rotateX: 20, rotateY: -10 }}
            className="absolute bottom-[20%] left-[20%] w-32 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg blur-sm hidden lg:block"
          />
        </div>

        <motion.div
          style={{ y: textY }}
          className="relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-[0_0_20px_rgba(255,215,0,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-prime-gold animate-pulse shadow-[0_0_10px_#FFD700]"/>
            <span className="text-xs font-bold tracking-[0.25em] text-prime-gold uppercase">
              Elite Design Agency
            </span>
          </motion.div>

          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] text-white mb-8 perspective-text">
            <span className="block transform transition-transform hover:scale-105 duration-500 origin-bottom">VISUAL</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 transform transition-transform hover:scale-105 duration-500 delay-75 origin-top">
              DOMINANCE
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed mix-blend-screen"
          >
            We engineer <span className="text-white font-medium">high-CTR assets</span> for the world's most ambitious creators. 
            Stop blending in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button variant="primary" icon href="https://discord.gg/example" className="shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Start Project
            </Button>
            <Button variant="outline" href="#process">
              Our Process
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Glass Stats Bar */}
        <motion.div 
          style={{ opacity, rotateX: 10 }}
          className="mt-32 border-t border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent backdrop-blur-sm transform-style-3d"
        >
          <div className="max-w-6xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'CTR Uplift', value: '+45%' },
              { label: 'Thumbnails', value: '5k+' },
              { label: 'Creators', value: '200+' },
              { label: 'Speed', value: '24h' },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <div className="font-display font-bold text-4xl text-white mb-1 group-hover:text-prime-gold transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};