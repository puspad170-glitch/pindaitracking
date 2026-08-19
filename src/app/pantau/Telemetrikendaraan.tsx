import React from 'react';

export default function Telemetrikendaraan() {
  return (
    <div className="grid grid-cols-3 gap-2.5">
     
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">speed</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">Current Speed</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          35 <span className="text-[9px] font-semibold text-gray-600">km/jam</span>
        </span>
      </div>

      
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">update</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">Engine Hours</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">34.6 jam</span>
      </div>

     
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">gas_meter</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">Fuel Level</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">52 Liter</span>
      </div>

      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">turn_slight_right</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">Trip Distance</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">49.7 km</span>
      </div>

      
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">multiple_stop</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">Total Distance</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">580 km</span>
      </div>

     
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-1 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">battery_std</span>
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">GPS Battery</span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">95%</span>
      </div>
    </div>
  );
}