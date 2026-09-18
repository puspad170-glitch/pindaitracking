"use client";

import { useMemo, useState } from "react";
import Navbar, { ArmadaFilter } from "./Navbar";
import ArmadaAktif, { ArmadaAktifVehicle } from "./Armadaaktif";
import DalamPerjalanan, { DalamPerjalananVehicle } from "./Dalamperjalanan";
import Maintenance, { MaintenanceVehicle } from "./Maintenance";
import BottomNavbar from "./Bottomnavbar";

const AKTIF_DATA: ArmadaAktifVehicle[] = [
  { id: "f52618", gpsId: "GPS F52618", plate: "F 8291 AB", driver: "Budi Santoso", location: "TPS Sukasari" },
  { id: "f52672", gpsId: "GPS F52672", plate: "F 8122 CD", driver: "Rusman", location: "TPST Bantargebang" },
];

const PERJALANAN_DATA: DalamPerjalananVehicle[] = [
  { id: "f52690", gpsId: "GPS F52690", plate: "F 8431 EF", driver: "Ahmad Fauzi", location: "TPS Baranangsiang" },
  { id: "f52633", gpsId: "GPS F52633", plate: "F 8901 GH", driver: "Dedi Kurniawan", location: "Pool Cibuluh" },
];

const MAINTENANCE_DATA: MaintenanceVehicle[] = [
  { id: "f52604", gpsId: "GPS F52604", plate: "F 8002 KL", driver: "Hendra Wijaya", location: "Bengkel Pusat", status: "Maintenance" },
  { id: "f52011", gpsId: "GPS F52011", plate: "F 8555 MN", driver: "-", location: "Pool Cibuluh", status: "Siaga" },
];

export default function ListArmadaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<ArmadaFilter>("semua");

  const totalArmada = AKTIF_DATA.length + PERJALANAN_DATA.length + MAINTENANCE_DATA.length;

  const matchesSearch = (fields: string[]) =>
    searchQuery.trim() === "" ||
    fields.some((f) => f.toLowerCase().includes(searchQuery.trim().toLowerCase()));

  const filteredAktif = useMemo(() => {
    if (activeFilter !== "semua" && activeFilter !== "online") return [];
    return AKTIF_DATA.filter((v) => matchesSearch([v.gpsId, v.plate, v.driver]));
  }, [searchQuery, activeFilter]);

  const filteredPerjalanan = useMemo(() => {
    if (activeFilter !== "semua" && activeFilter !== "tracking") return [];
    return PERJALANAN_DATA.filter((v) => matchesSearch([v.gpsId, v.plate, v.driver]));
  }, [searchQuery, activeFilter]);

  const filteredMaintenance = useMemo(() => {
    if (activeFilter !== "semua" && activeFilter !== "offline") return [];
    return MAINTENANCE_DATA.filter((v) => matchesSearch([v.gpsId, v.plate, v.driver]));
  }, [searchQuery, activeFilter]);

  return (
    <div className="flex justify-center min-h-screen bg-slate-100 antialiased font-sans">
      <div className="relative w-full max-w-md bg-[#F4F6F9] min-h-screen shadow-sm pb-24 overflow-hidden">
        <Navbar
          totalArmada={totalArmada}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <main className="px-4 space-y-4 pt-3.5">
          <ArmadaAktif vehicles={filteredAktif} />
          <DalamPerjalanan vehicles={filteredPerjalanan} />
          <Maintenance vehicles={filteredMaintenance} />
        </main>

        <BottomNavbar />
      </div>
    </div>
  );
}