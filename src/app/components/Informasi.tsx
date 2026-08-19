'use client';

import React, { useState } from 'react';
import MaterialIcon from './MaterialIcon';

export default function Informasi() {
  const [activeTab, setActiveTab] = useState('Semua');
  const tabs = ['Semua', 'Pengumuman', 'Laporan'];

  return (
    <div className="rounded-2xl bg-white p-4 shadow-xs border border-gray-100 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-lexend text-sm font-bold text-teal-900">INFORMASI & PENGUMUMAN</h3>
        <a href="#" className="text-[11px] font-medium text-sky-500 hover:underline flex items-center gap-0.5">
          Lihat semua <MaterialIcon name="chevron_right" className="text-sm" />
        </a>
      </div>

      
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`filter-tab px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="space-y-2.5">
      
        <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-2.5 hover:bg-gray-50 transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
            <MaterialIcon name="campaign" fill={true} className="text-xl" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-teal-900 truncate">Jadwal Pengangkutan Libur Nasional</h4>
            <p className="text-[10px] text-gray-500 truncate">Pengangkutan akan tetap berjalan normal.</p>
          </div>
          <span className="text-[9px] text-gray-400 whitespace-nowrap">2 hari lalu</span>
        </div>

        
        <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-2.5 hover:bg-gray-50 transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <MaterialIcon name="bar_chart" fill={true} className="text-xl" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-teal-900 truncate">Evaluasi Armada Bulanan</h4>
            <p className="text-[10px] text-gray-500 truncate">Cek performa armada bulan Juli 2024.</p>
          </div>
          <span className="text-[9px] text-gray-400 whitespace-nowrap">2 hari lalu</span>
        </div>

        
        <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-2.5 hover:bg-gray-50 transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
            <MaterialIcon name="eco" fill={true} className="text-xl" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-teal-900 truncate">Program Bogor Bersih 2024</h4>
            <p className="text-[10px] text-gray-500 truncate">Ayo dukung kebersihan kota Bogor!</p>
          </div>
        </div>
      </div>
    </div>
  );
}