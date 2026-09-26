"use client";

import { useRef, useState } from "react";
import { Image as ImageIcon, Camera, X } from "lucide-react";

interface FotoKendaraanProps {
  onChange?: (file: File | null) => void;
  maxSizeMB?: number;
}

export default function FotoKendaraan({ onChange, maxSizeMB = 5 }: FotoKendaraanProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`Ukuran file maksimal ${maxSizeMB}MB`);
      return;
    }
    if (!["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
      setError("Format harus JPG atau PNG");
      return;
    }

    setError(null);
    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setFileName(null);
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
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Foto Kendaraan</div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {preview ? (
        <div className="relative rounded-xl overflow-hidden border-[1.5px] border-[#E7EAEF]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt={fileName ?? "Foto kendaraan"} className="w-full h-40 object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center"
            aria-label="Hapus foto"
          >
            <X size={14} />
          </button>
          <div className="px-3 py-2 text-[11px] text-[#5b6270] font-semibold truncate bg-white">
            {fileName}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full flex flex-col items-center gap-1.5 py-5 px-3.5 rounded-xl border-[1.5px] border-dashed border-[#D6DAE1] text-[#a2a7b1] active:bg-[#F7F9FC] transition"
        >
          <Camera size={26} />
          <span className="text-[12.5px] font-bold text-[#5b6270]">Pilih Foto Kendaraan</span>
          <span className="text-[10.5px] text-[#a2a7b1]">Format JPG, PNG, maks {maxSizeMB}MB</span>
        </button>
      )}

      {error && <p className="text-[11px] text-[#E53935] font-semibold mt-1.5">{error}</p>}
    </div>
  );
}