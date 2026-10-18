"use client";

import { User, CreditCard, Phone, IdCard, Calendar, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export const GOLONGAN_SIM_OPTIONS = ["A", "B1", "B1 Umum", "B2", "B2 Umum", "C"];

export interface DataPribadiData {
  nama: string;
  nip: string;
  telepon: string;
  noSim: string;
  golonganSim: string;
  masaBerlakuSim: string; // yyyy-mm-dd
}

export type DataPribadiErrors = Partial<Record<keyof DataPribadiData, string>>;

const inputClass =
  "w-full border-[1.5px] border-[#E7EAEF] rounded-[11px] py-3 pl-10 pr-3.5 text-[12.5px] font-semibold text-[#1a1a2e] placeholder-[#a2a7b1] bg-[#FBFCFE] outline-none focus:border-[#1E88E5]";
const labelClass = "text-[11.5px] font-bold text-[#5b6270] mb-1.5 flex items-center gap-1.5";

function Field({
  label,
  required,
  icon,
  error,
  extra,
  children,
}: {
  label: string;
  required?: boolean;
  icon: ReactNode;
  error?: string;
  extra?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <label className={labelClass}>
        {label}
        {required && <span className="text-[#E53935]">*</span>}
        {extra}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1E88E5] pointer-events-none">
          {icon}
        </span>
        {children}
      </div>
      {error && <p className="text-[11px] text-[#E53935] font-semibold mt-1">{error}</p>}
    </div>
  );
}

interface DataPribadiProps {
  value: DataPribadiData;
  onChange: (patch: Partial<DataPribadiData>) => void;
  errors?: DataPribadiErrors;
}

export default function DataPribadi({ value, onChange, errors = {} }: DataPribadiProps) {
  const errBorder = (k: keyof DataPribadiData) => (errors[k] ? "border-[#E53935]" : "");

  return (
    <div className="bg-white rounded-2xl p-4 border border-[#F0F2F5] shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0">
          <User size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Data Pribadi &amp; Identitas</div>
      </div>

      <Field label="Nama Lengkap" required icon={<User size={15} />} error={errors.nama}>
        <input
          type="text"
          value={value.nama}
          onChange={(e) => onChange({ nama: e.target.value })}
          placeholder="Contoh: Budiman"
          className={`${inputClass} ${errBorder("nama")}`}
        />
      </Field>

      <Field label="NIP / ID Pengemudi" required icon={<CreditCard size={15} />} error={errors.nip}>
        <input
          type="text"
          inputMode="numeric"
          value={value.nip}
          onChange={(e) => onChange({ nip: e.target.value })}
          placeholder="Contoh: 198506152010011012"
          className={`${inputClass} ${errBorder("nip")}`}
        />
      </Field>

      <Field label="Nomor Telepon / WhatsApp" icon={<Phone size={15} />} error={errors.telepon}>
        <input
          type="tel"
          value={value.telepon}
          onChange={(e) => onChange({ telepon: e.target.value })}
          placeholder="Contoh: 081234567890"
          className={`${inputClass} ${errBorder("telepon")}`}
        />
      </Field>

      <Field
        label="Nomor SIM"
        icon={<IdCard size={15} />}
        extra={
          <span className="relative ml-0.5">
            <select
              value={value.golonganSim}
              onChange={(e) => onChange({ golonganSim: e.target.value })}
              aria-label="Golongan SIM"
              className="appearance-none bg-[#EDE7F6] text-[#5E35B1] text-[9.5px] font-extrabold rounded-full pl-2 pr-5 py-0.5 outline-none cursor-pointer"
            >
              {GOLONGAN_SIM_OPTIONS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <ChevronDown size={10} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[#5E35B1] pointer-events-none" />
          </span>
        }
      >
        <input
          type="text"
          inputMode="numeric"
          value={value.noSim}
          onChange={(e) => onChange({ noSim: e.target.value })}
          placeholder="Contoh: 1234-5678-9012"
          className={inputClass}
        />
      </Field>

      <Field label="Masa Berlaku SIM" icon={<Calendar size={15} />}>
        <input
          type="date"
          value={value.masaBerlakuSim}
          onChange={(e) => onChange({ masaBerlakuSim: e.target.value })}
          className={inputClass}
        />
      </Field>
    </div>
  );
}