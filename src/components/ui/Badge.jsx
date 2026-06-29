import React from 'react';

export default function Badge({ children, variant = 'blue' }) {
  const variants = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    emerald: "bg-emerald-100 text-emerald-700",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-100 text-orange-700"
  };

  return (
    <span className={`px-2 py-1 rounded-md text-xs font-semibold tracking-wide ${variants[variant]}`}>
      {children}
    </span>
  );
}