"use client";

import { useState } from "react";
import { Fuel, ChevronUp, ChevronDown } from "lucide-react";

export const BBM_OPTIONS = ["Solar", "Pertalite", "Dexlite"];

export interface MetadataData {
  kapasitas: string; // disimpan sebagai string agar input number bisa kosong
  kategoriBBM: string;
}

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

interface MetadataProps {
  value: MetadataData;
  onChange: (patch: Partial<MetadataData>) => void;
  defaultOpen?: boolean;
  satuanKapasitas?: string;
}

export default function Metadata({
  value,
  onChange,
  defaultOpen = true,
  satuanKapasitas = "Liter",
}: MetadataProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`w-full flex items-center gap-2 ${open ? "mb-3.5" : ""}`}
      >
        <div className="w-[26px] h-[26px] rounded-lg bg-[#FB8C00] text-white flex items-center justify-center flex-shrink-0">
          <Fuel size={13} />
        </div>
        <div className="flex-1 text-left text-[13px] font-extrabold text-[#1a1a2e]">Metadata Tambahan</div>
        <span className="text-[9.5px] font-extrabold bg-[#E3F2FD] text-[#1E88E5] px-2 py-0.5 rounded-full">
          Opsional
        </span>
        {open ? (
          <ChevronUp size={17} className="text-[#a2a7b1]" />
        ) : (
          <ChevronDown size={17} className="text-[#a2a7b1]" />
        )}
      </button>

      {open && (
        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className={labelClass}>Kapasitas Tangki</label>
            <div className="relative">
              <input
                type="number"
                min={0}
                inputMode="decimal"
                value={value.kapasitas}
                onChange={(e) => onChange({ kapasitas: e.target.value })}
                placeholder="0"
                className={`${inputClass} pr-14`}
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-bold text-[#8a8f99]">
                {satuanKapasitas}
              </span>
            </div>
          </div>

          <div>
            <label className={labelClass}>Kategori BBM</label>
            <div className="relative">
              <select
                value={value.kategoriBBM}
                onChange={(e) => onChange({ kategoriBBM: e.target.value })}
                className={`${inputClass} appearance-none pr-9`}
              >
                <option value="" disabled>
                  Pilih BBM
                </option>
                {BBM_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a2a7b1] pointer-events-none" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}