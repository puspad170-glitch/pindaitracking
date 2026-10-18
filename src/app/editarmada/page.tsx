"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

import Navbar from "./navbar";
import InformasiUtama from "./informasiutama";
import Penugasan from "./penugasan";
import StatusOperasional, { StatusArmada } from "./statusoperasional";
import Metadata from "./metadata";
import BottomNavbar from "./bottomnavbar";

interface FormData {
  gpsId: string;
  platNomor: string;
  jenisKendaraan: string;
  merkModel: string;
  driverUtama: string;
  lokasiOperasional: string;
  status: StatusArmada;
  kapasitas: string;
  kategoriBBM: string;
}

// TODO: ganti dengan data asli dari API berdasarkan id armada (mis. useParams + fetch)
const INITIAL_DATA: FormData = {
  gpsId: "GPS F52618",
  platNomor: "F 8291 AB",
  jenisKendaraan: "Truk Sampah",
  merkModel: "Isuzu Elf Giga",
  driverUtama: "Budi Santoso",
  lokasiOperasional: "TPS Sukasari",
  status: "online",
  kapasitas: "80",
  kategoriBBM: "Solar",
};

export default function EditArmadaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<{ platNomor?: string; jenisKendaraan?: string }>({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isDirty = JSON.stringify(formData) !== JSON.stringify(INITIAL_DATA);

  const update = (patch: Partial<FormData>) => setFormData((prev) => ({ ...prev, ...patch }));

  // sembunyikan toast otomatis
  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2500);
    return () => clearTimeout(t);
  }, [showToast]);

  const validate = () => {
    const next: typeof errors = {};
    if (!formData.platNomor.trim()) next.platNomor = "Plat nomor wajib diisi";
    if (!formData.jenisKendaraan) next.jenisKendaraan = "Pilih jenis kendaraan";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      console.log("Payload Edit Armada:", formData);

      // TODO: sambungkan ke API, contoh:
      // await fetch(`/api/armada/${id}`, { method: "PUT", body: JSON.stringify(formData) });
      await new Promise((r) => setTimeout(r, 700)); // simulasi request

      setShowToast(true);
      setTimeout(() => router.push("/armada"), 1200);
    } finally {
      setLoading(false);
    }
  };

  const handleBatal = () => {
    if (isDirty && !confirm("Perubahan belum disimpan. Yakin ingin keluar?")) return;
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] max-w-[440px] mx-auto flex flex-col relative">
      {/* Toast sukses */}
      {showToast && (
        <div
          role="status"
          className="fixed top-3.5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[408px] flex items-center gap-2.5 bg-[#1a1a2e] text-white rounded-2xl px-3.5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <span className="w-7 h-7 rounded-full bg-[#1B8A4A] flex items-center justify-center flex-shrink-0">
            <Check size={14} strokeWidth={3} />
          </span>
          <div>
            <div className="text-[12.5px] font-bold">Perubahan berhasil disimpan</div>
            <div className="text-[11px] text-[#c9cdd6]">Data {formData.gpsId} telah diperbarui</div>
          </div>
        </div>
      )}

      <Navbar />

      <div className="flex-1 px-4 pt-3.5">
        <InformasiUtama
          value={{
            gpsId: formData.gpsId,
            platNomor: formData.platNomor,
            jenisKendaraan: formData.jenisKendaraan,
            merkModel: formData.merkModel,
          }}
          onChange={(patch) => {
            update(patch);
            setErrors({});
          }}
          errors={errors}
        />
        <Penugasan
          value={{ driverUtama: formData.driverUtama, lokasiOperasional: formData.lokasiOperasional }}
          onChange={update}
        />
        <StatusOperasional value={formData.status} onChange={(status) => update({ status })} />
        <Metadata
          value={{ kapasitas: formData.kapasitas, kategoriBBM: formData.kategoriBBM }}
          onChange={update}
        />
      </div>

      <BottomNavbar
        onBatal={handleBatal}
        onSimpan={handleSubmit}
        loading={loading}
        disabled={!isDirty}
      />
    </div>
  );
}