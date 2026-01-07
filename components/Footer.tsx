import React from 'react';
import { Zap, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Zap className="w-6 h-6 text-prime-gold fill-current" />
              <span className="font-display font-bold text-2xl text-white">PRIME STUDIOS</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Designing the face of your content. <br />
              Premium thumbnails for premium creators.
            </p>
          </div>

          <div className="flex gap-6">
             <SocialLink icon={<Twitter className="w-5 h-5" />} />
             <SocialLink icon={<Instagram className="w-5 h-5" />} />
             <SocialLink icon={<Youtube className="w-5 h-5" />} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Prime Studios. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
    {icon}
  </a>
);