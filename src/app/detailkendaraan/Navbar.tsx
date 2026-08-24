"use client";

import { ArrowLeft } from "lucide-react";

interface NavbarProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
}

export default function Navbar({
  title = "Detail Armada",
  subtitle = "Informasi lengkap kendaraan",
  onBack,
}: NavbarProps) {
  return (
    <div className="bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] px-5 pt-6 pb-16 rounded-b-none">
      <div className="flex items-center gap-3.5">
        <button
          onClick={onBack}
          aria-label="Kembali"
          className="w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center text-white active:scale-95 transition"
        >
          <ArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-white text-[17px] font-bold leading-tight">{title}</h1>
          <p className="text-[#E3F2FD] text-xs mt-0.5">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}