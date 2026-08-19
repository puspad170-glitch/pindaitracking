import React from 'react';

export default function InformasiKendaraan() {
  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
      <h2 className="font-bold text-gray-800 text-sm tracking-wide mb-3">Informasi Kendaraan</h2>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
         
          <div className="w-16 h-14 bg-emerald-700 rounded-xl overflow-hidden flex items-center justify-center shadow-sm text-white">
            
            <span className="material-symbols-outlined text-3xl">
              local_shipping
            </span>
          </div>
          <div>
            <h3 className="font-extrabold text-gray-900 text-base">GPS F52618</h3>
            <div className="grid grid-cols-3 gap-3 mt-1 text-[11px]">
              <div>
                <span className="text-gray-400 block">Pengemudi</span>
                <span className="font-bold text-gray-800">Budi</span>
              </div>
              <div>
                <span className="text-gray-400 block">Status</span>
                <span className="font-bold text-emerald-500">Online</span>
              </div>
              <div>
                <span className="text-gray-400 block">Mesin</span>
                <span className="font-bold text-emerald-500">ON</span>
              </div>
            </div>
          </div>
        </div>

        <span className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full self-start">
          Online
        </span>
      </div>
    </div>
  );
}