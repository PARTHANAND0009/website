import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Create multiple parallax layers
  const y1 = useTransform(scrollY, [0, 2000], [0, 800]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 400]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 2000], [0, 45]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] opacity-90" />

      {/* Grid Floor */}
      <motion.div 
        style={{ rotateX: 60, y: y2, opacity: 0.2 }}
        className="absolute inset-[-100%] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [transform-style:preserve-3d] origin-bottom"
      />

      {/* Floating Orbs/Glows */}
      <motion.div 
        style={{ y: y1, x: -100 }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-prime-blue/5 rounded-full blur-[120px] mix-blend-screen"
      />
      <motion.div 
        style={{ y: y2, x: 100 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-prime-gold/5 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Particles/Stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              y: useTransform(scrollY, [0, 2000], [0, (i + 1) * 50]),
              opacity: Math.random() * 0.5 + 0.2,
            }}
            className="absolute rounded-full bg-white"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
            }}
          />
        ))}
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
};