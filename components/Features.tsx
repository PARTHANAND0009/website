import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Zap, MessageCircle, LayoutTemplate } from 'lucide-react';
import { Section } from './ui/Section';
import { TiltCard } from './ui/TiltCard';

const features = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-prime-gold" />,
    title: "Designed for CTR",
    description: "We don't just make art; we make clicks. Every element is psychometrically positioned to stop the scroll."
  },
  {
    icon: <Zap className="w-8 h-8 text-prime-blue" />,
    title: "Lightning Fast",
    description: "24-48 hour turnaround times. Because the algorithm waits for nobody."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    title: "Direct Comms",
    description: "No email chains. Chat directly with your lead designer on Discord for instant feedback."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
    title: "100% Custom",
    description: "No reused templates. Every thumbnail is built from scratch to match your video's unique hook."
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="bg-prime-card perspective-1000">
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
          Why Top Creators <br />
          <span className="text-gray-500">Choose Prime.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <TiltCard key={idx} className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/5 h-full flex flex-col shadow-xl"
            >
              <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3 translate-z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm translate-z-5">
                {feature.description}
              </p>
              
              <div className="mt-auto pt-6 flex">
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-prime-gold to-prime-blue transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};