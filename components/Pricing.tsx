import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { TiltCard } from './ui/TiltCard';

const plans = [
  {
    name: 'Starter',
    price: 15,
    description: 'Entry level velocity.',
    features: ['1 Custom Thumbnail', '2 Revisions', '24h Delivery', 'JPEG + PNG'],
    glow: 'shadow-[0_0_30px_rgba(255,255,255,0.05)]'
  },
  {
    name: 'Pro',
    price: 30,
    description: 'Maximum impact & scale.',
    features: ['1 Premium Thumbnail', 'Unlimited Revisions', 'Source File Included', 'A/B Test Variant', 'Priority Support'],
    recommended: true,
    glow: 'shadow-[0_0_50px_rgba(255,215,0,0.2)]'
  },
  {
    name: 'Premium',
    price: 50,
    description: 'Agency-grade artistry.',
    features: ['1 High-End Manipulation', 'Unlimited Revisions', 'Source File (PSD)', '3D Elements / Blender', 'Art Director Review'],
    glow: 'shadow-[0_0_30px_rgba(255,255,255,0.05)]'
  }
];

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="perspective-1000">
      <div className="text-center mb-20">
        <h2 className="font-display font-bold text-5xl text-white mb-4">Investment</h2>
        <p className="text-gray-400 text-lg">Transparent pricing for premium assets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan, idx) => (
          <TiltCard key={idx} className={`h-full ${plan.recommended ? 'z-10 scale-105' : 'z-0 scale-95 opacity-90 hover:opacity-100 transition-opacity'}`}>
            <div 
              className={`relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 flex flex-col h-full transition-all duration-300 group overflow-hidden ${plan.glow}`}
            >
              {/* Internal Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              {plan.recommended && (
                <div className="absolute inset-0 bg-gradient-to-b from-prime-gold/5 to-transparent pointer-events-none" />
              )}

              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-prime-gold text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_20px_#FFD700]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 transform-style-3d relative z-10">
                <h3 className={`text-xl font-bold mb-2 translate-z-10 ${plan.recommended ? 'text-prime-gold' : 'text-white'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 translate-z-10">
                  <span className="text-5xl font-display font-bold text-white">${plan.price}</span>
                  <span className="text-gray-500">/ unit</span>
                </div>
                <p className="text-gray-400 text-sm mt-4">{plan.description}</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

              <ul className="space-y-4 mb-8 flex-grow relative z-10">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.recommended ? 'bg-prime-gold text-black' : 'bg-white/10 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.recommended ? 'primary' : 'outline'} 
                fullWidth 
                href="https://discord.gg/example"
                className="mt-auto relative z-10"
              >
                Start Now
              </Button>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};