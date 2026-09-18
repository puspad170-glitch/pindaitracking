"use client";

import Navbar from "./Navbar";
import Gps from "./Gps";
import Pengemudi from "./Pengemudi";
import Statistik from "./Statistik";
import LokasiTerakhir from "./Lokasiterakhir";
import InformasiDokumen from "./Informasidokumen";
import BottomNavbar from "./Bottomnavbar";

export default function DetailArmadaPage() {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-24 overflow-hidden flex flex-col">
        <Navbar />

        <main className="flex-1 -mt-10 px-4 space-y-4">
          <Gps />
          <Pengemudi
            onCall={() => console.log("call driver")}
            onChat={() => console.log("chat driver")}
          />
          <Statistik />
          <LokasiTerakhir />
          <InformasiDokumen
            onRiwayat={() => console.log("riwayat")}
            onLaporkan={() => console.log("laporkan")}
            onLihatPeta={() => console.log("lihat peta")}
          />
        </main>

        <BottomNavbar />
      </div>
    </div>
  );
}