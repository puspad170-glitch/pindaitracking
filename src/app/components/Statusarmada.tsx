import React from 'react';
import { Truck, Wrench, ShieldCheck } from 'lucide-react';

export default function Statusarmada() {
  return (
    <div className="relative z-20 -mt-10 mb-4 mx-2 rounded-3xl bg-white p-4 shadow-lg shadow-black/5 border border-gray-100/80 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-teal-900">
          <Truck className="w-5 h-5 text-sky-600" />
          <h3 className="font-lexend text-sm font-bold tracking-tight">STATUS ARMADA</h3>
        </div>
        <span className="rounded-full bg-sky-100/80 px-2.5 py-0.5 text-[9px] font-bold text-sky-900">
          Hari Ini
        </span>
      </div>

      
      <div className="grid grid-cols-4 gap-2">
       
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-2.5 px-1 text-center shadow-xs">
          <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Truck className="w-4 h-4" />
          </div>
          <span className="font-lexend text-lg font-bold text-emerald-600 leading-tight">18</span>
          <span className="text-[9px] font-medium text-gray-500">Aktif</span>
        </div>

       
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-2.5 px-1 text-center shadow-xs">
          <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
            <Truck className="w-4 h-4" />
          </div>
          <span className="font-lexend text-lg font-bold text-amber-500 leading-tight">5</span>
          <span className="text-[9px] font-medium text-gray-400">Perjalanan</span>
        </div>

       
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-2.5 px-1 text-center shadow-xs">
          <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
            <Wrench className="w-4 h-4" />
          </div>
          <span className="font-lexend text-lg font-bold text-rose-600 leading-tight">2</span>
          <span className="text-[9px] font-medium text-gray-400">Maintenance</span>
        </div>

        
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-2.5 px-1 text-center shadow-xs">
          <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-lexend text-lg font-bold text-blue-600 leading-tight">20</span>
          <span className="text-[9px] font-medium text-gray-400">Tersedia</span>
        </div>
      </div>
    </div>
  );
}