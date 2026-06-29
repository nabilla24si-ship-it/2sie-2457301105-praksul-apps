import React from 'react';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex font-sans bg-gray-50">
      {/* SISI KIRI: Formulir Otentikasi Pasien */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 shadow-sm">
        <div className="w-full max-w-md">
          {/* Logo & Judul Medis */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-600 text-white p-1.5 rounded-lg text-lg">🎥</span>
            <span className="text-xl font-bold text-blue-600 tracking-tight">MediCare Portal</span>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Sign In to Your Account</h1>
          <p className="text-gray-500 mb-8 text-sm">Access your medical dashboard, prescriptions, and virtual appointments.</p>

          {/* Akses Cepat Pihak Ketiga */}
          <div className="flex gap-4 mb-6">
            <button type="button" className="flex-1 border border-gray-200 bg-white rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
              <span className="font-bold text-base text-red-500">G</span> Google
            </button>
            <button type="button" className="flex-1 border border-gray-200 bg-white rounded-xl py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 text-sm font-medium text-gray-600 transition-colors">
              <span className="text-base text-black"></span> Apple ID
            </button>
          </div>

          <div className="flex items-center mb-6">
            <hr className="flex-1 border-gray-200" />
            <span className="px-3 text-gray-400 text-xs uppercase tracking-wider font-semibold">or with patient e-mail</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Form Login Utama */}
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="patient@medicare.com" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50/50" 
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400">Password</label>
                <a href="#" className="text-xs text-blue-600 font-semibold hover:underline">Forgot Password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-gray-50/50" 
              />
            </div>
            
            <div className="flex items-center pt-1">
              <label className="flex items-center text-sm text-gray-600 font-medium cursor-pointer select-none">
                <input type="checkbox" className="mr-2.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" /> 
                Keep me signed in on this device
              </label>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition-colors shadow-md text-sm">
                Access Medical Dashboard
              </button>
            </div>
          </form>

          <p className="text-center mt-8 text-sm text-gray-600">
            New to MediCare? <a href="#" className="text-blue-600 font-bold hover:underline">Register New Patient Account</a>
          </p>
        </div>
      </div>

      {/* SISI KANAN: Grafis Kesehatan Visual (Tema Biru Medis / Kesehatan Mandiri) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex-col justify-center items-center text-white relative overflow-hidden">
        <div className="w-full max-w-md z-10 flex flex-col items-center">
          
          {/* Kartu Mockup Grafik Janji Temu Dokter (Menggantikan Kartu Finansial Revenue) */}
          <div className="bg-white rounded-2xl p-6 text-black mb-8 shadow-2xl w-full border border-white/20">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-gray-900">Patient Consultation Flow</h3>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-semibold">Weekly Analytics</span>
            </div>
            
            <div className="h-40 border-b-2 border-l-2 border-gray-100 relative flex items-end">
              {/* Tooltip Medis */}
              <div className="absolute top-2 left-1/3 bg-white shadow-xl p-2.5 rounded-xl border border-gray-50 text-xs z-10">
                <p className="text-gray-500 mb-0.5">Telemedicine:</p>
                <p className="text-blue-600 font-bold text-sm">34 Online Consultations</p>
              </div>

              {/* Garis Grafik Alur Pasien */}
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <path d="M0,45 Q20,15 45,20 T100,5" fill="none" stroke="#2F54EB" strokeWidth="3" strokeLinecap="round" />
                <path d="M0,48 Q30,35 60,15 T100,25" fill="none" stroke="#8541FF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                <circle cx="43" cy="20" r="2" fill="white" stroke="#2F54EB" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-3 uppercase tracking-wider">
               <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
            </div>
          </div>

          {/* Slogan Kesehatan */}
          <h2 className="text-3xl font-extrabold mb-4 text-center tracking-tight">Your Health, Our Priority</h2>
          <p className="text-center text-blue-100 text-sm leading-relaxed max-w-sm">
            Manage consultations, download digital prescriptions, and monitor your personal health journey easily in one centralized environment.
          </p>
          
          {/* Pagination Slider Indicator */}
          <div className="flex justify-center gap-2 mt-8">
             <div className="w-6 h-1.5 bg-white rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
             <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </div>
        
        {/* Dekorasi Latar Belakang */}
        <div className="absolute -right-16 -top-16 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}