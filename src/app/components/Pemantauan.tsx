
import React from 'react';
import Link from 'next/link'
export default function Pemantauan() {
  return (
    <Link href="/pantau" className="block">
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-3">Pemantauan Armada</h2>
      
      <div className="relative w-full h-44 bg-slate-100 rounded-2xl overflow-hidden border border-gray-200 mb-3 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]">
       
        <svg className="absolute inset-0 w-full h-full">
          <path d="M 60 40 L 140 90 L 170 120" stroke="#0284c7" strokeWidth="4" fill="none" strokeDasharray="6 4" />
        </svg>

        <div className="absolute top-6 left-12 bg-green-500 text-white p-1.5 rounded-full shadow-md">
          <span className="block w-2.5 h-2.5 bg-white rounded-full"></span>
        </div>

        <div className="absolute bottom-6 right-28 bg-emerald-600 text-white p-1 rounded-lg shadow-lg flex items-center gap-1 text-[10px] font-bold px-2">
          🚚 GPS F52618
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
            🚛
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-gray-900 text-sm">GPS F52618</h3>
              <span className="bg-green-100 text-green-600 text-[9px] font-bold px-2 py-0.5 rounded-full">Online</span>
            </div>
            <p className="text-[11px] text-gray-500">Pengemudi: <span className="font-semibold text-gray-700">Budi Santoso</span></p>
            <p className="text-[11px] text-gray-500">Status: <span className="font-semibold text-blue-600">Menuju TPS Sukasari</span></p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-gray-400 font-bold uppercase">ETA</p>
          <p className="text-xs font-bold text-gray-800">8 menit</p>
        </div>
      </div>
    </div>
    </Link>
  );
}