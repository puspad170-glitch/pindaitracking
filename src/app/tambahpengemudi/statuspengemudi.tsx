"use client";

import { useState } from "react";
import { CheckCircle2, BedDouble, CircleOff } from "lucide-react";

export type StatusPengemudiValue = "aktif" | "cuti" | "nonaktif";

const OPTIONS: {
  key: StatusPengemudiValue;
  label: string;
  icon: typeof CheckCircle2;
  activeClass: string;
}[] = [
  { key: "aktif", label: "Aktif", icon: CheckCircle2, activeClass: "bg-[#E6F7EE] border-[#1B8A4A] text-[#1B8A4A]" },
  { key: "cuti", label: "Cuti/Izin", icon: BedDouble, activeClass: "bg-[#FFF3E0] border-[#FB8C00] text-[#E65100]" },
  { key: "nonaktif", label: "Nonaktif", icon: CircleOff, activeClass: "bg-[#F1F2F4] border-[#8a8f99] text-[#5b6270]" },
];

interface StatusPengemudiProps {
  value?: StatusPengemudiValue;
  onChange?: (status: StatusPengemudiValue) => void;
}

export default function StatusPengemudi({ value, onChange }: StatusPengemudiProps) {
  const [internal, setInternal] = useState<StatusPengemudiValue>("aktif");
  const status = value ?? internal;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1B8A4A] text-white flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">
          Status Pengemudi <span className="text-[#E53935]">*</span>
        </div>
      </div>

      <div className="flex gap-2">
        {OPTIONS.map(({ key, label, icon: Icon, activeClass }) => {
          const active = status === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => {
                setInternal(key);
                onChange?.(key);
              }}
              className={`flex-1 flex flex-col items-center gap-1.5 py-3 px-1.5 rounded-xl border-[1.5px] transition ${
                active ? activeClass : "border-[#E7EAEF] text-[#8a8f99]"
              }`}
            >
              <Icon size={17} />
              <span className="text-[11px] font-bold">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}