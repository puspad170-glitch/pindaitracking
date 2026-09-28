"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface NavbarProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
}

export default function Navbar({
  title = "Tambah Pengemudi",
  subtitle = "Lengkapi data pengemudi baru",
  onBack,
}: NavbarProps) {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] px-5 pt-5 pb-[30px]">
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
    </div>
  );
}