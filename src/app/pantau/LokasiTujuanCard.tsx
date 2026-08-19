import React from 'react';
import MaterialIcon from '../components/MaterialIcon';
import { DestinationInfo } from './data/vehicles';

interface LokasiTujuanCardProps {
  destination: DestinationInfo;
  onEdit?: () => void;
}

export default function LokasiTujuanCard({ destination, onEdit }: LokasiTujuanCardProps) {
  return (
    <div className="bg-white text-gray-800 p-3.5 rounded-2xl flex items-center justify-between shadow-xs border border-gray-100">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
          <MaterialIcon name="location_on" fill={true} className="text-xl" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-bold text-gray-400 tracking-wider block uppercase">
              Lokasi Tujuan
            </span>
            {destination.eta && (
              <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded">
                ETA: {destination.eta}
              </span>
            )}
          </div>
          <h3 className="font-extrabold text-sm text-gray-900 leading-tight truncate">
            {destination.name}
          </h3>
          <p className="text-[10px] text-gray-500 truncate mt-0.5">
            {destination.address}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-xs shrink-0 ml-2"
      >
        Edit
      </button>
    </div>
  );
}
