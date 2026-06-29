// src/pages/Portal.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link agar navigasi mulus

export default function Portal() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-extrabold text-center mb-2 text-gray-900 tracking-tight">
        Portal Tugas Praksul Apps
      </h1>
      <p className="text-center text-gray-500 mb-12 text-sm">
        Nama: Nabilla Suharman | Kelas: 2SIE
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Card Menu Pertemuan 4 */}
        <Link to="/p4" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all block group">
          <h2 className="text-xl font-bold text-blue-600 group-hover:underline mb-2">📁 Pertemuan 4</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Menampilkan data JSON framework, implementasi state form master, fitur Search & Filter, serta Responsive Grid Design Tailwind.
          </p>
        </Link>

        {/* Card Menu Pertemuan 8 (Auth) */}
        <Link to="/p8-auth" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all block group">
          <h2 className="text-xl font-bold text-purple-600 group-hover:underline mb-2">🔐 Pertemuan 8 - Auth Layout</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Slicing UI halaman login / registrasi aplikasi Ember menggunakan Tailwind CSS v4.
          </p>
        </Link>

        {/* Card Menu Pertemuan 8 (Member Dashboard) */}
        <Link to="/p8-member" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all block group">
          <h2 className="text-xl font-bold text-indigo-600 group-hover:underline mb-2">🖥️ Pertemuan 8 - Member Dashboard</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Slicing UI lengkap untuk panel Member / Dashboard Pasien aplikasi MediCare dengan komponen yang rapi.
          </p>
        </Link>
      </div>
    </div>
  );
}