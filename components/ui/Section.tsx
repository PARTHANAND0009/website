import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};