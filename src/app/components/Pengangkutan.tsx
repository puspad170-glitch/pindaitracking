import React from 'react';

export default function Pengangkutan() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-xs border border-gray-100 space-y-2">
      <h3 className="font-lexend text-sm font-bold text-teal-900">PENGANGKUTAN HARI INI</h3>
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-blue-900">Target Penyelesaian 92%</span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-stone-200">
        <div className="h-full w-[92%] rounded-full bg-amber-400 transition-all duration-500" />
      </div>
    </div>
  );
}