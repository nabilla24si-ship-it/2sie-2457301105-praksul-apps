import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}