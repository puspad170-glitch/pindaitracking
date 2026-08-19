'use client';

import React, { useState } from 'react';
import MaterialIcon from '../components/MaterialIcon';

export default function Filterreplay() {
  const [selectedQuick, setSelectedQuick] = useState('Hari ini');
  const quickFilters = ['Hari ini', 'Kemarin', 'Minggu ini', 'Minggu lalu', 'Bulan ini'];

  return (
    <div className="rounded-2xl bg-white p-3.5 shadow-sm border border-gray-100 space-y-3 transition-all">
      {/* Quick Time Filter */}
      <div>
        <span className="text-[10px] font-bold text-gray-500 block mb-1.5 uppercase tracking-wider">
          Jarak Waktu Cepat
        </span>
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 text-[10px] scrollbar-none">
          {quickFilters.map((filter) => {
            const isActive = selectedQuick === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedQuick(filter)}
                className={`px-2.5 py-1 rounded-lg font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                    : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Date Range Inputs */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="text-[10px] font-bold text-gray-500 block mb-1">Dari Tanggal</label>
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-2 bg-gray-50/70 hover:border-gray-300 transition-colors cursor-pointer">
            <span className="text-xs font-semibold text-gray-800">07-Aug-2026</span>
            <MaterialIcon name="calendar_today" className="text-gray-400 text-base shrink-0" />
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold text-gray-500 block mb-1">Sampai Tanggal</label>
          <div className="flex items-center justify-between border border-gray-200 rounded-xl p-2 bg-gray-50/70 hover:border-gray-300 transition-colors cursor-pointer">
            <span className="text-xs font-semibold text-gray-800">07-Aug-2026</span>
            <MaterialIcon name="calendar_today" className="text-gray-400 text-base shrink-0" />
          </div>
        </div>
      </div>

      {/* Play Replay Action */}
      <button
        type="button"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm shadow-amber-500/20 transition-all active:scale-[0.98]"
      >
        <MaterialIcon name="play_arrow" fill={true} className="text-base" />
        Putar Replay
      </button>
    </div>
  );
}
