"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Search, SlidersHorizontal } from "lucide-react";

export type PengemudiFilter = "semua" | "aktif" | "cuti" | "nonaktif";

const FILTERS: { key: PengemudiFilter; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "aktif", label: "Aktif" },
  { key: "cuti", label: "Cuti/Izin" },
  { key: "nonaktif", label: "Nonaktif" },
];

interface NavbarProps {
  title?: string;
  subtitle?: string;
  tambahUrl?: string;
  onBack?: () => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  activeFilter?: PengemudiFilter;
  onFilterChange?: (filter: PengemudiFilter) => void;
}

export default function Navbar({
  title = "Manajemen Pengemudi",
  subtitle = "Data master pengemudi dan aktivitas",
  tambahUrl = "/tambahpengemudi",
  onBack,
  searchQuery,
  onSearchChange,
  onFilterClick,
  activeFilter,
  onFilterChange,
}: NavbarProps) {
  const router = useRouter();
  const [internalQuery, setInternalQuery] = useState("");
  const [internalFilter, setInternalFilter] = useState<PengemudiFilter>("semua");

  const query = searchQuery ?? internalQuery;
  const filter = activeFilter ?? internalFilter;

  return (
    <div>
      {/* Header Gradient */}
      <div className="bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] px-5 pt-5 pb-[46px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => (onBack ? onBack() : router.back())}
              aria-label="Kembali"
              className="w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 active:scale-95 transition"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <h1 className="text-white text-[18px] font-extrabold">{title}</h1>
              <p className="text-[#E3F2FD] text-[11.5px] mt-0.5">{subtitle}</p>
            </div>
          </div>

          {/* Tombol Tambah Pengemudi (+) */}
          <Link
            href={tambahUrl}
            aria-label="Tambah Pengemudi"
            className="w-9 h-9 rounded-full bg-white text-[#1E88E5] flex items-center justify-center shadow-md hover:bg-blue-50 active:scale-95 transition flex-shrink-0"
          >
            <Plus size={20} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Search Bar & Filter */}
      <div className="px-4 -mt-[30px]">
        <div className="flex items-center gap-2.5 bg-white rounded-[14px] px-3.5 py-3 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3">
          <Search size={17} className="text-[#a2a7b1] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setInternalQuery(e.target.value);
              onSearchChange?.(e.target.value);
            }}
            placeholder="Cari nama, NIP, atau plat kendaraan..."
            className="flex-1 text-[13px] text-[#1a1a2e] placeholder-[#a2a7b1] outline-none bg-transparent min-w-0"
          />
          <button
            onClick={onFilterClick}
            aria-label="Filter"
            className="w-[38px] h-[38px] rounded-xl bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition"
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => {
                setInternalFilter(f.key);
                onFilterChange?.(f.key);
              }}
              className={`px-4 py-2 rounded-full text-[12.5px] font-bold whitespace-nowrap flex-shrink-0 transition ${
                filter === f.key
                  ? "bg-[#1E88E5] text-white"
                  : "bg-white text-[#5b6270] shadow-[0_2px_8px_rgba(20,30,60,0.05)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}