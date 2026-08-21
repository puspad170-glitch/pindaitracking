import React from 'react';
import Image from 'next/image';
import { VehicleData, sampleVehicles } from './data/vehicles';

interface InformasiKendaraanProps {
  vehicle?: VehicleData;
  onBackToList?: () => void;
  showSwitchButton?: boolean;
}

export default function InformasiKendaraan({
  vehicle = sampleVehicles[0],
  onBackToList,
  showSwitchButton = false,
}: InformasiKendaraanProps) {
  const isOnline = vehicle.status === 'online';
  const isPerjalanan = vehicle.status === 'perjalanan';

  return (
    <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          {/* Vehicle Icon Badge */}
          <div className="relative w-14 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
              <Image
              src={vehicle.image || '/assets/Truk_2.jpeg'}
              alt={vehicle.id}
              fill
              sizes="56px"
              className="object-cover"
              />
              </div>

          {/* Details */}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-extrabold text-gray-900 text-sm truncate">{vehicle.id}</h3>
              <span className="text-[10px] text-gray-400 font-medium truncate">
                • {vehicle.plate}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-1 text-[10px]">
              <div>
                <span className="text-gray-400 block">Pengemudi</span>
                <span className="font-bold text-gray-800 truncate block">{vehicle.driver}</span>
              </div>
              <div>
                <span className="text-gray-400 block">Status</span>
                <span
                  className={`font-bold block truncate ${isOnline
                      ? 'text-emerald-600'
                      : isPerjalanan
                        ? 'text-amber-600'
                        : 'text-rose-500'
                    }`}
                >
                  {vehicle.statusLabel}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block">Mesin</span>
                <span
                  className={`font-bold block truncate ${vehicle.engineStatus === 'ON' ? 'text-emerald-600' : 'text-slate-400'
                    }`}
                >
                  {vehicle.engineStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Badge / Switch Action */}
        <div className="flex flex-col items-end gap-1.5 shrink-0 pl-2">
          <span
            className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isOnline
                ? 'bg-emerald-100 text-emerald-700'
                : isPerjalanan
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-rose-100 text-rose-700'
              }`}
          >
            {vehicle.statusLabel}
          </span>
        </div>
      </div>
    </div>
  );
}