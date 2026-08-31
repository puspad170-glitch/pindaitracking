"use client";

import { Home, Truck, MapPinned, History, User } from "lucide-react";

interface NavItem {
  key: string;
  label: string;
  icon: typeof Home;
}

const NAV_ITEMS: NavItem[] = [
  { key: "beranda", label: "Beranda", icon: Home },
  { key: "armada", label: "Armada", icon: Truck },
  { key: "peta", label: "Peta", icon: MapPinned },
  { key: "riwayat", label: "Riwayat", icon: History },
  { key: "profil", label: "Profil", icon: User },
];

interface BottomNavbarProps {
  active?: string;
  onChange?: (key: string) => void;
}

export default function BottomNavbar({ active = "profil", onChange }: BottomNavbarProps) {
  return (
    <div className="bg-white flex justify-around items-center pt-2.5 pb-3.5 border-t border-[#EEF0F3]">
      {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onChange?.(key)}
            className={`flex flex-col items-center gap-[3px] text-[9.5px] font-semibold ${
              isActive ? "text-[#1E88E5]" : "text-[#a2a7b1]"
            }`}
          >
            {isActive ? (
              <span className="w-[38px] h-[38px] rounded-full bg-[#1E88E5] text-white flex items-center justify-center mb-0.5">
                <Icon size={18} />
              </span>
            ) : (
              <Icon size={17} />
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
}