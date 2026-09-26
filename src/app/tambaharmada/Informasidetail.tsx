"use client";

import { useState } from "react";
import { FileText, ChevronDown, Check, User } from "lucide-react";

export interface Pengemudi {
  id: string;
  name: string;
}

const DEFAULT_PENGEMUDI: Pengemudi[] = [
  { id: "budi", name: "Budi Santoso" },
  { id: "rusman", name: "Rusman" },
  { id: "ahmad", name: "Ahmad Fauzi" },
  { id: "dedi", name: "Dedi Kurniawan" },
];

export interface InformasiDetailData {
  kapasitasMesin: string;
  odometerAwal: string;
  nomorSTNK: string;
  masaBerlakuSTNK: string;
  nomorMesin: string;
  nomorRangka: string;
  pengemudiUtama: Pengemudi | null;
}

const DEFAULT_DATA: InformasiDetailData = {
  kapasitasMesin: "",
  odometerAwal: "",
  nomorSTNK: "",
  masaBerlakuSTNK: "",
  nomorMesin: "",
  nomorRangka: "",
  pengemudiUtama: null,
};

interface InformasiDetailProps {
  pengemudiList?: Pengemudi[];
  value?: InformasiDetailData;
  onChange?: (data: InformasiDetailData) => void;
}

export default function InformasiDetail({
  pengemudiList = DEFAULT_PENGEMUDI,
  value,
  onChange,
}: InformasiDetailProps) {
  const [internalData, setInternalData] = useState<InformasiDetailData>(DEFAULT_DATA);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data = value ?? internalData;

  const update = (patch: Partial<InformasiDetailData>) => {
    const next = { ...data, ...patch };
    setInternalData(next);
    onChange?.(next);
  };

  const inputClass =
    "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] px-3.5 py-3 text-[12.5px] text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
  const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 block";

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#5C6BC0] text-white flex items-center justify-center flex-shrink-0">
          <FileText size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Informasi Detail</div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div>
          <label className={labelClass}>Kapasitas Mesin</label>
          <input
            type="text"
            value={data.kapasitasMesin}
            onChange={(e) => update({ kapasitasMesin: e.target.value })}
            placeholder="Contoh: 2.5 L"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Odometer Awal (km)</label>
          <input
            type="text"
            value={data.odometerAwal}
            onChange={(e) => update({ odometerAwal: e.target.value })}
            placeholder="Contoh: 48250"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className={labelClass}>Nomor STNK</label>
        <input
          type="text"
          value={data.nomorSTNK}
          onChange={(e) => update({ nomorSTNK: e.target.value })}
          placeholder="Contoh: 1234567890"
          className={inputClass}
        />
      </div>

      <div className="mb-3">
        <label className={labelClass}>Masa Berlaku STNK</label>
        <input
          type="date"
          value={data.masaBerlakuSTNK}
          onChange={(e) => update({ masaBerlakuSTNK: e.target.value })}
          className={inputClass}
        />
      </div>

      <div className="mb-3">
        <label className={labelClass}>Nomor Mesin</label>
        <input
          type="text"
          value={data.nomorMesin}
          onChange={(e) => update({ nomorMesin: e.target.value })}
          placeholder="Contoh: KD-2TR-12345"
          className={inputClass}
        />
      </div>

      <div className="mb-3">
        <label className={labelClass}>Nomor Rangka</label>
        <input
          type="text"
          value={data.nomorRangka}
          onChange={(e) => update({ nomorRangka: e.target.value })}
          placeholder="Contoh: MHFXWBEMRL0123456"
          className={inputClass}
        />
      </div>

      {/* Pengemudi Utama dropdown */}
      <div className="relative">
        <label className={labelClass}>Pengemudi Utama (Opsional)</label>
        <button
          type="button"
          onClick={() => setDropdownOpen((v) => !v)}
          className={`w-full flex items-center justify-between px-3.5 py-3 text-[12.5px] ${
            dropdownOpen
              ? "border-[1.5px] border-[#1E88E5] bg-[#F0F8FF] text-[#1E88E5] font-bold rounded-t-[11px]"
              : "border-[1.5px] border-[#E7EAEF] bg-[#FBFCFE] rounded-[11px]"
          } ${!data.pengemudiUtama && !dropdownOpen ? "text-[#a2a7b1]" : "text-[#1a1a2e] font-semibold"}`}
        >
          {data.pengemudiUtama?.name || "Pilih Pengemudi"}
          <ChevronDown
            size={15}
            className={`text-[#a2a7b1] transition-transform ${dropdownOpen ? "rotate-180 text-[#1E88E5]" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 left-0 right-0 border-[1.5px] border-t-0 border-[#1E88E5] rounded-b-xl bg-white shadow-[0_10px_24px_rgba(30,136,229,0.15)] overflow-hidden max-h-52 overflow-y-auto">
            {pengemudiList.map((p) => {
              const isSelected = data.pengemudiUtama?.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    update({ pengemudiUtama: p });
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-left text-[12.5px] font-semibold border-b border-[#F0F2F5] last:border-b-0 ${
                    isSelected ? "bg-[#1E88E5] text-white" : "text-[#1a1a2e] active:bg-[#F7F9FC]"
                  }`}
                >
                  <span
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "bg-white/25 text-white" : "bg-[#EEF3FB] text-[#1E88E5]"
                    }`}
                  >
                    <User size={13} />
                  </span>
                  <span className="flex-1">{p.name}</span>
                  {isSelected && <Check size={14} />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}