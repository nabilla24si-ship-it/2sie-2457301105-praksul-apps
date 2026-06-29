// src/pertemuan_4/ResponsiveDesign.jsx
import React from 'react';

function ResponsiveText() {
    return (
        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 text-gray-700">
            Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br/>
            Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
        </p>
    )
}

function ResponsiveWidth() {
    return (
        <div className="mb-4 text-gray-700">
            <p className="mb-2">
                Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.</li>
                <li><strong>md:flex-row</strong> pada div parent membuat dua kolom ini sejajar secara horizontal pada layar tablet ke atas, sedangkan pada layar lebih kecil (mobile), kolom akan tersusun vertikal secara default (`flex-col`).</li>
            </ul>
            
            <div className="flex flex-col md:flex-row mb-4 text-white font-bold text-center gap-2">
                <div className="bg-red-400 w-full md:w-1/2 p-4 rounded">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4 rounded">Kolom 2</div>
            </div>
        </div>
    )
}

function ResponsiveLayout() {
    return (
        <div className="text-gray-700">
            <p className="mt-4 mb-2">
                Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind CSS. Jumlah kolom akan menyesuaikan dengan ukuran layar:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong>grid-cols-1</strong> → Pada layar kecil (default), semua box tersusun dalam <strong>1 kolom</strong>.</li>
                <li><strong>sm:grid-cols-2</strong> → Saat ukuran layar mencapai <strong>sm (≥640px)</strong>, grid berubah menjadi <strong>2 kolom</strong>.</li>
                <li><strong>md:grid-cols-3</strong> → Pada ukuran <strong>md (≥768px)</strong>, grid berubah menjadi <strong>3 kolom</strong>.</li>
                <li><strong>lg:grid-cols-4</strong> → Saat ukuran layar <strong>lg (≥1024px)</strong> atau lebih besar, grid akan memiliki <strong>4 kolom</strong>.</li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 text-white font-bold text-center">
                <div className="bg-blue-500 p-4 rounded shadow">Box 1</div>
                <div className="bg-blue-500 p-4 rounded shadow">Box 2</div>
                <div className="bg-blue-500 p-4 rounded shadow">Box 3</div>
                <div className="bg-blue-500 p-4 rounded shadow">Box 4</div>
            </div>
        </div>
    )
}

export default function ResponsiveDesign() {
    return (
        <div className="p-8 max-w-5xl mx-auto bg-white min-h-screen">
            <h1 className="text-3xl font-bold mb-8 border-b pb-4">Materi Responsive & Grid Design</h1>
            
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. Responsive Text</h2>
                <ResponsiveText />
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. Responsive Width (Flexbox)</h2>
                <ResponsiveWidth />
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. Responsive Layout (Grid)</h2>
                <ResponsiveLayout />
            </section>
        </div>
    )
}