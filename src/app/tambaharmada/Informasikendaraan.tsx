"use client";

import { useState } from "react";
import { Truck, ChevronDown, Check, Bus, Bike, Car, Trash2, Droplet, ArrowUpFromLine } from "lucide-react";

export type JenisKendaraan =
  | "Minibus"
  | "Motor Roda 3"
  | "Pickup"
  | "Sedan"
  | "Truk Sampah"
  | "Truk Skylift"
  | "Truk Tanki Air (Penyiram)";

const JENIS_OPTIONS: { label: JenisKendaraan; icon: typeof Bus }[] = [
  { label: "Minibus", icon: Bus },
  { label: "Motor Roda 3", icon: Bike },
  { label: "Pickup", icon: Truck },
  { label: "Sedan", icon: Car },
  { label: "Truk Sampah", icon: Trash2 },
  { label: "Truk Skylift", icon: ArrowUpFromLine },
  { label: "Truk Tanki Air (Penyiram)", icon: Droplet },
];

export interface InformasiKendaraanData {
  namaKendaraan: string;
  jenisKendaraan: JenisKendaraan | "";
  nomorPolisi: string;
  tahunPembuatan: string;
  warnaKendaraan: string;
}

interface InformasiKendaraanProps {
  value?: InformasiKendaraanData;
  onChange?: (data: InformasiKendaraanData) => void;
}

const DEFAULT_DATA: InformasiKendaraanData = {
  namaKendaraan: "",
  jenisKendaraan: "",
  nomorPolisi: "",
  tahunPembuatan: "",
  warnaKendaraan: "",
};

export default function InformasiKendaraan({ value, onChange }: InformasiKendaraanProps) {
  const [internalData, setInternalData] = useState<InformasiKendaraanData>(DEFAULT_DATA);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = value ?? internalData;

  const update = (patch: Partial<InformasiKendaraanData>) => {
    const next = { ...data, ...patch };
    setInternalData(next);
    onChange?.(next);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#7E57C2] text-white flex items-center justify-center flex-shrink-0">
          <Truck size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Informasi Kendaraan</div>
      </div>

      {/* Nama Kendaraan */}
      <div className="mb-3">
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
          Nama Kendaraan <span className="text-[#E53935]">*</span>
        </label>
        <input
          type="text"
          value={data.namaKendaraan}
          onChange={(e) => update({ namaKendaraan: e.target.value })}
          placeholder="Contoh: Toyota Hiace"
          className="w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]"
        />
      </div>

      {/* Jenis Kendaraan dropdown */}
      <div className="mb-3 relative">
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
          Jenis Kendaraan <span className="text-[#E53935]">*</span>
        </label>

        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className={`w-full flex items-center justify-between px-3.5 py-3 text-[12.5px] ${
            dropdownOpen
              ? "border-[1.5px] border-[#1E88E5] bg-[#F0F8FF] text-[#1E88E5] font-bold rounded-t-[11px]"
              : "border-[1.5px] border-[#E7EAEF] bg-[#FBFCFE] rounded-[11px]"
          } ${!data.jenisKendaraan && !dropdownOpen ? "text-[#a2a7b1]" : "text-[#1a1a2e] font-semibold"}`}
        >
          {data.jenisKendaraan || "Pilih Jenis"}
          <ChevronDown
            size={15}
            className={`text-[#a2a7b1] transition-transform ${dropdownOpen ? "rotate-180 text-[#1E88E5]" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 left-0 right-0 border-[1.5px] border-t-0 border-[#1E88E5] rounded-b-xl bg-white shadow-[0_10px_24px_rgba(30,136,229,0.15)] overflow-hidden max-h-64 overflow-y-auto">
            {JENIS_OPTIONS.map(({ label, icon: Icon }) => {
              const isSelected = data.jenisKendaraan === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    update({ jenisKendaraan: label });
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-left text-[12.5px] font-semibold border-b border-[#F0F2F5] last:border-b-0 ${
                    isSelected ? "bg-[#1E88E5] text-white" : "text-[#1a1a2e] active:bg-[#F7F9FC]"
                  }`}
                >
                  <span
                    className={`w-[26px] h-[26px] rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "bg-white/25 text-white" : "bg-[#EEF3FB] text-[#1E88E5]"
                    }`}
                  >
                    <Icon size={14} />
                  </span>
                  <span className="flex-1">{label}</span>
                  {isSelected && <Check size={14} />}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Nomor Polisi & Tahun Pembuatan */}
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div>
          <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
            Nomor Polisi <span className="text-[#E53935]">*</span>
          </label>
          <input
            type="text"
            value={data.nomorPolisi}
            onChange={(e) => update({ nomorPolisi: e.target.value })}
            placeholder="Contoh: F 1234 AB"
            className="w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]"
          />
        </div>
        <div>
          <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">Tahun Pembuatan</label>
          <input
            type="text"
            value={data.tahunPembuatan}
            onChange={(e) => update({ tahunPembuatan: e.target.value })}
            placeholder="Contoh: 2020"
            className="w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]"
          />
        </div>
      </div>

      {/* Warna Kendaraan */}
      <div>
        <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">Warna Kendaraan</label>
        <input
          type="text"
          value={data.warnaKendaraan}
          onChange={(e) => update({ warnaKendaraan: e.target.value })}
          placeholder="Contoh: Putih"
          className="w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]"
        />
      </div>
    </div>
  );
}