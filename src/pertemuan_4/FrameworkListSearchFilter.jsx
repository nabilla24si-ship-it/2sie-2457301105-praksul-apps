import React, { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() { 
  // 1. Inisialisasi State (Best Practice Form State menggunakan Object)
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  // 2. Handle Perubahan Nilai Input Form secara General
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // 3. Logika Pencarian & Filter Data JSON
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag 
      ? framework.tags.includes(dataForm.selectedTag) 
      : true;

    return matchesSearch && matchesTag;
  });

  // 4. Mengambil Nilai Unik dari List Tags di JSON menggunakan Set & flatMap
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 rounded-3xl my-6 border border-gray-200/50 shadow-sm">
      <h1 className="text-3xl font-extrabold mb-2 text-gray-900 tracking-tight">Framework List</h1>
      <p className="text-gray-500 mb-8 text-sm">Menampilkan data JSON dengan fitur Search, Filter Tags, dan Responsive Grid Layout.</p>
      
      {/* Input Search dan Select Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-white p-5 rounded-2xl border border-gray-200/60 shadow-sm">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Search Framework</label>
          <input
            type="text"
            name="searchTerm"
            value={dataForm.searchTerm}
            onChange={handleChange}
            placeholder="Search framework name or description..."
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Filter By Tag</label>
          <select
            name="selectedTag"
            value={dataForm.selectedTag}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-gray-50"
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid Layout Responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFrameworks.map((item) => (
          <div key={item.id} className="border border-gray-200/60 p-6 rounded-2xl shadow-sm bg-white flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
              
              {/* Akses Nested Structured Data menggunakan Dot Notation */}
              <div className="bg-gray-50 p-3 rounded-xl space-y-1 text-xs text-gray-500 border border-gray-100 mb-4">
                <p><strong>Developer:</strong> {item.details.developer}</p>
                <p><strong>Release Year:</strong> {item.details.releaseYear}</p>
                <p className="truncate">
                  <strong>Website:</strong>{" "}
                  <a 
                    href={item.details.officialWebsite} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-600 hover:underline"
                  >
                    {item.details.officialWebsite}
                  </a>
                </p>
              </div>
            </div>

            {/* Render Data Array Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tampilan jika data pencarian tidak ditemukan */}
      {filteredFrameworks.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200 mt-6">
          <p className="text-gray-400 text-sm">Tidak ada framework yang cocok dengan kriteria pencarian Anda.</p>
        </div>
      )}
    </div>
  );
}