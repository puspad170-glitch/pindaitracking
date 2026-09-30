"use client";

interface BottomNavbarProps {
  onBatal?: () => void;
  onSimpan?: () => void;
  loading?: boolean;
  simpanLabel?: string;
}

export default function BottomNavbar({
  onBatal,
  onSimpan,
  loading = false,
  simpanLabel = "Simpan Data",
}: BottomNavbarProps) {
  return (
    <div
      className="fixed bottom-0 max-w-md w-full bg-white border-t border-slate-200 p-4 flex items-center z-30"
      style={{ paddingBottom: "max(0.9rem, env(safe-area-inset-bottom, 0px))" }}
    >
      <div className="flex w-full gap-2.5">
        <button
          type="button"
          onClick={onBatal}
          className="flex-1 py-[13px] rounded-xl text-[13.5px] font-extrabold bg-white border-[1.5px] border-[#F4A2A0] text-[#E53935] active:scale-[0.98] transition"
        >
          Batal
        </button>
        <button
          type="button"
          onClick={onSimpan}
          disabled={loading}
          className="flex-1 py-[13px] rounded-xl text-[13.5px] font-extrabold text-white bg-gradient-to-br from-[#1E88E5] to-[#29B6F6] active:scale-[0.98] transition disabled:opacity-60"
        >
          {loading ? "Menyimpan..." : simpanLabel}
        </button>
      </div>
    </div>
  );
}