import React from 'react';

export default function Pengangkutan() {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
      <h2 className="font-bold text-gray-800 text-sm uppercase tracking-wide">Pengangkutan Hari Ini</h2>
      <div className="mt-2">
        <p className="text-xs font-semibold text-slate-700">Target Penyelesaian</p>
        <p className="text-xs font-bold text-slate-900 mb-2">92%</p>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div className="bg-amber-400 h-full rounded-full w-[92%]" />
        </div>
      </div>
    </div>
  );
}