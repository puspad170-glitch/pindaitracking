"use client";

import {
  Lock,
  Bell,
  Globe,
  HelpCircle,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { ReactNode } from "react";

interface SettingRowProps {
  icon: ReactNode;
  iconBg: string;
  label: string;
  onClick?: () => void;
}

function SettingRow({ icon, iconBg, label, onClick }: SettingRowProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-[13px] border-b border-[#F0F2F5] last:border-b-0 text-left active:bg-[#F7F9FC] transition"
    >
      <div
        className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-white flex-shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="flex-1 text-[13.5px] font-semibold text-[#1a1a2e]">{label}</div>
      <ChevronRight size={16} className="text-[#c4c9d1]" />
    </button>
  );
}

interface PengaturanProps {
  onUbahKataSandi?: () => void;
  onNotifikasi?: () => void;
  onBahasaAplikasi?: () => void;
  onBantuanDukungan?: () => void;
  onTentangAplikasi?: () => void;
  onKeluar?: () => void;
  appVersion?: string;
}

export default function Pengaturan({
  onUbahKataSandi,
  onNotifikasi,
  onBahasaAplikasi,
  onBantuanDukungan,
  onTentangAplikasi,
  onKeluar,
  appVersion = "2.4.1",
}: PengaturanProps) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] overflow-hidden mb-3.5">
        <div className="px-4 pt-4 pb-1">
          <div className="text-sm font-extrabold text-[#1a1a2e]">Pengaturan</div>
        </div>

        <SettingRow
          icon={<Lock size={16} />}
          iconBg="#1E88E5"
          label="Ubah Kata Sandi"
          onClick={onUbahKataSandi}
        />
        <SettingRow
          icon={<Bell size={16} />}
          iconBg="#FB8C00"
          label="Notifikasi"
          onClick={onNotifikasi}
        />
        <SettingRow
          icon={<Globe size={16} />}
          iconBg="#26A69A"
          label="Bahasa Aplikasi"
          onClick={onBahasaAplikasi}
        />
        <SettingRow
          icon={<HelpCircle size={16} />}
          iconBg="#7E57C2"
          label="Bantuan & Dukungan"
          onClick={onBantuanDukungan}
        />
        <SettingRow
          icon={<Info size={16} />}
          iconBg="#5C6BC0"
          label="Tentang Aplikasi"
          onClick={onTentangAplikasi}
        />

        <button
          onClick={onKeluar}
          className="w-full flex items-center justify-center gap-2 py-[14px] text-[#E53935] text-[13.5px] font-bold active:bg-[#FDECEA] transition"
        >
          <LogOut size={16} />
          Keluar
        </button>
      </div>

      <div className="text-center text-[11px] text-[#b6bac2] pb-1.5">
        Versi Aplikasi {appVersion}
      </div>
    </>
  );
}