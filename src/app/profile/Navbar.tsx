"use client";

import { ArrowLeft, Pencil, User, Check } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  pageTitle?: string;
  subtitle?: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
  isVerified?: boolean;
  onEdit?: () => void;
  onBack?: () => void;
}

export default function Navbar({
  pageTitle = "Profil Saya",
  subtitle = "Informasi akun pengguna",
  name = "Rania Dewi",
  role = "Pengguna Sistem · Staff Operasional",
  avatarUrl,
  isVerified = true,
  onEdit,
  onBack,
}: NavbarProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] px-5 pt-6 pb-16 rounded-b-[32px]">
        <div className="flex items-center gap-3.5">
          <button
            onClick={handleBack}
            aria-label="Kembali"
            className="w-[34px] h-[34px] rounded-full bg-white/20 flex items-center justify-center text-white active:scale-95 transition cursor-pointer"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-white text-[17px] font-bold leading-tight">{pageTitle}</h1>
            <p className="text-[#E3F2FD] text-xs mt-0.5">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] p-4 border border-gray-100 mb-3.5 relative">
          <button
            onClick={onEdit}
            className="absolute top-4 right-4 flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-blue-100 active:scale-95 transition cursor-pointer"
          >
            <Pencil size={13} />
            Edit
          </button>

          <div className="flex items-center gap-3.5">
            <div className="relative w-16 h-16 shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 bg-[#DCEEFF] flex items-center justify-center overflow-hidden shadow-xs">
                {avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <User size={30} className="text-[#1E88E5]" />
                )}
              </div>
              {isVerified && (
                <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#1B8A4A] border-2 border-white flex items-center justify-center text-white">
                  <Check size={10} strokeWidth={3} />
                </div>
              )}
            </div>

            <div className="pr-12">
              <div className="text-[16px] font-extrabold text-[#1a1a2e] leading-snug">{name}</div>
              <div className="text-xs text-[#8a8f99] mt-0.5 font-medium">{role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}