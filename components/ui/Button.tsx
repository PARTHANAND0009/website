import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  fullWidth = false,
  href,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-white text-black hover:bg-prime-gold hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] border border-transparent",
    secondary: "bg-prime-blue text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-transparent",
    outline: "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};