"use client";

import { Truck } from "lucide-react";

interface GpsProps {
  plateNumber?: string;
  vehicleType?: string;
  driverName?: string;
  fleetLabel?: string;
  isOnline?: boolean;
}

export default function Gps({
  plateNumber = "GPS F52618",
  vehicleType = "Truk Box",
  driverName = "Budi Santoso",
  fleetLabel = "Armada Hijau",
  isOnline = true,
}: GpsProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="relative w-full h-[150px] rounded-xl bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] flex items-center justify-center overflow-hidden">
        <Truck size={64} className="text-[#1E88E5] opacity-85" strokeWidth={1.5} />

        <div
          className={`absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${
            isOnline ? "bg-[#E6F7EE] text-[#1B8A4A]" : "bg-[#FDECEA] text-[#C62828]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isOnline ? "bg-[#1B8A4A]" : "bg-[#C62828]"
            }`}
          />
          {isOnline ? "Online" : "Offline"}
        </div>
      </div>

      <div className="flex justify-between items-start mt-3.5">
        <div>
          <div className="text-[19px] font-extrabold text-[#1a1a2e]">{plateNumber}</div>
          <div className="text-xs text-[#8a8f99] mt-0.5">
            {vehicleType} &middot; {driverName}
          </div>
        </div>
        <span className="bg-[#FFF3E0] text-[#E65100] text-[11px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap">
          {fleetLabel}
        </span>
      </div>
    </div>
  );
}