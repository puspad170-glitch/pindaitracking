"use client";

import { useState } from "react";
import { User } from "lucide-react";

export interface DataPribadiData {
  nip: string;
  nama: string;
  telepon: string;
  alamat: string;
}

const DEFAULT_DATA: DataPribadiData = { nip: "", nama: "", telepon: "", alamat: "" };

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

interface DataPribadiProps {
  value?: DataPribadiData;
  onChange?: (data: DataPribadiData) => void;
}

export default function DataPribadi({ value, onChange }: DataPribadiProps) {
  const [internal, setInternal] = useState<DataPribadiData>(DEFAULT_DATA);
  const data = value ?? internal;

  const update = (patch: Partial<DataPribadiData>) => {
    const next = { ...data, ...patch };
    setInternal(next);
    onChange?.(next);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0">
          <User size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Data Pribadi</div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>
          NIP <span className="text-[#E53935]">*</span>
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={data.nip}
          onChange={(e) => update({ nip: e.target.value })}
          placeholder="Contoh: 198506152010011012"
          className={inputClass}
        />
      </div>

      <div className="mb-3">
        <label className={labelClass}>
          Nama Pengemudi <span className="text-[#E53935]">*</span>
        </label>
        <input
          type="text"
          value={data.nama}
          onChange={(e) => update({ nama: e.target.value })}
          placeholder="Contoh: Budi Santoso"
          className={inputClass}
        />
      </div>

      <div className="mb-3">
        <label className={labelClass}>Nomor Telepon</label>
        <input
          type="tel"
          value={data.telepon}
          onChange={(e) => update({ telepon: e.target.value })}
          placeholder="Contoh: 0812-3456-7890"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Alamat</label>
        <textarea
          value={data.alamat}
          onChange={(e) => update({ alamat: e.target.value })}
          placeholder="Alamat lengkap pengemudi"
          rows={3}
          className={`${inputClass} resize-none`}
        />
      </div>
    </div>
  );
}