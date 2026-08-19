import React from 'react';

export default function Bottomnavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4 max-w-sm mx-auto flex justify-between items-end z-50">
      
      <button className="flex flex-col items-center text-blue-600 flex-1">
        <span className="material-symbols-outlined text-2xl">home</span>
        <span className="text-[10px] font-semibold mt-0.5">Beranda</span>
      </button>

      
      <button className="flex flex-col items-center text-gray-400 hover:text-blue-600 flex-1">
        <span className="material-symbols-outlined text-2xl">local_shipping</span>
        <span className="text-[10px] font-semibold mt-0.5">Armada</span>
      </button>

      <button className="flex flex-col items-center flex-1 -mt-5">
        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-300">
          <span className="material-symbols-outlined text-2xl">map</span>
        </div>
        <span className="text-[10px] font-bold text-blue-600 mt-1">Peta</span>
      </button>

      <button className="flex flex-col items-center text-gray-400 hover:text-blue-600 flex-1">
        <span className="material-symbols-outlined text-2xl">schedule</span>
        <span className="text-[10px] font-semibold mt-0.5">Riwayat</span>
      </button>

      
      <button className="flex flex-col items-center text-gray-400 hover:text-blue-600 flex-1">
        <span className="material-symbols-outlined text-2xl">person</span>
        <span className="text-[10px] font-semibold mt-0.5">Akun</span>
      </button>
    </div>
  );
}