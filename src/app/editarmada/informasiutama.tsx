"use client";

import { Truck, Lock, ChevronDown } from "lucide-react";

export const JENIS_KENDARAAN_OPTIONS = [
  "Truk Sampah",
  "Truk Tanki Air (Penyiram)",
  "Truk Arm Roll",
  "Lainnya",
];

export interface InformasiUtamaData {
  gpsId: string;
  platNomor: string;
  jenisKendaraan: string;
  merkModel: string;
}

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 flex items-center gap-1.5";

interface InformasiUtamaProps {
  value: InformasiUtamaData;
  onChange: (patch: Partial<InformasiUtamaData>) => void;
  gpsReadOnly?: boolean;
  errors?: Partial<Record<keyof InformasiUtamaData, string>>;
}

export default function InformasiUtama({
  value,
  onChange,
  gpsReadOnly = true,
  errors = {},
}: InformasiUtamaProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5 relative -mt-12 z-10">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0">
          <Truck size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Informasi Utama Kendaraan</div>
      </div>

      {/* ID GPS */}
      <div className="mb-3">
        <label className={labelClass}>
          ID GPS / Device ID
          {gpsReadOnly && (
            <span className="text-[9.5px] font-extrabold bg-[#F1F2F4] text-[#8a8f99] px-[7px] py-0.5 rounded-full">
              Read-only
            </span>
          )}
        </label>
        <div className="relative">
          <input
            type="text"
            value={value.gpsId}
            readOnly={gpsReadOnly}
            onChange={(e) => onChange({ gpsId: e.target.value })}
            className={`${inputClass} ${gpsReadOnly ? "bg-[#F1F3F6] text-[#8a8f99] cursor-not-allowed pr-10" : ""}`}
          />
          {gpsReadOnly && (
            <Lock size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a2a7b1]" />
          )}
        </div>
      </div>

      {/* Plat Nomor */}
      <div className="mb-3">
        <label className={labelClass}>
          Plat Nomor <span className="text-[#E53935]">*</span>
        </label>
        <input
          type="text"
          value={value.platNomor}
          onChange={(e) => onChange({ platNomor: e.target.value.toUpperCase() })}
          placeholder="Contoh: F 8291 AB"
          className={`${inputClass} ${errors.platNomor ? "border-[#E53935]" : ""}`}
        />
        {errors.platNomor && <p className="text-[11px] text-[#E53935] font-semibold mt-1">{errors.platNomor}</p>}
      </div>

      {/* Jenis Kendaraan */}
      <div className="mb-3">
        <label className={labelClass}>
          Jenis / Kategori Kendaraan <span className="text-[#E53935]">*</span>
        </label>
        <div className="relative">
          <select
            value={value.jenisKendaraan}
            onChange={(e) => onChange({ jenisKendaraan: e.target.value })}
            className={`${inputClass} appearance-none pr-10 ${errors.jenisKendaraan ? "border-[#E53935]" : ""}`}
          >
            <option value="" disabled>
              Pilih Jenis
            </option>
            {JENIS_KENDARAAN_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a2a7b1] pointer-events-none" />
        </div>
        {errors.jenisKendaraan && (
          <p className="text-[11px] text-[#E53935] font-semibold mt-1">{errors.jenisKendaraan}</p>
        )}
      </div>

      {/* Merk / Model */}
      <div>
        <label className={labelClass}>Merk / Model Kendaraan</label>
        <input
          type="text"
          value={value.merkModel}
          onChange={(e) => onChange({ merkModel: e.target.value })}
          placeholder="Contoh: Isuzu Elf Giga"
          className={inputClass}
        />
      </div>
    </div>
  );
}