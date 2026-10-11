"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import {
  Download,
  Truck,
  Route,
  Fuel,
  Eye,
  Pencil,
  Trash2,
  MoreHorizontal,
  ChevronUp,
  Navigation,
  Wrench,
  BedDouble,
  UserX,
} from "lucide-react";

export type StatusPengemudi = "aktif" | "perjalanan" | "maintenance" | "cuti" | "nonaktif";

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

/** Badge status di kanan atas kartu (tanpa titik) */
const STATUS_STYLE: Record<StatusPengemudi, { label: string; pill: string }> = {
  aktif: { label: "Aktif", pill: "bg-[#E6F7EE] text-[#1B8A4A]" },
  perjalanan: { label: "Perjalanan", pill: "bg-[#FFF3E0] text-[#E65100]" },
  maintenance: { label: "Maintenance", pill: "bg-[#FDECEA] text-[#C62828]" },
  cuti: { label: "Cuti/Izin", pill: "bg-[#FFF8E1] text-[#B26A00]" },
  nonaktif: { label: "Nonaktif", pill: "bg-[#F1F2F4] text-[#8a8f99]" },
};

/** Konfigurasi grup: urutan tampil mengikuti urutan array ini */
const GROUPS: {
  key: StatusPengemudi;
  title: string;
  icon: ReactNode;
  iconBg: string;
  countPill: string;
}[] = [
  { key: "aktif", title: "Pengemudi Aktif", icon: <Truck size={16} />, iconBg: "bg-[#1B8A4A]", countPill: "bg-[#E6F7EE] text-[#1B8A4A]" },
  { key: "perjalanan", title: "Dalam Perjalanan", icon: <Navigation size={16} />, iconBg: "bg-[#FB8C00]", countPill: "bg-[#FFF3E0] text-[#E65100]" },
  { key: "maintenance", title: "Maintenance & Siaga", icon: <Wrench size={16} />, iconBg: "bg-[#E53935]", countPill: "bg-[#FDECEA] text-[#C62828]" },
  // grup tambahan: hanya tampil jika ada datanya
  { key: "cuti", title: "Cuti/Izin", icon: <BedDouble size={16} />, iconBg: "bg-[#F9A825]", countPill: "bg-[#FFF8E1] text-[#B26A00]" },
  { key: "nonaktif", title: "Nonaktif", icon: <UserX size={16} />, iconBg: "bg-[#A2A7B1]", countPill: "bg-[#F1F2F4] text-[#8a8f99]" },
];

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
  { id: "2", nama: "Ruspian", nip: "198812202015031004", status: "perjalanan", plat: "F 8261 B", jenisKendaraan: "Truk Sampah", jarak: 510.9, bbm: 116.0, kinerjaLabel: "Cukup", kinerjaNilai: 65.0 },
];

interface DaftarPengemudiProps {
  pengemudi?: Pengemudi[];
  totalData?: number;
  detailBasePath?: string;
  onExport?: () => void;
  onHapus?: (p: Pengemudi) => void;
}

/* ---------- Menu titik tiga (Lihat Detail / Edit / Hapus) ---------- */
function MenuAksi({
  p,
  detailBasePath,
  onHapus,
}: {
  p: Pengemudi;
  detailBasePath: string;
  onHapus?: (p: Pengemudi) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // tutup saat klik di luar menu atau tekan Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const itemCls =
    "flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-[13px] font-semibold text-left active:bg-[#F1F5F9] hover:bg-[#F1F5F9]";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu aksi"
        aria-haspopup="menu"
        aria-expanded={open}
        className="w-7 h-7 flex items-center justify-center rounded-full text-[#4B5563] active:bg-[#EEF2F7]"
      >
        <MoreHorizontal size={18} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-9 z-30 w-[158px] bg-white rounded-xl p-1.5 border border-[#E3E8F0] shadow-[0_8px_24px_rgba(20,30,60,0.16)]"
        >
          <span className="absolute -top-1.5 right-2.5 w-3 h-3 rotate-45 bg-white border-l border-t border-[#E3E8F0]" />
          <Link
            href={`${detailBasePath}/${p.id}`}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={`${itemCls} text-[#1E88E5]`}
          >
            <Eye size={15} /> Lihat Detail
          </Link>
          <Link
            href={`${detailBasePath}/${p.id}/edit`}
            role="menuitem"
            onClick={() => setOpen(false)}
            className={`${itemCls} text-[#374151]`}
          >
            <Pencil size={15} /> Edit
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setOpen(false);
              onHapus?.(p);
            }}
            className={`${itemCls} text-[#E53935]`}
          >
            <Trash2 size={15} /> Hapus
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- Satu baris pengemudi di dalam kartu grup ---------- */
function BarisPengemudi({
  p,
  index,
  detailBasePath,
  onHapus,
}: {
  p: Pengemudi;
  index: number;
  detailBasePath: string;
  onHapus?: (p: Pengemudi) => void;
}) {
  const st = STATUS_STYLE[p.status];

  return (
    <div className="p-3.5 border-t border-[#F0F2F5] first:border-t-0">
      {/* atas: avatar, nama, NIP, kinerja | status + titik tiga */}
      <div className="flex items-start gap-3">
        <div
          className={`w-[50px] h-[50px] rounded-full border-[3px] border-[#E3F2FD] flex items-center justify-center text-white text-[19px] font-extrabold flex-shrink-0 overflow-hidden bg-gradient-to-br ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]}`}
        >
          {p.fotoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.fotoUrl} alt={p.nama} className="w-full h-full object-cover" />
          ) : (
            p.nama.charAt(0).toUpperCase()
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[14.5px] font-extrabold text-[#1a1a2e] truncate">{p.nama}</div>
          <div className="text-[11px] text-[#8a8f99] mt-0.5">NIP {p.nip}</div>
          <span
            className={`inline-block mt-1.5 text-[10.5px] font-extrabold px-2.5 py-[3px] rounded-full ${KINERJA_STYLE[p.kinerjaLabel]}`}
          >
            {p.kinerjaLabel} ({p.kinerjaNilai.toFixed(1)})
          </span>
        </div>

        <div className="flex items-center gap-0.5 flex-shrink-0">
          <span className={`text-[10px] font-extrabold px-2.5 py-[3px] rounded-full ${st.pill}`}>
            {st.label}
          </span>
          <MenuAksi p={p} detailBasePath={detailBasePath} onHapus={onHapus} />
        </div>
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
    </div>
  );
}

export default function DaftarPengemudi({
  pengemudi = DEFAULT_DATA,
  totalData,
  detailBasePath = "/pengemudi",
  onExport,
  onHapus,
}: DaftarPengemudiProps) {
  const total = totalData ?? pengemudi.length;
  // grup yang sedang ditutup
  const [tertutup, setTertutup] = useState<Partial<Record<StatusPengemudi, boolean>>>({});

  const toggle = (key: StatusPengemudi) =>
    setTertutup((prev) => ({ ...prev, [key]: !prev[key] }));

  // 3 grup utama selalu tampil; cuti & nonaktif hanya jika ada datanya
  const grupTampil = GROUPS.filter(
    (g) =>
      ["aktif", "perjalanan", "maintenance"].includes(g.key) ||
      pengemudi.some((p) => p.status === g.key)
  );

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
        grupTampil.map((g) => {
          const anggota = pengemudi.filter((p) => p.status === g.key);
          const isClosed = !!tertutup[g.key];

          return (
            <section
              key={g.key}
              className="bg-white rounded-2xl mb-3 shadow-[0_2px_10px_rgba(20,30,60,0.06)]"
            >
              {/* header grup */}
              <button
                type="button"
                onClick={() => toggle(g.key)}
                aria-expanded={!isClosed}
                className="flex items-center gap-2.5 w-full px-3.5 py-3 text-left"
              >
                <span
                  className={`w-7 h-7 rounded-lg text-white flex items-center justify-center flex-shrink-0 ${g.iconBg}`}
                >
                  {g.icon}
                </span>
                <span className="text-[14px] font-extrabold text-[#1a1a2e] flex-1">{g.title}</span>
                <span className={`text-[11.5px] font-extrabold min-w-[26px] text-center px-2 py-0.5 rounded-full ${g.countPill}`}>
                  {anggota.length}
                </span>
                <ChevronUp
                  size={16}
                  className={`text-[#6b7280] transition-transform duration-200 ${isClosed ? "rotate-180" : ""}`}
                />
              </button>

              {/* isi grup */}
              {!isClosed && (
                <div className="border-t border-[#F0F2F5]">
                  {anggota.length === 0 ? (
                    <div className="text-center text-[12px] text-[#a2a7b1] py-5">
                      Tidak ada pengemudi.
                    </div>
                  ) : (
                    anggota.map((p) => (
                      <BarisPengemudi
                        key={p.id}
                        p={p}
                        index={pengemudi.indexOf(p)}
                        detailBasePath={detailBasePath}
                        onHapus={onHapus}
                      />
                    ))
                  )}
                </div>
              )}
            </section>
          );
        })
      )}

      <div className="text-center text-[11px] text-[#a2a7b1] mt-1">
        Menampilkan {pengemudi.length === 0 ? 0 : `1–${pengemudi.length}`} dari {total} pengemudi
      </div>
    </div>
  );
}