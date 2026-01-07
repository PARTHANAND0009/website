import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';

const works = [
  { id: 1, title: 'Tech Review', category: 'Tech', img: 'https://picsum.photos/seed/tech/800/450' },
  { id: 2, title: 'Gaming Highlights', category: 'Gaming', img: 'https://picsum.photos/seed/game/800/450' },
  { id: 3, title: 'Vlog Lifestyle', category: 'Vlog', img: 'https://picsum.photos/seed/vlog/800/450' },
  { id: 4, title: 'Finance Tips', category: 'Finance', img: 'https://picsum.photos/seed/finance/800/450' },
  { id: 5, title: 'Documentary', category: 'Story', img: 'https://picsum.photos/seed/doc/800/450' },
  { id: 6, title: 'Challenge Video', category: 'Entertainment', img: 'https://picsum.photos/seed/challenge/800/450' },
];

export const Portfolio: React.FC = () => {
  return (
    <Section id="work" className="bg-black">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
            Recent Work
          </h2>
          <p className="text-gray-400 max-w-md">
            A selection of high-performing thumbnails across various niches.
          </p>
        </div>
        <a href="#contact" className="text-prime-gold font-bold uppercase tracking-widest text-sm hover:underline underline-offset-8">
          View All Projects
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-2xl"
          >
            {/* Image */}
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-prime-gold text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.category}
              </span>
              <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};