"use client";

import { MapPin, Clock } from "lucide-react";

interface LokasiTerakhirProps {
  address?: string;
  updatedAt?: string;
  mapImageUrl?: string;
}

export default function LokasiTerakhir({
  address = "Jl. Raya Bogor No.45, South Bogor Subdistrict, Bogor, Jawa Barat",
  updatedAt = "Update terakhir 2 menit lalu",
  mapImageUrl,
}: LokasiTerakhirProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="text-[13px] font-bold text-[#5b6270] uppercase tracking-wide mb-2.5">
        Lokasi Terakhir
      </div>

      <div className="relative w-full h-[110px] rounded-xl bg-gradient-to-br from-[#EAF3E1] to-[#DDEBD0] overflow-hidden mb-2.5">
        {mapImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={mapImageUrl} alt="Peta lokasi" className="w-full h-full object-cover" />
        )}
        <MapPin
          size={26}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-[#E53935]"
          fill="#E53935"
        />
      </div>

      <p className="text-[12.5px] text-[#5b6270] leading-relaxed">{address}</p>
      <div className="flex items-center gap-1.5 text-[11px] text-[#a2a7b1] mt-1">
        <Clock size={12} />
        {updatedAt}
      </div>
    </div>
  );
}