'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = "font-rubik font-normal rounded transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-tangerine text-white hover:bg-tangerine/90",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    nav: "bg-navy-dark text-white hover:bg-navy-dark/90"
  };
  
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}