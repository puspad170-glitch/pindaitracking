"use client";

import { useState } from "react";
import { IdCard } from "lucide-react";

export interface DokumenSimData {
  noSim: string;
  masaBerlakuSim: string; // format yyyy-mm-dd
}

const DEFAULT_DATA: DokumenSimData = { noSim: "", masaBerlakuSim: "" };

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

interface DokumenSimProps {
  value?: DokumenSimData;
  onChange?: (data: DokumenSimData) => void;
}

export default function DokumenSim({ value, onChange }: DokumenSimProps) {
  const [internal, setInternal] = useState<DokumenSimData>(DEFAULT_DATA);
  const data = value ?? internal;

  const update = (patch: Partial<DokumenSimData>) => {
    const next = { ...data, ...patch };
    setInternal(next);
    onChange?.(next);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#7E57C2] text-white flex items-center justify-center flex-shrink-0">
          <IdCard size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Dokumen SIM</div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>No. SIM</label>
        <input
          type="text"
          inputMode="numeric"
          value={data.noSim}
          onChange={(e) => update({ noSim: e.target.value })}
          placeholder="Contoh: 1234-5678-9012"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Masa Berlaku SIM</label>
        <input
          type="date"
          value={data.masaBerlakuSim}
          onChange={(e) => update({ masaBerlakuSim: e.target.value })}
          className={inputClass}
        />
      </div>
    </div>
  );
}