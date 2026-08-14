import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function KendaraanOnline() {
  const vehicles = [
    { id: 'GPS F52672', driver: 'Rusman', speed: '35 km/jam', status: 'Online' },
    { id: 'GPS F52672', driver: 'Rusman', speed: '35 km/jam', status: 'Online' },
  ];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Kendaraan Online</h2>
        <button className="text-xs text-sky-500 font-semibold flex items-center hover:underline">
          Lihat semua <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>

      <div className="space-y-3">
        {vehicles.map((v, i) => (
          <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-3 last:pb-0 last:border-none">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-xl">
                🚚
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">{v.id}</h3>
                <p className="text-[11px] text-gray-400">Driver</p>
                <p className="text-xs font-bold text-gray-700">{v.driver}</p>
              </div>
            </div>

            <div className="text-right flex flex-col items-end gap-1">
              <span className="bg-emerald-100 text-emerald-600 text-[9px] font-bold px-2 py-0.5 rounded-full">
                {v.status}
              </span>
              <p className="text-[10px] text-gray-400">Kecepatan</p>
              <p className="text-xs font-bold text-gray-700">{v.speed}</p>
              <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold text-[11px] px-4 py-1 rounded-xl shadow-sm transition">
                Tracking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}