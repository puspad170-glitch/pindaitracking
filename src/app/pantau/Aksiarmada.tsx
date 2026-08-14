
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Play, Phone, Clock, AlertTriangle, ChevronRight } from 'lucide-react';

export default function AksiArmada() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'replay'>('tracking');

  return (
    <div className="space-y-3">
     
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('tracking')}
          className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
            activeTab === 'tracking'
              ? 'bg-blue-800 text-white'
              : 'bg-white text-slate-700 border border-gray-200'
          }`}
        >
          <MapPin className="w-4 h-4 fill-current" />
          Tracking
        </button>

        <button
          onClick={() => setActiveTab('replay')}
          className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
            activeTab === 'replay'
              ? 'bg-blue-800 text-white'
              : 'bg-white text-slate-700 border border-gray-200'
          }`}
        >
          <Play className="w-4 h-4 fill-current" />
          Replay
        </button>
      </div>

     
      <div className="grid grid-cols-3 gap-2.5">
        <button className="bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition">
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold leading-tight">Hubungi<br />Driver</span>
        </button>

        <button className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition">
          <Clock className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold leading-tight">Lihat<br />Riwayat</span>
        </button>

        <button className="bg-red-50 hover:bg-red-100 text-red-500 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition">
          <AlertTriangle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold leading-tight">Laporkan<br />Masalah</span>
        </button>
      </div>

    
      <Link
  href="/replay"
  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-xs shadow-md transition"
>
  Lihat Detail Kendaraan
  <ChevronRight className="w-4 h-4" />
</Link>
</div>
  );
}