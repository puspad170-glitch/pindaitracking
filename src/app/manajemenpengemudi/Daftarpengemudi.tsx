"use client";

import Link from "next/link";
import { Download, Truck, Route, Fuel, Eye, Pencil, Trash2 } from "lucide-react";

export type StatusPengemudi = "aktif" | "cuti" | "nonaktif";

export interface Pengemudi {
  id: string;
  nama: string;
  nip: string;
  status: StatusPengemudi;
  plat: string;
  jenisKendaraan: string;
  jarak: number; // km bulan ini
  bbm: number; // liter bulan ini
  kinerjaLabel: "Baik" | "Cukup" | "Kurang";
  kinerjaNilai: number;
  fotoUrl?: string;
}

const STATUS_STYLE: Record<StatusPengemudi, { label: string; pill: string; dot: string }> = {
  aktif: { label: "Aktif", pill: "bg-[#E6F7EE] text-[#1B8A4A]", dot: "bg-[#1B8A4A]" },
  cuti: { label: "Cuti/Izin", pill: "bg-[#FFF3E0] text-[#E65100]", dot: "bg-[#FB8C00]" },
  nonaktif: { label: "Nonaktif", pill: "bg-[#F1F2F4] text-[#8a8f99]", dot: "bg-[#a2a7b1]" },
};

const KINERJA_STYLE: Record<Pengemudi["kinerjaLabel"], string> = {
  Baik: "bg-[#E6F7EE] text-[#1B8A4A]",
  Cukup: "bg-[#FFF3E0] text-[#E65100]",
  Kurang: "bg-[#FDECEA] text-[#C62828]",
};

const AVATAR_GRADIENTS = [
  "from-[#78909C] to-[#546E7A]",
  "from-[#FFCA28] to-[#FB8C00]",
  "from-[#42A5F5] to-[#1E88E5]",
  "from-[#66BB6A] to-[#2E7D32]",
];

const fmt = (n: number) =>
  n.toLocaleString("id-ID", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const DEFAULT_DATA: Pengemudi[] = [
  { id: "1", nama: "Budiman", nip: "198506152010011012", status: "aktif", plat: "F 8605 B", jenisKendaraan: "Truk Tanki Air (Penyiram)", jarak: 686.4, bbm: 218.5, kinerjaLabel: "Cukup", kinerjaNilai: 55.0 },
  { id: "2", nama: "Ruspian", nip: "198812202015031004", status: "aktif", plat: "F 8261 B", jenisKendaraan: "Truk Sampah", jarak: 510.9, bbm: 116.0, kinerjaLabel: "Cukup", kinerjaNilai: 65.0 },
];

interface DaftarPengemudiProps {
  pengemudi?: Pengemudi[];
  totalData?: number;
  detailBasePath?: string;
  onExport?: () => void;
  onHapus?: (p: Pengemudi) => void;
}

export default function DaftarPengemudi({
  pengemudi = DEFAULT_DATA,
  totalData,
  detailBasePath = "/pengemudi",
  onExport,
  onHapus,
}: DaftarPengemudiProps) {
  const total = totalData ?? pengemudi.length;

  return (
    <div className="px-4 pt-4">
      <div className="flex justify-between items-center mx-0.5 mb-2.5">
        <div className="text-[13px] font-extrabold text-[#5b6270] uppercase tracking-wide">
          Daftar Pengemudi
        </div>
        <button onClick={onExport} className="flex items-center gap-1 text-xs font-bold text-[#1E88E5]">
          <Download size={13} />
          Export
        </button>
      </div>

      {pengemudi.length === 0 ? (
        <div className="text-center text-[13px] text-[#8a8f99] py-10">Tidak ada pengemudi ditemukan.</div>
      ) : (
        pengemudi.map((p, i) => {
          const st = STATUS_STYLE[p.status];
          return (
            <div key={p.id} className="bg-white rounded-2xl p-3.5 mb-3 shadow-[0_2px_10px_rgba(20,30,60,0.06)]">
              {/* atas: avatar, nama, status */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-[50px] h-[50px] rounded-full border-[3px] border-[#E3F2FD] flex items-center justify-center text-white text-[19px] font-extrabold flex-shrink-0 overflow-hidden bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]}`}
                >
                  {p.fotoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.fotoUrl} alt={p.nama} className="w-full h-full object-cover" />
                  ) : (
                    p.nama.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="min-w-0">
                  <div className="text-[14.5px] font-extrabold text-[#1a1a2e] truncate">{p.nama}</div>
                  <div className="text-[11px] text-[#8a8f99] mt-0.5">NIP {p.nip}</div>
                </div>
                <span className={`ml-auto self-start flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-[3px] rounded-full ${st.pill}`}>
                  <span className={`w-[5px] h-[5px] rounded-full ${st.dot}`} />
                  {st.label}
                </span>
              </div>

              {/* kendaraan */}
              <div className="flex items-center gap-2.5 bg-[#F7F9FC] rounded-xl px-3 py-2.5 mt-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center">
                  <Truck size={16} />
                </div>
                <div>
                  <div className="text-[13px] font-extrabold text-[#1a1a2e]">{p.plat}</div>
                  <div className="text-[10.5px] text-[#8a8f99] mt-px">{p.jenisKendaraan}</div>
                </div>
              </div>

              {/* jarak & bbm */}
              <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                <div className="border-[1.5px] border-[#EEF0F3] rounded-xl px-[11px] py-[9px]">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#8a8f99]">
                    <Route size={12} /> Jarak
                  </div>
                  <div className="text-[14.5px] font-extrabold text-[#1a1a2e] mt-[3px]">
                    {fmt(p.jarak)} <span className="text-[10.5px] font-semibold text-[#8a8f99]">km</span>
                  </div>
                </div>
                <div className="border-[1.5px] border-[#EEF0F3] rounded-xl px-[11px] py-[9px]">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-semibold text-[#8a8f99]">
                    <Fuel size={12} /> BBM
                  </div>
                  <div className="text-[14.5px] font-extrabold text-[#1a1a2e] mt-[3px]">
                    {fmt(p.bbm)} <span className="text-[10.5px] font-semibold text-[#8a8f99]">L</span>
                  </div>
                </div>
              </div>

              {/* kinerja + aksi */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F0F2F5]">
                <div className="flex items-center gap-[7px] text-[11px] font-semibold text-[#8a8f99]">
                  Kinerja
                  <span className={`text-[10.5px] font-extrabold px-2.5 py-[3px] rounded-full ${KINERJA_STYLE[p.kinerjaLabel]}`}>
                    {p.kinerjaLabel} ({p.kinerjaNilai.toFixed(1)})
                  </span>
                </div>
                <div className="flex gap-[7px]">
                  <Link
                    href={`${detailBasePath}/${p.id}`}
                    aria-label="Lihat detail"
                    className="w-8 h-8 rounded-full bg-[#1E88E5] text-white flex items-center justify-center active:scale-95 transition"
                  >
                    <Eye size={14} />
                  </Link>
                  <Link
                    href={`${detailBasePath}/${p.id}/edit`}
                    aria-label="Edit"
                    className="w-8 h-8 rounded-full bg-[#4B5563] text-white flex items-center justify-center active:scale-95 transition"
                  >
                    <Pencil size={14} />
                  </Link>
                  <button
                    onClick={() => onHapus?.(p)}
                    aria-label="Hapus"
                    className="w-8 h-8 rounded-full bg-[#E53935] text-white flex items-center justify-center active:scale-95 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}

      <div className="text-center text-[11px] text-[#a2a7b1] mt-1">
        Menampilkan {pengemudi.length === 0 ? 0 : `1–${pengemudi.length}`} dari {total} pengemudi
      </div>
    </div>
  );
}