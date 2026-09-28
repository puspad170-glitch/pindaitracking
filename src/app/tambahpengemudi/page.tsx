"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "./navbar";
import DataPribadi, { DataPribadiData } from "./datapribadi";
import DokumenSim, { DokumenSimData } from "./dokumensim";
import StatusPengemudi, { StatusPengemudiValue } from "./statuspengemudi";
import FotoPengemudi from "./fotopengemudi";
import BottomNavbar from "./bottomnavbar";

export default function TambahPengemudiPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [dataPribadi, setDataPribadi] = useState<DataPribadiData | null>(null);
  const [dokumenSim, setDokumenSim] = useState<DokumenSimData | null>(null);
  const [status, setStatus] = useState<StatusPengemudiValue>("aktif");
  const [foto, setFoto] = useState<File | null>(null);

  const handleSimpan = async () => {
    if (!dataPribadi?.nip.trim() || !dataPribadi?.nama.trim()) {
      return alert("NIP dan Nama Pengemudi wajib diisi");
    }

    setLoading(true);
    try {
      const payload = { ...dataPribadi, ...dokumenSim, status };
      console.log("Payload Tambah Pengemudi:", payload, foto);

      // TODO: sambungkan ke API. Kalau ada foto, kirim pakai FormData:
      // const fd = new FormData();
      // Object.entries(payload).forEach(([k, v]) => fd.append(k, String(v ?? "")));
      // if (foto) fd.append("foto", foto);
      // await fetch("/api/pengemudi", { method: "POST", body: fd });

      router.push("/pengemudi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-28 flex flex-col">
        <Navbar />

        <main className="flex-1 px-4 pt-3.5 space-y-3.5">
          <DataPribadi value={dataPribadi ?? undefined} onChange={setDataPribadi} />
          <DokumenSim value={dokumenSim ?? undefined} onChange={setDokumenSim} />
          <StatusPengemudi value={status} onChange={setStatus} />
          <FotoPengemudi onChange={setFoto} />
        </main>

        <BottomNavbar onBatal={() => router.back()} onSimpan={handleSimpan} loading={loading} />
      </div>
    </div>
  );
}