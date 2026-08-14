import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';

interface TrackingHeaderProps {
  onBack?: () => void;
}

export default function TrackingHeader({ onBack }: TrackingHeaderProps) {
  return (
    <div className="bg-linear-to-r from-sky-500 to-blue-600 text-white p-5 pt-7 pb-10 rounded-b-4x1 relative z-10 shadow-md">
      <div className="flex items-center gap-3">
        <button 
          onClick={onBack}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-xl font-extrabold tracking-wide">Tracking Armada</h1>
      </div>

   
      <div className="mt-4 bg-white text-gray-800 rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-blue-50 p-2 rounded-xl mt-0.5">
            <MapPin className="w-5 h-5 text-blue-600 fill-blue-600" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-gray-500 tracking-wider uppercase block">Lokasi Tujuan</span>
            <h3 className="font-extrabold text-sm text-gray-900 leading-tight">TPS Sukasari</h3>
            <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
              Jl. Raya Bogor No.45, <br /> Bogor, Jawa Barat
            </p>
          </div>
        </div>
        <button className="bg-sky-400 hover:bg-sky-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm transition">
          Edit
        </button>
      </div>
    </div>
  );
}