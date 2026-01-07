import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-black z-0" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-prime-blue/20 to-prime-gold/10 opacity-30 z-0 blur-3xl" 
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-8 tracking-tight">
            Ready to Upgrade<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prime-gold to-white relative inline-block">
              Your Clicks?
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10">
            Join hundreds of creators who have leveled up their channel with Prime Studios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" icon className="px-12 py-5 text-lg" href="https://discord.gg/example">
              Join the Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};