'use client';

import React from 'react';
import Link from 'next/link';
import MaterialIcon from '../components/MaterialIcon';
import { VehicleData, sampleVehicles } from './data/vehicles';

interface AksiArmadaProps {
  vehicle?: VehicleData;
  activeTab?: 'tracking' | 'replay';
  setActiveTab?: (tab: 'tracking' | 'replay') => void;
}

export default function AksiArmada({
  vehicle = sampleVehicles[0],
  activeTab = 'tracking',
  setActiveTab,
}: AksiArmadaProps) {
  return (
    <div className="space-y-3">
      {/* Tracking vs Replay Tab Switch */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setActiveTab?.('tracking')}
          className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
            activeTab === 'tracking'
              ? 'bg-blue-800 text-white shadow-blue-900/20'
              : 'bg-white text-slate-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <MaterialIcon name="location_on" fill={activeTab === 'tracking'} className="text-base" />
          Tracking
        </button>

        <button
          type="button"
          onClick={() => setActiveTab?.('replay')}
          className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
            activeTab === 'replay'
              ? 'bg-blue-800 text-white shadow-blue-900/20'
              : 'bg-white text-slate-700 border border-gray-200 hover:bg-gray-50'
          }`}
        >
          <MaterialIcon name="play_arrow" fill={activeTab === 'replay'} className="text-base" />
          Replay
        </button>
      </div>

      {/* Quick Action Grid */}
      <div className="grid grid-cols-3 gap-2.5">
        <a
          href={`tel:${vehicle.phone}`}
          className="bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-colors"
        >
          <MaterialIcon name="call" fill={true} className="text-xl mb-1" />
          <span className="text-[10px] font-bold leading-tight">
            Hubungi
            <br />
            Driver
          </span>
        </a>

        <button
          type="button"
          onClick={() => setActiveTab?.('replay')}
          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-colors"
        >
          <MaterialIcon name="schedule" fill={true} className="text-xl mb-1" />
          <span className="text-[10px] font-bold leading-tight">
            Lihat
            <br />
            Riwayat
          </span>
        </button>

        <button
          type="button"
          className="bg-red-50 hover:bg-red-100 text-red-500 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-colors"
        >
          <MaterialIcon name="warning" fill={true} className="text-xl mb-1" />
          <span className="text-[10px] font-bold leading-tight">
            Laporkan
            <br />
            Masalah
          </span>
        </button>
      </div>

      {/* Detail Button */}
      <Link
        href="/detail-kendaraan"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-xs shadow-md shadow-amber-500/20 transition-all active:scale-[0.98]"
      >
        Lihat Detail Kendaraan ({vehicle.id})
        <MaterialIcon name="chevron_right" className="text-base" />
      </Link>
    </div>
  );
}