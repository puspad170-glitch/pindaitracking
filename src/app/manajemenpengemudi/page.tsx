"use client";

import { useMemo, useState } from "react";

import Navbar, { PengemudiFilter } from "./Navbar";
import Ringkasan from "./Ringkasan";
import DaftarPengemudi, { Pengemudi } from "./Daftarpengemudi";
import BottomNavbar from "./Bottomnavbar";

const DATA: Pengemudi[] = [
  { id: "1", nama: "Budiman", nip: "198506152010011012", status: "aktif", plat: "F 8605 B", jenisKendaraan: "Truk Tanki Air (Penyiram)", jarak: 686.4, bbm: 218.5, kinerjaLabel: "Cukup", kinerjaNilai: 55.0 },
  { id: "2", nama: "Ruspian", nip: "198812202015031004", status: "aktif", plat: "F 8261 B", jenisKendaraan: "Truk Sampah", jarak: 510.9, bbm: 116.0, kinerjaLabel: "Cukup", kinerjaNilai: 65.0 },
];

export default function ManajemenPengemudiPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<PengemudiFilter>("semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DATA.filter((p) => {
      const okFilter = filter === "semua" || p.status === filter;
      const okSearch =
        !q || [p.nama, p.nip, p.plat].some((f) => f.toLowerCase().includes(q));
      return okFilter && okSearch;
    });
  }, [query, filter]);

  const ringkasan = {
    totalPengemudi: DATA.length,
    aktif: DATA.filter((p) => p.status === "aktif").length,
    cutiIzin: DATA.filter((p) => p.status === "cuti").length,
    totalJarak: DATA.reduce((sum, p) => sum + p.jarak, 0),
  };

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-24 flex flex-col">
        <Navbar
          searchQuery={query}
          onSearchChange={setQuery}
          activeFilter={filter}
          onFilterChange={setFilter}
        />

        <main className="flex-1">
          <Ringkasan {...ringkasan} />
          <DaftarPengemudi
            pengemudi={filtered}
            totalData={DATA.length}
            onExport={() => console.log("export")}
            onHapus={(p) => confirm(`Hapus pengemudi ${p.nama}?`) && console.log("hapus", p.id)}
          />
        </main>

        <BottomNavbar />
      </div>
    </div>
  );
}