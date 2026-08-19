import React from 'react';

export default function Profilepengemudi() {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 space-y-4">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          
          <div className="w-14 h-14 bg-emerald-50 text-emerald-700 border-2 border-emerald-500 rounded-full flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-3xl">person</span>
          </div>

          <div>
            <span className="text-[10px] text-gray-400 font-medium block">Pengemudi Utama</span>
            <h3 className="font-extrabold text-gray-900 text-base">Budi Santoso</h3>
            <p className="text-xs text-gray-400">0123456789</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                Online
              </span>
              <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">schedule</span>
                Baru Saja
              </span>
            </div>
          </div>
        </div>

       
        <div className="flex gap-2">
          <button className="w-9 h-9 bg-gray-50 text-gray-600 rounded-xl flex items-center justify-center hover:bg-gray-100">
            <span className="material-symbols-outlined text-lg">call</span>
          </button>
          <button className="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-100">
            <span className="material-symbols-outlined text-lg">chat</span>
          </button>
        </div>
      </div>

      
      <div className="flex gap-2">
        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-red-500">push_pin</span>
          Mesin Mati
        </span>
        <span className="bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm">equalizer</span>
          Diam
        </span>
      </div>

      
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button className="py-2.5 rounded-2xl border border-gray-200 text-gray-700 font-semibold text-xs flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base">location_on</span>
          Pemantauan
        </button>
        <button className="py-2.5 rounded-2xl bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-200">
          <span className="material-symbols-outlined text-base">play_arrow</span>
          Historis
        </button>
      </div>
    </div>
  );
}