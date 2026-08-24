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
    <div className="min-h-screen bg-[#F4F6F9] flex flex-col max-w-[440px] mx-auto">
      <Navbar />

      <div className="flex-1 -mt-10 px-4 pb-4">
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
      </div>

      <BottomNavbar active="peta" onChange={(key) => console.log(key)} />
    </div>
  );
}