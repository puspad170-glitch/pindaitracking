"use client";

import { BarChart3, Route, Fuel } from "lucide-react";
import { ReactNode } from "react";

const fmt = (n: number) =>
  n.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function StatBox({
  icon,
  bg,
  label,
  value,
  unit,
}: {
  icon: ReactNode;
  bg: string;
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="bg-[#F7F9FC] rounded-[13px] p-3">
      <div className="flex items-center gap-[7px] text-[10.5px] font-bold text-[#8a8f99]">
        <span className="w-6 h-6 rounded-lg text-white flex items-center justify-center" style={{ background: bg }}>
          {icon}
        </span>
        {label}
      </div>
      <div className="text-[18px] font-extrabold text-[#1a1a2e] mt-2">
        {value} <span className="text-[11px] font-semibold text-[#8a8f99]">{unit}</span>
      </div>
    </div>
  );
}

interface StatistikProps {
  totalJarak?: number; // km
  konsumsiBBM?: number; // liter
}

export default function Statistik({ totalJarak = 686.4, konsumsiBBM = 218.5 }: StatistikProps) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#00ACC1] text-white flex items-center justify-center flex-shrink-0">
          <BarChart3 size={13} />
        </div>
        <div className="flex-1 text-[13px] font-extrabold text-[#1a1a2e]">Statistik Bulan Ini</div>
        <span className="text-[9.5px] font-extrabold bg-[#F1F2F4] text-[#8a8f99] px-2 py-0.5 rounded-full">
          Read-only
        </span>
      </div>
      <p className="text-[10.5px] text-[#a2a7b1] mt-1.5 mb-3">Dihitung otomatis dari data perjalanan GPS</p>

      <div className="grid grid-cols-2 gap-2.5">
        <StatBox icon={<Route size={12} />} bg="#1E88E5" label="Total Jarak" value={fmt(totalJarak)} unit="km" />
        <StatBox icon={<Fuel size={12} />} bg="#FB8C00" label="Konsumsi BBM" value={fmt(konsumsiBBM)} unit="L" />
      </div>
    </div>
  );
}