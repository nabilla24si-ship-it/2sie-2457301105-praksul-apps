// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Halaman Utama Portal
import Portal from './pages/Portal';

// Import Semua Fitur Pertemuan 4
import FrameworkListSearchFilter from './pertemuan_4/FrameworkListSearchFilter';
import ResponsiveDesign from './pertemuan_4/ResponsiveDesign';

// Import Semua Fitur Pertemuan 8
import AuthLayout from './pertemuan_8/AuthLayout';
import MemberLayout from './pertemuan_8/MemberLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama pas pertama kali web dibuka */}
        <Route path="/" element={<Portal />} />
        
        {/* Jalan masuk ke tugas Pertemuan 4 */}
        <Route path="/p4" element={
          <div className="min-h-screen bg-gray-50">
            <FrameworkListSearchFilter />
            <hr className="my-12 border-gray-300 max-w-5xl mx-auto" />
            <ResponsiveDesign />
          </div>
        } />

        {/* Jalan masuk ke tugas Pertemuan 8 */}
        <Route path="/p8-auth" element={<AuthLayout />} />
        <Route path="/p8-member" element={<MemberLayout />} />
      </Routes>
    </Router>
  );
}

export default App;