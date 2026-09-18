"use client";

import Navbar from "./Navbar";
import Informasipribadi from "./Informasipribadi";
import Pengaturan from "./Pengaturan";
import Bottomnavbar from "./Bottomnavbar";

export default function ProfilPage() {
  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-24 overflow-hidden flex flex-col">
        <Navbar onEdit={() => console.log("edit profil")} />

        <main className="flex-1 px-4 pt-4 space-y-4">
          <Informasipribadi onUbah={() => console.log("ubah informasi pribadi")} />

          <Pengaturan
            onUbahKataSandi={() => console.log("ubah kata sandi")}
            onNotifikasi={() => console.log("notifikasi")}
            onBahasaAplikasi={() => console.log("bahasa aplikasi")}
            onBantuanDukungan={() => console.log("bantuan & dukungan")}
            onTentangAplikasi={() => console.log("tentang aplikasi")}
            onKeluar={() => console.log("keluar")}
          />
        </main>

        <Bottomnavbar />
      </div>
    </div>
  );
}