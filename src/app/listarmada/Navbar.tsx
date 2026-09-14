"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";

export type ArmadaFilter = "semua" | "online" | "tracking" | "offline";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-[12.5px] font-bold whitespace-nowrap flex-shrink-0 transition ${
        active
          ? "bg-[#1E88E5] text-white"
          : "bg-white text-[#5b6270] shadow-[0_2px_8px_rgba(20,30,60,0.05)]"
      }`}
    >
      {label}
    </button>
  );
}

interface NavbarProps {
  title?: string;
  totalArmada?: number;
  onBack?: () => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  activeFilter?: ArmadaFilter;
  onFilterChange?: (filter: ArmadaFilter) => void;
}

export default function Navbar({
  title = "Daftar Armada",
  totalArmada = 6,
  onBack,
  searchQuery,
  onSearchChange,
  onFilterClick,
  activeFilter,
  onFilterChange,
}: NavbarProps) {
  const router = useRouter();

  const [internalQuery, setInternalQuery] = useState("");
  const [internalFilter, setInternalFilter] = useState<ArmadaFilter>("semua");

  const query = searchQuery ?? internalQuery;
  const filter = activeFilter ?? internalFilter;

  const handleSearchChange = (value: string) => {
    setInternalQuery(value);
    onSearchChange?.(value);
  };

  const handleFilterChange = (value: ArmadaFilter) => {
    setInternalFilter(value);
    onFilterChange?.(value);
  };

  const handleBack = () => {
    if (onBack) return onBack();
    router.back();
  };

  const filters: { key: ArmadaFilter; label: string }[] = [
    { key: "semua", label: "Semua" },
    { key: "online", label: "Online" },
    { key: "tracking", label: "Tracking" },
    { key: "offline", label: "Offline" },
  ];

  return (
    <div>
      {/* gradient header */}
      <div className="bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] px-5 pt-5 pb-[46px]">
        <div className="flex items-center gap-3.5">
          <button
            onClick={handleBack}
            aria-label="Kembali"
            className="w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 active:scale-95 transition"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-white text-[19px] font-extrabold">{title}</h1>
            <p className="text-[#E3F2FD] text-xs mt-0.5">{totalArmada} kendaraan terdaftar</p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-[30px]">
        {/* search bar */}
        <div className="flex items-center gap-2.5 bg-white rounded-[14px] px-3.5 py-3 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3">
          <Search size={17} className="text-[#a2a7b1] flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Cari plat nomor atau nama driver..."
            className="flex-1 text-[13px] text-[#1a1a2e] placeholder-[#a2a7b1] outline-none bg-transparent min-w-0"
          />
          <button
            onClick={onFilterClick}
            className="w-[38px] h-[38px] rounded-xl bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0 active:scale-95 transition"
          >
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-0.5 [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <FilterChip
              key={f.key}
              label={f.label}
              active={filter === f.key}
              onClick={() => handleFilterChange(f.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}