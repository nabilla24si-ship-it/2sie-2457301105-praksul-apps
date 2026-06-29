import React from 'react';

export default function Avatar({ initial, src, alt = 'Avatar' }) {
  return (
    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center text-gray-500 font-bold shadow-sm">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-sm uppercase">{initial}</span>
      )}
    </div>
  );
}