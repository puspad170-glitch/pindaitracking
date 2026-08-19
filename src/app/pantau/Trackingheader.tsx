'use client';

import React from 'react';
import Link from 'next/link';
import MaterialIcon from '../components/MaterialIcon';
import { VehicleData } from './data/vehicles';

interface TrackingHeaderProps {
  selectedVehicle?: VehicleData | null;
  onShowList?: () => void;
}

export default function Trackingheader({
  selectedVehicle,
  onShowList,
}: TrackingHeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center justify-between pointer-events-none">
      {/* Back Button & Title */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-gray-800 shadow-md shadow-black/10 hover:bg-white transition-all active:scale-95 border border-white/60"
        >
          <MaterialIcon name="arrow_back" className="text-xl" />
        </Link>

        <div className="bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-md shadow-black/10 border border-white/60">
          <div className="flex items-center gap-1.5">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span> */}
            <h1 className="text-sm font-bold text-gray-900 tracking-tight">
              {selectedVehicle ? selectedVehicle.id : 'Pemantauan Armada'}
            </h1>
          </div>
          <p className="text-[9px] font-medium text-gray-500 mt-0.2">
            {selectedVehicle
              ? `${selectedVehicle.driver} • ${selectedVehicle.speed} ${selectedVehicle.speedUnit}`
              : '6 Armada Terhubung'}
          </p>
        </div>
      </div>

      {/* Right Quick Switch Button */}
      {selectedVehicle && onShowList && (
        <button
          type="button"
          onClick={onShowList}
          className="pointer-events-auto flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-md shadow-black/10 border border-white/60 text-xs font-bold text-blue-600 hover:bg-white transition-all active:scale-95"
        >
          <MaterialIcon name="list" className="text-base" />
          <span className="text-[10px]">Daftar</span>
        </button>
      )}
    </header>
  );
}