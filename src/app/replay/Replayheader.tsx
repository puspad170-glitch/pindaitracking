import React from 'react';

export default function Replayheader() {
  return (
    <div className="bg-blue-600 p-6 rounded-b-3xl text-white space-y-4">
      
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center hover:opacity-80">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold tracking-wide uppercase">Replay Perjalanan</h1>
      </div>

   
      <div className="bg-white text-gray-800 p-4 rounded-2xl flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
         
          <div className="w-14 h-12 bg-emerald-700 rounded-xl flex items-center justify-center text-white shadow-sm">
            <span className="material-symbols-outlined text-2xl">local_shipping</span>
          </div>
          <div>
            <h2 className="font-extrabold text-base text-gray-900">GPS F52618</h2>
            <div className="flex items-center gap-2 text-[11px] mt-0.5">
              <span className="text-gray-400">Status</span>
              <span className="bg-emerald-100 text-emerald-600 font-bold px-2 py-0.5 rounded-full text-[10px]">
                Online
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium mt-1">
              Driver: <span className="font-bold text-gray-800">Budi Santoso</span>
            </p>
          </div>
        </div>

        
        <div className="text-right border-l pl-3 border-gray-100">
          <span className="text-[10px] text-gray-400 block">Tanggal</span>
          <span className="font-bold text-xs text-gray-800 block mb-1">07 Agustus 2026</span>
          <span className="text-[10px] text-gray-400 block">Durasi</span>
          <span className="font-bold text-xs text-gray-800 block">2 Jam 35 Menit</span>
        </div>
      </div>
    </div>
  );
}