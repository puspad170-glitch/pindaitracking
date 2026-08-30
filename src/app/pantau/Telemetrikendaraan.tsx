'use client';

import React from 'react';
import Link from 'next/link';
import MaterialIcon from '../components/MaterialIcon';
import { VehicleData, sampleVehicles } from './data/vehicles';

interface TelemetrikendaraanProps {
  vehicle?: VehicleData;
}

export default function Telemetrikendaraan({
  vehicle = sampleVehicles[0],
}: TelemetrikendaraanProps) {
  const vehicleId = vehicle.id || '1';

  return (
    <div className="grid grid-cols-2 gap-2.5">
      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="speed" fill={true} className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            Current Speed
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.speed}{' '}
          <span className="text-[10px] font-semibold text-gray-500">{vehicle.speedUnit}</span>
        </div>
      </Link>

      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="update" className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            Engine Hours
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.engineHours}
        </div>
      </Link>

      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="gas_meter" fill={true} className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            Fuel Level
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.fuelLevel}
        </div>
      </Link>

      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="turn_slight_right" className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            Trip Distance
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.tripDistance}
        </div>
      </Link>

      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="multiple_stop" className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            Total Distance
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.totalDistance}
        </div>
      </Link>

      <Link
        href={`/kendaraan/${vehicleId}`}
        className="bg-white p-2.5 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-2xs hover:border-blue-200 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <MaterialIcon name="battery_std" fill={true} className="text-sm" />
          </div>
          <span className="text-gray-400 text-[11px] font-semibold leading-tight truncate">
            GPS Battery
          </span>
        </div>
        <div className="font-extrabold text-gray-900 text-sm leading-tight">
          {vehicle.battery}
        </div>
      </Link>
    </div>
  );
}