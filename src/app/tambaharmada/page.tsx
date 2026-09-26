"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "./Navbar";
import PerangkatGps, { GpsDevice } from "./Perangkatgps";
import InformasiKendaraan, { InformasiKendaraanData } from "./Informasikendaraan";
import BahanBakar, { BahanBakarData } from "./Bahanbakar";
import StatusArmada, { StatusArmadaValue } from "./Statusarmada";
import InformasiDetail, { InformasiDetailData } from "./Informasidetail";
import FotoKendaraan from "./Fotokendaraan";

export default function TambahArmadaPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [gpsDevice, setGpsDevice] = useState<GpsDevice | null>(null);
  const [infoKendaraan, setInfoKendaraan] = useState<InformasiKendaraanData | null>(null);
  const [bahanBakar, setBahanBakar] = useState<BahanBakarData | null>(null);
  const [status, setStatus] = useState<StatusArmadaValue>("Aktif");
  const [infoDetail, setInfoDetail] = useState<InformasiDetailData | null>(null);
  const [foto, setFoto] = useState<File | null>(null);

  const handleSimpan = async () => {
    // Validasi ringan untuk field wajib
    if (!gpsDevice) return alert("Pilih GPS terhubung terlebih dahulu");
    if (!infoKendaraan?.namaKendaraan || !infoKendaraan?.jenisKendaraan || !infoKendaraan?.nomorPolisi) {
      return alert("Lengkapi Nama Kendaraan, Jenis Kendaraan, dan Nomor Polisi");
    }

    setLoading(true);
    try {
      const payload = {
        gpsDevice,
        ...infoKendaraan,
        ...bahanBakar,
        status,
        ...infoDetail,
      };

      console.log("Payload Tambah Armada:", payload, foto);

      // TODO: sambungkan ke API
      router.push("/armada");
    } finally {
      setLoading(false);
    }
  };

  const handleBatal = () => {
    router.back();
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-28 overflow-hidden flex flex-col">
        <Navbar />

        <main className="flex-1 px-4 pt-3.5 space-y-4">
          <PerangkatGps value={gpsDevice} onChange={setGpsDevice} />
          <InformasiKendaraan value={infoKendaraan ?? undefined} onChange={setInfoKendaraan} />
          <BahanBakar value={bahanBakar ?? undefined} onChange={setBahanBakar} />
          <StatusArmada value={status} onChange={setStatus} />
          <InformasiDetail value={infoDetail ?? undefined} onChange={setInfoDetail} />
          <FotoKendaraan onChange={setFoto} />
        </main>

        {/* Bottom Bar Aksi (Batal & Simpan) Sticky di Bawah */}
        <div className="fixed bottom-0 max-w-md w-full bg-white border-t border-slate-200 p-4 flex items-center gap-3 z-30">
          <button
            type="button"
            onClick={handleBatal}
            disabled={loading}
            className="flex-1 py-3 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl hover:bg-slate-200 active:scale-95 transition disabled:opacity-50"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSimpan}
            disabled={loading}
            className="flex-1 py-3 text-sm font-bold text-white bg-[#1E88E5] rounded-xl hover:bg-blue-600 active:scale-95 transition shadow-sm disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan Armada"}
          </button>
        </div>
      </div>
    </div>
  );
}