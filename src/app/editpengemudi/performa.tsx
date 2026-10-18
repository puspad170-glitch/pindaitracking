"use client";

import { CheckCircle2, BedDouble, CircleOff, Check, Star } from "lucide-react";

export type StatusPengemudi = "aktif" | "cuti" | "tidak_aktif";

const STATUS_OPTIONS: {
  key: StatusPengemudi;
  label: string;
  icon: typeof CheckCircle2;
  iconIdle: string;
  active: string;
  checkBg: string;
}[] = [
  { key: "aktif", label: "Aktif", icon: CheckCircle2, iconIdle: "text-[#1B8A4A]", active: "bg-[#E6F7EE] text-[#1B8A4A] border-[#1B8A4A]", checkBg: "bg-[#1B8A4A]" },
  { key: "cuti", label: "Cuti / Izin", icon: BedDouble, iconIdle: "text-[#FB8C00]", active: "bg-[#FFF3E0] text-[#E65100] border-[#FB8C00]", checkBg: "bg-[#FB8C00]" },
  { key: "tidak_aktif", label: "Tidak Aktif", icon: CircleOff, iconIdle: "text-[#E53935]", active: "bg-[#FDECEA] text-[#C62828] border-[#E53935]", checkBg: "bg-[#E53935]" },
];

// Ambang batas kategori kinerja — sesuaikan dengan aturan penilaianmu
export function getKinerja(nilai: number): { label: "Baik" | "Cukup" | "Kurang"; pill: string } {
  if (nilai >= 75) return { label: "Baik", pill: "bg-[#E6F7EE] text-[#1B8A4A]" };
  if (nilai >= 50) return { label: "Cukup", pill: "bg-[#FFF3E0] text-[#E65100]" };
  return { label: "Kurang", pill: "bg-[#FDECEA] text-[#C62828]" };
}

export interface PerformaData {
  status: StatusPengemudi;
  nilaiPerforma: string; // string agar input number bisa kosong
}

interface PerformaProps {
  value: PerformaData;
  onChange: (patch: Partial<PerformaData>) => void;
  error?: string;
}

export default function Performa({ value, onChange, error }: PerformaProps) {
  const nilai = parseFloat(value.nilaiPerforma);
  const hasNilai = !isNaN(nilai);
  const kinerja = hasNilai ? getKinerja(nilai) : null;

  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1B8A4A] text-white flex items-center justify-center flex-shrink-0">
          <Check size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Status &amp; Performa Pengemudi</div>
      </div>

      {/* Status */}
      <div className="mb-3">
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
          Status Pengemudi <span className="text-[#E53935]">*</span>
        </label>
        <div className="flex gap-2">
          {STATUS_OPTIONS.map(({ key, label, icon: Icon, iconIdle, active, checkBg }) => {
            const isActive = value.status === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onChange({ status: key })}
                aria-pressed={isActive}
                className={`relative flex-1 flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border-[1.5px] text-[11px] font-extrabold text-center transition ${
                  isActive ? active : "border-[#E7EAEF] text-[#5b6270]"
                }`}
              >
                {isActive && (
                  <span className={`absolute -top-[7px] -right-[5px] w-[18px] h-[18px] rounded-full border-2 border-white text-white flex items-center justify-center ${checkBg}`}>
                    <Check size={9} strokeWidth={3.5} />
                  </span>
                )}
                <Icon size={17} className={isActive ? "" : iconIdle} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Nilai performa */}
      <div>
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">Nilai Performa / Rating</label>
        <div className="relative">
          <Star size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#FB8C00]" />
          <input
            type="number"
            min={0}
            max={100}
            step={0.1}
            inputMode="decimal"
            value={value.nilaiPerforma}
            onChange={(e) => onChange({ nilaiPerforma: e.target.value })}
            placeholder="Contoh: 55.0"
            className={`w-full border-[1.5px] rounded-[11px] py-3 pl-10 pr-32 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5] ${
              error ? "border-[#E53935]" : "border-[#E7EAEF]"
            }`}
          />
          {kinerja && (
            <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-extrabold px-2.5 py-[3px] rounded-full ${kinerja.pill}`}>
              {kinerja.label} ({nilai.toFixed(1)})
            </span>
          )}
        </div>
        {error && <p className="text-[11px] text-[#E53935] font-semibold mt-1">{error}</p>}
      </div>
    </div>
  );
}