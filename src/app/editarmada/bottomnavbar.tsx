"use client";

import { Save, X, Loader2 } from "lucide-react";

interface BottomNavbarProps {
  onBatal?: () => void;
  onSimpan?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export default function BottomNavbar({
  onBatal,
  onSimpan,
  loading = false,
  disabled = false,
}: BottomNavbarProps) {
  return (
    <div
      className="sticky bottom-0 left-0 right-0 z-30 bg-white border-t border-[#F0F2F5] px-4 pt-3 shadow-[0_-4px_20px_rgba(20,30,60,0.06)]"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex gap-2.5">
        <button
          type="button"
          onClick={onBatal}
          disabled={loading}
          className="flex-[0.8] flex items-center justify-center gap-1.5 py-[13px] rounded-xl text-[13.5px] font-extrabold bg-white border-[1.5px] border-[#E1E5EB] text-[#5b6270] hover:bg-[#F7F9FC] active:scale-[0.98] transition disabled:opacity-50"
        >
          <X size={16} />
          Batal
        </button>
        <button
          type="button"
          onClick={onSimpan}
          disabled={loading || disabled}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-[13px] rounded-xl text-[13.5px] font-extrabold text-white bg-[#1E88E5] shadow-[0_6px_16px_rgba(30,136,229,0.35)] hover:bg-[#1976D2] active:scale-[0.98] transition disabled:opacity-60 disabled:shadow-none disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {loading ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
}