"use client";

import Image from "next/image";

interface GpsProps {
  plateNumber?: string;
  vehicleType?: string;
  driverName?: string;
  fleetLabel?: string;
  isOnline?: boolean;
  imageSrc?: string;
}

export default function Gps({
  plateNumber = "GPS F52618",
  vehicleType = "Truk Box",
  driverName = "Budi Santoso",
  fleetLabel = "Armada Hijau",
  isOnline = true,
  imageSrc = "/assets/Truk_2.jpeg",
}: GpsProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      
      <div className="relative w-full h-37.5 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={`Foto ${plateNumber}`}
          fill
          className="object-cover"
          priority
        />

        
        <div
          className={`absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold backdrop-blur-xs ${
            isOnline ? "bg-[#E6F7EE]/90 text-[#1B8A4A]" : "bg-[#FDECEA]/90 text-[#C62828]"
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