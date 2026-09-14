"use client";

import { useState } from "react";
import Link from "next/link";
import { Truck, ChevronUp, ChevronDown, ArrowUpRight } from "lucide-react";

export interface ArmadaAktifVehicle {
  id: string;
  gpsId: string;
  plate: string;
  driver: string;
  location: string;
}

const DEFAULT_VEHICLES: ArmadaAktifVehicle[] = [
  { id: "f52618", gpsId: "GPS F52618", plate: "F 8291 AB", driver: "Budi Santoso", location: "TPS Sukasari" },
  { id: "f52672", gpsId: "GPS F52672", plate: "F 8122 CD", driver: "Rusman", location: "TPST Bantargebang" },
];

interface ArmadaAktifProps {
  vehicles?: ArmadaAktifVehicle[];
  defaultExpanded?: boolean;
  detailBasePath?: string;
}

export default function ArmadaAktif({
  vehicles = DEFAULT_VEHICLES,
  defaultExpanded = true,
  detailBasePath = "/detailkendaraan",
}: ArmadaAktifProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  if (vehicles.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5 overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2.5 px-3.5 py-[13px] border-b border-[#F0F2F5]"
      >
        <div className="w-[30px] h-[30px] rounded-[9px] bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0">
          <Truck size={15} />
        </div>
        <div className="text-[13.5px] font-extrabold text-[#1a1a2e] flex-1 text-left">
          Armada Aktif / Online
        </div>
        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-[#E6F7EE] text-[#1B8A4A]">
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
            <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white bg-gradient-to-br from-[#42A5F5] to-[#1E88E5]">
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
              <span className="inline-block text-[10px] font-extrabold px-2.5 py-[3px] rounded-full bg-[#E6F7EE] text-[#1B8A4A] mb-2">
                Online
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