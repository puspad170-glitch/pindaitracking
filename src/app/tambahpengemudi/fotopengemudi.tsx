"use client";

import { useEffect, useRef, useState } from "react";
import { Image as ImageIcon, Camera, Upload, X } from "lucide-react";

interface FotoPengemudiProps {
  onChange?: (file: File | null) => void;
  maxSizeMB?: number;
}

export default function FotoPengemudi({ onChange, maxSizeMB = 3 }: FotoPengemudiProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // bersihkan object URL saat diganti / komponen di-unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFile = (file?: File) => {
    if (!file) return;

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      setError("Format harus JPG atau PNG");
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Ukuran file maksimal ${maxSizeMB}MB`);
      return;
    }

    setError(null);
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
    onChange?.(null);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#26A69A] text-white flex items-center justify-center flex-shrink-0">
          <ImageIcon size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Foto Pengemudi</div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Pilih foto pengemudi"
          className="relative w-[76px] h-[76px] rounded-full flex-shrink-0 overflow-hidden bg-[#EEF3FB] border-2 border-dashed border-[#90CAF9] text-[#1E88E5] flex items-center justify-center"
        >
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="Foto pengemudi" className="w-full h-full object-cover" />
          ) : (
            <Camera size={28} />
          )}
        </button>

        <div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="inline-flex items-center gap-1.5 border-[1.5px] border-[#1E88E5] text-[#1E88E5] text-xs font-extrabold px-3.5 py-[9px] rounded-[11px] active:scale-95 transition"
            >
              <Upload size={14} />
              {preview ? "Ganti Foto" : "Pilih Foto"}
            </button>
            {preview && (
              <button
                type="button"
                onClick={handleRemove}
                aria-label="Hapus foto"
                className="w-8 h-8 rounded-full bg-[#FDECEA] text-[#E53935] flex items-center justify-center"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <p className="text-[10.5px] text-[#a2a7b1] mt-[5px]">
            Format: JPG, PNG. Maksimal {maxSizeMB}MB.
          </p>
          {error && <p className="text-[11px] text-[#E53935] font-semibold mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}