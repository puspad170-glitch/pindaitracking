'use client';
import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Play } from 'lucide-react';

export default function ProfilPengemudi() {
  const [activeTab, setActiveTab] = useState<'pemantauan' | 'historis'>('historis');

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 -mt-4 relative z-20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar Driver */}
          <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden border-2 border-emerald-500 flex items-center justify-center text-xl font-bold text-slate-600">
            👨‍✈️
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-semibold block">Pengemudi Utama</span>
            <h3 className="font-extrabold text-sm text-gray-900 leading-tight">Budi Santoso</h3>
            <p className="text-[10px] text-gray-400">0123456789</p>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-emerald-100 text-emerald-600 text-[9px] font-bold px-1.5 py-0.5 rounded-md">Online</span>
              <span className="text-[9px] text-gray-400">🕒 Baru Saja</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-600 flex items-center justify-center border border-gray-200 transition">
            <Phone className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-600 flex items-center justify-center border border-sky-100 transition">
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>

      
      <div className="flex gap-2 mt-3">
        <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1">
          📌 Mesin Mati
        </span>
        <span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1">
          📢 Diam
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setActiveTab('pemantauan')}
          className={`flex-1 py-2.5 px-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'pemantauan'
              ? 'bg-blue-800 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-gray-200'
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          Pemantauan
        </button>

        <button
          onClick={() => setActiveTab('historis')}
          className={`flex-1 py-2.5 px-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'historis'
              ? 'bg-blue-800 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-gray-200'
          }`}
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          Historis
        </button>
      </div>
    </div>
  );
}