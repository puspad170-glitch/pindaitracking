"use client";

import { CheckCircle2, Check } from "lucide-react";

export type StatusArmada = "online" | "perjalanan" | "maintenance" | "siaga";

const OPTIONS: {
  key: StatusArmada;
  label: string;
  dot: string;
  activeClass: string;
  checkBg: string;
}[] = [
  { key: "online", label: "Online", dot: "bg-[#1B8A4A]", activeClass: "bg-[#E6F7EE] text-[#1B8A4A] border-[#1B8A4A]", checkBg: "bg-[#1B8A4A]" },
  { key: "perjalanan", label: "Dalam Perjalanan", dot: "bg-[#F5A623]", activeClass: "bg-[#FFF6E0] text-[#B7791F] border-[#F5A623]", checkBg: "bg-[#F5A623]" },
  { key: "maintenance", label: "Maintenance", dot: "bg-[#E53935]", activeClass: "bg-[#FDECEA] text-[#C62828] border-[#E53935]", checkBg: "bg-[#E53935]" },
  { key: "siaga", label: "Siaga", dot: "bg-[#a2a7b1]", activeClass: "bg-[#F1F2F4] text-[#5b6270] border-[#8a8f99]", checkBg: "bg-[#8a8f99]" },
];

interface StatusOperasionalProps {
  value: StatusArmada;
  onChange: (status: StatusArmada) => void;
}

export default function StatusOperasional({ value, onChange }: StatusOperasionalProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1B8A4A] text-white flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Status Operasional</div>
      </div>

      <div className="grid grid-cols-2 gap-[9px]">
        {OPTIONS.map((o) => {
          const active = value === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => onChange(o.key)}
              aria-pressed={active}
              className={`flex items-center gap-2 px-3 py-3 rounded-xl border-[1.5px] text-xs font-extrabold text-left transition ${
                active ? o.activeClass : "border-[#E7EAEF] text-[#5b6270]"
              }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${o.dot}`} />
              <span className="flex-1">{o.label}</span>
              {active && (
                <span className={`w-[18px] h-[18px] rounded-full text-white flex items-center justify-center ${o.checkBg}`}>
                  <Check size={10} strokeWidth={3} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-[10.5px] text-[#a2a7b1] mt-[9px]">
        Status menentukan grup armada di halaman Daftar Armada.
      </p>
    </div>
  );
}