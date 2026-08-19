import React from 'react';
import MaterialIcon from '../components/MaterialIcon';
import { VehicleData, sampleVehicles } from './data/vehicles';

interface TelemetrikendaraanProps {
  vehicle?: VehicleData;
}

export default function Telemetrikendaraan({
  vehicle = sampleVehicles[0],
}: TelemetrikendaraanProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {/* Current Speed */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="speed" fill={true} className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          Current Speed
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.speed}{' '}
          <span className="text-[9px] font-semibold text-gray-600">{vehicle.speedUnit}</span>
        </span>
      </div>

      {/* Engine Hours */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="update" className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          Engine Hours
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.engineHours}
        </span>
      </div>

      {/* Fuel Level */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="gas_meter" fill={true} className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          Fuel Level
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.fuelLevel}
        </span>
      </div>

      {/* Trip Distance */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="turn_slight_right" className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          Trip Distance
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.tripDistance}
        </span>
      </div>

      {/* Total Distance */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="multiple_stop" className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          Total Distance
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.totalDistance}
        </span>
      </div>

      {/* GPS Battery */}
      <div className="bg-white p-2.5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border border-gray-100 aspect-square">
        <div className="w-9 h-9 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-1 shrink-0">
          <MaterialIcon name="battery_std" fill={true} className="text-lg" />
        </div>
        <span className="text-gray-400 text-[10px] font-medium leading-none mb-1 block">
          GPS Battery
        </span>
        <span className="font-extrabold text-gray-900 text-[11px] leading-tight">
          {vehicle.battery}
        </span>
      </div>
    </div>
  );
}