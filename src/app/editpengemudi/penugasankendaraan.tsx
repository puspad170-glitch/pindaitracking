"use client";

import { Truck, MapPin, ChevronDown } from "lucide-react";

export interface KendaraanOption {
  value: string;
  label: string;
}

// TODO: ganti dengan daftar armada aktif dari API
export const DEFAULT_KENDARAAN: KendaraanOption[] = [
  { value: "F 8605 B", label: "F 8605 B - Truk Tanki Air" },
  { value: "F 8261 B", label: "F 8261 B - Truk Sampah" },
  { value: "cadangan", label: "Tidak Ada / Cadangan" },
];

export interface PenugasanKendaraanData {
  kendaraan: string;
  wilayah: string;
}

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] py-3 pl-10 pr-3.5 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

interface PenugasanKendaraanProps {
  value: PenugasanKendaraanData;
  onChange: (patch: Partial<PenugasanKendaraanData>) => void;
  kendaraanList?: KendaraanOption[];
}

export default function PenugasanKendaraan({
  value,
  onChange,
  kendaraanList = DEFAULT_KENDARAAN,
}: PenugasanKendaraanProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#7E57C2] text-white flex items-center justify-center flex-shrink-0">
          <Truck size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Penugasan Kendaraan &amp; Operasional</div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>Kendaraan yang Ditugaskan</label>
        <div className="relative">
          <Truck size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1E88E5]" />
          <select
            value={value.kendaraan}
            onChange={(e) => onChange({ kendaraan: e.target.value })}
            className={`${inputClass} appearance-none pr-10`}
          >
            <option value="" disabled>
              Pilih Kendaraan
            </option>
            {kendaraanList.map((k) => (
              <option key={k.value} value={k.value}>
                {k.label}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a2a7b1] pointer-events-none" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Wilayah / Rute Operasional</label>
        <div className="relative">
          <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1E88E5]" />
          <input
            type="text"
            value={value.wilayah}
            onChange={(e) => onChange({ wilayah: e.target.value })}
            placeholder="Contoh: TPS Sukasari"
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}