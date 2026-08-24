"use client";

import { User, Phone, MessageCircle } from "lucide-react";

interface PengemudiProps {
  name?: string;
  phone?: string;
  avatarUrl?: string;
  onCall?: () => void;
  onChat?: () => void;
}

export default function Pengemudi({
  name = "Budi Santoso",
  phone = "0123456789",
  avatarUrl,
  onCall,
  onChat,
}: PengemudiProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="text-[13px] font-bold text-[#5b6270] uppercase tracking-wide mb-2.5">
        Pengemudi
      </div>

      <div className="flex items-center gap-3">
        <div className="w-[52px] h-[52px] rounded-full bg-[#DCEEFF] flex items-center justify-center flex-shrink-0 overflow-hidden">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={24} className="text-[#1E88E5]" />
          )}
        </div>

        <div>
          <div className="text-[15px] font-bold text-[#1a1a2e]">{name}</div>
          <div className="text-xs text-[#8a8f99] mt-0.5">{phone}</div>
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={onCall}
            aria-label="Telepon pengemudi"
            className="w-9 h-9 rounded-full bg-[#E6F7EE] text-[#1B8A4A] flex items-center justify-center active:scale-95 transition"
          >
            <Phone size={16} />
          </button>
          <button
            onClick={onChat}
            aria-label="Chat pengemudi"
            className="w-9 h-9 rounded-full bg-[#E3F2FD] text-[#1E88E5] flex items-center justify-center active:scale-95 transition"
          >
            <MessageCircle size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}