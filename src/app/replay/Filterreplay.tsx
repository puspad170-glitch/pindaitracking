'use client';
import React, { useState } from 'react';
import { Calendar, Play } from 'lucide-react';

export default function FilterReplay() {
  const [selectedRange, setSelectedRange] = useState('Hari ini');
  const [startDate, setStartDate] = useState('07-Aug-2026');
  const [endDate, setEndDate] = useState('07-Aug-2026');

  const filterOptions = ['Hari ini', 'Kemarin', 'Minggu ini', 'Minggu lalu', 'Bulan ini'];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-4">
      {/* Jarak Waktu Cepat */}
      <div>
        <h4 className="text-xs font-bold text-gray-700 mb-2">Jarak Waktu Cepat</h4>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedRange(opt)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-bold whitespace-nowrap transition-all ${
                selectedRange === opt
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-sky-600 border border-sky-300 hover:bg-sky-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-gray-700 block mb-1">Dari Tanggal</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 text-xs font-bold text-gray-800 focus:outline-none focus:border-sky-500"
          />
          <Calendar className="w-5 h-5 text-slate-600 absolute right-4 pointer-events-none" />
        </div>
      </div>

      
      <div>
        <label className="text-xs font-bold text-gray-700 block mb-1">Sampai Tanggal</label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-2xl py-3 px-4 text-xs font-bold text-gray-800 focus:outline-none focus:border-sky-500"
          />
          <Calendar className="w-5 h-5 text-slate-600 absolute right-4 pointer-events-none" />
        </div>
      </div>

     
      <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-xs shadow-md transition">
        <Play className="w-4 h-4 fill-white" />
        Putar Replay
      </button>
    </div>
  );
}