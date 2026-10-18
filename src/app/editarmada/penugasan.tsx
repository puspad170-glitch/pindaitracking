"use client";

import { User, MapPin, ChevronDown } from "lucide-react";

export const DRIVER_OPTIONS = ["Budi Santoso", "Rusman", "Ahmad Fauzi", "Tanpa Driver"];

export interface PenugasanData {
  driverUtama: string;
  lokasiOperasional: string;
}

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] py-3 pl-10 pr-3.5 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

interface PenugasanProps {
  value: PenugasanData;
  onChange: (patch: Partial<PenugasanData>) => void;
  drivers?: string[];
}

export default function Penugasan({ value, onChange, drivers = DRIVER_OPTIONS }: PenugasanProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#7E57C2] text-white flex items-center justify-center flex-shrink-0">
          <User size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Pengemudi &amp; Penugasan</div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>Driver Utama</label>
        <div className="relative">
          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1E88E5]" />
          <select
            value={value.driverUtama}
            onChange={(e) => onChange({ driverUtama: e.target.value })}
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Pilih Driver
            </option>
            {drivers.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a2a7b1] pointer-events-none" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Lokasi Operasional / Posisi Utama</label>
        <div className="relative">
          <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1E88E5]" />
          <input
            type="text"
            value={value.lokasiOperasional}
            onChange={(e) => onChange({ lokasiOperasional: e.target.value })}
            placeholder="Contoh: TPS Sukasari"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}