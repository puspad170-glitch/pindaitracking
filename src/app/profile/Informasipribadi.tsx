"use client";

import { User, Mail, Phone } from "lucide-react";
import { ReactNode } from "react";

interface InfoRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-[#F0F2F5] last:border-b-0">
      <div className="w-9 h-9 rounded-[10px] bg-[#F0F4FA] text-[#8a8f99] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[11.5px] text-[#8a8f99]">{label}</div>
        <div className="text-[13.5px] font-bold text-[#1a1a2e] mt-px">{value}</div>
      </div>
    </div>
  );
}

interface InformasiPribadiProps {
  namaLengkap?: string;
  email?: string;
  noTelepon?: string;
  onUbah?: () => void;
}

export default function InformasiPribadi({
  namaLengkap = "Rania Dewi",
  email = "rani14@gmail.com",
  noTelepon = "0829 1383 223",
  onUbah,
}: InformasiPribadiProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] overflow-hidden mb-3.5">
      <div className="flex justify-between items-center px-4 pt-4 pb-1">
        <div className="text-sm font-extrabold text-[#1a1a2e]">Informasi Pribadi</div>
        <button onClick={onUbah} className="text-[12.5px] font-bold text-[#1E88E5]">
          Ubah
        </button>
      </div>

      <InfoRow icon={<User size={16} />} label="Nama Lengkap" value={namaLengkap} />
      <InfoRow icon={<Mail size={16} />} label="Email" value={email} />
      <InfoRow icon={<Phone size={16} />} label="No. Telepon" value={noTelepon} />
    </div>
  );
}