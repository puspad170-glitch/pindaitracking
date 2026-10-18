"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Truck,
  Wrench,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

export interface MaintenanceVehicle {
  id: string;
  gpsId: string;
  plate: string;
  driver: string;
  location: string;
  status: "Maintenance" | "Siaga";
}

const DEFAULT_VEHICLES: MaintenanceVehicle[] = [
  {
    id: "f52604",
    gpsId: "GPS F52604",
    plate: "F 8002 KL",
    driver: "Hendra Wijaya",
    location: "Bengkel Pusat",
    status: "Maintenance",
  },
  {
    id: "f52011",
    gpsId: "GPS F52011",
    plate: "F 8555 MN",
    driver: "-",
    location: "Pool Cibuluh",
    status: "Siaga",
  },
];

interface MaintenanceProps {
  vehicles?: MaintenanceVehicle[];
  defaultExpanded?: boolean;
  detailBasePath?: string;
  onEdit?: (vehicle: MaintenanceVehicle) => void;
  onDelete?: (vehicle: MaintenanceVehicle) => void;
}

export default function Maintenance({
  vehicles = DEFAULT_VEHICLES,
  defaultExpanded = true,
  detailBasePath = "/detailkendaraan",
  onEdit,
  onDelete,
}: MaintenanceProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  if (vehicles.length === 0) return null;

  const toggleMenu = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMenuId((prev) => (prev === id ? null : id));
  };

  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMenuId(null);
    action();
  };

  return (
    /* Menghilangkan overflow-hidden dan menambahkan relative z-10 agar dropdown aman */
    <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5 relative z-10">
      {/* Header Accordion */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-2.5 px-3.5 py-[13px] border-b border-[#F0F2F5]"
      >
        <div className="w-[30px] h-[30px] rounded-[9px] bg-[#E53935] text-white flex items-center justify-center flex-shrink-0">
          <Wrench size={15} />
        </div>
        <div className="text-[13.5px] font-extrabold text-[#1a1a2e] flex-1 text-left">
          Maintenance &amp; Siaga
        </div>
        <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-[#FDECEA] text-[#C62828]">
          {vehicles.length}
        </span>
        {expanded ? (
          <ChevronUp size={16} className="text-[#a2a7b1]" />
        ) : (
          <ChevronDown size={16} className="text-[#a2a7b1]" />
        )}
      </button>

      {/* List Kendaraan */}
      {expanded &&
        vehicles.map((v, index) => {
          const isLastItem = index === vehicles.length - 1;

          return (
            <div key={v.id} className="relative">
              <Link
                href={`${detailBasePath}/${v.id}`}
                className={`flex gap-2.5 items-start px-3.5 py-[13px] border-b border-[#F0F2F5] last:border-b-0 active:bg-[#F7F9FC] transition relative ${
                  isLastItem ? "rounded-b-2xl" : ""
                }`}
              >
                {/* Icon / Avatar */}
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-[#8a8f99] bg-gradient-to-br from-[#F1F2F4] to-[#D8DADE]">
                  <Truck size={22} />
                </div>

                {/* Detail Info */}
                <div className="flex-1 min-w-0 pr-2">
                  <div className="text-[13.5px] font-extrabold text-[#1a1a2e]">
                    {v.gpsId}{" "}
                    <span className="font-semibold text-[#8a8f99]">
                      &middot; {v.plate}
                    </span>
                  </div>
                  <div className="text-[11.5px] text-[#5b6270] mt-0.5">
                    Driver: {v.driver}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#8a8f99] mt-1">
                    <Wrench size={12} />
                    {v.location}
                  </div>
                </div>

                {/* Kanan Atas: Badge + Tombol Titik Tiga */}
                <div className="text-right flex-shrink-0 flex flex-col items-end">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="inline-block text-[10px] font-extrabold px-2.5 py-[3px] rounded-full bg-[#FDECEA] text-[#C62828]">
                      {v.status}
                    </span>

                    {/* Tombol Titik Tiga */}
                    <button
                      type="button"
                      onClick={(e) => toggleMenu(e, v.id)}
                      className="p-1 text-[#8a8f99] hover:text-[#1a1a2e] hover:bg-gray-100 rounded-lg transition"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-0.5 text-xs font-bold text-[#1E88E5]">
                    Pantau
                    <ChevronDown size={14} className="-rotate-90" />
                  </div>
                </div>
              </Link>

              {/* Popup Menu Dropdown */}
              {activeMenuId === v.id && (
                <>
                  {/* Backdrop Transparan untuk Menutup Menu saat Klik di Luar */}
                  <div
                    className="fixed inset-0 z-30"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(null);
                    }}
                  />

                  {/* Dropdown Menu - Mengatur Arah berdasarkan Posisi Item */}
                  <div
                    className={`absolute right-3.5 w-36 bg-white rounded-xl shadow-xl border border-[#F0F2F5] py-1.5 z-40 text-[12.5px] font-medium text-[#1a1a2e] ${
                      isLastItem ? "bottom-2" : "top-10"
                    }`}
                  >
                    <Link
                      href={`${detailBasePath}/${v.id}`}
                      onClick={() => setActiveMenuId(null)}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-[#F7F9FC] text-[#1E88E5] transition"
                    >
                      <Eye size={15} />
                      Lihat Detail
                    </Link>
                    <Link
                       href={`/editarmada?id=${v.id}`}
                      onClick={() => {
                        setActiveMenuId(null);
                        onEdit?.(v);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#F7F9FC] text-[#333] transition text-left"
                    >
                      <Pencil size={15} />
                      Edit
                    </Link>
                    <button
                      type="button"
                      onClick={(e) =>
                        handleAction(e, () => onDelete && onDelete(v))
                      }
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#FFF2F2] text-[#E53935] transition text-left"
                    >
                      <Trash2 size={15} />
                      Hapus
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
}