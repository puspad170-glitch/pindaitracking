"use client";

import { useMemo, useState } from "react";
import { Navigation, Search, Check } from "lucide-react";

export interface GpsDevice {
  id: string;
  name: string;
}

const DEFAULT_DEVICES: GpsDevice[] = [
  { id: "gps-f52618", name: "GPS F52618" },
  { id: "gps-f52672", name: "GPS F52672" },
  { id: "gps-f51190", name: "GPS F51190" },
  { id: "gps-f53321", name: "GPS F53321" },
];

interface PerangkatGpsProps {
  devices?: GpsDevice[];
  value?: GpsDevice | null;
  onChange?: (device: GpsDevice) => void;
}

export default function PerangkatGps({
  devices = DEFAULT_DEVICES,
  value,
  onChange,
}: PerangkatGpsProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState<GpsDevice | null>(null);

  const selected = value ?? internalSelected;

  const filteredDevices = useMemo(
    () => devices.filter((d) => d.name.toLowerCase().includes(query.toLowerCase())),
    [devices, query]
  );

  const handleSelect = (device: GpsDevice) => {
    setInternalSelected(device);
    setQuery("");
    setOpen(false);
    onChange?.(device);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(20,30,60,0.06)] mb-3.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-[26px] h-[26px] rounded-lg bg-[#1E88E5] text-white flex items-center justify-center flex-shrink-0">
          <Navigation size={13} />
        </div>
        <div className="text-[13px] font-extrabold text-[#1a1a2e]">Perangkat GPS</div>
      </div>

      <label className="text-[11.5px] font-bold text-[#5b6270] mb-1.5 block">
        GPS Terhubung <span className="text-[#E53935]">*</span>
      </label>

      <div className="relative">
        <div
          onClick={() => setOpen((v) => !v)}
          className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 cursor-text ${
            selected
              ? "border-[1.5px] border-[#1E88E5] bg-[#F0F8FF]"
              : "border-[1.5px] border-dashed border-[#90CAF9] bg-[#F0F8FF]"
          }`}
        >
          <Search size={16} className="text-[#1E88E5] flex-shrink-0" />
          {selected && !open ? (
            <span className="text-[12.5px] font-bold text-[#1E88E5]">{selected.name}</span>
          ) : (
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              placeholder="Cari dan pilih device GPS..."
              className="flex-1 text-[12.5px] font-semibold text-[#1E88E5] placeholder-[#1E88E5]/70 bg-transparent outline-none min-w-0"
            />
          )}
        </div>

        {open && (
          <div className="absolute z-10 top-full left-0 right-0 mt-1.5 bg-white border border-[#E7EAEF] rounded-xl shadow-[0_10px_24px_rgba(20,30,60,0.12)] overflow-hidden max-h-52 overflow-y-auto">
            {filteredDevices.length === 0 ? (
              <div className="px-4 py-3 text-[12px] text-[#a2a7b1]">Device tidak ditemukan.</div>
            ) : (
              filteredDevices.map((d) => {
                const isSelected = selected?.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => handleSelect(d)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left text-[12.5px] font-semibold border-b border-[#F0F2F5] last:border-b-0 ${
                      isSelected ? "bg-[#1E88E5] text-white" : "text-[#1a1a2e] active:bg-[#F7F9FC]"
                    }`}
                  >
                    {d.name}
                    {isSelected && <Check size={14} />}
                  </button>
                );
              })
            )}
          </div>
        )}
      </div>

      <p className="text-[10.5px] text-[#a2a7b1] mt-1.5">
        Pilih device GPS untuk menghubungkan fitur pelacakan armada
      </p>
    </div>
  );
}