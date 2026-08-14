'use client';
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ReplayHeaderProps {
  onBack?: () => void;
}

export default function ReplayHeader({ onBack }: ReplayHeaderProps) {
  return (
    <div className="bg-linear-to-r from-sky-500 to-blue-600 text-white p-5 pt-7 pb-10 rounded-b-4x1 relative z-10 shadow-md">
      <div className="flex items-center gap-3">
        <button 
          onClick={onBack}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-extrabold tracking-wide uppercase">Replay Perjalanan</h1>
      </div>

      {/* Card Ringkasan Kendaraan & Waktu */}
      <div className="mt-4 bg-white text-gray-800 rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-12 bg-emerald-700 rounded-xl overflow-hidden flex items-center justify-center shadow-sm">
            <span className="text-2xl">🚛</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-base text-gray-900">GPS F52618</h3>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">Status <span className="bg-emerald-100 text-emerald-600 font-bold px-1.5 py-0.2 rounded-md text-[9px] ml-1">Online</span></p>
            <p className="text-[11px] text-gray-500 mt-0.5">Driver: <span className="font-bold text-gray-800">Budi Santoso</span></p>
          </div>
        </div>

        <div className="text-right border-l border-gray-100 pl-3">
          <p className="text-[10px] text-gray-400 font-medium">Tanggal</p>
          <p className="text-[11px] font-bold text-gray-800">07 Agustus 2026</p>
          <p className="text-[10px] text-gray-400 font-medium mt-1">Durasi</p>
          <p className="text-[11px] font-bold text-gray-800">2 Jam 35 Menit</p>
        </div>
      </div>
    </div>
  );
}