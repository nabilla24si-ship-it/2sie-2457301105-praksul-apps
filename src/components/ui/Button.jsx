import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-4 py-2 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border border-gray-200 text-gray-700 hover:bg-gray-50 bg-white shadow-none",
    purple: "bg-[#6C5DD3] text-white hover:bg-[#5b4eb3] shadow-md",
    emerald: "bg-[#10B981] text-white hover:bg-emerald-600",
    white: "bg-white text-blue-600 hover:bg-gray-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}