"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, Navigation, ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";

export interface DalamPerjalananVehicle {
  id: string;
  gpsId: string;
  plate: string;
  driver: string;
  location: string;
}

const DEFAULT_VEHICLES: DalamPerjalananVehicle[] = [
  { id: "f52690", gpsId: "GPS F52690", plate: "F 8431 EF", driver: "Ahmad Fauzi", location: "TPS Baranangsiang" },
  { id: "f52633", gpsId: "GPS F52633", plate: "F 8901 GH", driver: "Dedi Kurniawan", location: "Pool Cibuluh" },
];

interface DalamPerjalananProps {
  vehicles?: DalamPerjalananVehicle[];
  defaultExpanded?: boolean;
  detailBasePath?: string;
}

export default function DalamPerjalanan({
  vehicles = DEFAULT_VEHICLES,
  defaultExpanded = true,
  detailBasePath = "/detailkendaraan",
}: DalamPerjalananProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (vehicles.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5 overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2.5 px-3.5 py-[13px] border-b border-[#F0F2F5]"
      >
        <div className="w-[30px] h-[30px] rounded-[9px] bg-[#F5A623] text-white flex items-center justify-center flex-shrink-0">
          <Navigation size={15} />
        </div>
        <div className="text-[13.5px] font-extrabold text-[#1a1a2e] flex-1 text-left">
          Dalam Perjalanan
        </div>
        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-[#FFF6E0] text-[#B7791F]">
          {vehicles.length}
        </span>
        {expanded ? (
          <ChevronUp size={16} className="text-[#a2a7b1]" />
        ) : (
          <ChevronDown size={16} className="text-[#a2a7b1]" />
        )}
      </button>

      {expanded &&
        vehicles.map((v) => (
          <Link
            key={v.id}
            href={`${detailBasePath}/${v.id}`}
            className="flex gap-2.5 items-start px-3.5 py-[13px] border-b border-[#F0F2F5] last:border-b-0 active:bg-[#F7F9FC] transition"
          >
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white bg-gradient-to-br from-[#FFB74D] to-[#F5A623]">
              <Truck size={22} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[13.5px] font-extrabold text-[#1a1a2e]">
                {v.gpsId} <span className="font-semibold text-[#8a8f99]">&middot; {v.plate}</span>
              </div>
              <div className="text-[11.5px] text-[#5b6270] mt-0.5">Driver: {v.driver}</div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#1E88E5] mt-1">
                <ArrowUpRight size={12} />
                {v.location}
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <span className="inline-block text-[10px] font-extrabold px-2.5 py-[3px] rounded-full bg-[#FFF6E0] text-[#B7791F] mb-2">
                Perjalanan
              </span>
              <div className="flex items-center gap-0.5 text-xs font-bold text-[#1E88E5]">
                Pantau
                <ChevronDown size={14} className="-rotate-90" />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}