"use client";

import { useState } from "react";
import { Fuel } from "lucide-react";

export type JenisBahanBakar = "Solar" | "Bensin";

const PRODUK_MAP: Record<JenisBahanBakar, string[]> = {
  Solar: ["BioSolar", "DexLite", "Dex"],
  Bensin: ["Pertalite", "Pertamax", "Pertamax Green", "Pertamax Turbo"],
};

export interface BahanBakarData {
  jenisBahanBakar: JenisBahanBakar;
  produkBBM: string;
}

interface BahanBakarProps {
  value?: BahanBakarData;
  onChange?: (data: BahanBakarData) => void;
}

const DEFAULT_DATA: BahanBakarData = {
  jenisBahanBakar: "Solar",
  produkBBM: "BioSolar",
};

export default function BahanBakar({ value, onChange }: BahanBakarProps) {
  const [internalData, setInternalData] = useState<BahanBakarData>(DEFAULT_DATA);
  const data = value ?? internalData;

  const update = (patch: Partial<BahanBakarData>) => {
    const next = { ...data, ...patch };
    setInternalData(next);
    onChange?.(next);
  };

  const handleJenisChange = (jenis: JenisBahanBakar) => {
    // reset produk BBM ke pilihan pertama saat jenis bahan bakar berubah
    update({ jenisBahanBakar: jenis, produkBBM: PRODUK_MAP[jenis][0] });
  };

  const produkOptions = PRODUK_MAP[data.jenisBahanBakar];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#FB8C00] text-white flex items-center justify-center flex-shrink-0">
          <Fuel size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Bahan Bakar</div>
      </div>

      {/* Jenis Bahan Bakar segmented */}
      <div className="mb-3.5">
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
          Jenis Bahan Bakar <span className="text-[#E53935]">*</span>
        </label>
        <div className="flex gap-2">
          {(Object.keys(PRODUK_MAP) as JenisBahanBakar[]).map((jenis) => {
            const active = data.jenisBahanBakar === jenis;
            return (
              <button
                key={jenis}
                type="button"
                onClick={() => handleJenisChange(jenis)}
                className={`flex-1 text-center py-2.5 px-2 rounded-[11px] text-xs font-bold border-[1.5px] transition ${
                  active
                    ? jenis === "Solar"
                      ? "bg-[#FFF3E0] border-[#FB8C00] text-[#E65100]"
                      : "bg-[#E3F2FD] border-[#1E88E5] text-[#1E88E5]"
                    : "bg-white border-[#E7EAEF] text-[#5b6270]"
                }`}
              >
                {jenis}
              </button>
            );
          })}
        </div>
      </div>

      {/* Produk BBM chips */}
      <div>
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
          Produk BBM <span className="text-[#E53935]">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {produkOptions.map((produk) => {
            const selected = data.produkBBM === produk;
            return (
              <button
                key={produk}
                type="button"
                onClick={() => update({ produkBBM: produk })}
                className={`px-3.5 py-2 rounded-full text-[11.5px] font-bold border-[1.5px] transition ${
                  selected
                    ? "bg-[#1E88E5] border-[#1E88E5] text-white"
                    : "bg-white border-[#E7EAEF] text-[#5b6270]"
                }`}
              >
                {produk}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}