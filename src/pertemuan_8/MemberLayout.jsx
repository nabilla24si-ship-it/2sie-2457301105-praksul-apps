import React from 'react';

export default function MemberLayout() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Navbar Dashboard */}
      <nav className="bg-white px-8 py-4 flex items-center justify-between shadow-sm border-b border-gray-200">
        <div className="flex items-center gap-8">
          <h1 className="font-bold text-xl text-blue-600 flex items-center gap-2">
            <span className="bg-blue-600 text-white p-1 rounded-md text-sm">🎥</span> MediCare
          </h1>
          <div className="hidden md:flex gap-6 text-gray-500 text-sm font-medium">
            <span className="text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer">🏠 Dashboard</span>
            <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">📅 Book</span>
            <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">📄 Prescriptions</span>
            <span className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors">🕒 History</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-sm text-right">
            <div>
              <p className="font-bold text-gray-800">Nabilla Suharman</p>
              <p className="text-gray-400 text-xs">Patient</p>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              NS
            </div>
          </div>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="p-8 max-w-5xl mx-auto space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-md">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Nabilla!</h2>
          <p className="mb-6 text-white/90 text-sm">How are you feeling today? Your health is our priority.</p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
            + Book New Appointment
          </button>
        </div>

        {/* Statistik Kartu Atas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Upcoming</p>
              <h3 className="text-3xl font-bold text-gray-800">2</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center text-xl">📅</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-gray-800">12</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-xl flex items-center justify-center text-xl">🕒</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Prescriptions</p>
              <h3 className="text-3xl font-bold text-gray-800">5</h3>
            </div>
            <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-xl flex items-center justify-center text-xl">💬</div>
          </div>
        </div>

        {/* List Pertemuan Dokter */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-800 text-lg">Upcoming Appointments</h3>
            <button className="text-blue-500 text-sm font-medium hover:underline">View All →</button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">DR</div>
                <div>
                  <h4 className="font-bold text-gray-800">Dr. Sarah Johnson</h4>
                  <p className="text-xs text-gray-500 mb-1">General Physician</p>
                  <div className="flex gap-2 items-center text-xs text-gray-400 font-medium">
                    <span>📅 Mar 26</span><span>🕒 10:00 AM</span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md text-[10px]">🎥 Video Call</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-xs font-semibold hover:bg-blue-700">Join</button>
                <button className="border border-gray-200 bg-white px-4 py-1.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50">Reschedule</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}