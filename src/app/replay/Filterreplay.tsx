import React from 'react';

export default function Filterreplay() {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 space-y-4">
      
      <div>
        <h4 className="font-bold text-gray-800 text-xs mb-2">Jarak Waktu Cepat</h4>
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium whitespace-nowrap">Hari ini</button>
          <button className="border border-blue-400 text-blue-600 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">Kemarin</button>
          <button className="border border-blue-400 text-blue-600 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">Minggu ini</button>
          <button className="border border-blue-400 text-blue-600 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">Minggu lalu</button>
          <button className="border border-blue-400 text-blue-600 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">Bulan ini</button>
        </div>
      </div>

     
      <div>
        <label className="font-bold text-gray-800 text-xs block mb-1.5">Dari Tanggal</label>
        <div className="flex items-center justify-between border border-gray-200 rounded-2xl p-3 bg-gray-50/50">
          <span className="text-sm font-semibold text-gray-800">07-Aug-2026</span>
          <span className="material-symbols-outlined text-gray-500">calendar_today</span>
        </div>
      </div>

    
      <div>
        <label className="font-bold text-gray-800 text-xs block mb-1.5">Sampai Tanggal</label>
        <div className="flex items-center justify-between border border-gray-200 rounded-2xl p-3 bg-gray-50/50">
          <span className="text-sm font-semibold text-gray-800">07-Aug-2026</span>
          <span className="material-symbols-outlined text-gray-500">calendar_today</span>
        </div>
      </div>

     
      <button className="w-full bg-orange-500 text-white py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-200">
        <span className="material-symbols-outlined text-xl">play_arrow</span>
        Putar Replay
      </button>
    </div>
  );
}