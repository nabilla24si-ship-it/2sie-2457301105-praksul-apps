import React from 'react';

export default function InputField({ type = 'text', placeholder, icon, ...props }) {
  return (
    <div className="relative">
      <input 
        type={type} 
        placeholder={placeholder} 
        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3] focus:border-transparent text-gray-900 placeholder-gray-400 text-sm"
        {...props}
      />
      {icon && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
          {icon}
        </span>
      )}
    </div>
  );
}