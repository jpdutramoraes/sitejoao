import React from 'react';
import { Microscope } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", variant = 'default' }) => {
  const isWhite = variant === 'white';
  
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8">
        {/* Stylized W Background/Icon Combination */}
        <div className={`absolute inset-0 ${isWhite ? 'text-white/20' : 'text-primary-100'}`}>
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform scale-125">
             <path d="M2.5 12l2 6 2-4 2 4 4-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3" />
           </svg>
        </div>
        
        <Microscope 
          size={24} 
          className={`relative z-10 ${isWhite ? 'text-white' : 'text-primary-600'}`} 
          strokeWidth={2}
        />
        
        {/* Accent Dot */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-lg tracking-tight ${isWhite ? 'text-white' : 'text-slate-800'}`}>
          W <span className={isWhite ? 'text-blue-200' : 'text-blue-600'}>Treinamento</span>
        </span>
      </div>
    </div>
  );
};