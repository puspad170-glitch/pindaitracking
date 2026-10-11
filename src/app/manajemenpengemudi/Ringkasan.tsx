"use client";

import { useState, ReactNode } from "react";
import { User, CheckCircle2, BedDouble, Route, ChevronUp } from "lucide-react";

interface SumItemProps {
  icon: ReactNode;
  bg: string;
  color: string;
  label: string;
  value: string;
  unit: string;
}

function SumItem({ icon, bg, color, label, value, unit }: SumItemProps) {
  return (
    <div className="flex items-center gap-2.5 bg-[#F7F9FC] rounded-[13px] p-[11px]">
      <div
        className="w-9 h-9 rounded-[11px] flex items-center justify-center flex-shrink-0"
        style={{ background: bg, color }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10.5px] font-semibold text-[#8a8f99]">{label}</div>
        <div className="text-[17px] font-extrabold text-[#1a1a2e] leading-tight">
          {value} <span className="text-[10.5px] font-semibold text-[#8a8f99]">{unit}</span>
        </div>
      </div>
    </div>
  );
}

interface RingkasanProps {
  totalPengemudi?: number;
  aktif?: number;
  cutiIzin?: number;
  totalJarak?: number;
  /** Kondisi awal: terbuka (default) atau tertutup */
  defaultOpen?: boolean;
}

export default function Ringkasan({
  totalPengemudi = 2,
  aktif = 2,
  cutiIzin = 0,
  totalJarak = 1197.3,
  defaultOpen = true,
}: RingkasanProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="px-4 pt-3.5">
      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)]">
        {/* header + tombol buka/tutup di kanan atas */}
        <div className="flex items-center justify-between px-3.5 py-3">
          <div className="text-[13px] font-extrabold text-[#1a1a2e]">Ringkasan</div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup ringkasan" : "Buka ringkasan"}
            className="w-7 h-7 rounded-full bg-[#EEF2F7] text-[#6b7280] flex items-center justify-center active:scale-95 transition"
          >
            <ChevronUp
              size={16}
              className={`transition-transform duration-200 ${open ? "" : "rotate-180"}`}
            />
          </button>
        </div>

        {open && (
          <div className="grid grid-cols-2 gap-2.5 px-3.5 pb-3.5">
            <SumItem icon={<User size={17} />} bg="#E3F2FD" color="#1E88E5" label="Total Pengemudi" value={String(totalPengemudi)} unit="Orang" />
            <SumItem icon={<CheckCircle2 size={17} />} bg="#E6F7EE" color="#1B8A4A" label="Aktif" value={String(aktif)} unit="Orang" />
            <SumItem icon={<BedDouble size={17} />} bg="#FFF3E0" color="#FB8C00" label="Cuti/Izin" value={String(cutiIzin)} unit="Orang" />
            <SumItem
              icon={<Route size={17} />}
              bg="#E0F7FA"
              color="#00ACC1"
              label="Jarak Bulan Ini"
              value={totalJarak.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
              unit="km"
            />
          </div>
        )}
      </div>
    </div>
  );
}