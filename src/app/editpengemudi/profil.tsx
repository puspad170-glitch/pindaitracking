"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, Upload } from "lucide-react";

interface ProfilProps {
  nama: string;
  nip: string;
  fotoUrl?: string;
  onFotoChange?: (file: File) => void;
  maxSizeMB?: number;
}

export default function Profil({
  nama,
  nip,
  fotoUrl,
  onFotoChange,
  maxSizeMB = 3,
}: ProfilProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // bersihkan object URL lama saat diganti / unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = (file?: File) => {
    if (!file) return;
    if (!["image/jpeg", "image/png"].includes(file.type)) {
      return setError("Format harus JPG atau PNG");
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      return setError(`Ukuran file maksimal ${maxSizeMB}MB`);
    }
    setError(null);
    setPreview(URL.createObjectURL(file));
    onFotoChange?.(file);
  };

  const src = preview ?? fotoUrl;
  const inisial = (nama.trim().charAt(0) || "?").toUpperCase();
  const pickFile = () => inputRef.current?.click();

  return (
    <div className="relative z-10 -mt-[14px] bg-white rounded-2xl px-4 pt-5 pb-[18px] border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5 flex flex-col items-center">
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={(e) => {
          handleFile(e.target.files?.[0]);
          e.target.value = ""; // izinkan pilih file yang sama lagi
        }}
      />

      <div className="relative w-24 h-24">
        <div className="w-24 h-24 rounded-full border-4 border-[#E3F2FD] shadow-[0_6px_18px_rgba(30,136,229,0.18)] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#78909C] to-[#546E7A] text-white text-[40px] font-extrabold">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={nama} className="w-full h-full object-cover" />
          ) : (
            inisial
          )}
        </div>
        <button
          type="button"
          onClick={pickFile}
          aria-label="Ubah foto profil"
          className="absolute -right-0.5 bottom-0 w-8 h-8 rounded-full bg-[#1E88E5] text-white border-[3px] border-white flex items-center justify-center active:scale-95 transition"
        >
          <Camera size={14} />
        </button>
      </div>

      <div className="text-base font-extrabold text-[#1a1a2e] mt-3">{nama || "Nama Pengemudi"}</div>
      <div className="text-[11.5px] text-[#8a8f99] mt-0.5">NIP {nip || "-"}</div>

      <button
        type="button"
        onClick={pickFile}
        className="mt-3 inline-flex items-center gap-[7px] border-[1.5px] border-[#1E88E5] text-[#1E88E5] text-xs font-extrabold px-4 py-2 rounded-[11px] active:scale-95 transition"
      >
        <Upload size={14} />
        Ubah Foto
      </button>

      {error ? (
        <p className="text-[11px] text-[#E53935] font-semibold mt-2">{error}</p>
      ) : (
        <p className="text-[10.5px] text-[#a2a7b1] mt-2">Format JPG/PNG, maksimal {maxSizeMB}MB</p>
      )}
    </div>
  );
}