"use client";

import {
  FileText,
  ClipboardCheck,
  ShieldCheck,
  Wrench,
  CalendarCheck,
  History,
  AlertTriangle,
  Crosshair,
} from "lucide-react";
import { ReactNode } from "react";

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  status?: "ok" | "warn" | "default";
}

function InfoRow({ icon, label, value, status = "default" }: InfoRowProps) {
  const valueColor =
    status === "ok" ? "text-[#1B8A4A]" : status === "warn" ? "text-[#E65100]" : "text-[#1a1a2e]";

  return (
    <div className="flex justify-between items-center py-2.5 border-b border-[#F0F2F5] last:border-b-0 last:pb-0">
      <div className="flex items-center gap-2 text-[12.5px] text-[#8a8f99]">
        <span className="text-[#1E88E5]">{icon}</span>
        {label}
      </div>
      <div className={`text-[12.5px] font-bold ${valueColor}`}>{value}</div>
    </div>
  );
}

interface InformasiDokumenProps {
  stnkExpiry?: string;
  kirExpiry?: string;
  insuranceStatus?: string;
  lastService?: string;
  nextService?: string;
  onRiwayat?: () => void;
  onLaporkan?: () => void;
  onLihatPeta?: () => void;
}

export default function InformasiDokumen({
  stnkExpiry = "12 Mar 2027",
  kirExpiry = "05 Sep 2026",
  insuranceStatus = "Aktif",
  lastService = "02 Agu 2026",
  nextService = "02 Nov 2026",
  onRiwayat,
  onLaporkan,
  onLihatPeta,
}: InformasiDokumenProps) {
  return (
    <>
      <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
        <div className="text-[13px] font-bold text-[#5b6270] uppercase tracking-wide mb-2.5">
          Informasi Dokumen
        </div>

        <InfoRow icon={<FileText size={13} />} label="Masa Berlaku STNK" value={stnkExpiry} status="ok" />
        <InfoRow icon={<ClipboardCheck size={13} />} label="Masa Berlaku KIR" value={kirExpiry} status="warn" />
        <InfoRow icon={<ShieldCheck size={13} />} label="Asuransi" value={insuranceStatus} status="ok" />
        <InfoRow icon={<Wrench size={13} />} label="Servis Terakhir" value={lastService} />
        <InfoRow icon={<CalendarCheck size={13} />} label="Servis Berikutnya" value={nextService} />
      </div>

      <div className="flex gap-2.5 mb-2.5">
        <button
          onClick={onRiwayat}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-[13px] font-bold bg-white border-[1.5px] border-[#E1E5EB] text-[#3a3f4b] active:scale-[0.98] transition"
        >
          <History size={15} />
          Riwayat
        </button>
        <button
          onClick={onLaporkan}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-[13px] font-bold bg-white border-[1.5px] border-[#E1E5EB] text-[#3a3f4b] active:scale-[0.98] transition"
        >
          <AlertTriangle size={15} className="text-[#E65100]" />
          Laporkan
        </button>
      </div>

      <button
        onClick={onLihatPeta}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-br from-[#FFA726] to-[#FB8C00] active:scale-[0.98] transition mb-3.5"
      >
        <Crosshair size={16} />
        Lihat di Peta / Tracking
      </button>
    </>
  );
}