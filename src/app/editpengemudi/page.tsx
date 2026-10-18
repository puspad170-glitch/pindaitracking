"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

import Navbar from "./navbar";
import Profil from "./profil";
import DataPribadi, { DataPribadiErrors } from "./datapribadi";
import PenugasanKendaraan from "./penugasankendaraan";
import Performa, { StatusPengemudi } from "./performa";
import Statistik from "./statistik";
import BottomNavbar from "./bottomnavbar";

interface FormData {
  nama: string;
  nip: string;
  telepon: string;
  noSim: string;
  golonganSim: string;
  masaBerlakuSim: string;
  kendaraan: string;
  wilayah: string;
  status: StatusPengemudi;
  nilaiPerforma: string;
}

// TODO: ganti dengan data asli dari API berdasarkan id pengemudi (mis. useParams + fetch)
const INITIAL_DATA: FormData = {
  nama: "Budiman",
  nip: "198506152010011012",
  telepon: "081234567890",
  noSim: "1234-5678-9012",
  golonganSim: "B2 Umum",
  masaBerlakuSim: "2028-06-15",
  kendaraan: "F 8605 B",
  wilayah: "TPS Sukasari",
  status: "aktif",
  nilaiPerforma: "55",
};

export default function EditPengemudiPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [foto, setFoto] = useState<File | null>(null);
  const [errors, setErrors] = useState<DataPribadiErrors & { nilaiPerforma?: string }>({});
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const isDirty = JSON.stringify(formData) !== JSON.stringify(INITIAL_DATA) || foto !== null;

  const update = (patch: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...patch }));
    setErrors({});
  };

  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 2500);
    return () => clearTimeout(t);
  }, [showToast]);

  const validate = () => {
    const next: typeof errors = {};
    if (!formData.nama.trim()) next.nama = "Nama lengkap wajib diisi";
    if (!formData.nip.trim()) next.nip = "NIP wajib diisi";
    if (formData.nilaiPerforma !== "") {
      const n = parseFloat(formData.nilaiPerforma);
      if (isNaN(n) || n < 0 || n > 100) next.nilaiPerforma = "Nilai harus antara 0 – 100";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      console.log("Payload Edit Pengemudi:", formData, foto);

      // TODO: sambungkan ke API. Kalau ada foto baru, kirim pakai FormData:
      // const fd = new FormData();
      // Object.entries(formData).forEach(([k, v]) => fd.append(k, String(v)));
      // if (foto) fd.append("foto", foto);
      // await fetch(`/api/pengemudi/${id}`, { method: "PUT", body: fd });
      await new Promise((r) => setTimeout(r, 700)); // simulasi request

      setShowToast(true);
      setTimeout(() => router.push("/pengemudi"), 1200);
    } finally {
      setLoading(false);
    }
  };

  const handleBatal = () => {
    if (isDirty && !confirm("Perubahan belum disimpan. Yakin ingin keluar?")) return;
    router.back();
  };

  return (
    /* max-w-[480px] disesuaikan agar ukurannya sama dengan Edit Armada */
    <div className="min-h-screen bg-[#F4F6F9] max-w-[480px] mx-auto flex flex-col relative shadow-lg">
      {/* Toast sukses */}
      {showToast && (
        <div
          role="status"
          className="fixed top-3.5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[448px] flex items-center gap-2.5 bg-[#1a1a2e] text-white rounded-2xl px-3.5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        >
          <span className="w-7 h-7 rounded-full bg-[#1B8A4A] flex items-center justify-center flex-shrink-0">
            <Check size={14} strokeWidth={3} />
          </span>
          <div>
            <div className="text-[12.5px] font-bold">Perubahan berhasil disimpan</div>
            <div className="text-[11px] text-[#c9cdd6]">Data {formData.nama} telah diperbarui</div>
          </div>
        </div>
      )}

      {/* Header / Top Navbar */}
      <Navbar />

      {/* Area Konten Utama disamakan dengan Edit Armada: pt-3.5 pb-24 */}
      <main className="flex-1 px-4 pt-3.5 pb-24">
        <Profil nama={formData.nama} nip={formData.nip} onFotoChange={setFoto} />

        <DataPribadi
          value={{
            nama: formData.nama,
            nip: formData.nip,
            telepon: formData.telepon,
            noSim: formData.noSim,
            golonganSim: formData.golonganSim,
            masaBerlakuSim: formData.masaBerlakuSim,
          }}
          onChange={update}
          errors={errors}
        />

        <PenugasanKendaraan
          value={{ kendaraan: formData.kendaraan, wilayah: formData.wilayah }}
          onChange={update}
        />

        <Performa
          value={{ status: formData.status, nilaiPerforma: formData.nilaiPerforma }}
          onChange={update}
          error={errors.nilaiPerforma}
        />

        <Statistik totalJarak={686.4} konsumsiBBM={218.5} />
      </main>

      {/* Fixed Bottom Navbar */}
      <BottomNavbar
        onBatal={handleBatal}
        onSimpan={handleSubmit}
        loading={loading}
        disabled={!isDirty}
      />
    </div>
  );
}