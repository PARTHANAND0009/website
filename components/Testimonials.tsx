import React from 'react';
import { Section } from './ui/Section';

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-black to-prime-card">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl text-white mb-2">Creator Love</h2>
        <div className="w-12 h-1 bg-prime-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
          <div className="text-6xl text-prime-blue absolute top-4 left-6 opacity-20 font-serif">"</div>
          <p className="text-lg text-gray-300 italic mb-6 relative z-10 pt-4">
            CTR went from 4% to 9% on the first video. The team just gets it. Worth every penny for the peace of mind.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://picsum.photos/seed/user1/50/50" alt="User" className="w-10 h-10 rounded-full grayscale" />
            <div>
              <div className="text-white font-bold text-sm">Alex G.</div>
              <div className="text-gray-500 text-xs">Tech Creator (500k subs)</div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
          <div className="text-6xl text-prime-gold absolute top-4 left-6 opacity-20 font-serif">"</div>
          <p className="text-lg text-gray-300 italic mb-6 relative z-10 pt-4">
            Finally an agency that understands branding. They didn't just make a thumbnail, they built a style for my channel.
          </p>
          <div className="flex items-center gap-4">
            <img src="https://picsum.photos/seed/user2/50/50" alt="User" className="w-10 h-10 rounded-full grayscale" />
            <div>
              <div className="text-white font-bold text-sm">Sarah Jenkins</div>
              <div className="text-gray-500 text-xs">Lifestyle Vlogger (1.2M subs)</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};