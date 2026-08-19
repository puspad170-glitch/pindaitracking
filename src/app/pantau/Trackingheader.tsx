import React from 'react';

export default function Trackingheader() {
  return (
    <div className="bg-blue-600 p-6 rounded-b-3xl text-white space-y-4">
     
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center hover:opacity-80">
          
          <span className="material-symbols-outlined text-2xl">
            arrow_back
          </span>
        </button>
        <h1 className="text-xl font-bold tracking-wide">Tracking Armada</h1>
      </div>

    
      <div className="bg-white text-gray-800 p-4 rounded-2xl flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
         
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            
            <span className="material-symbols-outlined text-2xl">
              location_on
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold text-gray-400 tracking-wider block uppercase">
              Lokasi Tujuan
            </span>
            <h2 className="font-extrabold text-base text-gray-900 leading-tight">
              TPS Sukasari
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Jl. Raya Bogor No.45, Bogor, Jawa Barat
            </p>
          </div>
        </div>

        
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors">
          Edit
        </button>
      </div>
    </div>
  );
}