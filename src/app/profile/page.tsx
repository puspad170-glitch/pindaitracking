"use client";

import Navbar from "./Navbar";
import Informasipribadi from "./Informasipribadi";
import Pengaturan from "./Pengaturan";
import Bottomnavbar from "./Bottomnavbar";

export default function ProfilPage() {
  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-[#F4F6F9] flex flex-col relative shadow-sm">
      <Navbar onEdit={() => console.log("edit profil")} />

      <div className="flex-1 px-4 pt-4 pb-24 space-y-4">
        <Informasipribadi onUbah={() => console.log("ubah informasi pribadi")} />

        <Pengaturan
          onUbahKataSandi={() => console.log("ubah kata sandi")}
          onNotifikasi={() => console.log("notifikasi")}
          onBahasaAplikasi={() => console.log("bahasa aplikasi")}
          onBantuanDukungan={() => console.log("bantuan & dukungan")}
          onTentangAplikasi={() => console.log("tentang aplikasi")}
          onKeluar={() => console.log("keluar")}
        />
      </div>

      <Bottomnavbar />
    </div>
  );
}